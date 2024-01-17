import { CancelButton } from '../Buttons/CancelButton';
import { useFetchAppointment } from '../../Hooks/FetchAppointment';
import LoadingSpinner from '../Ui/LoadingSpinner';


const TableBody = () => {
    const {data,isLoading} = useFetchAppointment();
    
    if (isLoading) return <LoadingSpinner/>;
    if(!data) return <div>No data yet</div>
    return (
        <tbody>
            {data.map((data,key) => {
                return (
                    <tr key={key} className='border-b-2 py-5'>
                        <th>{key + 1}</th>
                        <th>{data._doctor}</th>
                        <th>{data._appDate}</th>
                        <th>{data._appTime}</th>
                        <th>{data._bookDate}</th>
                        <th>{data._bookTime}</th>
                        <th><CancelButton _id={data._id} /></th>
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
