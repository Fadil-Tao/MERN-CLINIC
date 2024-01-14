import ProfileInput from "../Components/Inputs/ProfileInput";

const ProfileLayout = () => {
    return (
        <div className='flex justify-center items-center '>
            <div className='grid grid-cols-1 place-items-center'>
                <div className='grid grid-cols-1 place-items-center'>
                    <h2 className='text-4xl font-bold'>Profile</h2>
                    <div className='w-48 h-48'>
                        <img
                            src='https://placekitten.com/408/287'
                            alt='Img'
                            className='object-cover h-full w-full rounded-full'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                   <ProfileInput name='name' label='Name' defaultValue='Tj Dillashaw' placeHolder="Your Name" type="text"/>
                   <ProfileInput name='email' label='Email' defaultValue='Sumbul@gmail.com' placeHolder="Your Email" type="email"/>
                   <ProfileInput name='tel' label='Phone Number' defaultValue='0812345667' placeHolder="Your Phone Number" type="tel"/>
                   <ProfileInput name='date' label='Birth Date' defaultValue='22/11/2023' placeHolder="Your Birth" type="date"/>
                   <ProfileInput name='password' label='Password' defaultValue='' placeHolder="Your Password" type="password"/>
                   <ProfileInput name='address' label='Address' defaultValue='Auckland Mains Street' placeHolder="Your Address" type="text"/>
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;
