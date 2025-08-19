import { defineType } from 'sanity';

export default defineType({
    name: 'qna',
    title: 'Foire aux questions',
    type: 'document',
    fields: [
        {
            name: 'question',
            type: 'string',
            title: 'Question',
        },
        {
            name: 'answer',
            type: 'string',
            title: 'Réponse',
        },
    ],
});
