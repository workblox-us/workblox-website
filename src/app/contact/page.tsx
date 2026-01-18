'use client';

import {
  AttachMoney,
  Business,
  Email,
  Handshake,
  Newspaper,
  RocketLaunch,
  Article,
  TrendingUp,
} from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';

import { useThemeColors } from '@/hooks/useThemeColors';

import { SEOHead } from '@/components/SEOHead';

import { useNavigation } from '@/contexts/NavigationContext';

export default function ContactPage() {
  const colors = useThemeColors();
  const { navigateTo } = useNavigation();

  const contactBlocks = [
    {
      icon: Email,
      title: 'General',
      email: 'hello@workblox.ai',
      color: '#3b82f6',
    },
    {
      icon: Business,
      title: 'Partnerships',
      email: 'partnerships@workblox.ai',
      color: '#16a34a',
    },
    {
      icon: TrendingUp,
      title: 'Investors',
      email: 'investors@workblox.ai',
      color: '#9333ea',
    },
    {
      icon: Newspaper,
      title: 'Press',
      email: 'press@workblox.ai',
      color: '#0891b2',
    },
  ];

  const contactReasons = [
    {
      icon: RocketLaunch,
      title: 'Early Access & Onboarding',
      description:
        'Join the waitlist, get onboarding support, and ask product questions',
      color: '#8b5cf6',
      gradient:
        'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))',
    },
    {
      icon: Handshake,
      title: 'Partnerships & Integrations',
      description:
        'Explore integration opportunities and strategic partnerships',
      color: '#16a34a',
      gradient:
        'linear-gradient(135deg, rgba(22, 163, 74, 0.15), rgba(22, 163, 74, 0.05))',
    },
    {
      icon: AttachMoney,
      title: 'Investor Relations',
      description:
        'Product roadmap discussions, growth metrics, and fundraising inquiries',
      color: '#9333ea',
      gradient:
        'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(147, 51, 234, 0.05))',
    },
    {
      icon: Article,
      title: 'Press & Media',
      description: 'Media kits, product announcements, and interview requests',
      color: '#0891b2',
      gradient:
        'linear-gradient(135deg, rgba(8, 145, 178, 0.15), rgba(8, 145, 178, 0.05))',
    },
  ];

  const handleGetEarlyAccess = () => {
    navigateTo('home');
    setTimeout(() => {
      const heroSection = document.querySelector('section');
      heroSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      <SEOHead page='contact' />

      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: colors.isDark ? '#000000' : '#ffffff',
          pt: { xs: 12, md: 16 },
          pb: { xs: 6, md: 8 },
        }}
      >
        {/* Background Effects */}
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            background: colors.isDark
              ? 'radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.1), transparent 50%)'
              : 'radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.05), transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        <Container
          maxWidth='md'
          sx={{ position: 'relative', zIndex: 1, px: { xs: 2.5, sm: 3 } }}
        >
          {/* Header */}
          <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  background: colors.isDark
                    ? 'linear-gradient(135deg, #ffffff, #c084fc)'
                    : 'linear-gradient(135deg, #000000, #9333ea)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2,
                }}
              >
                Contact
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: colors.text.primary,
                  lineHeight: 1.7,
                  maxWidth: '40rem',
                  mx: 'auto',
                  px: { xs: 1, sm: 0 },
                }}
              >
                Questions, partnerships, or early access requests—reach out
                anytime.
              </Typography>
            </motion.div>
          </Box>

          {/* Contact Blocks */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: { xs: 2.5, md: 3 },
              mb: { xs: 8, md: 10 },
            }}
          >
            {contactBlocks.map((block, index) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      borderRadius: '12px',
                      bgcolor: colors.isDark
                        ? 'rgba(255, 255, 255, 0.03)'
                        : 'rgba(0, 0, 0, 0.02)',
                      border: colors.isDark
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : '1px solid rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: colors.isDark
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.04)',
                        border: `1px solid ${block.color}40`,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 24px ${block.color}20`,
                      },
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: { xs: '1.75rem', md: '2rem' },
                        color: block.color,
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant='h6'
                      sx={{
                        fontWeight: 600,
                        color: colors.text.primary,
                        mb: 1,
                        fontSize: { xs: '1rem', md: '1.125rem' },
                      }}
                    >
                      {block.title}
                    </Typography>
                    <Typography
                      component='a'
                      href={`mailto:${block.email}`}
                      sx={{
                        color: block.color,
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', md: '0.9375rem' },
                        textDecoration: 'none',
                        wordBreak: 'break-all',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {block.email}
                    </Typography>
                  </Box>
                </motion.div>
              );
            })}
          </Box>

          {/* Divider */}
          <Box
            sx={{
              height: 1,
              bgcolor: colors.isDark
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.1)',
              mb: { xs: 6, md: 8 },
            }}
          />

          {/* What to contact us about */}
          <Box sx={{ mb: { xs: 8, md: 10 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                  fontWeight: 600,
                  color: colors.text.primary,
                  mb: { xs: 1, md: 1 },
                  lineHeight: 1.3,
                  textAlign: 'center',
                }}
              >
                What to contact us about
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: colors.text.secondary,
                  mb: 5,
                  textAlign: 'center',
                  maxWidth: '36rem',
                  mx: 'auto',
                }}
              >
                We're here to help with questions, partnerships, and getting you
                started with Workblox
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 3,
                }}
              >
                {contactReasons.map((reason, index) => {
                  const ReasonIcon = reason.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Box
                        sx={{
                          p: 4,
                          borderRadius: '16px',
                          background: colors.isDark
                            ? reason.gradient
                            : reason.gradient,
                          border: colors.isDark
                            ? `1px solid ${reason.color}30`
                            : `1px solid ${reason.color}40`,
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'default',
                          height: '100%',
                          '&:hover': {
                            border: `1px solid ${reason.color}`,
                            transform: 'translateY(-4px)',
                            boxShadow: `0 12px 32px ${reason.color}30`,
                            '& .reason-icon': {
                              transform: 'scale(1.1) rotate(5deg)',
                            },
                            '& .glow-effect': {
                              opacity: 1,
                            },
                          },
                        }}
                      >
                        {/* Glow Effect */}
                        <Box
                          className='glow-effect'
                          sx={{
                            position: 'absolute',
                            top: -50,
                            right: -50,
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${reason.color}40, transparent 70%)`,
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none',
                          }}
                        />

                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                          <Box
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 56,
                              height: 56,
                              borderRadius: '12px',
                              bgcolor: colors.isDark
                                ? `${reason.color}20`
                                : `${reason.color}15`,
                              border: `2px solid ${reason.color}40`,
                              mb: 2.5,
                            }}
                          >
                            <ReasonIcon
                              className='reason-icon'
                              sx={{
                                fontSize: '1.75rem',
                                color: reason.color,
                                transition:
                                  'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              }}
                            />
                          </Box>

                          <Typography
                            sx={{
                              fontSize: '1.125rem',
                              fontWeight: 600,
                              color: colors.text.primary,
                              mb: 1.5,
                              lineHeight: 1.4,
                            }}
                          >
                            {reason.title}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: '0.9375rem',
                              color: colors.text.secondary,
                              lineHeight: 1.6,
                            }}
                          >
                            {reason.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  );
                })}
              </Box>
            </motion.div>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              height: 1,
              bgcolor: colors.isDark
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.1)',
              mb: 8,
            }}
          />

          {/* Response time */}
          <Box sx={{ mb: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontSize: { xs: '1.75rem', md: '2rem' },
                  fontWeight: 600,
                  color: colors.text.primary,
                  mb: 1,
                  textAlign: 'center',
                }}
              >
                Response time
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.125rem',
                  color: colors.text.primary,
                  lineHeight: 1.7,
                  mb: 5,
                  textAlign: 'center',
                }}
              >
                We aim to respond within 1 to 2 business days.
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: colors.text.secondary,
                  fontStyle: 'italic',
                  textAlign: 'center',
                }}
              >
                Prefer email for the fastest response.
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </>
  );
}
