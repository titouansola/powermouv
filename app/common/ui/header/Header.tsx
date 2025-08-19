import clsx from 'classnames';
import { Link } from 'react-router';

export function Header() {
    const linkStyle = clsx('transition hover:text-lagoon-pastel max-md:hidden');

    return (
        <header
            className={
                'centered-section h-base flex items-center justify-between'
            }
        >
            <img
                src={'powermouv.png'}
                alt={'Logo POWERMOUV'}
                className={'h-[25px]'}
            />
            <nav className={'flex items-center gap-15'}>
                <Link to={'/'} className={linkStyle}>
                    Accueil
                </Link>
                <Link to={'/'} className={linkStyle}>
                    Notre méthode
                </Link>
                <Link to={'/'} className={linkStyle}>
                    Nos solutions
                </Link>
                <Link to={'/'} className={linkStyle}>
                    Nos experts
                </Link>
                <Link to={'contact'}>
                    <button className="pm-btn">Contact</button>
                </Link>
            </nav>
        </header>
    );
}
