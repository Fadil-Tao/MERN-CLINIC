type Cardtypes = {
    title: string;
    desc: string;
};

const ServicesCard = ({ title, desc }: Cardtypes) => {
    return (
        <div className='border-gray-500 border-[1.5px] rounded-md text-center p-6  md:w-[350px] m-2 shadow-lg  '>
            <div>
                <h3 className='font-bold  text-lg'>{title}</h3>
            </div>
            <div className="md:h-36">
                <p className='text-gray-700 my-5 text-sm '>{desc}</p>
            </div>
        </div>
    );
};

export default ServicesCard;
