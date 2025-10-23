import { PortableText } from '@portabletext/react';
import { ArticleList } from '~/common/components/ArticleList';
import type { LightArticleModel } from '~/data/models/article-model';
import type { PageModel } from '~/data/models/page-model';
import type {PropsWithChildren} from "react";

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
                <PortableText
                    value={page.content}
                    components={{
                        block: {
                            h2: H2,
                            h3: H3,
                            h4: H4
                        }
                    }}
                />
            </section>
            <ArticleList articles={articles} />
        </>
    );
}

function H2({ children }: PropsWithChildren) {
    return <h2 className={'text-3xl'}>{children}</h2>
}

function H3({ children }: PropsWithChildren) {
    return <h3 className={'text-2xl'}>{children}</h3>
}

function H4({ children }: PropsWithChildren) {
    return <h4 className={'text-xl'}>{children}</h4>
}
