import clsx from 'classnames';
import { Ruler } from '~/common/ui/icons/Ruler';
import { SearchEngine } from '~/common/ui/icons/SearchEngine';
import { UserFriends } from '~/common/ui/icons/UserFriends';

export function UniqueValuePropositions() {
    const blockStyle = clsx(
        'flex flex-col gap-5 p-12 items-center bg-lagoon-pastel text-white rounded-xl shadow-xl',
    );
    const blockTitleStyle = clsx('text-center text-xl font-bold');

    return (
        <section
            className={'centered-section grid md:grid-cols-3 gap-12 mb-base-3'}
        >
            <div className={blockStyle}>
                <SearchEngine />
                <h2 className={blockTitleStyle}>Diagnostic personnalisé</h2>
                <p>
                    Nous intervenons directement dans votre entreprise pour
                    évaluer les indicateurs de bien-être, d’engagement et de
                    cohésion. À la clé : un état des lieux précis et des
                    recommandations concrètes, adaptées à vos enjeux humains et
                    organisationnels.
                </p>
            </div>
            <div className={blockStyle}>
                <UserFriends />
                <h2 className={blockTitleStyle}>Accompagnement hybride</h2>
                <p>
                    Un programme Corporate Wellness sur mesure, aligné sur vos
                    valeurs. Ateliers sur site, formations ciblées, défis
                    collectifs, et un suivi motivant via notre plateforme
                    digitale (en création) pour ancrer durablement les bonnes
                    pratiques.
                </p>
            </div>
            <div className={blockStyle}>
                <Ruler />
                <h2 className={blockTitleStyle}>KPI & Mesure d'impact</h2>
                <p>
                    Pilotez vos actions grâce à des indicateurs fiables :
                    bien-être perçu, participation, cohésion d’équipe... Des
                    données claires pour valoriser vos collaborateurs et
                    optimiser votre politique QVCT. Faites émerger une culture
                    interne orientée mouvement et qualité de vie.
                </p>
            </div>
        </section>
    );
}
