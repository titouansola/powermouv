import { defineType } from 'sanity';

export default defineType({
    name: 'prices',
    title: 'Ateliers',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Nom',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'amount',
            type: 'number',
            title: 'Tarif',
            description: 'Facultatif',
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'order',
            type: 'number',
            title: 'Ordre',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'recommended',
            type: 'boolean',
            title: 'Recommandée',
        },
    ],
});
