import ProfileInput from '../Components/Inputs/ProfileInput';
import LoadingSpinner from '../Components/Ui/LoadingSpinner';
import { useFetchProfile } from '../Hooks/FetchProfile.hook';

const ProfileLayout = () => {
    const {userData,isLoading} = useFetchProfile()

    if(isLoading) return <LoadingSpinner/>
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='grid place-items-center'>
                <div className='w-44 h-44 flex justify-center items-center '>
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="image" className='rounded-full h-full w-full object-cover' />
                </div>
                <h1 className='text-center border-b-2 border-b-green-700 font-bold text-5xl'>Your Profile</h1>
                <div className='grid grid-cols-2'>
                    <ProfileInput
                        name='name'
                        label='Name'
                        defaultValue={`${userData?._name}`}
                        placeHolder='Your Name'
                        type='text'
                    />
                    <ProfileInput
                        name='email'
                        label='Email'
                        defaultValue={`${userData?._email}`}
                        placeHolder='Your Email'
                        type='email'
                    />
                    <ProfileInput
                        name='tel'
                        label='Phone Number'
                        defaultValue={`${userData?._phone}`}
                        placeHolder='Your Phone Number'
                        type='tel'
                    />
                    <ProfileInput
                        name='date'
                        label='Birth Date'
                        defaultValue={`${userData?._birth}`}
                        placeHolder='Your Birth'
                        type='date'
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;
