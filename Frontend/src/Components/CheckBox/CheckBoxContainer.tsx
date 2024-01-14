import CheckBox from './CheckBox';

const CheckBoxContainer = () => {
    return (
        <div className='flex justify-center rounded-sm border-2 p-10'>
            <div>
                <CheckBox name='Dentist' id='dentist' />
                <CheckBox name='Heart' id='Heart' />
                <CheckBox name='Skin' id='Skin' />
                <CheckBox name='General' id='General' />
            </div>
        </div>
    );
};

export default CheckBoxContainer;
