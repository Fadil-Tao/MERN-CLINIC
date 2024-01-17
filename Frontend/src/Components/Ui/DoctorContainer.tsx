import DoctorCard from '../Cards/DoctorCard';
import DummyDoctorList from '../../DummyData/DummyDoctorList';
const DoctorContainer = () => {
    return (
        <div className=''>
            <ul>
                {DummyDoctorList.map((data, key) => {
                    return (
                        <li key={key}>
                            <DoctorCard
                                name={data.name}
                                schedule={data.schedule}
                                speciality={data.speciality}
                                img={data.img}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DoctorContainer;
