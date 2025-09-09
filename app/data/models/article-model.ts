import type { PortableTextBlock } from 'sanity';
import type { ImageSourceModel } from './image-source-model';

export type LightArticleModel = {
    _id: string;
    title: string;
    image: ImageSourceModel;
    url: string;
    content: string;
};

export type ArticleModel = {
    _id: string;
    title: string;
    image: ImageSourceModel;
    content: PortableTextBlock[];
};
