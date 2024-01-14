import AuthInput from '../Inputs/AuthInput';
import { Link } from 'react-router-dom';

const FormLogin = () => {
    return (
        <div className='border-2 shadow-xl border-green-700 p-12 rounded-md '>
            <div className='grid grid-cols-1 '>
                <h1 className=' text-green-700 text-4xl font-bold'>Login</h1>
            </div>
            <form action=''>
                <AuthInput
                    type='email'
                    placeholder='Your Email'
                    name='email'
                    title='Email'
                />
                <AuthInput
                    type='password'
                    placeholder='Your Password'
                    name='password'
                    title='Password'
                />
                <button className='w-full bg-green-700 rounded-full  py-1.5 text-white'>
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
