import {
  AccessTime,
  ArrowForward,
  AutoAwesome,
  Engineering,
  Hub,
  PlayArrow,
} from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'motion/react';
import { useState } from 'react';

import { BetaModal } from './BetaModal';
import { VideoPreviewModal } from './VideoPreviewModal';
import { useThemeColors } from '../hooks/useThemeColors';

export function Hero() {
  const colors = useThemeColors();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [betaModalOpen, setBetaModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <Box
      component='section'
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
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      {/* Subtle Animated Blocks Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          opacity: isDark ? 0.8 : 0.25,
          pointerEvents: 'none',
        }}
      >
        {/* Scattered blocks inspired by Workblox logo - Reduced from 15 to 8 blocks */}
        {[...Array(8)].map((_, i) => {
          const colors = [
            'rgba(251, 146, 60, 0.5)', // Orange - reduced opacity
            'rgba(251, 113, 133, 0.5)', // Pink - reduced opacity
            'rgba(34, 211, 238, 0.5)', // Cyan - reduced opacity
          ];
          const sizes = [40, 60, 80];
          const randomColor = colors[i % 3];
          const randomSize = sizes[i % 3];
          const randomX = (i * 13) % 100; // More deterministic positioning
          const randomY = (i * 17) % 100;
          const randomDelay = i * 0.5;
          const randomDuration = 20 + (i % 3) * 5;

          return (
            <Box
              key={i}
              component={motion.div}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.5, 0.3],
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
                filter: 'blur(3px)',
                willChange: 'transform, opacity',
              }}
            />
          );
        })}
      </Box>

      <Container
        maxWidth='lg'
        sx={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          px: { xs: 2.5, sm: 3 },
        }}
      >
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
            px: { xs: 2, sm: 2 },
            py: { xs: 0.75, sm: 1 },
            borderRadius: '50px',
            bgcolor: colors.bg.glass,
            border: `1px solid ${colors.border.light}`,
            backdropFilter: 'blur(8px)',
            mb: { xs: 3, md: 4 },
          }}
        >
          <AutoAwesome
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              color: '#c084fc',
            }}
          />
          <Typography
            variant='caption'
            sx={{
              color: colors.text.secondary,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
            }}
          >
            Early Access · Rolling Invites
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
            variant='h1'
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5.5rem' },
              color: colors.text.primary,
              mb: { xs: 2, md: 3 },
              letterSpacing: '-0.02em',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Work
            <br />
            <Box
              component='span'
              sx={{
                background: isDark
                  ? 'linear-gradient(90deg, #c084fc 0%, #60a5fa 50%, #22d3ee 100%)'
                  : 'linear-gradient(90deg, #9333ea 0%, #3b82f6 50%, #0891b2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Finally Under Control
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
            variant='h6'
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              color: colors.text.secondary,
              mb: { xs: 1.5, md: 2 },
              maxWidth: { xs: '100%', sm: '42rem', md: '48rem' },
              mx: 'auto',
              lineHeight: 1.6,
              px: { xs: 1, sm: 0 },
            }}
          >
            Workblox brings tasks, recurring processes, calendar, docs, and
            conversations into one AI workspace.
          </Typography>
          <Typography
            variant='body1'
            sx={{
              fontSize: { xs: '0.9375rem', sm: '0.9375rem' },
              color: colors.text.muted,
              mb: { xs: 4, md: 6 },
              maxWidth: { xs: '100%', sm: '36rem', md: '42rem' },
              mx: 'auto',
              px: { xs: 1, sm: 0 },
            }}
          >
            Built for teams managing ongoing operations and complex projects.
          </Typography>
        </Box>

        {/* CTAs */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            mb: { xs: 1.5, md: 2 },
            px: { xs: 1, sm: 0 },
          }}
        >
          <Button
            variant='contained'
            endIcon={<ArrowForward />}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              px: { xs: 3, sm: 4 },
              py: { xs: 1.75, sm: 2 },
              borderRadius: '12px',
              background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
              color: 'white',
              fontSize: { xs: '0.9375rem', sm: '0.875rem' },
              fontWeight: 600,
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
                background:
                  'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                animation: 'shimmer 3s infinite',
              },
              '@keyframes shimmer': {
                '0%': { left: '-100%' },
                '100%': { left: '100%' },
              },
            }}
            onClick={() => setBetaModalOpen(true)}
          >
            Get Early Access
          </Button>
          <Button
            variant='outlined'
            startIcon={<PlayArrow />}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              px: { xs: 3, sm: 4 },
              py: { xs: 1.75, sm: 2 },
              borderRadius: '12px',
              bgcolor: colors.bg.glass,
              border: `1px solid ${colors.border.light}`,
              color: colors.text.primary,
              fontSize: { xs: '0.9375rem', sm: '0.875rem' },
              fontWeight: 500,
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
          sx={{ mb: { xs: 6, md: 10 } }}
        >
          <Typography
            variant='caption'
            sx={{
              color: colors.text.muted,
              fontSize: { xs: '0.8125rem', sm: '0.75rem' },
            }}
          >
            Early access invites go out in waves. No spam.
          </Typography>
        </Box>

        {/* Credibility Row */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 2.5, md: 3 },
            maxWidth: '72rem',
            mx: 'auto',
          }}
        >
          {[
            {
              icon: AccessTime,
              iconColor: '#c084fc',
              iconBg: 'rgba(192, 132, 252, 0.1)',
              primary: 'Early access, rolling out in waves',
              secondary:
                'We onboard teams gradually to ensure quality and momentum',
            },
            {
              icon: Engineering,
              iconColor: '#60a5fa',
              iconBg: 'rgba(96, 165, 250, 0.1)',
              primary: 'Designed for real work',
              secondary:
                'Ongoing operations, recurring processes, and complex projects in one place',
            },
            {
              icon: Hub,
              iconColor: '#22d3ee',
              iconBg: 'rgba(34, 211, 238, 0.1)',
              primary: 'Deep integrations, platform-first',
              secondary:
                'Email, calendar, docs, chat, and tools unified in one workspace',
            },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Box
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 4 },
                  borderRadius: '16px',
                  bgcolor: colors.bg.glass,
                  border: `1px solid ${colors.border.light}`,
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isDark
                      ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px ${item.iconColor}33`
                      : `0 20px 40px rgba(0, 0, 0, 0.1), 0 0 20px ${item.iconColor}33`,
                    border: `1px solid ${item.iconColor}66`,
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    borderRadius: '12px',
                    bgcolor: item.iconBg,
                    mb: { xs: 2, md: 3 },
                  }}
                >
                  <IconComponent
                    sx={{
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      color: item.iconColor,
                    }}
                  />
                </Box>

                {/* Primary Text */}
                <Typography
                  variant='h6'
                  sx={{
                    color: colors.text.primary,
                    mb: 1.5,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.4,
                  }}
                >
                  {item.primary}
                </Typography>

                {/* Supporting Text */}
                <Typography
                  variant='body2'
                  sx={{
                    color: colors.text.secondary,
                    fontSize: { xs: '0.875rem', md: '0.9375rem' },
                    lineHeight: 1.6,
                  }}
                >
                  {item.secondary}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        sx={{
          position: 'absolute',
          bottom: 4,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
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
            sx={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              bgcolor: colors.text.muted,
            }}
          />
        </Box>
      </Box>

      {/* Beta Modal */}
      <BetaModal open={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
      {/* Video Preview Modal */}
      <VideoPreviewModal
        open={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </Box>
  );
}
