import { Link } from 'react-router-dom';

const BookLink = () => {
    return (
        <div className='text-white mr-2 bg-green-700 rounded-full my-2 font-bold p-2 w-full text-center'>
            <Link to={''}>Book Appointment</Link>
        </div>
    );
};

export default BookLink;
