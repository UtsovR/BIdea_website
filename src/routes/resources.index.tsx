import { createFileRoute } from '@tanstack/react-router';
import { ResourcesPage } from '@/components/site/catalogues';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/resources/')({ component: ResourcesPage, head: () => pageHead('Display & Signage Resources', 'Practical introductory guides to LED screens, pixel pitch, materials and commercial signage.', '/resources') });
