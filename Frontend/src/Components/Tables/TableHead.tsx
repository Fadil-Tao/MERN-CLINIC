
const TableHead = () => {
    const thList:string[] = [
        'No','Doctor','Appointment Date','Appointment Time','Booking Date','Booking Time' , 'Action'
    ]
    return (
        <thead>
            <tr className=" bg-green-500 text-white text-center">
                {thList.map((data)=> {
                    return (
                        <th className="p-2">{data}</th>
                    )
                })}
            </tr>
        </thead>
    );
};


export default TableHead