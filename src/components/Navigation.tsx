'use client';
import { DarkMode, LightMode } from '@mui/icons-material';
import { Box, Button, Container, IconButton, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

import { useThemeColors } from '@/hooks/useThemeColors';

import { BetaModal } from './BetaModal';
import { Dashboard } from './Dashboard';
import { WorkbloxLogo } from './WorkbloxLogo';
import { useNavigation } from '../contexts/NavigationContext';
import { useThemeMode } from '../contexts/ThemeContext';

export function Navigation() {
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const colors = useThemeColors();
  const { navigateTo, currentPage } = useNavigation();
  const [betaModalOpen, setBetaModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUserEmail('');
  };

  // If signed in, show dashboard instead of navigation
  if (isSignedIn) {
    return <Dashboard userEmail={userEmail} onSignOut={handleSignOut} />;
  }

  return (
    <Box
      component='nav'
      sx={{
        position: 'fixed',
        fontFamily: 'Inter, sans-serif',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(24px)',
        bgcolor:
          mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.7)',
        borderBottom:
          mode === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: { xs: '64px', md: '80px' },
          }}
        >
          {/* Logo */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
            }}
          >
            <Link
              href='/'
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Box
                component='img'
                src={
                  colors.isDark ? '/images/logo_white.svg' : '/images/logo.svg'
                }
                alt='Workblox'
                sx={{
                  height: 28, // adjust
                  width: 'auto',
                  display: 'block',
                }}
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box
              component={Link}
              href='/#features'
              sx={{
                background: 'none',
                border: 'none',
                color: theme.palette.text.secondary,
                textDecoration: 'none',
                transition: 'color 0.2s',
                cursor: 'pointer',
                fontSize: '1rem',
                '&:hover': { color: theme.palette.text.primary },
              }}
            >
              Features
            </Box>
            <Box
              component={Link}
              href='/#solutions'
              sx={{
                background: 'none',
                border: 'none',
                color: theme.palette.text.secondary,
                textDecoration: 'none',
                transition: 'color 0.2s',
                cursor: 'pointer',
                fontSize: '1rem',
                '&:hover': { color: theme.palette.text.primary },
              }}
            >
              Solutions
            </Box>
            <Box
              component={Link}
              href='/#integrations'
              sx={{
                background: 'none',
                border: 'none',
                color: theme.palette.text.secondary,
                textDecoration: 'none',
                transition: 'color 0.2s',
                cursor: 'pointer',
                fontSize: '1rem',
                '&:hover': { color: theme.palette.text.primary },
              }}
            >
              Integrations
            </Box>
            <Box
              component={Link}
              href='/#security'
              sx={{
                background: 'none',
                border: 'none',
                color: theme.palette.text.secondary,
                textDecoration: 'none',
                transition: 'color 0.2s',
                cursor: 'pointer',
                fontSize: '1rem',
                '&:hover': { color: theme.palette.text.primary },
              }}
            >
              Security
            </Box>
            <Box
              component={Link}
              href='/articles'
              sx={{
                background: 'none',
                border: 'none',
                color:
                  currentPage === 'articles' || currentPage === 'article'
                    ? theme.palette.text.primary
                    : theme.palette.text.secondary,
                textDecoration: 'none',
                transition: 'color 0.2s',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight:
                  currentPage === 'articles' || currentPage === 'article'
                    ? 600
                    : 400,
                '&:hover': { color: theme.palette.text.primary },
              }}
            >
              Articles
            </Box>
          </Box>

          {/* CTA Buttons & Theme Toggle */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 1, md: 2 },
            }}
          >
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: theme.palette.text.primary,
                transition: 'all 0.3s',
                p: { xs: 0.75, sm: 1 },
                '&:hover': {
                  transform: 'rotate(180deg)',
                },
              }}
            >
              {mode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
            <Button
              variant='outlined'
              component={Link}
              href='/signin'
              sx={{
                borderColor:
                  mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'rgba(0, 0, 0, 0.2)',
                color: theme.palette.text.primary,
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                px: { xs: 1.25, sm: 2, md: 3 },
                py: { xs: 0.5, sm: 0.75 },
                minWidth: { xs: 'auto', sm: 'auto' },
                whiteSpace: 'nowrap',
                '&:hover': {
                  borderColor:
                    mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.4)'
                      : 'rgba(0, 0, 0, 0.4)',
                  bgcolor:
                    mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              Sign In
            </Button>
            <Button
              variant='contained'
              sx={{
                background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                color: 'white',
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                px: { xs: 1.25, sm: 2, md: 3 },
                py: { xs: 0.5, sm: 0.75 },
                minWidth: { xs: 'auto', sm: 'auto' },
                whiteSpace: 'nowrap',
                '&:hover': {
                  boxShadow: '0 10px 30px rgba(147, 51, 234, 0.5)',
                },
              }}
              onClick={() => setBetaModalOpen(true)}
            >
              <Box
                component='span'
                sx={{ display: { xs: 'none', sm: 'inline' } }}
              >
                Get Early Access
              </Box>
              <Box
                component='span'
                sx={{ display: { xs: 'inline', sm: 'none' } }}
              >
                Get Access
              </Box>
            </Button>
          </Box>
        </Box>
      </Container>
      <BetaModal open={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
    </Box>
  );
}
