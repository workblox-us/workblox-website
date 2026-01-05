# 🚀 Quick Start Guide - Next.js 16.1.1

## Immediate Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:3000**

✅ **That's it!** Your app is running.

---

## What Just Happened?

Your Workblox landing page is now running on:
- ✅ **Next.js 16.1.1** - Latest stable version
- ✅ **React 19** - Latest React with performance improvements
- ✅ **TypeScript** - Full type safety
- ✅ **Hot Reload** - Changes appear instantly

---

## File Structure (What You Need to Know)

```
📁 Your Project
│
├── 📁 app/                    ← Your pages live here
│   ├── layout.tsx            ← Wraps all pages
│   ├── page.tsx              ← Home page (/)
│   └── articles/
│       ├── page.tsx          ← Articles list (/articles)
│       └── [id]/page.tsx     ← Article detail (/articles/xxx)
│
├── 📁 components/             ← React components
│   ├── Navigation.tsx        ← Top navigation bar
│   ├── Hero.tsx              ← Landing hero section
│   ├── FeaturesSection.tsx   ← Features grid
│   └── ...
│
├── 📁 contexts/               ← React Context providers
│   ├── ThemeContext.tsx      ← Dark mode & theming
│   └── NavigationContext.tsx ← Navigation state
│
├── 📁 data/                   ← Your content data
│   └── articlesData.ts       ← Articles content
│
├── 📁 styles/                 ← CSS styles
│   └── globals.css           ← Global styles
│
└── 📄 Configuration files
    ├── package.json          ← Dependencies
    ├── next.config.js        ← Next.js config
    └── tsconfig.json         ← TypeScript config
```

---

## Making Changes

### 🎨 Edit Content

#### Change Hero Text
```tsx
// File: /components/Hero.tsx
// Line: Find the heading text and change it

<Typography variant="h1">
  Your New Headline Here  ← Change this
</Typography>
```

#### Add New Article
```tsx
// File: /data/articlesData.ts
// Add new object to articles array

export const articles: Article[] = [
  {
    id: 'my-new-article',           // URL slug
    title: 'My New Article',        // Title
    excerpt: 'Short description',   // Preview text
    category: 'Product',            // Category
    date: 'Dec 30, 2024',          // Date
    readTime: '5 min read',        // Read time
    content: { /* ... */ }         // Full content
  },
  // ... existing articles
];
```

#### Change Theme Colors
```tsx
// File: /contexts/ThemeContext.tsx
// Find the createTheme() call

palette: {
  primary: {
    main: '#a855f7',  ← Change purple
  },
  secondary: {
    main: '#3b82f6',  ← Change blue
  },
}
```

### 🧩 Add New Components

```bash
# Create new component file
touch components/MyNewComponent.tsx
```

```tsx
// File: /components/MyNewComponent.tsx
'use client';  // ← Always add this for interactive components

export function MyNewComponent() {
  return (
    <div>
      <h2>My New Component</h2>
    </div>
  );
}
```

```tsx
// File: /app/page.tsx
// Import and use it

import { MyNewComponent } from '../components/MyNewComponent';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <MyNewComponent />  ← Add here
      {/* ... */}
    </>
  );
}
```

### 🎯 Add New Page

```bash
# Create new route
mkdir -p app/about
touch app/about/page.tsx
```

```tsx
// File: /app/about/page.tsx
'use client';

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page</p>
    </div>
  );
}
```

**URL**: http://localhost:3000/about

---

## Common Commands

```bash
# Development (hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type checking
npm run type-check    # (if configured)

# Linting
npm run lint          # (if configured)
```

---

## Deployment (Choose One)

### Option 1: Vercel (Easiest) ⭐

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Done!** Your app is live in ~2 minutes.

### Option 2: Netlify

1. Push code to GitHub
2. Go to https://netlify.com
3. Click "Add new site"
4. Connect GitHub repo
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

### Option 3: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

```bash
docker build -t workblox .
docker run -p 3000:3000 workblox
```

---

## Troubleshooting

### Port 3000 Already in Use?
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found?
```bash
# Delete node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### TypeScript Errors?
```bash
# Restart TypeScript server in your editor
# VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server"
```

### Build Failing?
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

---

## Pro Tips 💡

### 1. Fast Refresh
Save any file → See changes instantly (no page reload needed)

### 2. TypeScript IntelliSense
Hover over any variable to see its type

### 3. Auto Imports
Start typing a component name → Your editor will auto-import it

### 4. Console Logging
```tsx
console.log('Debug:', myVariable);
```
Check browser console (F12) to see output

### 5. React DevTools
Install browser extension:
- Chrome: React Developer Tools
- Firefox: React Developer Tools

---

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Open http://localhost:3000
4. ✅ Make a small change to see Hot Reload
5. ✅ Explore the codebase
6. ✅ Read `/MIGRATION_GUIDE.md` for details
7. ✅ Check `/NEXTJS_DOCUMENTATION.md` for advanced topics

---

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Material-UI**: https://mui.com/material-ui/getting-started/

---

**Ready to build something amazing!** 🚀

Questions? Check the documentation files:
- `MIGRATION_GUIDE.md` - What changed
- `NEXTJS_DOCUMENTATION.md` - Technical details
- `README.md` - Project overview
