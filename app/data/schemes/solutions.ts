import { defineType } from 'sanity';
import { articleFields } from '~/data/schemes/common/articles';

export default defineType({
    name: 'solutions',
    title: 'Solutions',
    type: 'document',
    fields: articleFields,
});
