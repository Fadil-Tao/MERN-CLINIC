import { FaCheck } from 'react-icons/fa';
import BookLink from '../Buttons/BooksLink';
import { useRef } from 'react';
import useIsVisible from '../../Hooks/ScrollEffect.hook';

const Branding = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);
    return (
        <div
            ref={ref}
            className={`Branding flex flex-wrap-reverse my-10 justify-center items-center  transition-all ease-in-out duration-1000  ${
                isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-[200px]'
            }`}
        >
            <div className='md:w-1/2 '>
                <h3 className='font-bold text-3xl border-green-700 border-b-[1.5px] my-2'>
                    {' '}
                    Why Choose Us?{' '}
                </h3>
                <p className='my-6'>
                    Choose us for your healthcare needs because we prioritize
                    your well-being with a dedicated team of experienced
                    professionals, state-of-the-art facilities, and a commitment
                    to delivering personalized and compassionate care, ensuring
                    your journey to optimal health is our top priority
                </p>
                <ul className='relative list-none text-lg'>
                    <li className='flex pl-8 py-2'>
                        <span className='mr-10 flex justify-center items-center w-8 h-8 text-white bg-green-700 rounded-full '>
                            <FaCheck />
                        </span>
                        Profesional Doctor
                    </li>
                    <li className='flex pl-8 py-2'>
                        <span className='mr-10 flex justify-center items-center w-8 h-8 text-white bg-green-700 rounded-full '>
                            <FaCheck />
                        </span>
                        Emergency Care
                    </li>
                    <li className='flex pl-8 py-2'>
                        <span className='mr-10 flex justify-center items-center w-8 h-8 text-white bg-green-700 rounded-full '>
                            <FaCheck />
                        </span>
                        Enrollment Easy And Quick
                    </li>
                </ul>
                <div>
                    <BookLink />
                </div>
            </div>
            <div className=' md:w-1/2 p-1 flex justify-center  items-center  '>
                <div className=' md:w-full ml-10 border-dashed border-2 border-white rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 '>
                    <div className='w-full h-full bg-white p-1'>
                        <img
                            src='https://placekitten.com/408/287'
                            alt=''
                            className='w-full h-full object-cover rounded-md '
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branding;
