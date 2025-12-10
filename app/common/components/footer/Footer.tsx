import clsx from 'classnames';
import { Link, useRouteLoaderData } from 'react-router';
import { Mail } from '~/common/components/icons/Mail';
import { Phone } from '~/common/components/icons/Phone';
import { Pin } from '~/common/components/icons/Pin';
import type { MainLoader } from '~/root';

export function Footer() {
    const loaderData = useRouteLoaderData<MainLoader>('root');

    if (!loaderData) return null;

    const blockStyle = clsx('flex flex-col gap-10');
    const blockTitleStyle = clsx('font-semibold text-xl');
    const blockListStyle = clsx('flex flex-col gap-8');
    const blockLineStyle = clsx('flex items-center gap-2');

    return (
        <footer className={'bg-dark text-white'}>
            <div
                className={
                    'flex justify-between md:px-base-3 pt-[50px] pb-[100px] max-md:flex-col max-md:gap-20 max-md:items-center max-md:text-center'
                }
            >
                <div className={blockStyle}>
                    <h2 className={blockTitleStyle}>POWERMOUV</h2>
                    <ul className={blockListStyle}>
                        <li className={blockLineStyle}>
                            <Phone />
                            <a href="tel:0634207946">06 34 20 79 46</a>
                        </li>
                        <li className={blockLineStyle}>
                            <Pin />
                            <p>
                                424 rue de Lisbonne
                                <br />
                                La Seyne-sur-Mer
                            </p>
                        </li>
                        <li className={blockLineStyle}>
                            <Mail />
                            <a href="mailto:contact@powermouv.fr">
                                contact@powermouv.fr
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={blockStyle}>
                    <h2 className={blockTitleStyle}>Nos réseaux</h2>
                    <ul className={blockListStyle}>
                        {loaderData.footer.socials.map((social, i) => (
                            <li key={i}>
                                <a href={social.link} target={'_blank'}>
                                    {social.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={blockStyle}>
                    <h2 className={blockTitleStyle}>Nos solutions</h2>
                    <ul className={blockListStyle}>
                        {loaderData.footer.solutions.map((solution, i) => (
                            <li key={i}>
                                <Link to={`/nos-solutions/${solution.url}`}>
                                    {solution.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={blockStyle}>
                    <h2 className={blockTitleStyle}>Liens utiles</h2>
                    <ul className={blockListStyle}>
                        <li>
                            <Link to={'/contact'}>À propos</Link>
                        </li>
                        <li>
                            <Link to={'/mentions-legales'}>
                                Mentions légales
                            </Link>
                        </li>
                        <li>
                            <Link to={'/politique-de-confidentialite'}>
                                Politique de confidentialité
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className={'text-center text-[14px] pb-2'}>
                Site réalisé par{' '}
                <a href="https://titouansola.dev/" className={'underline'}>
                    Titouan Sola
                </a>
            </p>
        </footer>
    );
}
