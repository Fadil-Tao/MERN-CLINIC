import FormModalButton from '../Buttons/FormModalButton';

type DoctorCardType = {
    img:string,
    name:string,
    speciality:string 
    schedule:string 
}

const DoctorCard = ({img,name,speciality,schedule}:DoctorCardType) => {
    return (
        <div className=' my-2 rounded-md border-[1.5px]  '>
            <div className='flex flex-wrap justify-center md:justify-evenly '>
                <div className=' w-64 flex justify-start  h-40 bg-red '>
                    <img
                        src={img}
                        alt='Image'
                        className='object-cover w-full h-full rounded-md '
                    />
                </div>
                <div className='flex flex-wrap justify-between text-start md:w-60 mx-10 items-center'>
                    <div>
                        <h3 className='font-bold text-3xl'>
                            {name}
                        </h3>
                        <p className='text-gray-700 font-semibold'>{speciality}</p>
                        <p>{schedule}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <FormModalButton />
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
