import { useRef,useState } from "react"

interface ModalProps {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
  };

const Modal = ({ isOpen, hasCloseBtn, onClose, children }:ModalProps) => {
    const [isModalOpen,setIsModalOpen] = useState<boolean>(isOpen)
    const modalRef = useRef<HTMLDialogElement>(null)
    return <dialog ref={modalRef}>
        <div>
            {children}
        </div>
    </dialog>
}

export default Modal