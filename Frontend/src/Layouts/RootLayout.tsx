import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { SnackbarProvider } from 'notistack';

const RootLayout = () => {
    return (
        <SnackbarProvider>
            <NavBar />
            <Outlet />
            <Footer />
        </SnackbarProvider>
    );
};

export default RootLayout;
