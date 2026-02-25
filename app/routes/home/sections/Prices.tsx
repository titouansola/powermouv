import clsx from 'classnames/dedupe';
import { Link } from 'react-router';
import type { PriceModel } from '~/data/models/price-model';
import { useLandingPageData } from '~/routes/home/home';
import {CustomPortableText} from "~/common/components/portable-text/CustomPortableText";

export function Prices() {
    const { prices } = useLandingPageData();

    return (
        <section className={'centered-section mb-base-3'}>
            <h2
                className={
                    'font-semibold text-3xl md:text-5xl text-center mb-20'
                }
            >
                Nos ateliers
            </h2>

            <div className={'grid md:grid-cols-3 gap-5'}>
                {prices
                    .sort((a, b) => a.order - b.order)
                    .map((data) => (
                        <Price key={data._id} data={data} />
                    ))}
            </div>
        </section>
    );
}

function Price({ data }: { data: PriceModel }) {
    const blockStyle = clsx(
        'relative flex flex-col items-center gap-8 px-10 py-12 rounded-xl shadow-xl',
        data.recommended ? 'bg-lagoon text-white' : 'bg-white',
    );

    return (
        <div className={blockStyle}>
            {!!data.recommended && (
                <p
                    className={
                        'max-md:hidden absolute -top-4 -translate-y-full font-bold text-lagoon text-xl'
                    }
                >
                    Recommandé !
                </p>
            )}
            <h3 className={'font-semibold text-xl'}>{data.name}</h3>
            {typeof data.amount !== 'undefined' && (
                <p className={'font-semibold text-7xl'}>{data.amount}€</p>
            )}
            <div
                className={clsx(
                    '[&>ul]:list-disc',
                    !data.recommended && 'text-dark',
                )}
            >
                <CustomPortableText value={data.description} />
            </div>
            <Link to={'/nos-solutions'} className={'underline cursor-pointer'}>
                En savoir plus
            </Link>
        </div>
    );
}
