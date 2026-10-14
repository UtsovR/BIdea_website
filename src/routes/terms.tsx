import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/site/business-pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/terms')({ component: Page, head: () => pageHead('Terms of Use', 'B.Idea website terms of use, enquiry handling and demonstration content information.', '/terms') });
function Page() { return <LegalPage type="terms"/>; }
