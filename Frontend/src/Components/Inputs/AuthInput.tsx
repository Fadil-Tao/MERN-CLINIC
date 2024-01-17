type AuthInputType = {
    title: string;
    placeholder: string;
    name: string;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput = ({ title, placeholder, name, type,handleChange }: AuthInputType) => {
    return (
        <div className='grid my-3'>
            <label htmlFor={name} className=' text-green-700'>
                {title}
            </label>
            <input required
                onChange={handleChange}
                type={type}
                placeholder={placeholder}
                name={name}
                className='bg-transparent focus:outline-none focus:border-b-green-700 border-b-[1.5px] p-2 font-medium text-black '
            />
        </div>
    );
};

export default AuthInput;
