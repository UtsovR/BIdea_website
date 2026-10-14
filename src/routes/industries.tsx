import { createFileRoute } from '@tanstack/react-router';
import { IndustriesPage } from '@/components/site/business-pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/industries')({ component: IndustriesPage, head: () => pageHead('Solutions by Industry', 'Discover display and signage possibilities for retail, hospitality, offices, events and commercial spaces.', '/industries') });
