import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <>
            <header className='h-16'>
                <NavBar />
            </header>
            <main className='min-h-[calc(100vh-117px)]'>
                <Outlet></Outlet>
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
