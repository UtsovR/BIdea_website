import { createFileRoute } from '@tanstack/react-router';
import { QuoteForm } from '@/components/forms/quote-form';
import { PageHero } from '@/components/site/primitives';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/request-quote')({ component: QuotePage, head: () => pageHead('Request a Quote', 'Plan your display, signage or advertising project with B.Idea through a guided WhatsApp enquiry.', '/request-quote') });
function QuotePage() { return <><PageHero eyebrow="YOUR VISION / OUR NEXT CONVERSATION" title="Let’s build your next big impression." description="A few details today. A clearer direction tomorrow. Tell us about your project and start a conversation with B.Idea." compact/><QuoteForm/></>; }
