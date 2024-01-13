import AppointmentTable from '../Components/Tables/AppointmentTable';

const Appointment = () => {
    return (
        <div className='min-h-screen'>
            <div className='text-center'>
                <div className=''>
                    <h2 className=' text-4xl font-bold'>
                        Your Appointments
                    </h2>
                </div>
            </div>
            <div className='my-10'>
                <div className='flex justify-center items-center'>
                    <AppointmentTable />
                </div>
            </div>
        </div>
    );
};

export default Appointment;
