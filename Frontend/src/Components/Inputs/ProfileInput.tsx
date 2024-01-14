type ProfileInputProps = {
    name: string;
    label: string;
    defaultValue: string;
    placeHolder?: string;
    type:string;
};

const ProfileInput = ({
    name,
    label,
    defaultValue,
    placeHolder,
    type
}: ProfileInputProps) => {
    return (
        <div className='w-full grid  p-2 '>
            <label htmlFor={name} className='font-semibold'>
                {label}
            </label>
            <input
                className='rounded-xl border-2 border-green-700 p-5 bg-transparent '
                type={type}
                defaultValue={defaultValue}
                placeholder={placeHolder}
                id={name}
            />
        </div>
    );
};

export default ProfileInput;
