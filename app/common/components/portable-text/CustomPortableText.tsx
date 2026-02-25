import {PortableText} from '@portabletext/react';
import type {PortableTextBlock} from 'sanity';
import {urlFor} from '~/common/utils/image';
import type {ImageSourceModel} from "~/data/models/image-source-model";
import type {PropsWithChildren} from "react";

export function CustomPortableText({
    value,
}: { value: PortableTextBlock[] }) {
    return (
        <PortableText
            value={value}
            components={{
                types: { image: Image },
                block: {
                    h2: H2,
                    h3: H3,
                    h4: H4
                }
            }}
        />
    );
}

function Image({ value }: { value: ImageSourceModel }) {
    return (
        <div className={'flex items-center justify-center py-10 md:px-20 lg:px-40 xl:px-60'}>
            <img src={urlFor(value).url()} alt={value.alt} />
        </div>
    );
}

function H2({ children }: PropsWithChildren) {
    return <h2 className={'text-3xl mt-6 mb-4'}>{children}</h2>
}

function H3({ children }: PropsWithChildren) {
    return <h3 className={'text-2xl my-4'}>{children}</h3>
}

function H4({ children }: PropsWithChildren) {
    return <h4 className={'text-xl mt-4 mb-2'}>{children}</h4>
}
