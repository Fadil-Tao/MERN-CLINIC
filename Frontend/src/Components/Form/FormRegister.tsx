import AuthInput from '../Inputs/AuthInput';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/FormUtils.hook';
import Register from '../../Services/Register';
import { useRedirecting } from '../../Hooks/Redirecting.hook';
import { useSnackbar } from "notistack";

const FormRegister = () => {
    const redirect = useRedirecting('/login');
    const {enqueueSnackbar} = useSnackbar()
    const { formData, handleChange, handleSubmit } = useForm({
        _name: '',
        _email: '',
        _phone: 0,
        _birth: '',
        _password: '',
    });
    const registering = async () => {
        await Register(formData)
            .then(() => {
                enqueueSnackbar('Succesfully Registering' , {
                    variant:"success", autoHideDuration:3000
                })
                redirect();
            })
            .catch((err) => {
                enqueueSnackbar(`${err}`, {
                    variant:"error", autoHideDuration:3000
                })
                console.log(err)});
    };
    return (
        <div className='border-2 shadow-xl border-green-700 p-12 rounded-md '>
            <div className='grid grid-cols-1 '>
                <h1 className=' text-green-700 text-4xl font-bold'>Register</h1>
            </div>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                    registering();
                }}
            >
                <AuthInput
                    type='text'
                    placeholder='Your Name'
                    name='_name'
                    title='Name'
                    handleChange={handleChange}
                />
                <AuthInput
                    type='email'
                    placeholder='Your Email'
                    name='_email'
                    title='Email'
                    handleChange={handleChange}
                />
                <AuthInput
                    type='tel'
                    placeholder='Your Phone Number'
                    name='_phone'
                    title='Number'
                    handleChange={handleChange}
                />
                <AuthInput
                    type='date'
                    placeholder='Your Birth Date'
                    name='_birth'
                    title='Birth'
                    handleChange={handleChange}
                />
                <AuthInput
                    type='password'
                    placeholder='Your Password'
                    name='_password'
                    title='Password'
                    handleChange={handleChange}
                />
                <div>
                    <button
                        className='w-full bg-green-700 rounded-full  py-1.5 text-white'
                        type='submit'
                    >
                        Register
                    </button>
                </div>
            </form>
            <p className=' text-sm mt-5 text-center'>
                Have An Account?{' '}
                <Link to={'/Login'} className='text-green-700 font-semibold'>
                    Login
                </Link>
            </p>
        </div>
    );
};

export default FormRegister;
