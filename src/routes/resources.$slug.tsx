import { createFileRoute, notFound } from '@tanstack/react-router';
import { ArticleDetail } from '@/components/site/details';
import { posts, pageHead } from '@/data/content';
export const Route = createFileRoute('/resources/$slug')({
 loader: ({ params }) => { const item = posts.find(p => p.slug === params.slug); if (!item) throw notFound(); return item; },
 component: Detail,
 head: ({ loaderData, params }) => loaderData ? pageHead(loaderData.title, loaderData.introduction, `/resources/${params.slug}`, 'article') : { ...pageHead('Unavailable', 'This B.Idea page is unavailable.', `/resources/${params.slug}`), meta: [...pageHead('Unavailable', 'This B.Idea page is unavailable.', `/resources/${params.slug}`).meta, { name:'robots', content:'noindex' }] },
});
function Detail() { const item = Route.useLoaderData(); return <ArticleDetail post={item}/>; }
