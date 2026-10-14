import { createFileRoute } from '@tanstack/react-router';
import { AdvertisingPage } from '@/components/site/business-pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/advertising')({ component: AdvertisingPage, head: () => pageHead('Visual Advertising Solutions', 'Explore display-led advertising concepts and plan a commercial campaign with B.Idea.', '/advertising') });
