import { Link } from 'react-router-dom';
import NavAuthButtons from './Buttons/NavAuthButton';
import { useState } from 'react';

type NavigateMapType = {
    title: string;
    link: string;
};

const NavigateMap: NavigateMapType[] = [
    {
        title: 'Home',
        link: 'home',
    },
    {
        title: 'Doctors',
        link: 'Doctors',
    },

];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <nav className='flex w-full sticky top-0 bg-white justify-between md:px-20 py-5  px-2 z-20'>
            <div>
                <div>
                    <h1>
                        <Link to={'home'}>Health Care</Link>
                    </h1>
                </div>
            </div>
            <div className='md:block grid grid-cols-1 place-items-end md:min-h-min'>
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>=</button>
                </div>
                <div className={`md:block md:static fixed top-14 right-4 bg-white ${isOpen ? 'transition-all duration-300 transform translate-x-0 opacity-100 visible' : 'transition-all duration-300 transform translate-x-6 opacity-0 invisible'} `}>
                    <ul className='md:flex grid grid-cols-1 place-items-center'>
                        {NavigateMap.map((data, key) => {
                            return (
                                <li key={key} className='mx-2'>
                                    <Link to={data.link}>{data.title}</Link>
                                </li>
                            );
                        })}
                        <NavAuthButtons />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
