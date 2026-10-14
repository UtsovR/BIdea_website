import { createFileRoute } from '@tanstack/react-router';
import { NotFoundPage } from '@/components/site/business-pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/$')({ component: NotFoundPage, head: () => ({ ...pageHead('Page Not Found', 'The B.Idea page you requested could not be found.', '/'), meta: [...pageHead('Page Not Found', 'The B.Idea page you requested could not be found.', '/').meta, {name:'robots',content:'noindex'}] }) });
