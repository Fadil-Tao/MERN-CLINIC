import {  useNavigate } from 'react-router-dom';
import { AuthFunc } from '../../Store/auth';
import FormAppointment from '../Form/FormAppointment';
import Modal from './Modal';
import { useState } from 'react';

type ModalFormType = {
    isOpened: boolean;
};

const ModalForm = ({ isOpened }: ModalFormType) => {
    const {isLoggedIn} = AuthFunc()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(isOpened);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={() => {isLoggedIn? handleOpen() : navigate('/login')}} className='text-white mr-2 bg-green-700 rounded-full my-2 font-bold p-2 w-full text-center'>Make Appointment</button>
            <Modal isOpen={isOpen} onClose={handleClose} hasCloseBtn={true}>
                <FormAppointment />
            </Modal>
        </>
    );
};

export default ModalForm;
