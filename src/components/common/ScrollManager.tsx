'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

import { useNavigation } from '@/contexts/NavigationContext';

function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { currentPage } = useNavigation();

  // Sync NavigationContext currentPage with Next.js pathname
  useEffect(() => {
    const page = pathname === '/' ? 'home' : pathname.split('/')[1];
    if (page !== currentPage) {
      // We use a silent version of navigateTo if possible,
      // but here we just want to keep the context in sync
      // without triggering the scroll-to-top that navigateTo does.
      // Since NavigationContext is simple, we'll just use it as is for now.
      // Optimization: If navigateTo is updated to accept a 'silent' flag, use it.
    }
  }, [pathname, currentPage]);

  // Handle hash scrolling
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Add a small delay for page-to-page transitions
          setTimeout(() => {
            const offset = 80; // Fixed navbar height
            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }, 100);
        }
      }
    };

    // Initial check on mount/route change
    handleHashScroll();

    // Also listen for hash changes on the same page
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, [pathname, searchParams]);

  return null;
}

export function ScrollManager() {
  return (
    <Suspense fallback={null}>
      <ScrollHandler />
    </Suspense>
  );
}
