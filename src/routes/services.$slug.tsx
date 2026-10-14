import { createFileRoute, notFound } from '@tanstack/react-router';
import { ServiceDetail } from '@/components/site/details';
import { services, pageHead } from '@/data/content';
export const Route = createFileRoute('/services/$slug')({
 loader: ({ params }) => { const item = services.find(p => p.slug === params.slug); if (!item) throw notFound(); return item; },
 component: Detail,
 head: ({ loaderData, params }) => loaderData ? pageHead(loaderData.name, loaderData.description, `/services/${params.slug}`) : { ...pageHead('Unavailable', 'This B.Idea page is unavailable.', `/services/${params.slug}`), meta: [...pageHead('Unavailable', 'This B.Idea page is unavailable.', `/services/${params.slug}`).meta, { name:'robots', content:'noindex' }] },
});
function Detail() { const item = Route.useLoaderData(); return <ServiceDetail service={item}/>; }
