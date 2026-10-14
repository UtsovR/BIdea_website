import { createFileRoute } from '@tanstack/react-router';
import { ProjectsPage } from '@/components/site/catalogues';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/projects/')({ component: ProjectsPage, head: () => pageHead('Project Concepts & Visual Possibilities', 'Explore clearly labelled demonstration concepts for LED installations, commercial signage and architectural branding.', '/projects') });
