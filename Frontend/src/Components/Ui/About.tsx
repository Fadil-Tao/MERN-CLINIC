import { useRef } from 'react';
import useIsVisible from '../../Hooks/ScrollEffect.hook';

const About = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);

    return (
        <div
            ref={ref}
            className={`About flex flex-wrap my-10 justify-center items-center transition-all ease-in-out duration-1000 ${
                isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-[-200px]'
            }`}
        >
            <div className=' md:w-1/2 p-1 flex justify-center  items-center  '>
                <div className='h-[250px] md:w-full mr-10 border-dashed border-2 border-white rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 '>
                    <div className='w-full h-full bg-white p-1'>
                        <img
                            src='https://i.pinimg.com/originals/61/b8/f6/61b8f6e014116aca1db6f85be6485203.png'
                            alt=''
                            className='w-full h-full object-cover rounded-md '
                        />
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 '>
                <h3 className='font-bold text-3xl border-green-700 border-b-[1.5px] my-2'>
                    {' '}
                    About Us{' '}
                </h3>
                <p className='my-4'>
                    we prioritize your health and well-being, delivering
                    personalized and compassionate care through our dedicated
                    team of experienced professionals and state-of-the-art
                    facilities.
                </p>
                <ul className='relative list-none text-lg'>
                    <li className='relative pl-8 py-2'>
                        <span className='absolute left-[13px] w-[3px] h-full bg-red-800'></span>
                        <span className='absolute left-2 top-1/2 transform -translate-y-1/2 inline-block w-3 h-3 bg-red-800 rounded-full'></span>
                        <span className='absolute left-1 top-1/2 transform -translate-y-1/2 inline-block w-5 h-5 bg-transparent border-2 border-red-800 rounded-full'></span>
                        Choose A Specialist
                        <p className='text-gray-500 text-sm'>
                            Choose Specialist Based On Your Need
                        </p>
                    </li>
                    <li className='relative pl-8 py-2'>
                        <span className='absolute left-[13px] w-[3px] h-full bg-red-800'></span>
                        <span className='absolute left-2 top-1/2 transform -translate-y-1/2 inline-block w-3 h-3 bg-red-800 rounded-full'></span>
                        <span className='absolute left-1 top-1/2 transform -translate-y-1/2 inline-block w-5 h-5 bg-transparent border-2 border-red-800 rounded-full'></span>
                        Make A Schedule
                        <p className='text-gray-500 text-sm'>
                            Make An Agreement For Dates
                        </p>
                    </li>
                    <li className='relative pl-8 py-2'>
                        <span className='absolute left-[13px] w-[3px] h-full bg-red-800'></span>
                        <span className='absolute left-2 top-1/2 transform -translate-y-1/2 inline-block w-3 h-3 bg-red-800 rounded-full'></span>
                        <span className='absolute left-1 top-1/2 transform -translate-y-1/2 inline-block w-5 h-5 bg-transparent border-2 border-red-800 rounded-full'></span>
                        Get Your Solutions
                        <p className='text-gray-500 text-sm'>
                            Solve Your Problem With Your Specalis!
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;
