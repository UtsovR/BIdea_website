<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## B.Idea frontend architecture
- Use TanStack Start file routes and its built-in route splitting; this preserves the platform router and SSR rather than introducing a second router.
- Keep typed local content and company/navigation configuration in `src/data`, separate from reusable presentation templates; future content APIs can replace the local source without rewriting pages.
- Keep enquiry schemas, message formatting and WhatsApp handoff in `src/lib/enquiry.ts`; no backend or persistence is implemented and no successful delivery may be claimed.
- Use semantic OKLCH tokens and reusable site styles in `src/styles.css`; the design must remain centrally themeable.
- The shared Header, Footer and contact action live in the root shell; the Logo reads a single company logo setting to simplify official asset replacement.
- Dynamic content route loaders read browser-safe static content only; adding network or protected server logic requires a separate reviewed integration.

- Catalogue families use an Outlet-only parent, an index overview and a dynamic detail sibling; this prevents catalogue content from replacing detail views.
