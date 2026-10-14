import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/site/business-pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/about')({ component: AboutPage, head: () => pageHead('About B.Idea', 'Get to know B.Idea, a Kolkata-based display, signage and commercial branding business.', '/about') });
