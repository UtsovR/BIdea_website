import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/site/business-pages';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/privacy-policy')({ component: Page, head: () => pageHead('Privacy Policy', 'B.Idea website privacy policy, enquiry handling and demonstration content information.', '/privacy-policy') });
function Page() { return <LegalPage type="privacy"/>; }
