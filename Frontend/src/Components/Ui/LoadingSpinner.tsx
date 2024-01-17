const LoadingSpinner = () => {
    return (
        <div className='flex absolute top-86 left-[600px] items-center justify-center '>
            <div className='relative'>
                <div className=' h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin'></div>
            </div>
        </div>
    );
};

export default LoadingSpinner