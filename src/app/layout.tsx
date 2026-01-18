import { Box } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import type { Metadata } from 'next';
import * as React from 'react';

import { SITE_CONFIG } from '@/constants';
import { GLOBAL_STYLES } from '@/styles';
import './style.css';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  robots: { index: true, follow: true },
  metadataBase: new URL(SITE_CONFIG.url),
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
    images: [`${SITE_CONFIG.url}/favicon/android-chrome-192-192.png`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/images/og.jpg`],
  },
  authors: [{ name: 'Alex', url: 'https://hihb.com' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <GlobalStyles styles={GLOBAL_STYLES} />
        <Providers>
          <Box
            sx={{
              width: '100%',
              minHeight: '100vh',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
