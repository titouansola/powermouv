import type { PortableTextBlock } from 'sanity';
import type { ImageSourceModel } from '~/data/models/image-source-model';

export type PeopleModel = {
    _id: string;
    name: string;
    job: string;
    image: ImageSourceModel;
    description: PortableTextBlock[];
    highlighted: boolean;
};
