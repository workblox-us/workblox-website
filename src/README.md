# Workblox Landing Page

An all-in-one AI-powered work management platform landing page built with Next.js 16.1.1, React 19, and Material-UI.

## 🚀 Features

- **Next.js 16.1.1** - Latest Next.js with App Router
- **React 19** - Latest React with improved performance
- **Material-UI 6** - Premium UI components
- **Motion (Framer Motion)** - Smooth animations
- **TypeScript** - Full type safety
- **Dark Mode** - Beautiful dark theme with toggle
- **Responsive Design** - Mobile-first approach
- **Smart Navigation** - Cross-page intelligent navigation with section scrolling
- **Interactive Demos** - AI Assistant, Smart Calendar, Workspace Builder
- **Enterprise Security** - Comprehensive security section
- **Articles System** - Blog/articles with dynamic routing
- **Beta Waitlist** - Email collection for early access

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🔨 Build

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
/app
  /layout.tsx          # Root layout with providers
  /page.tsx            # Home page
  /articles
    /page.tsx          # Articles listing
    /[id]/page.tsx     # Dynamic article pages

/components
  /Navigation.tsx      # Main navigation bar
  /Hero.tsx           # Hero section
  /InteractiveShowcase.tsx  # Feature demos
  /FeaturesSection.tsx      # Features grid
  /AIAssistantSection.tsx   # AI assistant demo
  /UseCasesSection.tsx      # Use cases
  /IntegrationsSection.tsx  # Integrations
  /FinalCTA.tsx             # Final call-to-action
  /Footer.tsx               # Footer
  /ui/                      # UI components library

/contexts
  /ThemeContext.tsx    # Theme provider
  /NavigationContext.tsx  # Navigation provider

/data
  /articlesData.ts     # Articles content

/styles
  /globals.css         # Global styles
```

## 🎨 Customization

### Theme
Edit `/contexts/ThemeContext.tsx` to customize colors and typography.

### Content
- Landing page sections: Edit components in `/components`
- Articles: Edit `/data/articlesData.ts`
- Navigation: Edit `/components/Navigation.tsx`

## 🌐 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
Compatible with:
- Netlify
- AWS Amplify
- Google Cloud Run
- Self-hosted

## 📝 Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1
- **UI Library**: React 19
- **Component Library**: Material-UI 6.3.0
- **Animation**: Motion 11.17.3
- **Styling**: Tailwind CSS 4.0, Emotion
- **Notifications**: Sonner 2.0.3
- **Charts**: Recharts 2.15.0
- **Icons**: MUI Icons, Lucide React
- **Language**: TypeScript 5.7.2

## 📄 License

Private - All rights reserved

## 🤝 Contributing

This is a private project. Contact the team for contribution guidelines.

---

Built with ❤️ for Workblox
