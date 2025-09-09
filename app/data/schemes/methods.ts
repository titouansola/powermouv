import { defineType } from 'sanity';
import { articleFields } from '~/data/schemes/common/articles';

export default defineType({
    name: 'methods',
    title: 'Méthodes',
    type: 'document',
    fields: articleFields,
});
