# Layout Components

This directory contains reusable layout components for the website structure.

## Components

### Header (`header.js`)
Enhanced sticky navigation header with scroll behavior and active section highlighting.

**Features:**
- Sticky navigation with show/hide on scroll
- Active section highlighting based on scroll position
- Mobile hamburger menu with full-screen modal
- Logo/brand display
- Navigation links from constants
- CTA button
- Smooth transitions and animations

**Usage:**
```jsx
import { Header } from '@/components/layouts';

<Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
```

### Footer (`footer.js`)
Comprehensive multi-column footer with newsletter signup.

**Features:**
- 4-column responsive layout (stacks on mobile)
- About section with social links
- Services quick links
- Company links and legal info
- Newsletter subscription form
- Animated entrance effects

**Usage:**
```jsx
import { Footer } from '@/components/layouts';

<Footer />
```

### PageHero (`PageHero.js`)
Reusable hero component for internal pages.

**Props:**
- `title` (string, required) - Main page title
- `description` (string, optional) - Page description
- `breadcrumbs` (array, optional) - Array of `{ label, href }` objects
- `variant` (string, optional) - `'gradient'` | `'default'`

**Usage:**
```jsx
import { PageHero } from '@/components/layouts';

<PageHero
  title="About Me"
  description="Learn more about my journey and expertise"
  breadcrumbs={[{ label: 'About' }]}
  variant="gradient"
/>
```

### Section (`Section.js`)
Consistent section wrapper with spacing and background variants.

**Props:**
- `children` (ReactNode, required) - Section content
- `id` (string, optional) - ID for anchor links
- `background` (string, optional) - `'default'` | `'gradient'` | `'glass'`
- `size` (string, optional) - Container size: `'sm'` | `'md'` | `'lg'` | `'xl'` | `'full'`
- `className` (string, optional) - Additional CSS classes
- `animate` (boolean, optional) - Enable entrance animations (default: true)

**Usage:**
```jsx
import { Section } from '@/components/layouts';

<Section id="services" background="gradient" size="lg">
  <h2>My Services</h2>
  {/* Content */}
</Section>
```

### Container (`Container.js`)
Responsive container with max-width variants.

**Props:**
- `children` (ReactNode, required) - Container content
- `size` (string, optional) - `'sm'` | `'md'` | `'lg'` | `'xl'` | `'full'`
- `className` (string, optional) - Additional CSS classes

**Size Reference:**
- `sm`: ~768px (3xl)
- `md`: ~1024px (5xl)
- `lg`: ~1280px (7xl) - Default
- `xl`: ~1400px
- `full`: 100%

**Usage:**
```jsx
import { Container } from '@/components/layouts';

<Container size="md">
  {/* Content */}
</Container>
```

## Design System

All components follow the design system defined in `globals.css`:

- **Colors:**
  - Primary: Indigo (`#3b82f6`)
  - Secondary: Purple (`#8b5cf6`)
  - Accent: Teal (`#14b8a6`), Pink (`#ec4899`)
  
- **Animations:**
  - Fade In
  - Slide Up
  - Scale In
  - Gradient Shift
  - Float
  - Pulse Glow

- **Effects:**
  - Glassmorphism (`.glass`)
  - Gradient Text (`.gradient-text`)
  - Gradient Border (`.gradient-border`)

## Dependencies

- **framer-motion**: For smooth animations
- **react-icons**: For icon components
- **Next.js**: For Link component and routing

## Constants

Components import from `/src/lib/constants.js`:
- `SITE_CONFIG`: Site metadata
- `NAVIGATION_LINKS`: Main navigation items
- `SOCIAL_LINKS`: Social media URLs
- `FOOTER_LINKS`: Footer link groups
- `ANIMATION_VARIANTS`: Framer Motion variants

## Responsive Behavior

All components are fully responsive:
- **Mobile-first**: Designed for mobile and scaled up
- **Breakpoints**: Tailwind's default (sm, md, lg, xl, 2xl)
- **Touch-friendly**: Adequate touch targets (min 44x44px)
- **Accessible**: Semantic HTML and ARIA labels
