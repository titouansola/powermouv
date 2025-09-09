import { index, type RouteConfig, route } from '@react-router/dev/routes';

export default [
    index('routes/tmp.tsx'),
    // layout('common/components/layout/Layout.tsx', [
    //     index('routes/home/home.tsx'),
    //
    //     route('notre-methode', 'routes/our-method/our-method.tsx'),
    //     route('notre-methode/:slug', 'routes/common/article.tsx', {
    //         id: 'methode-article',
    //     }),
    //
    //     route('nos-solutions', 'routes/our-solutions/our-solutions.tsx'),
    //     route('nos-solutions/:slug', 'routes/common/article.tsx', {
    //         id: 'solution-article',
    //     }),
    //
    //     route('nos-experts', 'routes/our-experts/our-experts.tsx'),
    //
    //     route('contact', 'routes/contact/contact.tsx'),
    //     //
    //     route('mentions-legales', 'routes/legals/legals.tsx'),
    //     route(
    //         'politique-de-confidentialite',
    //         'routes/privacy-policy/privacy-policy.tsx',
    //     ),
    // ]),
    route('studio/*', 'routes/studio/studio.tsx'),
] satisfies RouteConfig;
