import { PortableText } from '@portabletext/react';
import { ArticleList } from '~/common/components/ArticleList';
import { urlFor } from '~/common/utils/image';
import type { LightArticleModel } from '~/data/models/article-model';
import type { PageModel } from '~/data/models/page-model';

export function Page({
    page,
    articles,
}: {
    page: PageModel;
    articles: LightArticleModel[];
}) {
    return (
        <>
            <section
                className={'centered-section md:grid grid-cols-12 gap-10 pt-20'}
            >
                <div className={'col-span-7'}>
                    <h1
                        className={
                            'text-5xl font-bold mb-10 max-md:text-center'
                        }
                    >
                        {page.title}
                        Méthode inspirée du sport de haut niveau
                    </h1>
                    <PortableText value={page.content} />
                </div>
                <img
                    className={'object-cover h-full col-span-5 max-md:hidden'}
                    src={urlFor(page.image).url()}
                    alt={page.image.alt}
                />
            </section>
            <ArticleList articles={articles} />
        </>
    );
}
