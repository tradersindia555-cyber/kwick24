# Kwick24 Services

Premium on-demand service marketplace built with Next.js, inspired by Urban Company's clean UX with a luxury black-and-gold brand identity.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Swiper.js**
- **Lucide React**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── page.tsx            # Homepage
│   ├── login/              # Auth UI
│   ├── signup/
│   ├── services/[slug]/    # Service detail pages
│   ├── worker-dashboard/   # Worker dashboard
│   ├── admin-dashboard/    # Admin dashboard
│   └── partner/            # Partner signup
├── components/
│   ├── home/               # Homepage sections
│   ├── layout/             # Header, Footer, Loading
│   ├── ui/                 # Reusable UI primitives
│   ├── booking/            # Booking modal
│   └── dashboard/          # Dashboard sidebar
├── context/                # Booking context (API-ready)
├── lib/data/               # Demo data
└── types/                  # TypeScript interfaces
```

## Brand Colors

| Token | Value |
|-------|-------|
| Gold | `#D4AF37` |
| Black | `#0A0A0A` |

## Custom Logo

Replace `public/image.png` with your uploaded Kwick24 logo to use your brand asset.

## Build

```bash
npm run build
npm start
```
