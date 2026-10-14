import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/site/business-pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/contact')({ component: ContactPage, head: () => pageHead('Contact B.Idea in Kolkata', 'Contact Hakim Mondal at B.Idea in Golf Green, Kolkata for LED displays, signage and visual advertising enquiries.', '/contact') });
