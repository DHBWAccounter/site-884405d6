# Quick Start Guide

Get the Bitcoin Association Switzerland website clone running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- pnpm 9.15.4+ installed

## Installation & Setup

1. **Clone or download the project**
   ```bash
   cd bitcoin-association-switzerland
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Project Overview

### What's Included
- ✅ 16 fully functional pages
- ✅ Responsive navigation with dropdowns
- ✅ Mobile hamburger menu
- ✅ Hero section with background image
- ✅ Mission statement section
- ✅ About and Join sections
- ✅ Footer with social links
- ✅ SEO optimized (sitemap, robots.txt)
- ✅ TypeScript strict mode
- ✅ Tailwind CSS styling

### Pages
- `/` - Homepage
- `/about-1` - About us
- `/contact-1` - Contact
- `/meetups-events` - Events listing
- `/roadshow-2025` - Roadshow events
- `/private` - Private membership
- `/corporate` - Corporate membership
- `/our-corporate-members` - Corporate members
- `/board` - Board of directors
- `/finances` - Financial transparency
- `/statutes` - Association statutes
- `/media-kit` - Media resources
- `/bitcoin-association-switzerland` - News
- `/archive` - News archive
- `/privacy` - Privacy policy
- `/terms` - Terms & conditions

## Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#3D9991",  // Change this
    light: "#4DA8A0",
    dark: "#2D7A73",
  },
  dark: {
    DEFAULT: "#1F1F1F",  // Change this
    light: "#2F2F2F",
  },
}
```

### Change Fonts
Edit `app/layout.tsx` to use different Google Fonts.

### Update Content
Edit the page files in `app/` directory to update text content.

### Add New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Export a default component

### Update Navigation
Edit `components/header.tsx` to add/remove navigation links.

## Common Tasks

### Add a New Image
1. Place image in `public/` folder or use external URL
2. Use Next.js Image component:
   ```tsx
   <Image
     src="/your-image.jpg"
     alt="Description"
     width={600}
     height={400}
   />
   ```

### Update Social Links
Edit `components/footer.tsx` social links section.

### Add External Domain for Images
Edit `next.config.js`:
```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-domain.com',
    },
  ],
}
```

## Development

### File Structure
```
app/              # Pages and layouts
components/       # Reusable components
lib/             # Utility functions
public/          # Static assets
```

### Styling
- Use Tailwind CSS classes
- Custom styles in `app/globals.css`
- Component-specific styles using Tailwind

### TypeScript
- Strict mode enabled
- Type checking on build
- Use `any` sparingly

## Build & Deploy

### Build for Production
```bash
pnpm build
```

### Test Production Build
```bash
pnpm start
```

### Deploy to Vercel
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

See `DEPLOYMENT.md` for detailed deployment instructions.

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
pnpm dev -- -p 3001
```

### Module Not Found
```bash
rm -rf node_modules .next
pnpm install
```

### Build Errors
- Check TypeScript errors: `pnpm build`
- Fix any type errors
- Ensure all imports are correct

### Images Not Loading
- Check `next.config.js` for domain whitelist
- Verify image URLs are correct
- Check image dimensions are provided

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **lucide-react Icons**: https://lucide.dev/icons
- **TypeScript**: https://www.typescriptlang.org/docs

## Support

For issues or questions:
1. Check the README.md
2. Review DEPLOYMENT.md
3. Check Next.js documentation
4. Review project issues

## Next Steps

1. Customize the content for your needs
2. Add your own images and branding
3. Update navigation links
4. Deploy to your hosting platform
5. Set up custom domain

Happy coding! 🚀
