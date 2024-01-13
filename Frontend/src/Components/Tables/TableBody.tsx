import { Appointment } from '../../DummyData/DummyAppointment';
import { CancelButton } from '../Buttons/CancelButton';

type AppointmentTableProps = {
    no: number;
    doctor: string;
    appDate: string;
    appTime: string;
    bookDate: string;
    bookTime: string;
};

const TableBody = () => {
    const data: AppointmentTableProps[] = Appointment;

    if (!data) return <div>No appointment Yet</div>;
    return (
        <tbody>
            {data.map((data) => {
                return (
                    <tr className='border-b-2 py-5'>
                        <th>{data.no}</th>
                        <th>{data.doctor}</th>
                        <th>{data.appDate}</th>
                        <th>{data.appTime}</th>
                        <th>{data.bookDate}</th>
                        <th>{data.bookTime}</th>
                        <th><CancelButton /></th>
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
