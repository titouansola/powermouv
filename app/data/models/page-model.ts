import type { PortableTextBlock } from 'sanity';
import type { ImageSourceModel } from '~/data/models/image-source-model';

export type PageModel = {
    tag: string;
    title: string;
    content: PortableTextBlock[];
    image: ImageSourceModel;
};
