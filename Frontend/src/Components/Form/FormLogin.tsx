import AuthInput from '../Inputs/AuthInput';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/FormUtils.hook';
import { HandleLogin } from '../../Services/Login';
import { useRedirecting } from '../../Hooks/Redirecting.hook';
import { AuthFunc } from '../../Store/auth';
import { useSnackbar } from 'notistack';

const FormLogin = () => {
    const { statusLog } = AuthFunc();
    const { enqueueSnackbar } = useSnackbar();
    const redirect = useRedirecting('/home');
    const { formData, handleChange, handleSubmit } = useForm({
        _email: '',
        _password: '',
    });

    const loginProc = async () => {
        HandleLogin(formData)
            .then((loginStatus) => {
                console.log(loginStatus);
                enqueueSnackbar('Succesfully login', {
                    variant: 'success',
                    autoHideDuration: 3000,
                });
                statusLog(true)
                loginStatus && redirect();
            })
            .catch((error) => {
                console.log(error)
                enqueueSnackbar(error, {
                    variant: 'warning',
                    autoHideDuration: 3000,
                });
                console.error(error);
            });
    };

    return (
        <div className='border-2 shadow-xl border-green-700 p-12 rounded-md '>
            <div className='grid grid-cols-1 '>
                <h1 className=' text-green-700 text-4xl font-bold'>Login</h1>
            </div>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                    loginProc();
                }}
            >
                <AuthInput
                    type='email'
                    placeholder='Your Email'
                    name='_email'
                    title='Email'
                    handleChange={handleChange}
                />
                <AuthInput
                    type='password'
                    placeholder='Your Password'
                    name='_password'
                    title='Password'
                    handleChange={handleChange}
                />
                <button
                    className='w-full bg-green-700 rounded-full  py-1.5 text-white'
                    type='submit'
                >
                    Login
                </button>
            </form>
            <p className=' text-sm mt-5 text-center'>
                Doesnt Have An Account?{' '}
                <Link to={'/register'} className='text-green-700 font-semibold'>
                    Register
                </Link>
            </p>
        </div>
    );
};

export default FormLogin;
