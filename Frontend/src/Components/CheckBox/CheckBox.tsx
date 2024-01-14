type CheckBoxProps = {
    name: string;
    id: string;
};

const CheckBox = ({ name, id }: CheckBoxProps) => {
    return (
        <div className='flex items-center '>
            <input
                type='checkbox'
                name={name}
                id={id}
                className='w-6 h-6 text-green-700 bg-gray-100 border-gray-300 rounded focus:ring-green-700  dark:focus:ring-green-700 accent-green-700 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            <label htmlFor={name} className='mx-2 text-4xl'>
                {name}
            </label>
        </div>
    );
};

export default CheckBox;
