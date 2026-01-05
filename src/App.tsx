'use client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import {
  NavigationProvider,
  useNavigation,
} from './contexts/NavigationContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { FeaturesSection } from './components/FeaturesSection';
import { AIAssistantSection } from './components/AIAssistantSection';
import { ArticlesPreview } from './components/ArticlesPreview';
import { UseCasesSection } from './components/UseCasesSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ArticlesHub } from './pages/ArticlesHub';
import { ArticleDetail } from './pages/ArticleDetail';
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const { currentPage, currentArticleId } = useNavigation();

  return (
    <>
      <CssBaseline />
      <Toaster position='bottom-right' />
      <Navigation />

      <AnimatePresence mode='wait'>
        {currentPage === 'home' && (
          <motion.div
            key='home'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <InteractiveShowcase />
            <FeaturesSection />
            <AIAssistantSection />
            <ArticlesPreview />
            <UseCasesSection />
            <IntegrationsSection />
            <FinalCTA />
            <Footer />
          </motion.div>
        )}

        {currentPage === 'articles' && (
          <motion.div
            key='articles'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArticlesHub />
            <Footer />
          </motion.div>
        )}

        {currentPage === 'article' && currentArticleId && (
          <motion.div
            key={`article-${currentArticleId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArticleDetail articleId={currentArticleId} />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}
