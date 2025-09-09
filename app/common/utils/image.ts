import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '~/data/config/sanity-client';
import type { ImageSourceModel } from '~/data/models/image-source-model';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: ImageSourceModel) {
    return builder.image(source);
}
