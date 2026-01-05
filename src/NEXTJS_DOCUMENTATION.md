# Next.js 16.1.1 - Technical Documentation

## Architecture Overview

Workblox landing page uses Next.js 16.1.1 with the **App Router** architecture, providing:
- File-system based routing
- React Server Components by default
- Client Components where needed
- Streaming and Suspense support
- Built-in optimizations

## Routing System

### App Router Structure
```
/app
  layout.tsx         → Root layout (wraps all pages)
  page.tsx          → Home page (/)
  
  /articles
    layout.tsx      → Articles layout (optional, not created)
    page.tsx        → Articles listing (/articles)
    
    /[id]
      page.tsx      → Dynamic article page (/articles/[id])
```

### Route Types

#### 1. Static Routes
- `/` - Home page
- `/articles` - Articles listing

#### 2. Dynamic Routes
- `/articles/[id]` - Article detail pages
  - Example: `/articles/ai-workspace-evolution`
  - Example: `/articles/async-collaboration`

### Navigation Methods

#### Using NavigationContext (Legacy Compatible)
```tsx
import { useNavigation } from '@/contexts/NavigationContext';

function MyComponent() {
  const { navigateTo } = useNavigation();
  
  return (
    <button onClick={() => navigateTo('articles')}>
      View Articles
    </button>
  );
}
```

#### Using Next.js Link (Recommended)
```tsx
import Link from 'next/link';

function MyComponent() {
  return (
    <Link href="/articles">
      View Articles
    </Link>
  );
}
```

#### Programmatic Navigation
```tsx
'use client';
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/articles');
  };
  
  return <button onClick={handleClick}>Go</button>;
}
```

## Client vs Server Components

### Server Components (Default)
Server Components are the default in Next.js App Router. They:
- Render on the server
- Don't include JavaScript in the client bundle
- Can directly access backend resources
- Cannot use hooks or browser APIs

### Client Components (Used in Workblox)
All Workblox components are Client Components because they:
- Use React hooks (useState, useEffect, etc.)
- Use browser APIs
- Handle user interactions
- Use Material-UI components
- Use Motion animations

Mark with `'use client'` at the top:
```tsx
'use client';

import { useState } from 'react';

export function MyComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Context Providers

### Root Layout Hierarchy
```tsx
<html>
  <body>
    <ThemeProvider>           {/* Material-UI theming */}
      <NavigationProvider>    {/* Custom navigation */}
        <CssBaseline />       {/* CSS reset */}
        <Toaster />          {/* Toast notifications */}
        {children}           {/* Page content */}
      </NavigationProvider>
    </ThemeProvider>
  </body>
</html>
```

### ThemeProvider
- Manages dark/light mode
- Provides Material-UI theme
- Must be client component

### NavigationProvider
- Integrates with Next.js router
- Provides currentPage and currentArticleId
- Handles navigation and scrolling
- Compatible with legacy navigation code

## Data Fetching

### Static Data (Current Implementation)
```tsx
// /data/articlesData.ts
export const articles: Article[] = [
  {
    id: 'ai-workspace-evolution',
    title: 'The Evolution of AI-Powered Workspaces',
    // ...
  }
];
```

### Future: Server-Side Data Fetching
```tsx
// app/articles/page.tsx
async function ArticlesPage() {
  const articles = await fetch('https://api.example.com/articles');
  const data = await articles.json();
  
  return <ArticlesList articles={data} />;
}
```

### Future: Dynamic Data with Params
```tsx
// app/articles/[id]/page.tsx
async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await fetch(`https://api.example.com/articles/${params.id}`);
  const data = await article.json();
  
  return <ArticleDetail article={data} />;
}
```

## Styling

### Global Styles
Located in `/styles/globals.css`:
- Tailwind CSS 4.0 directives
- Custom CSS variables
- Typography defaults
- Dark mode styles

### Component Styles
Multiple approaches used:
1. **Material-UI sx prop**
   ```tsx
   <Box sx={{ padding: 2, bgcolor: 'primary.main' }}>
   ```

2. **Tailwind classes**
   ```tsx
   <div className="flex items-center gap-4">
   ```

3. **Emotion styled components**
   ```tsx
   const StyledBox = styled(Box)`
     padding: 16px;
   `;
   ```

## Performance Optimizations

### Built-in Next.js Optimizations
- **Code Splitting**: Automatic by route
- **Image Optimization**: Use `next/image`
- **Font Optimization**: Use `next/font`
- **Script Optimization**: Use `next/script`

### Current Optimizations
- ✅ Dynamic imports for modals
- ✅ Lazy loading images
- ✅ Motion animations with reduced motion support
- ✅ Memoized theme creation

### Recommended Additions
- [ ] Use `next/image` for all images
- [ ] Add loading states with Suspense
- [ ] Implement ISR for articles
- [ ] Add metadata for SEO

## Metadata & SEO

### Static Metadata (Current)
```tsx
// app/layout.tsx
<head>
  <title>Workblox - AI-Powered Work Management Platform</title>
  <meta name="description" content="..." />
</head>
```

### Recommended: Dynamic Metadata
```tsx
// app/articles/[id]/page.tsx
export async function generateMetadata({ params }) {
  const article = await getArticle(params.id);
  
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}
```

## Environment Variables

### Public Variables
Prefix with `NEXT_PUBLIC_` to expose to browser:
```env
NEXT_PUBLIC_API_URL=https://api.workblox.com
NEXT_PUBLIC_SITE_URL=https://workblox.com
```

### Private Variables
No prefix needed (server-only):
```env
DATABASE_URL=postgres://...
API_SECRET=...
```

### Usage
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## Build & Deployment

### Development
```bash
npm run dev
```
- Hot Module Replacement (HMR)
- Fast Refresh
- Port 3000 by default

### Production Build
```bash
npm run build
```
- Creates `.next` directory
- Optimizes JavaScript
- Generates static pages
- Compiles TypeScript

### Production Server
```bash
npm run start
```
- Serves production build
- Requires `npm run build` first

### Deployment Platforms

#### Vercel (Optimal)
```bash
vercel
```
- Zero configuration
- Automatic SSL
- Edge functions
- Analytics built-in

#### Other Platforms
- **Netlify**: Add `next.config.js`
- **AWS Amplify**: Supports Next.js
- **Docker**: Use official Next.js Docker image
- **Self-hosted**: Use PM2 or systemd

## Debugging

### React DevTools
- Install React DevTools browser extension
- Component tree inspection
- Props and state debugging

### Next.js DevTools
- Built into dev server
- Shows routes and build info
- Performance metrics

### Console Logging
```tsx
console.log('Data:', data);  // Development only
```

### Error Boundaries
```tsx
// app/error.tsx
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

## Best Practices

### 1. Component Organization
- Keep components focused and single-purpose
- Use composition over inheritance
- Extract reusable logic to hooks

### 2. Performance
- Use `'use client'` only when necessary
- Memoize expensive calculations
- Lazy load heavy components

### 3. TypeScript
- Define proper types for props
- Use interfaces for complex objects
- Leverage type inference

### 4. Accessibility
- Use semantic HTML
- Add ARIA labels
- Support keyboard navigation
- Test with screen readers

### 5. SEO
- Add meaningful metadata
- Use proper heading hierarchy
- Include alt text for images
- Create sitemap.xml

## Common Patterns

### Protected Routes (Future)
```tsx
// middleware.ts
export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');
  
  if (!session) {
    return NextResponse.redirect('/login');
  }
}
```

### API Routes (Future)
```tsx
// app/api/articles/route.ts
export async function GET(request: Request) {
  const articles = await db.articles.findMany();
  return Response.json(articles);
}
```

### Form Handling
```tsx
'use client';

export function ContactForm() {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });
  }
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

## Troubleshooting

### Common Issues

#### "use client" Missing
**Error**: `useState` used in Server Component
**Solution**: Add `'use client'` at top of file

#### Router Hook Errors
**Error**: `useRouter` not found
**Solution**: Import from `'next/navigation'`, not `'next/router'`

#### Module Not Found
**Error**: Cannot find module '@/...'
**Solution**: Check `tsconfig.json` paths configuration

#### Build Errors
**Error**: Type errors during build
**Solution**: Run `npm run lint` to find issues

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Material-UI**: https://mui.com
- **Motion**: https://motion.dev
- **Tailwind CSS**: https://tailwindcss.com

---

**Last Updated**: December 29, 2024
**Next.js Version**: 16.1.1
