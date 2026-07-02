# ParagraphCMS Astro Starter

Ten README jest krótką dokumentacją projektu ParagraphCMS dla przykładu Astro Starter. Projekt pokazuje podstawową integrację bloga: strona `/blog` pobiera listę wpisów z ParagraphCMS, a `/blog/[slug]` renderuje pojedynczy wpis przez `@paragraphcms/parser-react`.

Oficjalny kontekst: [ParagraphCMS Astro Quickstart](https://paragraphcms.com/docs/quickstart/astro).

## Konfiguracja

1. Skopiuj `.env.example` do `.env`.
2. Ustaw `PARAGRAPH_API_KEY` kluczem API z ParagraphCMS.
3. Wpisy powinny mieć slug, bo routing używa `requiredSlug: true`.

## Uruchomienie

```bash
pnpm install
pnpm dev
```

Build i podgląd produkcyjny:

```bash
pnpm build
pnpm preview
```

## Najważniejsze pliki

- `paragraph.config.ts` - wspólny klient ParagraphCMS.
- `src/pages/blog/index.astro` - lista wpisów.
- `src/pages/blog/[slug].astro` - statyczne strony wpisów.
- `src/components/blog/` - komponenty listy i pojedynczego wpisu.
