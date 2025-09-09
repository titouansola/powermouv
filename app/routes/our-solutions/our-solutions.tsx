import { useLoaderData } from 'react-router';
import { ArticleList } from '~/common/components/ArticleList';
import { getArticles } from '~/data/queries/articles';

export async function loader() {
    return getArticles('solutions');
}

export default function OurSolutions() {
    const articles = useLoaderData<typeof loader>();
    return (
        <>
            <section className={'centered-section pt-20'}>
                <h1 className={'text-5xl text-center font-bold mb-10'}>
                    Nos solutions
                </h1>
                <div className={'flex flex-col gap-5'}>
                    <p>WIP</p>
                </div>
            </section>
            <ArticleList articles={articles} />
        </>
    );
}
