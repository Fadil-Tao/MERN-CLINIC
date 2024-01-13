import { Link } from 'react-router-dom';

const NavAuthButtons = () => {
    return (
        <div className='flex'>
            <div className='flex '>
                <div className='mx-1'>
                    <Link to={'login'}>Login</Link>
                </div>
                <div className='mx-1'>
                    <Link to={'register'}>Register</Link>{' '}
                </div>
            </div>
            <div className='hidden'>
                <Link to={'profile'}>Profile</Link>
            </div>
        </div>
    );
};

export default NavAuthButtons;