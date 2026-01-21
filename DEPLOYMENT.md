# Deployment Guide

This guide covers deploying the Bitcoin Association Switzerland website clone to Vercel.

## Prerequisites

- A Vercel account (free tier works)
- GitHub repository with the project code
- pnpm installed locally

## Deploying to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **Configure Environment Variables (if needed)**
   - Go to Project Settings > Environment Variables
   - Add any required environment variables

### Option 2: Via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Important Notes

### Package Manager
This project uses `pnpm@9.15.4` as specified in `package.json`. Vercel will automatically detect and use pnpm for deployment.

### Next.js Version
The project uses Next.js 15.5.9, which includes important security fixes. Do not downgrade.

### React 19 Compatibility
All dependencies are configured for React 19 compatibility:
- lucide-react@^0.469.0+
- @radix-ui/* packages at latest versions
- class-variance-authority@^0.7.0+
- clsx@^2.1.0+
- tailwind-merge@^2.6.0+

### Image Optimization
The `next.config.js` is configured to allow images from:
- images.squarespace-cdn.com
- yt3.ggpht.com

Add additional domains if needed:
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

## Custom Domain

To use a custom domain:

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your domain (e.g., bitcoinassociation.ch)
4. Update DNS records as instructed by Vercel

## Environment Variables

Currently, no environment variables are required. If you add features that need them:

1. Add them in Vercel Dashboard > Settings > Environment Variables
2. Add them to a `.env.local` file for local development (not committed to git)

## Monitoring

After deployment:

- Check the Vercel dashboard for build logs
- Monitor performance with Vercel Analytics (optional)
- Set up error tracking if needed

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify TypeScript errors are resolved locally

### Images Not Loading
- Verify domains are in `next.config.js` remotePatterns
- Check image URLs are correct
- Ensure images are accessible (not behind auth)

### Fonts Not Loading
- Verify Google Fonts are properly configured in `layout.tsx`
- Check network tab for font loading errors

## Performance Optimization

The site is already optimized with:
- Next.js Image component for automatic optimization
- Font optimization with next/font
- Static generation where possible
- Tailwind CSS for minimal CSS bundle

For additional optimization:
- Enable Vercel Analytics
- Consider adding a CDN for static assets
- Implement caching strategies for API routes

## Updates

To update the site after deployment:

1. Make changes locally
2. Test with `pnpm dev`
3. Commit and push to GitHub
4. Vercel will automatically redeploy

## Support

For issues:
- Check Vercel documentation: https://vercel.com/docs
- Review Next.js docs: https://nextjs.org/docs
- Check project issues on GitHub
