import BookLink from '../Buttons/BooksLink';

const DoctorCard = () => {
    return (
        <div className=' my-2 rounded-md border-[1.5px]  '>
            <div className='flex flex-wrap justify-center '>
            <div className=' w-64 flex justify-start  h-40 bg-red '>
                    <img
                        src='https://placekitten.com/408/287'
                        alt=''
                        className='object-cover w-full h-full rounded-md '
                    />
            </div>

            <div className='flex flex-wrap justify-between  mx-10 items-center'>
                <div>
                    <h3 className='font-bold text-3xl'>Dr.Khalid Khasmiri</h3>
                    <p className='text-gray-700 font-semibold'>Dentist</p>
                    <p>10.00 - 12.00 Am</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <BookLink />
            </div>
            </div>
               
        </div>
    );
};

export default DoctorCard;
