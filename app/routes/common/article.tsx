import { type LoaderFunctionArgs, redirect, useLoaderData } from 'react-router';
import { urlFor } from '~/common/utils/image';
import { getArticleBySlug } from '~/data/queries/articles';
import {CustomPortableText} from "~/common/components/portable-text/CustomPortableText";

function getContent(url: string, slug: string) {
    if (url.match('notre-methode')) {
        return getArticleBySlug('methods', slug);
    } else if (url.match('nos-solutions')) {
        return getArticleBySlug('solutions', slug);
    } else {
        throw redirect('/');
    }
}

export async function loader({ params, request }: LoaderFunctionArgs) {
    if (!params.slug) {
        throw redirect('/');
    }
    const article = await getContent(request.url, params.slug);
    if (!article) {
        throw redirect('/');
    }
    return article;
}

export default function Article() {
    const article = useLoaderData<typeof loader>();
    return (
        <section className={'pb-30'}>
            <div
                className={
                    'relative flex items-center justify-center h-[500px] mb-30 overflow-hidden'
                }
            >
                <img
                    src={urlFor(article.image).url()}
                    alt={article.image.alt}
                    className={
                        'absolute object-cover brightness-75 blur-xs -z-10'
                    }
                />
                <h1 className={'text-6xl text-center text-white font-bold'}>
                    {article.title}
                </h1>
            </div>
            <div className={'centered-section'}>
                <CustomPortableText value={article.content} />
            </div>
        </section>
    );
}
