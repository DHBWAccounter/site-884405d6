# Components Documentation

Complete documentation of all components used in the Bitcoin Association Switzerland website.

## Table of Contents
- [Layout Components](#layout-components)
- [Section Components](#section-components)
- [UI Components](#ui-components)
- [Utility Functions](#utility-functions)

---

## Layout Components

### Header (`components/header.tsx`)

The main navigation header with responsive design.

**Features:**
- Fixed position with backdrop blur
- Logo linking to home
- Desktop navigation with dropdown menus
- Mobile hamburger menu
- Active link highlighting
- Smooth hover transitions

**Props:**
None (stateful component)

**Usage:**
```tsx
import { Header } from "@/components/header";

export default function Page() {
  return (
    <>
      <Header />
      {/* Page content */}
    </>
  );
}
```

**Navigation Structure:**
- Home
- News (dropdown: News, Archive)
- Events (dropdown: Roadshow 2025, 5 Meetup groups)
- Membership (dropdown: Private, Corporate, Corporate Members)
- Participate (dropdown: Meetups & Events)
- About (dropdown: About, Board, Finances, Statutes, Media Kit, Contact)

---

### Footer (`components/footer.tsx`)

The site footer with social links and legal information.

**Features:**
- Dark background (#1F1F1F)
- Social media links (Meetup, YouTube, X)
- Back to top link
- Legal links (Privacy, Terms)
- Copyright notice

**Props:**
None

**Usage:**
```tsx
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      {/* Page content */}
      <Footer />
    </>
  );
}
```

---

## Section Components

### Hero (`components/hero.tsx`)

Full-width hero section with background image.

**Features:**
- Background image with overlay
- Centered text content
- Responsive typography
- 60vh minimum height

**Props:**
None

**Usage:**
```tsx
import { Hero } from "@/components/hero";

export default function Page() {
  return <Hero />;
}
```

**Customization:**
- Change background image URL
- Adjust height via CSS classes
- Modify overlay opacity

---

### Mission (`components/mission.tsx`)

Mission statement section with centered text.

**Features:**
- Centered content layout
- Two paragraphs of text
- Responsive typography
- White background

**Props:**
None

**Usage:**
```tsx
import { Mission } from "@/components/mission";

export default function Page() {
  return <Mission />;
}
```

---

### AboutSection (`components/about-section.tsx`)

About section with image and call-to-action.

**Features:**
- Two-column grid layout
- Image on left, content on right
- "Learn More" button
- Responsive (stacks on mobile)

**Props:**
None

**Usage:**
```tsx
import { AboutSection } from "@/components/about-section";

export default function Page() {
  return <AboutSection />;
}
```

---

### JoinSection (`components/join-section.tsx`)

Join/CTA section with image and button.

**Features:**
- Two-column grid layout
- Content on left, image on right
- "Find Out How" button
- Responsive (stacks on mobile)

**Props:**
None

**Usage:**
```tsx
import { JoinSection } from "@/components/join-section";

export default function Page() {
  return <JoinSection />;
}
```

---

## UI Components

### Button (`components/ui/button.tsx`)

Reusable button component with variants.

**Variants:**
- `default` - Primary style
- `destructive` - Destructive action
- `outline` - Outlined button
- `secondary` - Secondary style
- `ghost` - Ghost style
- `link` - Link style

**Sizes:**
- `default` - Standard size
- `sm` - Small button
- `lg` - Large button
- `icon` - Icon-only button

**Props:**
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}
```

**Usage:**
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="default">
  Click me
</Button>

<Button variant="outline" size="sm">
  Small button
</Button>
```

---

### Card (`components/ui/card.tsx`)

Card component for content grouping.

**Sub-components:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Description text
- `CardContent` - Main content
- `CardFooter` - Footer section

**Usage:**
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>
```

---

## Utility Functions

### cn (`lib/utils.ts`)

Utility function for merging Tailwind CSS classes.

**Purpose:**
Combines `clsx` and `tailwind-merge` to intelligently merge class names, removing duplicates and handling Tailwind conflicts.

**Usage:**
```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-class",
  isActive && "active-class",
  "another-class"
)} />
```

**Benefits:**
- Removes duplicate classes
- Handles conditional classes
- Resolves Tailwind conflicts (e.g., `p-4 p-6` → `p-6`)

---

## Custom CSS Classes

### Navigation
```css
.nav-link           /* Standard navigation link */
.nav-link-active    /* Active navigation link */
```

### Buttons
```css
.btn-primary        /* Primary button style */
.btn-secondary      /* Secondary button style */
```

### Layout
```css
.section-padding    /* Section vertical padding */
.container-custom   /* Custom container with max-width */
```

---

## Icon Usage

Icons are provided by `lucide-react`. Import and use as follows:

```tsx
import { Menu, X, ArrowUp, Calendar, MapPin, Users } from "lucide-react";

<Menu size={24} />           // With size
<X className="w-6 h-6" />   // With Tailwind classes
<ArrowUp />                  // Default size
```

**Common Icons Used:**
- `Menu`, `X` - Mobile navigation
- `ArrowUp` - Back to top
- `Calendar` - Event dates
- `MapPin` - Locations
- `Users` - People/groups
- `Building2` - Corporate
- `CheckCircle` - Checkmarks
- `TrendingUp` - Finances
- `FileText` - Documents
- `Scale` - Legal/statutes
- `Download` - Downloads
- `Image` - Images
- `Newspaper` - News
- `Archive` - Archive

---

## Image Usage

Use Next.js `Image` component for optimized images:

```tsx
import Image from "next/image";

<Image
  src="https://example.com/image.jpg"
  alt="Description"
  width={600}
  height={400}
  className="rounded-lg"
  priority  // For above-the-fold images
/>
```

**Important:**
- Always provide `width` and `height`
- Use descriptive `alt` text
- Add `priority` for hero/above-fold images
- Configure domains in `next.config.js`

---

## Responsive Design

All components are responsive using Tailwind breakpoints:

```tsx
// Mobile-first approach
<div className="p-4 md:p-8 lg:p-12">
  {/* 4px padding on mobile, 8px on tablet, 12px on desktop */}
</div>

// Hidden on mobile, visible on desktop
<nav className="hidden lg:block">
  {/* Desktop navigation */}
</nav>

// Stacked on mobile, side-by-side on desktop
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Two columns on desktop */}
</div>
```

**Breakpoints:**
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

---

## Color Palette

### Primary Colors
```css
--primary: #3D9991      /* Main teal color */
--primary-light: #4DA8A0
--primary-dark: #2D7A73
```

### Dark Colors
```css
--dark: #1F1F1F         /* Main dark color */
--dark-light: #2F2F2F
```

### Usage
```tsx
<div className="bg-primary text-white">
  {/* Primary background, white text */}
</div>

<div className="text-dark">
  {/* Dark text color */}
</div>
```

---

## Typography

### Font Families
```css
font-sans    /* Proxima Nova - body text */
font-serif   /* Adobe Garamond Pro - headings */
```

### Usage
```tsx
<h1 className="text-4xl font-serif font-bold">
  {/* Serif heading */}
</h1>

<p className="text-base font-sans">
  {/* Sans-serif body text */}
</p>
```

---

## Best Practices

1. **Use semantic HTML** - Proper heading hierarchy, semantic elements
2. **Accessibility** - Alt text for images, aria labels where needed
3. **Performance** - Optimize images, lazy load below-fold content
4. **Responsive** - Test on multiple screen sizes
5. **TypeScript** - Use proper types, avoid `any`
6. **Consistency** - Follow established patterns
7. **Reusability** - Create reusable components when possible

---

## Creating New Components

1. Create file in `components/` or `components/ui/`
2. Use TypeScript with proper types
3. Export as named component
4. Document props with JSDoc comments
5. Follow existing naming conventions

**Example:**
```tsx
// components/my-component.tsx
"use client";

import { cn } from "@/lib/utils";

interface MyComponentProps {
  title: string;
  className?: string;
}

export function MyComponent({ title, className }: MyComponentProps) {
  return (
    <div className={cn("p-4", className)}>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}
```

---

## Support

For component-specific issues:
1. Check this documentation
2. Review component source code
3. Check Tailwind CSS docs
4. Review Next.js docs
5. Check lucide-react icon library
