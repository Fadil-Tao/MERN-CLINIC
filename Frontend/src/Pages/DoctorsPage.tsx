import CheckBoxContainer from '../Components/CheckBox/CheckBoxContainer';
import DoctorContainer from '../Components/Ui/DoctorContainer';

const DoctorsPage = () => {
    return (
        <div className='px-12 md:px-20'>
            <h1 className='text-center font-bold border-b-2 border-green-700 text-4xl'>
                Our Doctors Fleet
            </h1>
            <div className='flex flex-wrap md:justify-between'>
                <CheckBoxContainer />
                <DoctorContainer/>
            </div>
        </div>
    );
};

export default DoctorsPage;
