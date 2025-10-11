import { defineType } from 'sanity';

export default defineType({
    name: 'pages',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'tag',
            title: 'Tag',
            type: 'string',
            description: 'Ne pas modifier !',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
    ],
});
