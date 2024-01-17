import AuthBanner from '../assets/AuthBanner.jpg';
import { SnackbarProvider} from 'notistack';

type AuthLayoutType = {
    Form: React.ComponentType;
};

const AuthLayout = ({ Form }: AuthLayoutType) => {
    return (
        <div className='min-h-screen flex justify-center items-center flex-wrap'>
            <SnackbarProvider>
                <div>
                    <div>
                        <img src={AuthBanner} alt='Image' />
                    </div>
                </div>
                <Form />
            </SnackbarProvider>
        </div>
    );
};

export default AuthLayout;
