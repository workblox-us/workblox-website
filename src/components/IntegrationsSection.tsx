import { TrendingUp } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { useNavigation } from '../contexts/NavigationContext';
import { useThemeColors } from '../hooks/useThemeColors';

export function IntegrationsSection() {
  const colors = useThemeColors();
  const { navigateTo } = useNavigation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Comprehensive integration list with real logos
  const integrations = [
    // Top row - evenly spaced
    {
      name: 'Figma',
      logo: 'https://cdn.worldvectorlogo.com/logos/figma-5.svg',
      x: 20,
      y: 15,
    },
    {
      name: 'Linear',
      logo: 'https://asset.brandfetch.io/idAh6L0gOs/idwfP0bCjH.svg',
      x: 35,
      y: 12,
    },
    {
      name: 'Jira',
      logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
      x: 50,
      y: 10,
    },
    {
      name: 'Zoom',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg',
      x: 65,
      y: 12,
    },
    {
      name: 'Airtable',
      logo: 'https://cdn.worldvectorlogo.com/logos/airtable-1.svg',
      x: 80,
      y: 15,
    },

    // Upper-middle row
    {
      name: 'Slack',
      logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
      x: 12,
      y: 30,
    },
    {
      name: 'Dropbox',
      logo: 'https://cdn.worldvectorlogo.com/logos/dropbox-1.svg',
      x: 25,
      y: 28,
    },
    {
      name: 'Mailchimp',
      logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg',
      x: 34,
      y: 28,
    },
    {
      name: 'Trello',
      logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg',
      x: 62,
      y: 27,
    },
    {
      name: 'Microsoft Teams',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
      x: 75,
      y: 28,
    },
    {
      name: 'Stripe',
      logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
      x: 88,
      y: 30,
    },

    // Middle row - left and right of center
    {
      name: 'Adobe Illustrator',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
      x: 8,
      y: 48,
    },
    {
      name: 'WhatsApp',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
      x: 22,
      y: 50,
    },
    {
      name: 'Gmail',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
      x: 35,
      y: 52,
    },
    // Center space reserved for Workblox
    {
      name: 'Notion',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      x: 65,
      y: 52,
    },
    {
      name: 'Asana',
      logo: 'https://cdn.worldvectorlogo.com/logos/asana-logo.svg',
      x: 78,
      y: 50,
    },
    {
      name: 'Twilio',
      logo: 'https://cdn.worldvectorlogo.com/logos/twilio.svg',
      x: 92,
      y: 48,
    },

    // Lower-middle row
    {
      name: 'Google Drive',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg',
      x: 12,
      y: 70,
    },
    {
      name: 'ClickUp',
      logo: 'https://cdn.worldvectorlogo.com/logos/clickup.svg',
      x: 25,
      y: 72,
    },
    {
      name: 'HubSpot',
      logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg',
      x: 38,
      y: 73,
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
      x: 62,
      y: 73,
    },
    {
      name: 'Shopify',
      logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
      x: 75,
      y: 72,
    },
    {
      name: 'Salesforce',
      logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
      x: 88,
      y: 70,
    },

    // Bottom row - evenly spaced
    {
      name: 'Intercom',
      logo: 'https://cdn.worldvectorlogo.com/logos/intercom-1.svg',
      x: 20,
      y: 85,
    },
    {
      name: 'Monday.com',
      logo: 'https://cdn.worldvectorlogo.com/logos/monday-1.svg',
      x: 35,
      y: 88,
    },
    {
      name: 'Zapier',
      logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg',
      x: 50,
      y: 90,
    },
    {
      name: 'Google Workspace',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg',
      x: 65,
      y: 88,
    },
    {
      name: 'Microsoft Teams',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
      x: 80,
      y: 85,
    },
  ];

  return (
    <Box
      component='section'
      id='integrations'
      sx={{
        position: 'relative',
        py: { xs: 12, md: 20 },
        overflow: 'hidden',
        bgcolor: colors.bg.primary,
        background: colors.isDark
          ? 'radial-gradient(ellipse at center top, rgba(59, 130, 246, 0.05) 0%, #000000 50%)'
          : 'radial-gradient(ellipse at center top, rgba(139, 92, 246, 0.04) 0%, #ffffff 50%)',
      }}
    >
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Pill Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 1,
                borderRadius: '50px',
                bgcolor: colors.badge.bg,
                border: `1px solid ${colors.border.accent}`,
                backdropFilter: 'blur(12px)',
                mb: 3,
              }}
            >
              <TrendingUp
                sx={{ fontSize: '0.875rem', color: colors.badge.text }}
              />
              <Typography
                variant='caption'
                sx={{
                  color: colors.badge.text,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                Integrations
              </Typography>
            </Box>

            {/* Headline */}
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '2.25rem', md: '3rem' },
                color: colors.text.primary,
                mb: 3,
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Connect The Tools{' '}
              <Box
                component='span'
                sx={{
                  background:
                    'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                You Already Use
              </Box>
            </Typography>

            {/* Subheader */}
            <Typography
              variant='h6'
              sx={{
                fontSize: { xs: '1.0625rem', md: '1.125rem' },
                color: colors.text.secondary,
                maxWidth: '48rem',
                mx: 'auto',
                mb: 8,
                lineHeight: 1.7,
              }}
            >
              Workblox pulls context from email, calendar, chat, docs, and
              project tools so work stays connected.
            </Typography>
          </motion.div>

          {/* Integration Grid - Desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'relative',
              width: '100%',
              height: '600px',
              mb: 8,
            }}
          >
            {/* SVG Connection Lines */}
            <Box
              component='svg'
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            >
              {/* Draw connection lines to center */}
              {[0, 3, 4, 6, 9, 13, 16, 18].map((index) => {
                const integration = integrations[index];
                return (
                  <line
                    key={`line-${index}`}
                    x1='50%'
                    y1='50%'
                    x2={`${integration.x}%`}
                    y2={`${integration.y}%`}
                    stroke='rgba(59, 130, 246, 0.2)'
                    strokeWidth='1'
                    opacity='0.3'
                  />
                );
              })}
            </Box>

            {/* Central Workblox Hub */}
            <Box
              component={motion.div}
              animate={{
                boxShadow: [
                  '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)',
                  '0 0 60px rgba(59, 130, 246, 0.6), 0 0 100px rgba(59, 130, 246, 0.3)',
                  '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: 120, md: 160 },
                height: { xs: 120, md: 160 },
                borderRadius: '24px',
                background: colors.isDark
                  ? 'rgba(10, 10, 20, 0.9)'
                  : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.08))',
                border: colors.isDark
                  ? '1px solid rgba(59, 130, 246, 0.5)'
                  : '1px solid rgba(139, 92, 246, 0.25)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 30,
                padding: 5,
              }}
            >
              <Box
                component={'img'}
                alt='Workblox Logo'
                src='/images/icon.svg'
                sx={{ width: '100%', height: '100%' }}
              />
            </Box>

            {/* Integration Icons - Scattered Layout */}
            {integrations.map((integration, index) => (
              <Box
                key={`${integration.name}-${index}`}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.15 }}
                sx={{
                  position: 'absolute',
                  left: `${integration.x}%`,
                  top: `${integration.y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: { xs: 50, md: 70 },
                  height: { xs: 50, md: 70 },
                  borderRadius: '16px',
                  background: colors.isDark
                    ? 'rgba(30, 30, 40, 0.8)'
                    : 'rgba(248, 250, 252, 0.95)',
                  border: colors.isDark
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(15, 23, 42, 0.12)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 1.5,
                  cursor: 'pointer',
                  zIndex: 20,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: colors.isDark
                      ? 'rgba(40, 40, 50, 0.9)'
                      : 'rgba(255, 255, 255, 1)',
                    border: '1px solid rgba(147, 51, 234, 0.5)',
                    boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3)',
                  },
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Box
                  component='img'
                  src={integration.logo}
                  alt={integration.name}
                  sx={{
                    width: '65%',
                    height: '65%',
                    objectFit: 'contain',
                    filter:
                      hoveredIndex === index
                        ? 'brightness(1.2)'
                        : colors.isDark
                        ? 'brightness(0.9)'
                        : 'brightness(1)',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Mobile Grid */}
          <Box
            sx={{
              display: { xs: 'grid', md: 'none' },
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2,
              mb: 8,
              maxWidth: '400px',
              mx: 'auto',
            }}
          >
            {/* Central Workblox Card for Mobile */}
            <Box
              sx={{
                gridColumn: '2 / 3',
                gridRow: '2 / 3',
                aspectRatio: '1',
                borderRadius: '16px',
                background: colors.isDark
                  ? 'rgba(10, 10, 20, 0.9)'
                  : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.08))',
                border: colors.isDark
                  ? '1px solid rgba(59, 130, 246, 0.5)'
                  : '1px solid rgba(139, 92, 246, 0.25)',
                boxShadow: colors.isDark
                  ? '0 0 30px rgba(59, 130, 246, 0.4)'
                  : '0 0 20px rgba(139, 92, 246, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TrendingUp
                sx={{
                  fontSize: '2.5rem',
                  color: colors.isDark ? '#ffffff' : '#6366f1',
                }}
              />
            </Box>

            {/* Mobile Integration Icons */}
            {integrations.slice(0, 8).map((integration, index) => {
              // Skip the center position on mobile
              if (index === 4) return null;

              return (
                <Box
                  key={`mobile-${integration.name}-${index}`}
                  sx={{
                    aspectRatio: '1',
                    borderRadius: '12px',
                    background: colors.isDark
                      ? 'rgba(30, 30, 40, 0.8)'
                      : 'rgba(248, 250, 252, 0.95)',
                    border: colors.isDark
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(15, 23, 42, 0.12)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                  }}
                >
                  <Box
                    component='img'
                    src={integration.logo}
                    alt={integration.name}
                    sx={{
                      width: '60%',
                      height: '60%',
                      objectFit: 'contain',
                      filter: colors.isDark
                        ? 'brightness(0.9)'
                        : 'brightness(1)',
                    }}
                  />
                </Box>
              );
            })}
          </Box>

          {/* CTA Button */}
          <Button
            variant='contained'
            component={Link}
            href='/integrations'
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 500,
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
              color: '#ffffff',
              textTransform: 'none',
              boxShadow: '0 4px 20px rgba(147, 51, 234, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #a855f7 0%, #60a5fa 100%)',
                boxShadow: '0 6px 30px rgba(147, 51, 234, 0.6)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Explore all integrations
          </Button>
        </Box>

        {/* Stats Section */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            maxWidth: '800px',
            mx: 'auto',
            mt: { xs: 10, md: 12 },
          }}
        >
          {[
            { value: '100+', label: 'Integrations' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: 'Real-time', label: 'Data Sync' },
          ].map((stat) => (
            <Box
              key={stat.label}
              sx={{
                textAlign: 'center',
                p: 3.5,
                borderRadius: '16px',
                bgcolor: colors.isDark
                  ? 'rgba(255, 255, 255, 0.02)'
                  : 'rgba(139, 92, 246, 0.04)',
                border: colors.isDark
                  ? '1px solid rgba(255, 255, 255, 0.05)'
                  : '1px solid rgba(139, 92, 246, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: colors.isDark
                    ? 'rgba(255, 255, 255, 0.04)'
                    : 'rgba(139, 92, 246, 0.08)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  fontSize: '1.75rem',
                  color: colors.isDark
                    ? 'rgba(255, 255, 255, 0.95)'
                    : colors.text.primary,
                  mb: 0.5,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant='caption'
                sx={{
                  color: colors.isDark
                    ? 'rgba(255, 255, 255, 0.6)'
                    : colors.text.secondary,
                  fontSize: '0.8125rem',
                  letterSpacing: '0.02em',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
