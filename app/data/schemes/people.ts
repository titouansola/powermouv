import { defineType } from 'sanity';

export default defineType({
    name: 'people',
    title: 'Personnes',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Prénom, nom',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'job',
            type: 'string',
            title: 'Fonction',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            title: 'Photo',
            validation: (Rule) => Rule.required(),
            fields: [
                {
                    name: 'alt',
                    title: 'Texte alternatif',
                    type: 'string',
                },
            ],
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'highlighted',
            type: 'boolean',
            title: 'Mettre en avant',
        },
    ],
});
