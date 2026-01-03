import { defineType } from 'sanity';

export default defineType({
    name: 'socials',
    title: 'Réseaux sociaux',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nom',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Lien',
            type: 'string',
        },
    ],
});
