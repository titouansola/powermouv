import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type ImageSourceModel = SanityImageSource & { alt: string };
