import { Link } from 'react-router-dom';

const EntryNav = () => {
    return (
        <div className='flex '>
            <div className='mx-1 border border-green-700  p-1 rounded-md'>
                <Link to={'login'}>Login</Link>
            </div>
            <div className='mx-1 border bg-green-700 rounded-md text-white p-1'>
                <Link to={'register'}>Register</Link>{' '}
            </div>
        </div>
    );
};

export default EntryNav;
