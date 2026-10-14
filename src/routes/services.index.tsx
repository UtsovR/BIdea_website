import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/site/catalogues';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/services/')({ component: ServicesPage, head: () => pageHead('Display & Signage Services', 'Explore B.Idea display solutions, signage fabrication, installation planning and visual advertising support.', '/services') });
