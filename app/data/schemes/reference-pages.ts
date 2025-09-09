import { defineType } from 'sanity';

export default defineType({
    name: 'reference-pages',
    title: 'Pages de référence',
    type: 'document',
    hidden: ({ currentUser }) => {
        return !currentUser?.roles.find(({ name }) => name === 'administrator');
    },
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL',
            validation: (Rule) => Rule.required(),
        },
    ],
});
