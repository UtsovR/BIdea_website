import { QueryClient } from '@tanstack/react-query';
import { createRouter, rootRouteId } from '@tanstack/react-router';
import { describe, expect, it } from 'vitest';
import { routeTree } from '@/routeTree.gen';
import { products, services, projects, posts } from '@/data/content';
const router = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });
describe('B.Idea public routing', () => {
 it.each(['/', '/about', '/products', '/services', '/advertising', '/projects', '/industries', '/contact', '/request-quote', '/resources', '/privacy-policy', '/terms'])('matches the public page %s', path => { const matches=router().matchRoutes(path); expect(matches.at(-1)?.routeId).not.toBe(rootRouteId); expect(matches.at(-1)?.routeId).not.toBe('/$'); });
 it.each([...products.map(p=>['products',p.slug]), ...services.map(p=>['services',p.slug]), ...projects.map(p=>['projects',p.slug]), ...posts.map(p=>['resources',p.slug])])('matches %s detail %s instead of catalogue content', (category,slug) => { const matches=router().matchRoutes(`/${category}/${slug}`); expect(matches.at(-1)?.routeId).toBe(`/${category}/$slug`); });
 it('matches the custom unknown-page view',()=>{expect(router().matchRoutes('/not-a-real-page').at(-1)?.routeId).toBe('/$');});
});
