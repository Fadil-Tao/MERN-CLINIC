import { useSnackbar } from 'notistack';
import { deleteAppointmentData } from '../../Services/Appointment';
type cancelPropsType = {
    _id: string;
};

export const CancelButton = ({ _id }: cancelPropsType) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleCancel = () => {
        deleteAppointmentData(_id)
            .then((response) => {
                console.log(response);
                enqueueSnackbar('Succesfully Deleting data', {
                    variant: 'success',
                    autoHideDuration: 3000,
                });
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                enqueueSnackbar('Error on deleting data', {
                    variant: 'error',
                    autoHideDuration: 3000,
                });
            });
    };
    return (
        <button
            className='bg-red-500 rounded-lg text-white font-medium p-1'
            onClick={() => handleCancel()}
        >
            Cancel
        </button>
    );
};
