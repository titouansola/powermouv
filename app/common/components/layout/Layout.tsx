import { Outlet } from 'react-router';
import { Footer } from '~/common/components/footer/Footer';
import { Header } from '~/common/components/header/Header';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
