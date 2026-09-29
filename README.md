# Flight Travel Assistance

An independent travel assistance website providing flight information, booking help, and phone-based travel support. Built with Next.js, TypeScript, and Tailwind CSS.

## Important Disclaimer

This is an **independent travel assistance service**. It is not affiliated with, endorsed by, sponsored by, or operated by Delta Air Lines or any other airline. Airline names and trademarks belong to their respective owners.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Rendering:** Static Generation (SSG) where possible
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd flight-travel-assistance

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Production URL for canonical tags and sitemap | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID | No |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID | No |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads conversion tracking ID | No |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── [slug]/            # Dynamic article pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── delta-airlines/    # Delta category pages
│   ├── airline-comparisons/ # Comparison category
│   ├── travel-guides/     # Travel guides hub
│   ├── search/            # Site search
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   └── rss.xml/           # RSS feed
├── components/
│   ├── layout/            # Header, Footer, Sidebar, Mobile CTA
│   ├── sections/          # Hero, Service Cards, How It Works, CTA
│   ├── ui/                # Phone CTA, Breadcrumbs, FAQ, Search, etc.
│   └── seo/               # Schema markup components
├── data/
│   ├── articles/          # Article content data files (89 articles)
│   ├── airlines.ts        # Multi-airline data structure
│   └── internal-links.ts  # Internal link graph
├── lib/
│   ├── config.ts          # Site configuration (phone, brand, nav)
│   ├── analytics.ts       # Analytics abstraction layer
│   └── articles.ts        # Article data access functions
└── types/
    └── index.ts           # TypeScript type definitions
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run validate:seo` | Run SEO validation checks |

## SEO Validation

The SEO validator checks:

- All 89 article routes exist
- Every article has exactly 4 contextual internal links
- All internal links resolve to existing articles
- No self-links or orphan pages
- Unique metadata (titles, descriptions)
- Correct phone numbers in all tel: links
- No exposed Ringba dashboard URLs
- Required static files (sitemap, robots, RSS)

```bash
npm run validate:seo
```

## Adding Articles

1. Create a new file in `src/data/articles/` following the Article type structure
2. Update `src/data/internal-links.ts` to include the new article
3. Ensure 4 contextual internal links to/from the new article
4. Run `npm run validate:seo` to verify

## Phone Number Configuration

The business phone number is centralized in `src/lib/config.ts`:

```typescript
export const SITE_CONFIG = {
  phoneNumber: "+1 725 765 9837",
  phoneHref: "tel:+17257659837",
  // ...
}
```

To change the phone number, update only this file.

## Multi-Airline Architecture

The codebase is designed to support multiple airlines. The `Airline` type and `airlines` data structure in `src/data/airlines.ts` support:

- Delta Air Lines (current)
- American Airlines
- United Airlines
- JetBlue Airways
- Alaska Airlines
- Southwest Airlines
- Frontier Airlines
- Spirit Airlines
- Hawaiian Airlines
- Allegiant Air

To add a new airline, create a new data entry in `airlines.ts` and corresponding article data files.

## Deployment (Vercel)

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deploy

1. Push to GitHub
2. Import repository in Vercel dashboard
3. Set environment variables in Vercel project settings
4. Deploy

### Build Settings (Vercel)

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 95+ |
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

## License

Proprietary. All rights reserved.
