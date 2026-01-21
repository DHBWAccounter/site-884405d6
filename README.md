# Bitcoin Association Switzerland Website Clone

A Next.js clone of the Bitcoin Association Switzerland website (https://www.bitcoinassociation.ch).

## Tech Stack

- **Next.js 15.5.9** - React framework with App Router
- **React 19.0.3** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **lucide-react 0.469.0+** - Icon library (React 19 compatible)
- **shadcn/ui** - Reusable UI components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm 9.15.4+ installed

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── header.tsx          # Navigation header with dropdowns
│   ├── hero.tsx            # Hero section with background image
│   ├── mission.tsx         # Mission statement section
│   ├── about-section.tsx   # About section with image
│   ├── join-section.tsx    # Join/CTA section
│   └── footer.tsx          # Footer with social links
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── public/                 # Static assets
└── [config files]          # Next.js, TypeScript, Tailwind configs
```

## Features

- **Responsive Design**: Mobile-first approach with hamburger menu
- **Navigation**: Multi-level dropdown menus for desktop and mobile
- **Typography**: Proxima Nova and Adobe Garamond Pro fonts
- **Color Scheme**: Custom teal (#3D9991) and dark (#1F1F1F) colors
- **Images**: Optimized with Next.js Image component
- **Smooth Scrolling**: CSS smooth scroll behavior
- **Social Links**: Meetup, YouTube, and X (Twitter) integration

## Branding

### Colors
- Primary: `#3D9991` (Teal)
- Dark: `#1F1F1F` (Dark Gray)
- Background: White
- Text: Dark Gray

### Fonts
- **Proxima Nova**: Sans-serif for body text and UI elements
- **Adobe Garamond Pro**: Serif for headings

## Pages

The homepage includes:
- Hero section with background image
- Mission statement
- About section with call-to-action
- Join/Participate section
- Footer with social links and legal information

## Deployment

This project is configured for Vercel deployment with `pnpm@9.15.4` as the package manager.

## License

This is a clone project for educational purposes.
