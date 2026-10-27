import { createFileRoute, notFound } from '@tanstack/react-router';
import { ProductDetail } from '@/components/site/details';
import { products, pageHead } from '@/data/content';
export const Route = createFileRoute('/products/$slug')({
 loader: ({ params }) => { const item = products.find(p => p.slug === params.slug); if (!item) throw notFound(); return item; },
 component: Detail,
 head: ({ loaderData, params }) => loaderData ? pageHead(loaderData.name, loaderData.description, `/products/${params.slug}`, 'website', loaderData.image) : { ...pageHead('Unavailable', 'This B.Idea page is unavailable.', `/products/${params.slug}`), meta: [...pageHead('Unavailable', 'This B.Idea page is unavailable.', `/products/${params.slug}`).meta, { name:'robots', content:'noindex' }] },
});
function Detail() { const item = Route.useLoaderData(); return <ProductDetail product={item}/>; }
