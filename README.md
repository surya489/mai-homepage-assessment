# MAI Homepage Assessment

A pixel-accurate replication of the [myproject.ai](https://www.myproject.ai/) homepage built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**-style animations (CSS keyframes + scroll-triggered transitions).

## Features

- Full homepage with all sections from the live site
- Hero video background with typewriter animation
- Infinite service category marquee
- Animated MAI Toolkit cards (dashboard chart, postcode map, AI writing demo)
- Scroll-triggered process steps with progress line
- Project cards, trader carousel, blog carousel
- Stone offcuts form with localStorage/sessionStorage submission + success state
- Testimonial cards with staggered entrance animations
- Responsive layout (mobile, tablet, desktop)
- Component-based architecture

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | App Router, SSR, Image optimization |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Installed (scroll/transition animations use CSS + Intersection Observer) |

## Fonts (matched from live site)

- **Montserrat** — primary body/UI font
- **Unbounded** — accent headings
- **Average** — serif accents
- **Bakbak One** — display accents

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + Montserrat font
│   ├── page.tsx            # Homepage composition
│   └── globals.css         # Tailwind + custom animations
├── components/
│   ├── cards/              # Reusable card components
│   ├── layout/             # Footer
│   ├── sections/           # Page sections
│   └── ui/                 # Shared UI (Typewriter, AnimatedSection, etc.)
├── data/                   # Mock data (services, projects, testimonials, etc.)
├── hooks/                  # useInView scroll trigger
└── lib/                    # Constants, utilities
```

## Form Behavior

The **Stone Offcuts** form stores submissions in `sessionStorage` under the key `mai-stone-offcut-submissions`. On submit, a success state is shown. No backend API is connected (assessment scope).

## Assets

Images and video are loaded from the production CDN (`d2iyhd3v3rvz2k.cloudfront.net`). Run the download script to cache locally:

```bash
node scripts/download-assets.js
```

## Deployment

Deploy to Vercel or any Node.js host:

```bash
npm run build
```

## Assessment Notes

- Buttons and links are UI-only unless noted (form submit stores locally)
- Navbar omitted per scope (homepage content focus)
- 3-day build timeline; further refinements (auth, search, AI backend) out of initial scope

## License

Private — technical assessment project.
