import { motion } from 'motion/react';
import { LightMode, DarkMode } from '@mui/icons-material';
import { Box, Container, Button, IconButton, useTheme } from '@mui/material';
import { WorkbloxLogo } from './WorkbloxLogo';
import { useThemeMode } from '../contexts/ThemeContext';
import { useNavigation } from '../contexts/NavigationContext';
import { useState } from 'react';
import { SignInModal } from './SignInModal';
import { BetaModal } from './BetaModal';
import { Dashboard } from './Dashboard';
import { useThemeColors } from '@/hooks/useThemeColors';

export function Navigation() {
  const colors = useThemeColors();
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const { navigateTo, currentPage } = useNavigation();
  const [signInOpen, setSignInOpen] = useState(false);
  const [betaModalOpen, setBetaModalOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleSignInSuccess = () => {
    setIsSignedIn(true);
    setSignInOpen(false);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUserEmail('');
  };

  // Handle navigation to sections - works from any page
  const handleSectionClick = (sectionId: string) => {
    if (currentPage !== 'home') {
      // If not on home page, navigate home first, then scroll
      navigateTo('home');
      // Small delay to ensure home page is rendered
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Account for fixed nav height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // If signed in, show dashboard instead of navigation
  if (isSignedIn) {
    return <Dashboard userEmail={userEmail} onSignOut={handleSignOut} />;
  }

  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(24px)',
        bgcolor: mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.7)',
        borderBottom: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: { xs: '64px', md: '80px' } }}>
          {/* Logo */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigateTo('home')}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
          >
            <Box
              component="img"
              src={colors.isDark ? "/images/workblox-logo.png" : "/images/workblox-logo-light.png"}
              alt="Workblox"
              sx={{
                height: 28, // responsive
                width: "auto",
                display: "block",
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}
          >
            <Box
              component="button"
              onClick={() => handleSectionClick('features')}
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
              component="button"
              onClick={() => handleSectionClick('solutions')}
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
              component="button"
              onClick={() => navigateTo('articles')}
              sx={{
                background: 'none',
                border: 'none',
                color: currentPage === 'articles' || currentPage === 'article'
                  ? theme.palette.text.primary
                  : theme.palette.text.secondary,
                textDecoration: 'none',
                transition: 'color 0.2s',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: currentPage === 'articles' || currentPage === 'article' ? 600 : 400,
                '&:hover': { color: theme.palette.text.primary },
              }}
            >
              Articles
            </Box>
            <Box
              component="button"
              onClick={() => handleSectionClick('integrations')}
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
              component="button"
              onClick={() => handleSectionClick('security')}
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
          </Box>

          {/* CTA Buttons & Theme Toggle */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}
          >
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: theme.palette.text.primary,
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'rotate(180deg)',
                },
              }}
            >
              {mode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
            <Button
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': { color: theme.palette.text.primary },
                display: { xs: 'none', sm: 'inline-flex' }
              }}
              onClick={() => setSignInOpen(true)}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                color: 'white',
                fontSize: { xs: '0.875rem', md: '1rem' },
                px: { xs: 2, md: 3 },
                '&:hover': {
                  boxShadow: '0 10px 30px rgba(147, 51, 234, 0.5)',
                },
              }}
              onClick={() => setBetaModalOpen(true)}
            >
              Join Beta
            </Button>
          </Box>
        </Box>
      </Container>
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} onSignInSuccess={handleSignInSuccess} />
      <BetaModal open={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
    </Box>
  );
}