import { useLoaderData } from 'react-router';
import { getLandingPage } from '~/data/queries/landing-page';
import { Benefits } from '~/routes/home/sections/Benefits';
import { Hero } from '~/routes/home/sections/Hero';
import { Prices } from '~/routes/home/sections/Prices';
import { QnA } from '~/routes/home/sections/QnA';
import { UniqueValuePropositions } from '~/routes/home/sections/UniqueValuePropositions';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'POWERMOUV' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export async function loader() {
    return getLandingPage();
}

type LandingPageLoader = typeof loader;

export const useLandingPageData = useLoaderData<LandingPageLoader>;

export default function Home() {
    return (
        <>
            <Hero />
            <UniqueValuePropositions />
            <Benefits />
            <Prices />
            <QnA />
        </>
    );
}
