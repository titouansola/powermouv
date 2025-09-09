import { useLoaderData } from 'react-router';
import { ArticleList } from '~/common/components/ArticleList';
import { getArticles } from '~/data/queries/articles';

export async function loader() {
    return getArticles('methods');
}

export default function OurMethod() {
    const articles = useLoaderData<typeof loader>();
    return (
        <>
            <section
                className={'centered-section grid grid-cols-12 gap-10 pt-20'}
            >
                <div className={'col-span-7'}>
                    <h1 className={'text-5xl font-bold mb-10'}>
                        Méthode inspirée du sport de haut niveau
                    </h1>
                    <div className={'flex flex-col gap-5'}>
                        <p>
                            Chez <b>POWERMOUV</b>, nous appliquons les principes
                            de la préparation physique au monde de l'entreprise.
                            <br />
                            Dans le sport comme dans le travail, la performance
                            durable repose sur trois piliers :&nbsp;
                            <b>analyser, adapter, mesurer.</b>
                        </p>
                        <ul>
                            <li>
                                <b>Analyser les performances</b> : tout comme un
                                entraîneur évalue la condition d’un athlète,
                                nous commençons par un diagnostic précis du
                                bien-être et de la qualité de vie au travail de
                                vos collaborateurs. Cet état des lieux s’appuie
                                sur des indicateurs concrets (stress, énergie,
                                cohésion, engagement).
                            </li>
                            <li>
                                <b>Adapter les programmes</b> : à partir de ces
                                données, nous concevons des solutions sur
                                mesure, en combinant interventions humaines
                                (ateliers santé, défis collectifs, coaching
                                bienveillant) et outils digitaux (application
                                web interactive). Chaque entreprise bénéficie
                                ainsi d’un accompagnement unique, en phase avec
                                sa culture et ses enjeux.
                            </li>
                            <li>
                                <b>Mesurer les résultats</b> : enfin nous
                                suivons les progrès et valorisons chaque
                                évolution, qu’elle soit individuelle (bien-être
                                ressenti, énergie retrouvée) ou collective
                                (cohésion, climat social). Ces données
                                permettent non seulement de valoriser les
                                collaborateurs, mais aussi de donner aux
                                dirigeants et aux RH une vision claire des
                                progrès et du retour sur investissement social
                                et humain.
                            </li>
                        </ul>
                        <p>
                            👉 Notre conviction : en entreprise comme dans le
                            sport,&nbsp;
                            <b>
                                le bien-être et la performance se construisent
                                en mouvement.
                            </b>
                        </p>
                    </div>
                </div>
                <img
                    className={'object-cover h-full col-span-5'}
                    src={'illustration-our-method.jpg'}
                    alt={
                        'Sportive soulevant une barre chargée dans une salle de sport.'
                    }
                />
            </section>
            <ArticleList articles={articles} />
        </>
    );
}
