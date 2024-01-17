import React, { useState, useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    hasCloseBtn = true,
    onClose,
    children,
}) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === 'Escape') {
            handleCloseModal();
        }
    };

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    return (
        <dialog ref={modalRef} onKeyDown={handleKeyDown} className='modal'>
            {hasCloseBtn && (
                <button className='modal-close-btn' onClick={handleCloseModal}>
                    Close
                </button>
            )}
            {children}
        </dialog>
    );
};

interface NewsletterModalData {
    email: string;
    digestType: string;
}

const initialNewsletterModalData: NewsletterModalData = {
    email: '',
    digestType: 'weekly',
};

interface NewsletterModalProps {
    isOpen: boolean;
    onSubmit: (data: NewsletterModalData) => void;
    onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({
    onSubmit,
    isOpen,
    onClose,
}) => {
    const focusInputRef = useRef<HTMLInputElement | null>(null);
    const [formState, setFormState] = useState<NewsletterModalData>(
        initialNewsletterModalData,
    );

    useEffect(() => {
        if (isOpen && focusInputRef.current) {
            setTimeout(() => {
                focusInputRef.current!.focus();
            }, 0);
        }
    }, [isOpen]);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;
        setFormState((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        onSubmit(formState);
        setFormState(initialNewsletterModalData);
    };

    return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor='email'>Email</label>
                    <input
                        ref={focusInputRef}
                        type='email'
                        id='email'
                        name='email'
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='digestType'>Digest Type</label>
                    <select
                        id='digestType'
                        name='digestType'
                        value={formState.digestType}
                        onChange={handleInputChange}
                        required
                    >
                        <option value='daily'>Daily</option>
                        <option value='weekly'>Weekly</option>
                        <option value='monthly'>Monthly</option>
                    </select>
                </div>
                <div className='form-row'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </Modal>
    );
};

const App: React.FC = () => {
    const [isNewsletterModalOpen, setNewsletterModalOpen] =
        useState<boolean>(false);
    const [newsletterFormData, setNewsletterFormData] =
        useState<NewsletterModalData | null>(null);

    const handleOpenNewsletterModal = () => {
        setNewsletterModalOpen(true);
    };

    const handleCloseNewsletterModal = () => {
        setNewsletterModalOpen(false);
    };

    const handleFormSubmit = (data: NewsletterModalData): void => {
        setNewsletterFormData(data);
        handleCloseNewsletterModal();
    };

    return (
        <>
            <div style={{ display: 'flex', gap: '1em' }}>
                <button onClick={handleOpenNewsletterModal}>
                    Open Newsletter Form (Modal)
                </button>
            </div>

            {newsletterFormData && newsletterFormData.email && (
                <div className='msg-box'>
                    <b>{newsletterFormData.email}</b> requested a{' '}
                    <b>{newsletterFormData.digestType}</b> newsletter.
                </div>
            )}

            <NewsletterModal
                isOpen={isNewsletterModalOpen}
                onSubmit={handleFormSubmit}
                onClose={handleCloseNewsletterModal}
            />
        </>
    );
};

