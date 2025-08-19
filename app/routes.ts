import {
    index,
    layout,
    type RouteConfig,
    route,
} from '@react-router/dev/routes';

export default [
    layout('common/ui/layout/Layout.tsx', [
        index('routes/home/home.tsx'),
        route('/contact', 'routes/contact/contact.tsx'),
    ]),
    route('studio/*', 'routes/studio/studio.tsx'),
] satisfies RouteConfig;
