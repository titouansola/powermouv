import type { FieldDefinition } from 'sanity';

export const articleFields: FieldDefinition[] = [
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
        options: {
            source: 'title',
        },
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'image',
        type: 'image',
        title: 'Image',
        fields: [
            {
                name: 'alt',
                title: 'Texte alternatif',
                type: 'string',
            },
        ],
        validation: (Rule) => Rule.required(),
    },
    {
        name: 'content',
        type: 'array',
        title: 'Contenu',
        of: [{ type: 'block' }, { type: 'image' }],
        validation: (Rule) => Rule.required(),
    },
];
