type AuthInputType = {
    title: string;
    placeholder: string;
    name: string;
    type: string;
};

const AuthInput = ({ title, placeholder, name, type }: AuthInputType) => {
    return (
        <div className='grid my-3'>
            <label htmlFor={name} className=' text-green-700'>
                {title}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className='bg-transparent focus:outline-none focus:border-b-green-700 border-b-[1.5px] p-2 font-medium text-black '
            />
        </div>
    );
};

export default AuthInput;
