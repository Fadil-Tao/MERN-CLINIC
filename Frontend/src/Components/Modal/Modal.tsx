import { useEffect, useRef, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}

const Modal = ({
    isOpen,
    hasCloseBtn = true,
    onClose,
    children,
}: ModalProps) => {
    const [isModalOpen, setModalOpen] = useState<boolean>(isOpen);
    const modalRef = useRef<HTMLDialogElement>(null);

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
        <dialog
            ref={modalRef}
            onKeyDown={handleKeyDown}
            className='modal border-2 rounded-xl p-3'
        >
            {hasCloseBtn && (
                <div className='flex justify-end'>
                    <button
                        className='modal-close-btn text-white bg-green-700 p-1 rounded-xl  '
                        onClick={handleCloseModal}
                    >
                        Close
                    </button>
                </div>
            )}
            {children}
        </dialog>
    );
};

export default Modal;
