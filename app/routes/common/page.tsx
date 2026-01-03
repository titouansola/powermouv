import {ArticleList} from '~/common/components/ArticleList';
import type {LightArticleModel} from '~/data/models/article-model';
import type {PageModel} from '~/data/models/page-model';
import {CustomPortableText} from "~/common/components/portable-text/CustomPortableText";

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
                        'text-5xl font-bold mb-10 text-center'
                    }
                >
                    {page.title}
                </h1>
                <CustomPortableText value={page.content} />
            </section>
            <ArticleList articles={articles} />
        </>
    );
}
