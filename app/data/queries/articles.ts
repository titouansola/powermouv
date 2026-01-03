import { sanityClient } from '~/data/config/sanity-client';
import type {
    ArticleLinkModel,
    ArticleModel,
    LightArticleModel,
} from '~/data/models/article-model';

export async function getArticles(type: string) {
    return sanityClient.fetch<LightArticleModel[]>(`
        *[_type == '${type}']
        {
            ...,
            'content': array::join( string::split( pt::text(content), '' )[0..255], '' ) + '...',
            'url': slug.current
        }
    `);
}

export async function getArticleBySlug(type: string, slug: string) {
    return sanityClient.fetch<ArticleModel>(
        `*[_type == '${type}' && slug.current=='${slug}'][0]`,
    );
}

export async function getFooterSolutions() {
    return sanityClient.fetch<ArticleLinkModel[]>(`
        *[_type == 'solutions' && showOnFooter]
        {
            'url': slug.current,
            title
        }
    `);
}
