import { useState } from 'react';
import ModalForm from '../Modal/ModalForm';

const FormModalButton = () => {
    const [modalForm] = useState<boolean>(false);
    return (
        <div>
            <ModalForm isOpened={modalForm} />
        </div>
    );
};

export default FormModalButton;
