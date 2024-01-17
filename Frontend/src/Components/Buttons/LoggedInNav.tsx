import { Link } from 'react-router-dom';
import { AuthFunc } from '../../Store/auth';
import { useLocation } from 'react-router-dom';

type LocationTypes = {
    pathname: string;
}

const LoggedInNav = () => {
    const {handleLogout} = AuthFunc()
    const location: LocationTypes= useLocation();
    return (
        <>
            <div className={`mx-4 border-b-green-700 transition-transform duration-300 ${location.pathname === '/appointment' ? 'border-b-2 transform scale-105' : ''}`}>
                <Link to={'/appointment'}>My Appointment</Link>
            </div>
            <div className={`mx-4 border-b-green-700 transition-transform duration-300 ${location.pathname === '/profile' ? 'border-b-2 transform scale-105' : ''}`}>
                <Link to={'/profile'}>Profile</Link>
            </div>
            <div>
                <button className='text-xl' onClick={()=> handleLogout()}>Logout</button>
            </div>
        </>
    );
};

export default LoggedInNav