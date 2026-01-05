# 📂 Project Structure Guide

Visual guide to understanding the Workblox Next.js project structure.

## 🌲 Complete Directory Tree

```
workblox-landing/
│
├── 📁 app/                          ← Next.js App Router (pages)
│   ├── 📄 layout.tsx               ← Root layout (wraps everything)
│   ├── 📄 page.tsx                 ← Home page (/)
│   │
│   └── 📁 articles/                ← Articles section
│       ├── 📄 page.tsx             ← Articles list (/articles)
│       └── 📁 [id]/                ← Dynamic routes
│           └── 📄 page.tsx         ← Article detail (/articles/[id])
│
├── 📁 components/                   ← React components
│   ├── 📄 Navigation.tsx           ← Main navigation bar
│   ├── 📄 Hero.tsx                 ← Hero section
│   ├── 📄 InteractiveShowcase.tsx  ← Feature demos
│   ├── 📄 FeaturesSection.tsx      ← Features grid
│   ├── 📄 AIAssistantSection.tsx   ← AI Assistant demo
│   ├── 📄 AIWorkspaceDemo_NEW.tsx  ← Workspace builder
│   ├── 📄 ArticlesPreview.tsx      ← Articles preview cards
│   ├── 📄 ArticlesSection.tsx      ← Articles section
│   ├── 📄 UseCasesSection.tsx      ← Use cases/solutions
│   ├── 📄 IntegrationsSection.tsx  ← Integrations showcase
│   ├── 📄 FinalCTA.tsx             ← Final call-to-action
│   ├── 📄 Footer.tsx               ← Footer
│   ├── 📄 BetaModal.tsx            ← Beta waitlist modal
│   ├── 📄 SignInModal.tsx          ← Sign-in modal
│   ├── 📄 Dashboard.tsx            ← User dashboard
│   ├── 📄 WorkbloxLogo.tsx         ← Logo component
│   │
│   ├── 📁 ui/                      ← UI component library
│   │   ├── 📄 button.tsx           ← Button component
│   │   ├── 📄 card.tsx             ← Card component
│   │   ├── 📄 dialog.tsx           ← Dialog/Modal
│   │   ├── 📄 input.tsx            ← Input field
│   │   └── ... (40+ more)          ← All shadcn/ui components
│   │
│   └── 📁 figma/                   ← Figma-imported components
│       └── 📄 ImageWithFallback.tsx ← Image component
│
├── 📁 contexts/                     ← React Context providers
│   ├── 📄 ThemeContext.tsx         ← Theme & dark mode
│   └── 📄 NavigationContext.tsx    ← Navigation state
│
├── 📁 data/                         ← Data & content
│   └── 📄 articlesData.ts          ← Articles content
│
├── 📁 hooks/                        ← Custom React hooks
│   └── 📄 useThemeColors.ts        ← Theme colors hook
│
├── 📁 pages/                        ← Legacy page components
│   ├── 📄 ArticlesHub.tsx          ← Articles hub layout
│   └── 📄 ArticleDetail.tsx        ← Article detail layout
│
├── 📁 styles/                       ← Global styles
│   └── 📄 globals.css              ← Global CSS (Tailwind + custom)
│
├── 📁 guidelines/                   ← Documentation
│   └── 📄 Guidelines.md            ← Design guidelines
│
├── 📄 next.config.js               ← Next.js configuration
├── 📄 tsconfig.json                ← TypeScript configuration
├── 📄 postcss.config.js            ← PostCSS configuration
├── 📄 tailwind.config.js           ← Tailwind CSS config (if any)
├── 📄 package.json                 ← Dependencies & scripts
├── 📄 .eslintrc.json               ← ESLint configuration
├── 📄 .gitignore                   ← Git ignore rules
├── 📄 .env.example                 ← Environment variables template
├── 📄 vercel.json                  ← Vercel deployment config
│
├── 📄 README.md                    ← Project overview
├── 📄 QUICKSTART.md                ← Quick start guide
├── 📄 MIGRATION_GUIDE.md           ← Migration details
├── 📄 NEXTJS_DOCUMENTATION.md      ← Technical documentation
├── 📄 DEPLOYMENT_GUIDE.md          ← Deployment guide
├── 📄 SUMMARY.md                   ← Migration summary
├── 📄 PROJECT_STRUCTURE.md         ← This file!
│
└── 📄 App.tsx                      ← (Legacy - not used)
```

---

## 🎯 Key Directories Explained

### 📁 `app/` - Next.js Pages
**Purpose**: File-system based routing
- Each folder = route segment
- `page.tsx` = route endpoint
- `layout.tsx` = shared layout
- `[id]` = dynamic parameter

**Example:**
```
app/
├── page.tsx              → /
└── articles/
    ├── page.tsx          → /articles
    └── [id]/
        └── page.tsx      → /articles/my-article
```

### 📁 `components/` - React Components
**Purpose**: Reusable UI components

**Categories:**
- **Section Components**: Hero, Features, UseCases, etc.
- **UI Components**: Buttons, Cards, Dialogs (in `ui/`)
- **Modal Components**: BetaModal, SignInModal
- **Utility Components**: Navigation, Footer, Logo

**When to add a component:**
- Reused in multiple places
- Complex logic
- Improves readability

### 📁 `contexts/` - State Management
**Purpose**: Share state across components

**Current contexts:**
- `ThemeContext`: Dark/light mode
- `NavigationContext`: Current page, navigation functions

**When to add a context:**
- State needed in many components
- Avoid prop drilling
- Global settings

### 📁 `data/` - Static Data
**Purpose**: Content and data files

**Current files:**
- `articlesData.ts`: All articles content

**Future additions:**
- `testimonialsData.ts`
- `pricingData.ts`
- `faqData.ts`

### 📁 `hooks/` - Custom Hooks
**Purpose**: Reusable logic

**Current hooks:**
- `useThemeColors`: Get theme colors

**Common hooks to add:**
- `useMediaQuery`: Responsive breakpoints
- `useLocalStorage`: Persist data
- `useDebounce`: Debounce input

### 📁 `styles/` - Styling
**Purpose**: Global styles and CSS

**Files:**
- `globals.css`: Global CSS, Tailwind directives

**Contains:**
- CSS resets
- Typography defaults
- Custom CSS variables
- Dark mode styles

---

## 🔀 Routing Flow

### Home Page Request
```
User → / → app/layout.tsx → app/page.tsx → Renders home
```

### Articles List Request
```
User → /articles → app/layout.tsx → app/articles/page.tsx
```

### Article Detail Request
```
User → /articles/ai-workspace
  → app/layout.tsx
  → app/articles/[id]/page.tsx
  → params.id = "ai-workspace"
  → Fetch article data
  → Render article
```

---

## 🎨 Component Hierarchy

### Layout Hierarchy
```
app/layout.tsx (Root)
└── ThemeProvider
    └── NavigationProvider
        ├── CssBaseline
        ├── Toaster
        └── {children}
            └── app/page.tsx (Home)
                ├── Navigation
                ├── Hero
                ├── InteractiveShowcase
                ├── FeaturesSection
                ├── AIAssistantSection
                ├── ArticlesPreview
                ├── UseCasesSection
                ├── IntegrationsSection
                ├── FinalCTA
                └── Footer
```

### Articles Page Hierarchy
```
app/articles/page.tsx
├── Navigation
├── ArticlesHub
│   ├── Hero section
│   ├── Filters/Search
│   └── Articles grid
│       └── ArticleCard (×N)
└── Footer
```

### Article Detail Hierarchy
```
app/articles/[id]/page.tsx
├── Navigation
├── ArticleDetail
│   ├── Header
│   ├── Content
│   │   ├── Introduction
│   │   ├── Sections
│   │   └── Conclusion
│   └── Related articles
└── Footer
```

---

## 📦 File Naming Conventions

### Next.js Special Files
- `layout.tsx` - Layout component (wraps children)
- `page.tsx` - Page component (route endpoint)
- `loading.tsx` - Loading UI (Suspense fallback)
- `error.tsx` - Error UI (Error boundary)
- `not-found.tsx` - 404 page

### Component Files
- `PascalCase.tsx` - Component files (e.g., `Hero.tsx`)
- `camelCase.ts` - Utility files (e.g., `useThemeColors.ts`)
- `kebab-case.tsx` - UI components (e.g., `button.tsx`)

### Configuration Files
- `*.config.js` - Config files (e.g., `next.config.js`)
- `.eslintrc.json` - ESLint config
- `tsconfig.json` - TypeScript config
- `.env.local` - Environment variables (gitignored)

---

## 🔍 Finding Things

### "Where do I find...?"

#### The home page content?
→ `app/page.tsx` (imports sections from `components/`)

#### The navigation bar?
→ `components/Navigation.tsx`

#### The theme colors?
→ `contexts/ThemeContext.tsx`

#### The articles content?
→ `data/articlesData.ts`

#### The global styles?
→ `styles/globals.css`

#### The Next.js config?
→ `next.config.js`

#### The TypeScript config?
→ `tsconfig.json`

#### The dependencies?
→ `package.json`

---

## 🛠️ Adding New Features

### Add a New Page
1. Create file: `app/pricing/page.tsx`
2. Export default component
3. Access at `/pricing`

### Add a New Component
1. Create file: `components/MyComponent.tsx`
2. Define component
3. Import where needed

### Add a New Article
1. Edit: `data/articlesData.ts`
2. Add article object
3. Automatically available at `/articles/[your-id]`

### Add a New Context
1. Create file: `contexts/MyContext.tsx`
2. Define provider and hook
3. Add to `app/layout.tsx`

---

## 📊 Component Dependencies

### Core Dependencies
```
Navigation
├── ThemeContext (useThemeMode)
├── NavigationContext (useNavigation)
└── WorkbloxLogo

Hero
├── ThemeContext
└── useThemeColors

Features/UseCases/etc.
├── ThemeContext
└── useThemeColors
```

### Data Flow
```
articlesData.ts
  → ArticlesPreview (home page)
  → ArticlesHub (articles page)
  → ArticleDetail (article page)
```

---

## 🎯 Best Practices

### File Organization
- ✅ One component per file
- ✅ Group related components in folders
- ✅ Keep components focused and small
- ✅ Extract reusable logic to hooks

### Naming
- ✅ Component files: PascalCase
- ✅ Utility files: camelCase
- ✅ Folders: kebab-case or camelCase
- ✅ Be descriptive

### Imports
```tsx
// External packages first
import { useState } from 'react';
import { Box } from '@mui/material';

// Internal imports
import { useThemeColors } from '@/hooks/useThemeColors';
import { Navigation } from '@/components/Navigation';
```

### Component Structure
```tsx
'use client';  // If needed

// Imports
import { ... } from '...';

// Types
interface Props {
  // ...
}

// Component
export function MyComponent({ props }: Props) {
  // Hooks
  const [state, setState] = useState();
  
  // Event handlers
  const handleClick = () => {
    // ...
  };
  
  // Render
  return (
    // JSX
  );
}
```

---

## 📈 Scalability

### When to Split Components
- Component exceeds 200 lines
- Logic becomes complex
- Reused in multiple places
- Improving performance

### When to Create a New Context
- State used in 3+ components
- Deep prop drilling
- Global app settings

### When to Add a Hook
- Logic reused in 2+ components
- Complex stateful logic
- Side effects management

---

## 🔄 Migration Notes

### Old Structure (Figma Make)
```
/App.tsx                    ← Single entry point
/components/                ← All components
/pages/                     ← Page-like components
```

### New Structure (Next.js)
```
/app/                       ← Next.js App Router
  layout.tsx                ← Root layout
  page.tsx                  ← Home page
  articles/                 ← Articles routes
/components/                ← Components (same)
/pages/                     ← Legacy (still used for layouts)
```

**Key change:** Routing moved from state-based to file-based

---

## 📝 Cheat Sheet

### Common Paths
```
Home page:        app/page.tsx
Layout:           app/layout.tsx
Navigation:       components/Navigation.tsx
Theme:            contexts/ThemeContext.tsx
Articles data:    data/articlesData.ts
Global styles:    styles/globals.css
Config:           next.config.js
```

### Common Tasks
```
Add page:         Create app/[name]/page.tsx
Add component:    Create components/[Name].tsx
Add article:      Edit data/articlesData.ts
Change theme:     Edit contexts/ThemeContext.tsx
Add dependency:   npm install [package]
```

---

## 🎓 Learning Path

1. **Start here**: `QUICKSTART.md`
2. **Understand structure**: This file
3. **Learn Next.js**: `NEXTJS_DOCUMENTATION.md`
4. **Deploy**: `DEPLOYMENT_GUIDE.md`

---

**This structure is designed for:**
- 📦 Easy to understand
- 🚀 Fast to develop
- 🔧 Simple to maintain
- 📈 Ready to scale

**Happy coding!** 🎉
