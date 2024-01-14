type MiniCardType = {
    img: string;
    name: string;
    role: string;
};

const MiniCard = ({ img, name, role }: MiniCardType) => {
    return (
        <div className=' md:w-[270px] mx-1'>
            <div className='w-full h-1/2'>
                <img
                    src={img}
                    alt='img'
                    className='object-cover w-full h-full rounded-md'
                />
            </div>
            <div>
                <p className='font-semibold text-lg'>Dr.{name}</p>
                <p className='text-sm text-gray-700'>{role}</p>
            </div>
        </div>
    );
};

export default MiniCard;
