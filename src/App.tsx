'use client';
import { CssBaseline } from '@mui/material';
import { AnimatePresence, motion } from 'motion/react';
import { Toaster } from 'sonner';

import { AIAssistantSection } from './components/AIAssistantSection';
import ArticleDetail from './components/ArticleDetail';
import ArticlesHub from './components/ArticlesHub';
import { ArticlesPreview } from './components/ArticlesPreview';
import { FAQSection } from './components/FAQSection';
import { FeaturesSection } from './components/FeaturesSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IntegrationsSection } from './components/IntegrationsSection';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { Navigation } from './components/Navigation';
import { SecuritySection } from './components/SecuritySection';
import { UseCasesSection } from './components/UseCasesSection';
import {
  NavigationProvider,
  useNavigation,
} from './contexts/NavigationContext';
import { ThemeProvider } from './contexts/ThemeContext';

function AppContent() {
  const { currentPage, currentArticleId } = useNavigation();

  return (
    <>
      <CssBaseline />
      <Toaster position='bottom-right' />

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
            <SecuritySection />
            <FAQSection />
            <FinalCTA />
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
