import { sanityClient } from '~/data/config/sanity-client';
import type { PriceModel } from '~/data/models/price-model';
import type { QnaModel } from '~/data/models/qna-model';

export async function getLandingPage() {
    return sanityClient.fetch<{ prices: PriceModel[]; qna: QnaModel[] }>(`
        {
            'prices': *[_type == 'prices'],
            'qna': *[_type == 'qna'],
        }
    `);
}
