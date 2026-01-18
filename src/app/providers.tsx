'use client';

import * as React from 'react';

import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { ScrollManager } from '@/components/common/ScrollManager';
import { NavigationProvider } from '@/contexts/NavigationContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <ScrollManager />
        <Navigation />
        {children}
        <Footer />
      </NavigationProvider>
    </ThemeProvider>
  );
}
