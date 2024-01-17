import { ReactNode } from 'react';

type ChoiceBoxType = {
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: ReactNode;
    title:string,
    name:string
};

const ChoiceBox = ({ handleChange, children , title,name}: ChoiceBoxType) => {
    return (
        <div className='grid place-items-start'>
            <label htmlFor={name}>{title}</label>
            <div>
                <select
                    name={name}
                    id=''
                    onChange={handleChange}
                    className='font-semibold p-1 rounded my-2'
                >
                    {children}
                </select>
            </div>
        </div>
    );
};

export default ChoiceBox;
