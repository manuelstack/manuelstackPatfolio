# Portfolio Website

A modern, animated portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a terminal-inspired aesthetic.

##  Tech Stack

### Core Framework
- **Vite** - Fast build tool and dev server
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animation library
- **PostCSS** - CSS processing with Autoprefixer

### UI Components
- **shadcn/ui** - High-quality React component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library

### Data & Forms
- **React Query** - Server state management
- **React Hook Form** - Efficient form management
- **Zod** - TypeScript-first schema validation

### Developer Tools
- **ESLint** - Code quality linting
- **Vitest** - Unit testing framework
- **TypeScript** - Static type checking

##  Getting Started

### Prerequisites
- Node.js 18+ ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or bun package manager

### Installation

\\\sh
# Clone the repository
git clone <repository-url>
cd quiet-confidence-main

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
\\\

The site will be available at \http://localhost:5173\

##  Project Structure

\\\
src/
 components/
    Header.tsx         # Navigation header with scroll detection
    Hero.tsx           # Hero section with animations and glitch effects
    Projects.tsx       # Project showcase section
    ProjectCard.tsx    # Individual project card component
    About.tsx          # About section
    Contact.tsx        # Contact form section
    Terminal.tsx       # Terminal-style component
    Footer.tsx         # Footer with attribution
    ui/                # shadcn/ui components (auto-generated)
 hooks/                 # Custom React hooks
    use-mobile.tsx     # Mobile viewport detection
    use-toast.ts       # Toast notification hook
 pages/
    Index.tsx          # Home page
    NotFound.tsx       # 404 page
 assets/                # Images and static files
 lib/
    utils.ts           # Utility functions
 App.tsx                # Main app component with routing
 main.tsx               # React entry point

public/
 robots.txt             # SEO robots file
\\\

##  Available Scripts

\\\sh
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build in development mode (includes source maps)
npm run build:dev

# Preview production build locally
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run ESLint to check code quality
npm lint
\\\

##  Features

- **Smooth Animations** - Framer Motion-powered entrance and scroll animations
- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Dark Theme** - Built-in dark mode support with theme switching
- **Terminal Aesthetic** - Monospace fonts and code-inspired styling
- **Performance Optimized** - Vite's fast build and Framer Motion's GPU acceleration
- **Accessibility** - Radix UI primitives ensure WCAG compliance
- **SEO Ready** - Proper meta tags and semantic HTML

##  Configuration Files

- \ite.config.ts\ - Vite build configuration
- \	sconfig.json\ - TypeScript compiler options
- \	ailwind.config.ts\ - Tailwind CSS customization
- \postcss.config.js\ - PostCSS plugins (Tailwind, Autoprefixer)
- \eslint.config.js\ - Linting rules
- \itest.config.ts\ - Testing framework configuration
- \components.json\ - shadcn/ui configuration

##  Deployment

The project can be deployed to any static hosting platform:

- **Vercel** - Optimized for Vite projects
- **Netlify** - Simple Git-based deployment
- **GitHub Pages** - Free hosting for static sites
- **AWS S3** - Cloud-based static hosting

Build the project:
\\\sh
npm run build
\\\

The \dist/\ folder contains the optimized production build.

##  Dependencies Highlights

- **framer-motion@^12.26** - Advanced animations
- **react-router-dom@^6.30** - Client-side routing
- **react-query@^5.83** - Server state management
- **tailwindcss@^3** - Utility CSS framework
- **lucide-react@^0.462** - Icon system

##  Development Tips

1. **Component Development** - Use \
pm run dev\ for hot module replacement
2. **Testing** - Use \
pm run test:watch\ for TDD workflow
3. **Type Safety** - TypeScript strict mode is enabled by default
4. **Styling** - Extend Tailwind configuration in \	ailwind.config.ts\
5. **UI Components** - Add new components from shadcn/ui using the CLI

##  License

This project is open source and available under the MIT License.
