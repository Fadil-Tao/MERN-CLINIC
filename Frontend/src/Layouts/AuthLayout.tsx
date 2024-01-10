import AuthBanner from '../assets/AuthBanner.jpg';

type AuthLayoutType = {
    Form:React.ComponentType;
}

const AuthLayout = ({Form}:AuthLayoutType) => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-wrap'>
            <div>
                <div>
                    <img src={AuthBanner} alt='Image' />
                </div>
            </div>
            <Form/>
        </div>
    );
};

export default AuthLayout;
