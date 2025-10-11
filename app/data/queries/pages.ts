import { sanityClient } from '~/data/config/sanity-client';
import type { PageModel } from '~/data/models/page-model';

export async function getPage(tag: string) {
    return sanityClient.fetch<PageModel>(
        `*[_type == 'pages' && tag == '${tag}'][0]`,
    );
}
