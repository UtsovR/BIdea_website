import { createFileRoute } from '@tanstack/react-router';
import { ProductsPage } from '@/components/site/catalogues';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/products/')({ component: ProductsPage, head: () => pageHead('LED Displays & Signage Products', 'Explore outdoor LED displays, video walls, illuminated signage and customised lettering from B.Idea.', '/products') });
