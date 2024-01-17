type AppointmentInputType = {
    title: string;
    placeholder: string;
    name: string;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AppointmentInput = ({ title, placeholder, name, type,handleChange }: AppointmentInputType) => {
    return (
        <div className='grid  place-items-start w-full '>
            <label htmlFor={name} className=' text-grey-700'>
                {title}
            </label>
            <input required
                onChange={handleChange}
                type={type}
                placeholder={placeholder}
                name={name}
                className='bg-transparent focus:outline-none focus:border-b-green-700 border-b-[1.5px] p-2 font-medium text-green-700'
            />
        </div>
    );
};

export default AppointmentInput;
