import { useRef, useState } from 'react';
import { dummyReview } from '../../DummyData/DummyReview';
import useIsVisible from '../../Hooks/ScrollEffect.hook';

const ReviewCarousell = () => {
    const review = dummyReview;
    const [counter, setCounter] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);
    return (
        <div className=' bg-[#c5fcf3e1]  md:px-20 py-10 px-12 my-5 '>
            <div
                ref={ref}
                className={`justify-center items-center flex flex-wrap transition-all ease-in-out duration-1000 ${
                    isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-[200px]'
                }`}
            >
                <div className='md:w-1/2 h-96 '>
                    <div className='w-full h-full '>
                        <img
                            src={`${review[counter].img}`}
                            alt=''
                            className='object-cover h-full w-full rounded-lg'
                        />
                    </div>
                </div>
                <div className='md:w-1/2 px-14 '>
                    <div className='font-semibold'>
                        <h3 className='text-3xl'>
                            More Over{' '}
                            <span className='text-green-700'>
                                1500+ customers
                            </span>
                        </h3>
                        <p className='text-2xl'>
                            Dont believe us, Check Clients Word
                        </p>
                    </div>
                    <div className='my-10 flex justify-center border '>
                        <span className=' self-start text-green-700  font-extrabold text-3xl'>
                            "
                        </span>
                        <p className=' text-lg text-gray-700 md:mx-2'>
                            {' '}
                            {review[counter].desc}
                        </p>
                        <span className=' self-end  text-green-700  font-extrabold text-3xl'>
                            "
                        </span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='font-semibold text-lg'>
                                {review[counter].name}
                            </p>
                            <p className='text-gray-700'>
                                {review[counter].place}
                            </p>
                        </div>
                        <div className='flex font-semibold '>
                            <button
                                className='mx-2 disabled:opacity-30'
                                onClick={() => setCounter(counter - 1)}
                                disabled={!review[counter - 1]}
                            >
                                {'<---'}
                            </button>
                            <button
                                className='disabled:opacity-30'
                                onClick={() => setCounter(counter + 1)}
                                disabled={!review[counter + 1]}
                            >
                                {'--->'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCarousell;
