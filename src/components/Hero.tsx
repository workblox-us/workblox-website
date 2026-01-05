import { motion } from 'motion/react';
import { ArrowForward, PlayArrow, AutoAwesome } from '@mui/icons-material';
import { Box, Container, Typography, Button } from '@mui/material';
import { useThemeColors } from '../hooks/useThemeColors';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { BetaModal } from './BetaModal';
import { VideoPreviewModal } from './VideoPreviewModal';

export function Hero() {
  const colors = useThemeColors();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [betaModalOpen, setBetaModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pt: 10,
      }}
    >
      {/* Gradient Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: colors.gradient.purple,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: colors.gradient.radialTop,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: colors.gradient.radialBottomRight,
          }}
        />
      </Box>

      {/* Animated Grid */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: colors.grid.background,
          backgroundSize: '64px 64px',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      {/* Subtle Animated Blocks Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          opacity: isDark ? 0.15 : 0.25,
        }}
      >
        {/* Scattered blocks inspired by Workblox logo */}
        {[...Array(15)].map((_, i) => {
          const colors = [
            'rgba(251, 146, 60, 0.6)', // Orange
            'rgba(251, 113, 133, 0.6)', // Pink
            'rgba(34, 211, 238, 0.6)', // Cyan
          ];
          const sizes = [40, 60, 80, 100];
          const randomColor = colors[i % 3];
          const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 5;
          const randomDuration = 15 + Math.random() * 10;

          return (
            <Box
              key={i}
              component={motion.div}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: 'easeInOut',
              }}
              sx={{
                position: 'absolute',
                left: `${randomX}%`,
                top: `${randomY}%`,
                width: randomSize,
                height: randomSize,
                background: randomColor,
                borderRadius: '8px',
                filter: 'blur(2px)',
              }}
            />
          );
        })}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Badge */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 1,
            borderRadius: '50px',
            bgcolor: colors.bg.glass,
            border: `1px solid ${colors.border.light}`,
            backdropFilter: 'blur(8px)',
            mb: 4,
          }}
        >
          <AutoAwesome sx={{ fontSize: '0.875rem', color: '#c084fc' }} />
          <Typography variant="caption" sx={{ color: colors.text.secondary, fontSize: '0.875rem' }}>
            ✨ Limited Beta Access • Q1 2025
          </Typography>
        </Box>

        {/* Headline */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.75rem', md: '4rem', lg: '5.5rem' },
              color: colors.text.primary,
              mb: 3,
              letterSpacing: '-0.02em',
              fontWeight: 700,
            }}
          >
            One Intelligent
            <br />
            <Box
              component="span"
              sx={{
                background: isDark 
                  ? 'linear-gradient(90deg, #c084fc 0%, #60a5fa 50%, #22d3ee 100%)'
                  : 'linear-gradient(90deg, #9333ea 0%, #3b82f6 50%, #0891b2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Workspace
            </Box>
          </Typography>
        </Box>

        {/* Subheading */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              color: colors.text.secondary,
              mb: 2,
              maxWidth: '48rem',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Replace scattered tools with one AI-powered workspace. Plan, prioritize, and execute without the chaos.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.875rem', md: '0.9375rem' },
              color: colors.text.muted,
              mb: 6,
              maxWidth: '42rem',
              mx: 'auto',
            }}
          >
            Built for founders, project managers, and teams managing complex work every day.
          </Typography>
        </Box>

        {/* CTAs */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              px: 4,
              py: 2,
              borderRadius: '12px',
              background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
              color: 'white',
              fontSize: '0.875rem',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                boxShadow: '0 20px 40px rgba(147, 51, 234, 0.5)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                animation: 'shimmer 3s infinite',
              },
              '@keyframes shimmer': {
                '0%': { left: '-100%' },
                '100%': { left: '100%' },
              },
            }}
            onClick={() => setBetaModalOpen(true)}
          >
            Join Early Access
          </Button>
          <Button
            variant="outlined"
            startIcon={<PlayArrow />}
            sx={{
              px: 4,
              py: 2,
              borderRadius: '12px',
              bgcolor: colors.bg.glass,
              border: `1px solid ${colors.border.light}`,
              color: colors.text.primary,
              fontSize: '0.875rem',
              backdropFilter: 'blur(8px)',
              '&:hover': {
                bgcolor: colors.bg.glassHover,
                border: `1px solid ${colors.border.light}`,
              },
            }}
            onClick={() => setVideoModalOpen(true)}
          >
            Watch Preview
          </Button>
        </Box>

        {/* CTA Microcopy */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          sx={{ mb: 8 }}
        >
          <Typography
            variant="caption"
            sx={{
              color: colors.text.muted,
              fontSize: '0.75rem',
            }}
          >
            Limited beta access. Early users help shape the product. No spam.
          </Typography>
        </Box>

        {/* Stats */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, maxWidth: '32rem', mx: 'auto' }}
        >
          {[
            { value: '2.5K+', label: 'Waiting' },
            { value: 'Q1 2025', label: 'Launch' },
            { value: '50+', label: 'Integrations' },
          ].map((stat) => (
            <Box key={stat.label}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, color: colors.text.primary, mb: 0.5, fontWeight: 700 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ color: colors.text.secondary, fontSize: '0.875rem' }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        sx={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)' }}
      >
        <Box
          sx={{
            width: '24px',
            height: '40px',
            borderRadius: '50px',
            border: `2px solid ${colors.border.light}`,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            p: 1,
          }}
        >
          <Box
            component={motion.div}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: colors.text.muted }}
          />
        </Box>
      </Box>

      {/* Beta Modal */}
      <BetaModal open={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
      {/* Video Preview Modal */}
      <VideoPreviewModal open={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </Box>
  );
}