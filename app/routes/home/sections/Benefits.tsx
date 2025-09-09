import clsx from 'classnames';
import { FinanceSvg } from '~/common/components/illustrations/FinanceSvg';
import { MyAppSvg } from '~/common/components/illustrations/MyAppSvg';

export function Benefits() {
    const blockStyle = clsx('flex items-center gap-20 max-md:flex-col');
    const blockContentStyle = clsx('flex flex-col gap-2 min-w-2/3');
    const blockTitleStyle = clsx('text-3xl font-semibold');
    const blockPStyle = clsx('text-dark');

    return (
        <section
            className={'centered-section flex flex-col gap-base-2 mb-base-3'}
        >
            <div className={blockStyle}>
                <MyAppSvg />
                <div className={blockContentStyle}>
                    <p className={'font-thin text-dark'}>(EN CREATION)</p>
                    <h2 className={blockTitleStyle}>
                        L'outil digital au service de votre bien-être
                    </h2>
                    <p className={blockPStyle}>
                        Notre application intuitive vous accompagne au quotidien
                        :<br />
                        auto-diagnostic, planning de défis collectifs et suivi
                        de vos progrès. Un lien direct entre vos actions et vos
                        résultats pour ancrer durablement la dynamique bien-être
                        au coeur de votre entreprise.
                    </p>
                </div>
            </div>
            <div className={blockStyle}>
                <div className={blockContentStyle}>
                    <h2 className={blockTitleStyle}>
                        Avantages fiscaux et sociaux en entreprise
                    </h2>
                    <p className={blockPStyle}>
                        Les activités physiques proposées en entreprise peuvent
                        être exonérées de cotisations sociales,{' '}
                        <b>jusqu’à 196€ par salarié et par an</b> (source URSSAF
                        - plafond 2025). Une opportunité pour allier QVCT et
                        fiscalité optimisée.
                    </p>
                    <a
                        className={'underline text-lagoon'}
                        href="https://www.urssaf.fr/accueil/employeur/cotisations/avantages-en-nature.html"
                        target={'_blank'}
                        rel="noopener"
                    >
                        En savoir plus
                    </a>
                </div>
                <FinanceSvg />
            </div>
        </section>
    );
}
