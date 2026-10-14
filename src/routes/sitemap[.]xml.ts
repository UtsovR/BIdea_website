import { createFileRoute } from '@tanstack/react-router';
import { absoluteUrl } from '@/data/content';
import { sitemapPaths } from '@/data/sitemap';

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () => {
        const urls = sitemapPaths
          .map((path) => `  <url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`)
          .join('\n');

        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
          {
            headers: {
              'content-type': 'application/xml; charset=utf-8',
              'cache-control': 'public, max-age=3600',
            },
          },
        );
      },
    },
  },
});

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[character] ?? character);
}
