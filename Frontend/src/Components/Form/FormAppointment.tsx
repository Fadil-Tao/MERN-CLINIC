import { useSnackbar } from 'notistack';
import { useForm } from '../../Hooks/FormUtils.hook';
import { handleAppointment } from '../../Services/Appointment';
import AppointmentInput from '../Inputs/AppointmentInput';
import ChoiceBox from '../Inputs/ChoiceBox';

const FormAppointment = () => {
    const _id = localStorage.getItem('_id');
    const {enqueueSnackbar} = useSnackbar()
    const { formData, handleChange, handleSubmit } = useForm({
        _doctor: '',
        _appDate: '',
        _appTime: '',
        _name: `${_id}`,
    });
    const submitting = async () => {
        try {
            const result = await handleAppointment(formData);
            console.log(result)
            if (result) {
                enqueueSnackbar('Successfully Registering', {
                    variant: 'success',
                    autoHideDuration: 3000,
                });
            } else {
                enqueueSnackbar('Failed Registering', {
                    variant: 'error',
                    autoHideDuration: 3000,
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className='p-6 grid place-items-start '>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                    submitting();
                }}
            >
                <ChoiceBox
                    name='_doctor'
                    handleChange={handleChange}
                    title='Pick A Doctor'
                >
                    <option value='Dr Khalid Khasmiri'>
                        Dr Khalid Khasmiri
                    </option>
                    <option value='Dr Raj Patel'>Dr Raj Patel</option>
                    <option value='Dr Jessica Miller'>Dr Jessica Miller</option>
                    <option value='Dr Mohamed Ali'>Dr Mohamed Ali</option>
                </ChoiceBox>
                <AppointmentInput
                    type='date'
                    name='_appDate'
                    placeholder='Appointment Date'
                    title='Appointment Date'
                    handleChange={handleChange}
                />
                <ChoiceBox
                    name='_appTime'
                    handleChange={handleChange}
                    title='Appointment Time'
                >
                    <option value='10.00 - 12.00'>10.00 - 12.00</option>
                    <option value='12.00 - 14.00'>12.00 - 14.00</option>
                    <option value='14.00 - 16.00'>14.00 - 16.00</option>
                </ChoiceBox>
                <button className='rounded-full bg-green-700 text-white p-1'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormAppointment;
