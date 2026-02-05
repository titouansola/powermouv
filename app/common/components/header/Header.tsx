import clsx from 'classnames';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu } from '~/common/components/icons/Menu';

export function Header() {
    // Constants
    const isMobile = typeof window !== 'undefined' && window?.innerWidth <= 768;
    const navStyle = clsx(
        'flex items-center gap-8',
        isMobile &&
            'absolute right-0 top-full flex-col items-stretch w-full bg-light-2 p-5',
    );
    const linkStyle = clsx(
        'px-8 py-4 text-center transition hover:text-lagoon-pastel',
    );

    // Hooks
    const [showNav, setShowNav] = useState(!isMobile);
    const location = useLocation();

    // Methods
    const toggleNav = () => setShowNav(!showNav);

    // Effects
    useEffect(() => {
        setShowNav(false);
    }, [location.pathname]);

    // Render
    return (
        <header className={'fixed top-0 w-screen bg-light z-1000'}>
            <div
                className={
                    'centered-section relative h-base flex items-center justify-between'
                }
            >
                <img
                    src={'/powermouv.png'}
                    alt={'Logo POWERMOUV'}
                    className={'h-[25px]'}
                />

                {isMobile && (
                    <button type={'button'} onClick={toggleNav}>
                        <Menu />
                    </button>
                )}

                {(!isMobile || showNav) && (
                    <nav className={navStyle}>
                        <Link to={'/'} className={linkStyle}>
                            Accueil
                        </Link>
                        <Link to={'/notre-methode'} className={linkStyle}>
                            Notre méthode
                        </Link>
                        <Link to={'/nos-solutions'} className={linkStyle}>
                            Nos solutions
                        </Link>
                        <Link to={'/nos-experts'} className={linkStyle}>
                            Nos experts
                        </Link>
                        <Link to={'contact'} className={'text-center'}>
                            <button type={'button'} className={'pm-btn'}>
                                Contact
                            </button>
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}
