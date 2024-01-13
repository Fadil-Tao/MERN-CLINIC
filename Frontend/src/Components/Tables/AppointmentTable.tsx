import TableBody from './TableBody';
import TableHead from './TableHead';

const AppointmentTable = () => {
    return (
        <div className='overflow-x-auto'>
            <table className=''>
                <TableHead />
                <TableBody />
            </table>
        </div>
    );
};

export default AppointmentTable;
