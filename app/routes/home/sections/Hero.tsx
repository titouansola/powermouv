import { Link } from 'react-router';

export function Hero() {
    return (
        <>
            <section
                className={
                    'relative h-[450px] md:h-[600px] overflow-hidden mb-base-2'
                }
            >
                <img
                    src={'hero.jpg'}
                    className={
                        'absolute size-full blur-xs brightness-70 -z-10 object-cover'
                    }
                    alt={'Powermouv'}
                />
                <div
                    className={
                        'centered-section h-full flex flex-col justify-center items-center gap-5 px-base'
                    }
                >
                    <h1
                        className={
                            'text-white text-5xl md:text-[70px] text-center font-bold drop-shadow-lg'
                        }
                    >
                        Le bien-être se contruit en mouvement
                    </h1>
                    <Link to={'contact'}>
                        <button className={'pm-btn'}>
                            Passez à l&apos;action
                        </button>
                    </Link>
                </div>
            </section>

            <section
                className={
                    'centered-section flex items-stretch justify-center gap-10 mb-base-3 max-md:flex-col'
                }
            >
                <div
                    className={
                        'flex flex-col gap-8 p-12 bg-white shadow-2xl rounded-2xl md:max-w-7/12'
                    }
                >
                    <h2 className={'text-2xl md:text-3xl font-bold'}>
                        Bienfaits et valeurs du sport dans votre entreprise
                    </h2>
                    <p>
                        Chez POWERMOUV, nous mettons notre expertise de
                        l’accompagnement des sportifs - amateurs comme
                        professionnels - au service de votre entreprise.
                        <br />
                        <br />
                        Que vous soyez dirigeant, manager ou responsable RH,
                        nous vous aidons à intégrer durablement le sport et le
                        bien-être dans votre culture d’entreprise grâce à une
                        approche hybride, humaine et digitale.
                    </p>
                    <Link to={'contact'} className={'w-fit m-auto'}>
                        <button className={'pm-btn'}>
                            Obtenir un rendez-vous
                        </button>
                    </Link>
                </div>

                <ul className={'flex flex-col justify-center gap-5'}>
                    <li className={'checklist'}>
                        Renforcez la cohésion et le sentiment d’appartenance de
                        vos équipes
                    </li>
                    <li className={'checklist'}>
                        Faites de vos collaborateurs des acteurs engagés de leur
                        qualité de vie au travail
                    </li>
                    <li className={'checklist'}>
                        Offrez à vos équipes un accompagnement QVCT innovant,
                        sur site et à distance
                    </li>
                </ul>
            </section>
        </>
    );
}
