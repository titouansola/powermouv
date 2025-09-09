import { Link } from 'react-router';
import { urlFor } from '~/common/utils/image';
import type { LightArticleModel } from '~/data/models/article-model';

export function ArticleList({ articles }: { articles: LightArticleModel[] }) {
    return (
        <section className={'centered-section my-30'}>
            <h2 className={'text-4xl text-center font-bold mb-10'}>
                Consultez nos articles !
            </h2>

            <div
                className={
                    'flex flex-col items-center gap-5 mx-auto w-2/3 min-w-80'
                }
            >
                {articles.map((article) => (
                    <Link
                        key={article._id}
                        to={article.url}
                        className={
                            'w-full bg-white rounded-xl shadow-xl cursor-pointer transition-all hover:scale-105 overflow-hidden'
                        }
                    >
                        <img
                            src={urlFor(article.image).url()}
                            className={'object-cover w-full h-96'}
                            alt={article.image.alt}
                        />
                        <div className={'p-8'}>
                            <h3 className={'text-xl font-semibold mb-4'}>
                                {article.title}
                            </h3>
                            <p className={'text-dark'}>{article.content}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
