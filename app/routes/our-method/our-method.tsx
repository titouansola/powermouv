import { useLoaderData } from 'react-router';
import { getArticles } from '~/data/queries/articles';
import { getPage } from '~/data/queries/pages';
import { Page } from '~/routes/common/page';

export async function loader() {
    return {
        page: await getPage('method'),
        articles: await getArticles('methods'),
    };
}

export default function OurMethod() {
    const data = useLoaderData<typeof loader>();
    return <Page {...data} />;
}
