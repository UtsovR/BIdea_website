# B.Idea frontend handoff

## Local development
Install with `bun install`, run `bun run dev`, test with `bun run test`, and build with `bun run build`. TanStack Start provides React, TypeScript, Vite, SSR-capable public routes and automatic route splitting. The platform router replaces the requested React Router; no second router is installed.

## Content and assets
- Company facts, navigation and image imports are centralised in `src/data/content.ts`.
- Set `company.logo` to an official imported image URL to replace the temporary shared wordmark. Derive and replace `public/favicon.svg` from the approved official logo at the same time.
- Replace image imports in `images` and product/project entries with approved local assets. Use meaningful alt text, reserved dimensions and compressed WebP/AVIF renditions.
- Every current project and advertising location is explicitly a demonstration. Replace them only with verified information and approved photographs. Do not remove demonstration labels until entries are verified.
- The about portrait and testimonial content await client approval. Email, GST, social accounts and precise map coordinates are deliberately unpublished.
- Sitewide palette, typography and responsive styling are centralised in `src/styles.css`.
- The hero uses a reliable image poster. A later video can be inserted beneath the existing shade/content layers with muted, playsInline, loop, poster and reduced-motion/data-saving checks.

## Future integrations (not implemented)
Forms validate using Zod and React Hook Form and open a prefilled WhatsApp message. They do not send or store a website enquiry. `src/lib/enquiry.ts` is the boundary to extend with a future validated submission adapter. If adding a backend, apply the same schemas server-side, add database access controls, abuse protection, consent and truthful delivery/error states. Product/project/resource loaders currently read static typed data; replace the data access boundary when APIs are ready. No authentication, admin, payments, bookings or availability confirmation exist.

## Publication preparation
Approve official imagery, portrait, testimonials and final legal policies; confirm business details and any technical values. Relative canonicals and Open Graph page URLs follow the published host. No relative image URL is misrepresented as an absolute social image. `src/data/sitemap.ts` provides the full list of public paths; generate an XML sitemap against the confirmed domain at publication and add it to robots.txt. Do not claim benchmark scores until actual performance measurements are run.
