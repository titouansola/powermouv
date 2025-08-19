import type { PortableTextBlock } from 'sanity';

export type PriceModel = {
    _id: string;
    name: string;
    amount: number;
    order: number;
    description: PortableTextBlock[];
    recommended?: boolean;
};
