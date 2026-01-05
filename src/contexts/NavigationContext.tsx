import { createContext, useContext, ReactNode, useState, useCallback } from 'react';

interface NavigationContextType {
  currentPage: string;
  currentArticleId: string | null;
  navigateTo: (page: string, articleId?: string) => void;
  goBack: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null);
  const [history, setHistory] = useState<Array<{ page: string; articleId?: string }>>([{ page: 'home' }]);

  const navigateTo = useCallback((page: string, articleId?: string) => {
    setCurrentPage(page);
    setCurrentArticleId(articleId || null);
    setHistory(prev => [...prev, { page, articleId }]);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goBack = useCallback(() => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop(); // Remove current page
      const previousPage = newHistory[newHistory.length - 1];
      
      setCurrentPage(previousPage.page);
      setCurrentArticleId(previousPage.articleId || null);
      setHistory(newHistory);
      
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [history]);

  return (
    <NavigationContext.Provider 
      value={{ 
        currentPage, 
        currentArticleId, 
        navigateTo, 
        goBack 
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}