import { products, services, projects, posts } from './content';
// Resolve paths against the verified published origin when generating a production sitemap.
export const sitemapPaths = ['/', '/about', '/products', '/services', '/advertising', '/projects', '/industries', '/contact', '/request-quote', '/resources', '/privacy-policy', '/terms', ...products.map(p=>`/products/${p.slug}`), ...services.map(s=>`/services/${s.slug}`), ...projects.map(p=>`/projects/${p.slug}`), ...posts.map(p=>`/resources/${p.slug}`)];
