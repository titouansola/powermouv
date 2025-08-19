import { Outlet } from 'react-router';
import { Footer } from '~/common/ui/footer/Footer';
import { Header } from '~/common/ui/header/Header';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
