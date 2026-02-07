# Umesh Gajjar - Portfolio Website

Premium, SEO-optimized portfolio website showcasing full-stack development expertise with 7+ years of experience. Built with Next.js 15, TypeScript, and Tailwind CSS 4.

## ✨ Features

- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Dark Mode** - Light/dark theme toggle with system preference detection
- ✅ **SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards
- ✅ **Structured Data** - JSON-LD schemas for Person, Website, ProfilePage
- ✅ **7 Main Pages** - Home, About, Skills, Experience, Projects, Blog, Contact
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Performance** - Server Components, optimized images, Core Web Vitals
- ✅ **Dynamic Sitemap** - Auto-generated XML sitemap
- ✅ **Professional Content** - SEO-optimized copy targeting recruiters and clients

## 🛠️ Tech Stack

- **Next.js 15** - App Router with Server Components
- **React 19** - Latest React features
- **TypeScript** - Type-safe code
- **Tailwind CSS 4** - Utility-first styling with dark mode
- **next-themes** - Dark mode implementation
- **React Icons** - Icon library
- **Framer Motion** - Smooth animations
- **Formik + Yup** - Form validation

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add:
# - MONGODB_URI (for admin/blog features)
# - JWT_SECRET (for admin authentication)
# - NEXT_PUBLIC_SITE_URL (your production URL)

# Start development server
npm run dev      # Development: http://localhost:3000

# Build for production
npm run build    # Creates optimized production build + sitemap

# Start production server
npm start        # Runs production build
```

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── skills/            # Skills showcase
│   │   ├── experience/        # Career timeline
│   │   ├── projects/          # Project portfolio
│   │   ├── blog/              # Blog listing
│   │   ├── contact/           # Contact form
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── sitemap.ts         # Dynamic sitemap generation
│   │   ├── robots.ts          # Robots.txt configuration
│   │   └── globals.css        # Global styles with dark mode
│   │
│   ├── components/
│   │   ├── Header.tsx         # Navigation with theme toggle
│   │   ├── Footer.tsx         # Footer with social links
│   │   ├── ThemeProvider.tsx  # Dark mode context
│   │   └── ui/                # Reusable UI components
│   │       ├── Button.tsx     # Button component
│   │       ├── Section.tsx    # Section wrapper
│   │       └── ThemeToggle.tsx # Theme toggle button
│   │
│   └── lib/
│       ├── seo.ts             # Centralized SEO configuration
│       ├── constants.js       # Site constants
│       └── utils.ts           # Utility functions
│
├── public/
│   ├── banner.png             # Social sharing image
│   └── sitemap.xml            # Generated sitemap
│
└── [config files]
```

## 📄 Pages Overview

### 1. **Home** (`/`)
- Hero section with strong value proposition
- Technical expertise overview (4 key areas)
- Featured projects showcase
- Experience snapshot
- Call-to-action section

### 2. **About** (`/about`)
- Professional summary (300+ words)
- Career journey timeline
- Leadership & team management
- Values & work philosophy
- SEO-optimized storytelling

### 3. **Skills** (`/skills`)
- Frontend Development (React, Next.js, Vue.js, Redux, Tailwind, TypeScript)
- Backend Development (Node.js, Laravel, Symfony, Python, GraphQL)
- CMS & WordPress (Custom themes, plugins, WooCommerce, Headless)
- Databases (PostgreSQL, MySQL, MongoDB, Redis, Prisma)
- Cloud & DevOps (AWS, Docker, CI/CD, Vercel, Monitoring)
- Tools & Collaboration (Git, GitLab, Figma, Agile)

### 4. **Experience** (`/experience`)
- Infosys - Senior Associate Consultant (2025–Present)
- Freelance Full Stack Developer (2024–Present)
- Acespritech - Team Lead (6+ years leadership)
- NewsReach, KNP Technologies, GreenCubes (Developer roles)

### 5. **Projects** (`/projects`)
- Enterprise Applications (Multi-tenant SaaS, Financial Management, ERP)
- SaaS Platforms (Project Management, Marketing Automation, LMS)
- E-commerce Solutions (Multi-vendor Marketplace, Subscription Service)
- CMS & WordPress (News Portal, Headless CMS, Corporate Website)
- APIs & Integrations (RESTful API, Payment Gateway, Microservices)

### 6. **Blog** (`/blog`)
- 5 placeholder articles with SEO-optimized titles
- Featured article highlighting
- Category and tag display
- Reading time and publication dates
- JSON-LD article schemas

### 7. **Contact** (`/contact`)
- Contact form with validation (Name, Email, Subject, Message)
- Location: Pune, Maharashtra, India
- Email: hello@umeshgajjar.com
- Social media links
- FAQ section
- Services overview

## 🔍 SEO Features

All pages include:
- ✅ Unique, keyword-optimized titles (150-160 characters)
- ✅ Meta descriptions targeting primary keywords
- ✅ Canonical URLs
- ✅ Open Graph tags with banner image
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Person, Website, ProfilePage, Article, Breadcrumb)
- ✅ Mobile-friendly responsive design
- ✅ Fast Core Web Vitals scores

## 🎨 Customization

### Update Site Configuration

Edit `src/lib/seo.ts` to customize:
- Site name, title, description
- Author information
- Social media links
- Keywords
- Contact email
- Location

### Update Content

1. **Personal Information**: Update `src/lib/seo.ts` siteConfig
2. **Skills**: Modify skill categories in `src/app/skills/page.tsx`
3. **Experience**: Update timeline in `src/app/experience/page.tsx`
4. **Projects**: Edit project data in `src/app/projects/page.tsx`
5. **Blog**: Replace placeholder articles in `src/app/blog/page.tsx`

### Styling & Theme

- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Dark Mode**: Configured via `next-themes` in `src/components/ThemeProvider.tsx`
- **Components**: Modify in `src/components/ui/`

## 📧 Environment Variables

Create `.env.local` file:

```env
# MongoDB (for admin/blog features)
MONGODB_URI=your_mongodb_connection_string

# JWT Secret (for admin authentication)
JWT_SECRET=your_secure_random_string

# Site URL (for SEO and sitemap)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Set environment variables in Vercel dashboard:
- `MONGODB_URI`
- `JWT_SECRET`
- `NEXT_PUBLIC_SITE_URL`

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Self-hosted with Node.js

## 📊 Performance

- ✅ Server Components by default for optimal performance
- ✅ Image optimization with `next/image`
- ✅ Code splitting by route
- ✅ Lazy loading for below-the-fold content
- ✅ Minimal client-side JavaScript

## 🔒 Security

- ✅ 0 vulnerabilities (CodeQL scanned)
- ✅ Secure environment variable handling
- ✅ JWT authentication for admin routes
- ✅ Input validation on forms

## 📝 License

© 2026 Umesh Gajjar. All rights reserved.

---

**Built with ❤️ by Umesh Gajjar**  
[umeshgajjar.com](https://umeshgajjar.com) | [GitHub](https://github.com/gajjarumesh) | [LinkedIn](https://linkedin.com/in/umeshgajjar)
