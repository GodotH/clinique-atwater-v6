# Clinique Chiropratique Atwater - Modern Website

**Version:** 6.0.0
**Last Updated:** 2025-10-03 21:27 EST
**Status:** Production Ready ✅

---

## 🌟 Overview

Professional, multilingual website for Clinique Chiropratique Atwater featuring stunning animations, modern UI/UX design, and seamless user experience. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## ✨ Features

### 🎨 Visual Design
- **Parallax Hero Section** - Dynamic scrolling effects with floating gradient orbs
- **Glassmorphism Navigation** - Modern frosted glass header with backdrop blur
- **Gradient Backgrounds** - Subtle animated gradient blobs throughout
- **Premium Color Palette** - Teal (#0BA9B5) and Leaf Green (#69C36B) brand colors

### 🎭 Animations & Interactions
- **Scroll-Triggered Reveals** - Smooth fade-in animations on scroll using Framer Motion
- **Micro-Interactions** - Every button, card, and element responds to user interaction
- **Stagger Animations** - Sequential reveal of content for professional feel
- **Hover Effects** - Cards lift, icons rotate, buttons glow and shimmer
- **Page Load Animations** - Elegant entrance animations for all components

### 🌐 Internationalization
- **English/French Support** - Full i18n with easy language switching
- **Locale-based Routing** - `/en` and `/fr` routes
- **Translated Content** - All text, labels, and content fully translated

### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all screen sizes
- **Touch-Friendly** - Enhanced mobile menu and interactions
- **Adaptive Layouts** - Grid systems adjust seamlessly

### 🚀 Performance
- **Next.js 14** - Latest features including App Router
- **Image Optimization** - Automatic WebP conversion and lazy loading
- **Code Splitting** - Optimized bundle sizes
- **SEO Optimized** - Meta tags, semantic HTML, structured data

---

## 🛠️ Tech Stack

### Core
- **Next.js** 14.2.4 - React framework with App Router
- **React** 18.3.1 - UI library
- **TypeScript** 5.0.0 - Type safety

### Styling & Animation
- **Tailwind CSS** 3.4.0 - Utility-first CSS framework
- **Framer Motion** 11.0.0 - Animation library
- **Tailwind Animate** 1.0.7 - Animation utilities

### Internationalization
- **@formatjs/intl-localematcher** 0.5.4 - Locale matching
- **Negotiator** 0.6.3 - Language negotiation

### UI Components
- **Lucide React** 0.344.0 - Icon library
- **clsx** 2.0.0 - Conditional classNames
- **tailwind-merge** 2.0.0 - Class merging utility

---

## 📦 Installation

### Prerequisites
- Node.js >= 18.0.0
- npm >= 8.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/GodotH/clinique-atwater-v6.git
cd clinique-atwater-v6

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🎯 Component Architecture

### Pages
- **`/[lang]/page.tsx`** - Main landing page with all sections

### Components

#### Hero
- Parallax scrolling background
- Animated gradient overlays
- Staggered text animations
- Interactive stat cards with mouse tracking

#### Services
- 4 service cards with icons (Stethoscope, Activity, Trophy, Heart)
- Scroll-triggered reveals
- Rotating icons on hover
- Gradient overlays

#### Testimonials
- 4-5 star ratings with pop-in animations
- Floating quote marks
- Author avatars with rotation effects
- Smooth card lift animations

#### Process
- 3-step process visualization
- Connection lines between steps
- Spring-animated number badges
- Icon wiggle animations

#### Header
- Glassmorphism navigation bar
- Animated menu underlines
- Sticky scroll behavior
- Mobile hamburger menu

#### Call-to-Action Buttons
- Phone icon wiggle animation
- Shine effect sweep
- Scale animations on tap
- Gradient backgrounds

---

## 🎨 Animation System

### Global Utilities

```css
/* Gradient Text */
.gradient-text - Teal to Green gradient text

/* Glass Effect */
.glass - Glassmorphism with backdrop blur

/* Scroll Reveals */
.reveal - Fade up animation on scroll
.reveal.active - Activated state

/* Keyframe Animations */
@keyframes float - Floating motion
@keyframes glow - Pulsing glow effect
@keyframes shimmer - Shine sweep effect
```

### Framer Motion Patterns

```tsx
// Scroll-triggered reveal
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: "-100px" })

// Stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

// Item animations
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}
```

---

## 🌍 Internationalization Structure

```
locales/
├── en.json         # English translations
└── fr.json         # French translations

app/
├── i18n/
│   ├── client.ts   # Client-side i18n
│   └── server.ts   # Server-side i18n
└── [lang]/         # Locale-based routes
```

### Adding Translations

Edit `locales/en.json` or `locales/fr.json`:

```json
{
  "nav": {
    "services": "Services",
    "testimonials": "Testimonials"
  },
  "hero": {
    "title": "Break Free From Pain",
    "subtitle": "Hurt Less"
  }
}
```

---

## 🎯 Key Sections

1. **Hero** - Main banner with CTA and trust indicators
2. **Problems** - Conditions treated
3. **Services** - Professional treatment services
4. **Process** - 3-step patient journey
5. **Testimonials** - Patient reviews and ratings
6. **About** - Dr. Simon Tanguay bio and credentials
7. **Pricing** - Treatment options and costs
8. **FAQ** - Common questions
9. **Booking** - Contact form
10. **Footer** - Links and contact info

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel deploy --prod
```

### Environment Variables

No environment variables required for basic deployment.

---

## 📝 Content Management

All content is managed through JSON translation files in `/locales`:

- **Text Content** - Edit `en.json` and `fr.json`
- **Images** - Place in `/public/images`
- **Styling** - Tailwind classes in components
- **Colors** - Defined in `tailwind.config.js`

---

## 🎨 Brand Colors

```js
'brand-teal': {
  DEFAULT: '#0BA9B5',
  600: '#0BA9B5',
  700: '#087C86',
}
'leaf': {
  DEFAULT: '#69C36B',
  500: '#69C36B',
}
'ink': {
  DEFAULT: '#0E1B2A',
  900: '#0E1B2A',
}
```

---

## 📄 License

© 2024 Clinique Chiropratique Atwater. All rights reserved.

---

## 👨‍💻 Development

### Scripts

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Build for production
npm start          # Run production build
npm run lint       # Run ESLint
npm run type-check # TypeScript type checking
```

---

## 📞 Contact

**Clinique Chiropratique Atwater**
2228 St-Antoine Ouest
Montreal, QC H3J 1A7
📞 (514) 667-3911
✉️ ChiroAtwater@gmail.com

---

## 🎉 Version History

### v6.0.0 - 2025-10-03
- ✨ Complete UI/UX transformation with Framer Motion animations
- 🎨 Added parallax hero section with floating gradient orbs
- 🎭 Implemented scroll-triggered reveals across all sections
- 💫 Enhanced all components with micro-interactions
- 🔮 Added glassmorphism navigation header
- ✨ Stagger animations for lists and grids
- 🎯 Rotating icons and badges
- 🌟 Shine effects and glow animations
- 📱 Enhanced mobile experience
- 🚀 Performance optimizations

---

**Built with ❤️ by Claude Code**
