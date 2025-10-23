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
                className={'centered-section pt-20'}
            >
                <h1
                    className={
                        'text-5xl font-bold mb-10 max-md:text-center'
                    }
                >
                    {page.title}
                </h1>
                <PortableText value={page.content} />
            </section>
            <ArticleList articles={articles} />
        </>
    );
}
