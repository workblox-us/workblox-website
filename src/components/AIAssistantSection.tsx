import { AutoAwesome, Bolt, Psychology, Security } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';

import { useThemeColors } from '../hooks/useThemeColors';

export function AIAssistantSection() {
  const colors = useThemeColors();
  const aiFeatures = [
    {
      icon: Psychology,
      title: 'Understands Context',
      description:
        "AI that knows what you're working on and what matters right now",
    },
    {
      icon: Bolt,
      title: 'Helpful, Not Intrusive',
      description: 'Get suggestions and clarity exactly when you need them',
    },
    {
      icon: Security,
      title: 'Privacy You Control',
      description: 'Your data stays yours. AI works on your terms, always.',
    },
  ];

  return (
    <Box
      component='section'
      sx={{ position: 'relative', py: { xs: 10, md: 16 }, overflow: 'hidden' }}
    >
      {/* Background Effects - Simplified */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: colors.isDark
            ? 'linear-gradient(to bottom, #000000, rgba(30, 64, 175, 0.1), #000000)'
            : 'linear-gradient(to bottom, #ffffff, rgba(168, 85, 247, 0.03), #f8f9fa)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          bgcolor: colors.isDark
            ? 'rgba(147, 51, 234, 0.15)'
            : 'rgba(147, 51, 234, 0.04)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 10 }}>
        {/* Centered Header Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: 'center',
            mb: 8,
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: '50px',
              bgcolor: colors.badge.bg,
              border: `1px solid ${colors.border.accent}`,
              backdropFilter: 'blur(8px)',
              mb: 3,
            }}
          >
            <AutoAwesome
              sx={{
                fontSize: '0.875rem',
                color: colors.isDark ? '#c084fc' : '#7c3aed',
              }}
            />
            <Typography
              variant='caption'
              sx={{ color: colors.badge.text, fontSize: '0.75rem' }}
            >
              AI Partner
            </Typography>
          </Box>

          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '2.25rem', md: '3rem' },
              color: colors.text.primary,
              mb: 3,
              fontWeight: 700,
            }}
          >
            Your Intelligent{' '}
            <Box
              component='span'
              sx={{
                background: 'linear-gradient(90deg, #c084fc 0%, #f472b6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Work Partner
            </Box>
          </Typography>

          <Typography
            variant='h6'
            sx={{
              color: colors.text.secondary,
              lineHeight: 1.7,
              fontSize: '1.0625rem',
              maxWidth: '42rem',
              mx: 'auto',
            }}
          >
            AI that helps without getting in the way. Get clarity, suggestions,
            and support exactly when you need it.
          </Typography>
        </Box>

        {/* Features and Demo Section */}
        <Box>
          {/* Features as Horizontal Cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Box
                  key={feature.title}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  sx={{
                    position: 'relative',
                    p: 3,
                    borderRadius: '16px',
                    background: colors.isDark
                      ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(147, 51, 234, 0.02))'
                      : 'linear-gradient(135deg, rgba(147, 51, 234, 0.06), rgba(255, 255, 255, 0.8))',
                    border: colors.isDark
                      ? '1px solid rgba(147, 51, 234, 0.2)'
                      : '1px solid rgba(147, 51, 234, 0.15)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: colors.isDark
                        ? '0 12px 40px rgba(147, 51, 234, 0.2)'
                        : '0 12px 40px rgba(147, 51, 234, 0.15)',
                      border: colors.isDark
                        ? '1px solid rgba(147, 51, 234, 0.4)'
                        : '1px solid rgba(147, 51, 234, 0.3)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      borderRadius: '16px 16px 0 0',
                      background:
                        'linear-gradient(90deg, #c084fc 0%, #f472b6 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: colors.isDark
                        ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(147, 51, 234, 0.1))'
                        : 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(147, 51, 234, 0.05))',
                      border: colors.isDark
                        ? '1px solid rgba(147, 51, 234, 0.3)'
                        : '1px solid rgba(147, 51, 234, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: '1.5rem',
                        color: colors.isDark ? '#c084fc' : '#7c3aed',
                      }}
                    />
                  </Box>
                  <Typography
                    variant='h6'
                    sx={{
                      color: colors.text.primary,
                      mb: 1,
                      fontWeight: 600,
                      fontSize: '1rem',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      color: colors.text.secondary,
                      lineHeight: 1.6,
                      fontSize: '0.875rem',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
