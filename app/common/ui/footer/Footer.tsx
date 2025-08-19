import clsx from 'classnames';

export function Footer() {
    const blockStyle = clsx('flex flex-col gap-10');
    const blockTitleStyle = clsx('font-semibold text-xl');
    const blockListStyle = clsx('flex flex-col gap-8');

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
                        <li>06 22 67 60 09</li>
                        <li>
                            424 rue de Lisbonne
                            <br />
                            La Seyne-sur-Mer
                        </li>
                        <li>ippsop@gmail.com</li>
                    </ul>
                </div>
                <div className={blockStyle}>
                    <h2 className={blockTitleStyle}>Nos réseaux</h2>
                    <ul className={blockListStyle}>
                        <li>Facebook</li>
                        <li>YouTube</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className={blockStyle}>
                    <h2 className={blockTitleStyle}>Nos solutions</h2>
                    <ul className={blockListStyle}>
                        <li>Solution</li>
                        <li>Solution</li>
                        <li>Solution</li>
                        <li>Solution</li>
                    </ul>
                </div>
                <div className={blockStyle}>
                    <h2 className={blockTitleStyle}>Liens utiles</h2>
                    <ul className={blockListStyle}>
                        <li>À propos</li>
                        <li>Mentions légales</li>
                        <li>Politique de confidentialité</li>
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
