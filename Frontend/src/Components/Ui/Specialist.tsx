import { useRef } from 'react';
import MiniCard from '../Cards/MiniCard';
import useIsVisible from '../../Hooks/ScrollEffect.hook';

const Specialists = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);
    return (
        <div
            ref={ref}
            className={`transition-all ease-in-out duration-1000 ${
                isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-[-200px]'
            } my-16`}
        >
            <div className='text-center'>
                <h3 className='font-bold text-3xl border-green-700 border-b-[1.5px] my-2'>
                    Meet Our Specialist Doctors
                </h3>
                <p className='my-4 text-sm'>
                    Introducing our team of specialized doctors dedicated to
                    providing exceptional healthcare tailored to your unique
                    needs.
                </p>
            </div>
            <div>
                <ul className='flex flex-wrap justify-center items-center'>
                    <li>
                        <MiniCard
                            img='https://placekitten.com/408/287'
                            name='Khalid Khasmiri'
                            role='Dentist'
                        />
                    </li>
                    <li>
                        <MiniCard
                            img='https://placekitten.com/408/287'
                            name='Khalid Khasmiri'
                            role='Dentist'
                        />
                    </li>
                    <li>
                        <MiniCard
                            img='https://placekitten.com/408/287'
                            name='Khalid Khasmiri'
                            role='Dentist'
                        />
                    </li>
                    <li>
                        <MiniCard
                            img='https://placekitten.com/408/287'
                            name='Khalid Khasmiri'
                            role='Dentist'
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Specialists;
