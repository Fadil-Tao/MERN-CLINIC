import { AuthFunc } from '../../Store/auth';
import LoggedInNav from './LoggedInNav';
import EntryNav from './EntryNav';
import { useEffect } from 'react';

const NavAuthButtons = () => {
    const {isLoggedIn} = AuthFunc();
    useEffect(()=> {
        console.log(isLoggedIn)
    }, [])
    return (
        <div className='md:flex text-green-700 font-semibold text-2xl '>
            {isLoggedIn? <LoggedInNav/> : <EntryNav/>}
        </div>
    );
};

export default NavAuthButtons;
