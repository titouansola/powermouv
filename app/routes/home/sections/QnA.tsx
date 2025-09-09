import { Plus } from '~/common/components/icons/Plus';
import type { QnaModel } from '~/data/models/qna-model';
import { useLandingPageData } from '~/routes/home/home';

export function QnA() {
    const { qna } = useLandingPageData();

    return (
        <section className={'centered-section px-base-2 mb-base-3'}>
            <h2
                className={
                    'font-semibold text-3xl md:text-5xl text-center mb-20'
                }
            >
                Une question ? Nous avons peut-être déjà la réponse !
            </h2>

            <div className={'flex flex-col gap-5'}>
                {qna.map((data) => (
                    <QuestionBlock key={data._id} data={data} />
                ))}
            </div>
        </section>
    );
}

function QuestionBlock({ data }: { data: QnaModel }) {
    return (
        <details
            className={'pb-8 bg-white rounded-xl shadow-xl cursor-pointer'}
        >
            <summary
                className={
                    'flex items-center justify-between gap-5 px-8 pt-8 font-semibold text-lg list-none'
                }
            >
                <span>{data.question}</span>
                <Plus />
            </summary>
            <p className={'px-8 text-dark'}>{data.answer}</p>
        </details>
    );
}
