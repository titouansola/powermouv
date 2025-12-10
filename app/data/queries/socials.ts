import { sanityClient } from '~/data/config/sanity-client';
import type { SocialModel } from '~/data/models/social-model';

export async function getSocials() {
    return sanityClient.fetch<SocialModel[]>(`*[_type == 'socials']`);
}
