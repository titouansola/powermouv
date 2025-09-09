export default function Tmp() {
    return (
        <section
            className={
                'centered-section h-screen flex flex-col items-center justify-center px-4 text-center'
            }
        >
            <img
                src={'/powermouv.png'}
                alt={'POWERMOUV Logo'}
                className={'mb-10 w-full max-w-[350px]'}
            />
            <h1 className={'text-3xl font-bold mb-2'}>
                Gaël GUENEC Baudouin MENUT
            </h1>
            <a
                href={'mailto:contact@powermouv.fr'}
                className={'text-lagoon underline mb-10'}
            >
                contact@powermouv.fr
            </a>
            <p className={'text-dark text-2xl font-thin italic mb-2'}>
                "Le bien-être se construit en mouvement"
            </p>
            <p className={'text-dark'}>Notre site arrive bientôt !</p>
        </section>
    );
}
