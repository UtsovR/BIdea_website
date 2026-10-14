import { createFileRoute, notFound } from '@tanstack/react-router';
import { ProjectDetail } from '@/components/site/details';
import { projects, pageHead } from '@/data/content';
export const Route = createFileRoute('/projects/$slug')({
 loader: ({ params }) => { const item = projects.find(p => p.slug === params.slug); if (!item) throw notFound(); return item; },
 component: Detail,
 head: ({ loaderData, params }) => loaderData ? pageHead(loaderData.name, loaderData.description, `/projects/${params.slug}`) : { ...pageHead('Unavailable', 'This B.Idea page is unavailable.', `/projects/${params.slug}`), meta: [...pageHead('Unavailable', 'This B.Idea page is unavailable.', `/projects/${params.slug}`).meta, { name:'robots', content:'noindex' }] },
});
function Detail() { const item = Route.useLoaderData(); return <ProjectDetail project={item}/>; }
