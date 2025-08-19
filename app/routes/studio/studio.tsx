import { defineConfig, Studio } from 'sanity';
import { structureTool } from 'sanity/structure';
import { types } from '~/data/schemes';

const config = defineConfig({
    name: 'powermouv',
    basePath: '/studio',
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    version: import.meta.env.VITE_SANITY_VERSION,
    plugins: [structureTool()],
    schema: {
        types,
    },
});

export default function StudioPage() {
    return <Studio config={config} />;
}
