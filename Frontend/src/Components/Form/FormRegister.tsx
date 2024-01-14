import AuthInput from '../Inputs/AuthInput';
import { Link } from 'react-router-dom';

const FormRegister = () => {
    return (
        <div className='border-2 shadow-xl border-green-700 p-12 rounded-md '>
            <div className='grid grid-cols-1 '>
                <h1 className=' text-green-700 text-4xl font-bold'>Register</h1>
            </div>
            <form action=''>
                <AuthInput
                    type='text'
                    placeholder='Your Name'
                    name='name'
                    title='Name'
                />
                <AuthInput
                    type='email'
                    placeholder='Your Email'
                    name='email'
                    title='Email'
                />
                <AuthInput
                    type='tel'
                    placeholder='Your Phone Number'
                    name='number'
                    title='Number'
                />
                <AuthInput
                    type='date'
                    placeholder='Your Birth Date'
                    name='birth'
                    title='Birth'
                />
                <AuthInput
                    type='password'
                    placeholder='Your Password'
                    name='password'
                    title='Password'
                />
                <AuthInput
                    type='password'
                    placeholder='Confirm Password'
                    name='password'
                    title='Recheck Password'
                />
                <button className='w-full bg-green-700 rounded-full  py-1.5 text-white'>
                    Register
                </button>
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
