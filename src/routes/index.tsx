import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/site/home';
import { pageHead, company } from '@/data/content';
export const Route = createFileRoute('/')({ component: HomePage, head: () => ({ ...pageHead('Where Brands Become Unmissable', 'B.Idea provides LED displays, illuminated signage and commercial visual advertising solutions in Kolkata. Explore possibilities for your brand.', '/'), scripts: [{ type:'application/ld+json', children:JSON.stringify({ '@context':'https://schema.org', '@type':'LocalBusiness', name:company.name, telephone:company.phone, address:{ '@type':'PostalAddress', streetAddress:'Golf Green Daily Market', addressLocality:'Kolkata', postalCode:'700095', addressRegion:'West Bengal', addressCountry:'IN' } }) }] }) });
