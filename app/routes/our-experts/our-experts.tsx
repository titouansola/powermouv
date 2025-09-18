import { PortableText } from '@portabletext/react';
import { useLoaderData } from 'react-router';
import { urlFor } from '~/common/utils/image';
import type { PeopleModel } from '~/data/models/people-model';
import { getPeople } from '~/data/queries/people';

export async function loader() {
    return getPeople();
}

export default function OurExperts() {
    const people = useLoaderData<typeof loader>();

    return (
        <>
            <section className={'centered-section mt-20 mb-30'}>
                <h1 className={'text-4xl text-center font-bold mb-20'}>
                    Rencontrez notre équipe !
                </h1>
                <div
                    className={
                        'flex max-md:flex-col max-md:gap-8 justify-around mb-20'
                    }
                >
                    <People people={people} highlight />
                </div>
                <div
                    className={
                        'flex max-md:flex-col max-md:gap-8 justify-around'
                    }
                >
                    <People people={people} />
                </div>
            </section>
        </>
    );
}

function People({
    people,
    highlight,
}: {
    people: PeopleModel[];
    highlight?: boolean;
}) {
    return people
        .filter(({ highlighted }) => highlighted === highlight)
        .map((person) => (
            <div
                key={person._id}
                className={
                    'flex flex-col items-center w-[350px] max-w-full bg-white shadow-xl'
                }
            >
                <div className={'relative w-full h-[400px]'}>
                    <img
                        src={urlFor(person.image).url()}
                        className={'object-cover w-full h-full'}
                        alt={person.image.alt}
                    />
                    <div
                        className={
                            'absolute -bottom-2 translate-y-1/2 left-1/2 -translate-x-1/2'
                        }
                    >
                        <h2
                            className={
                                'py-2 px-6 mb-1 bg-lagoon-pastel text-xl text-white font-bold whitespace-nowrap'
                            }
                        >
                            {person.name}
                        </h2>
                        <p
                            className={
                                'text-center text-gray-500 italic whitespace-nowrap'
                            }
                        >
                            {person.job}
                        </p>
                    </div>
                </div>
                <div className={'mt-6 p-8 text-dark text-sm'}>
                    <PortableText value={person.description} />
                </div>
            </div>
        ));
}
