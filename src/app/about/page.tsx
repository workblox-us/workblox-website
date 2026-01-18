'use client';

import {
  EmojiObjects,
  People,
  Rocket,
  Security,
  Speed,
  TrendingUp,
} from '@mui/icons-material';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';

import { useThemeColors } from '@/hooks/useThemeColors';

import { SEOHead } from '@/components/SEOHead';

export default function AboutPage() {
  const colors = useThemeColors();

  const values = [
    {
      icon: EmojiObjects,
      title: 'Innovation First',
      description:
        'We push boundaries with AI to create tools that truly transform how people work.',
      color: '#9333ea',
    },
    {
      icon: People,
      title: 'User-Centric',
      description:
        'Every feature is built based on real user needs and feedback from our community.',
      color: '#3b82f6',
    },
    {
      icon: Security,
      title: 'Trust & Security',
      description:
        'Enterprise-grade security and privacy protection are built into everything we do.',
      color: '#16a34a',
    },
    {
      icon: Speed,
      title: 'Move Fast',
      description:
        'We ship quickly, iterate constantly, and continuously improve based on data.',
      color: '#f59e0b',
    },
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Workblox Founded',
      description:
        'Started with a vision to unify fragmented work tools into one intelligent platform.',
    },
    {
      year: 'Q3 2025',
      title: 'Private Alpha Launch',
      description:
        'Launched private alpha with 200 early adopters from tech startups and agencies.',
    },
    {
      year: 'Q4 2025',
      title: 'AI Engine Development',
      description:
        'Built proprietary AI models for workspace generation, automation, and advisory features.',
    },
    {
      year: 'Q1 2026',
      title: 'Public Beta Launch',
      description:
        'Opening beta access to 5,000 users with full feature set and integrations.',
    },
    {
      year: 'Q2 2026',
      title: 'General Availability',
      description:
        'Full public launch with mobile apps, enterprise features, and expanded integrations.',
    },
  ];

  const stats = [
    { value: 'Early Access', label: 'Rolling invites, limited spots' },
    { value: '100+', label: 'Integration across tools you already use' },
    { value: 'Security-First', label: 'SSO, RBAC, Audit Logs, Encryption' },
    { value: 'Product-Led', label: 'Fast onboarding, no training needed' },
  ];

  return (
    <>
      <SEOHead page='about' />

      <Box sx={{ minHeight: '100vh', bgcolor: colors.bg.primary }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            pt: { xs: 12, md: 16 },
            pb: { xs: 8, md: 12 },
            overflow: 'hidden',
            background: colors.isDark
              ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
              : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #faf5ff 100%)',
          }}
        >
          {/* Background Effects */}
          {!colors.isDark && (
            <>
              <Box
                sx={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-10%',
                  width: '50%',
                  height: '140%',
                  background:
                    'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '-20%',
                  left: '-10%',
                  width: '50%',
                  height: '140%',
                  background:
                    'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
            </>
          )}

          <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Rocket sx={{ fontSize: '3rem', color: '#9333ea', mb: 2 }} />
                <Typography
                  variant='h1'
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    color: colors.text.primary,
                    mb: 2,
                  }}
                >
                  Building the Future of Work
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: { xs: '1.125rem', md: '1.25rem' },
                    color: colors.text.secondary,
                    maxWidth: '48rem',
                    mx: 'auto',
                    lineHeight: 1.7,
                  }}
                >
                  Workblox was born from frustration with scattered tools,
                  endless context switching, and the chaos of modern work
                  management. We believe there's a better way.
                </Typography>
              </motion.div>
            </Box>

            {/* Stats */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: 4,
                mb: 8,
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant='h3'
                      sx={{
                        fontWeight: 700,
                        color: colors.text.primary,
                        mb: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: colors.text.secondary }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Mission Section */}
        <Container maxWidth='lg' sx={{ py: 8 }}>
          <Box sx={{ maxWidth: '56rem', mx: 'auto', mb: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontWeight: 700,
                  color: colors.text.primary,
                  mb: 3,
                  textAlign: 'center',
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontSize: '1.125rem',
                  color: colors.text.secondary,
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                We're on a mission to eliminate work chaos by unifying planning,
                communication, automation, and execution into one intelligent
                workspace powered by AI. We believe that people should spend
                less time managing tools and more time doing meaningful work.
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontSize: '1.125rem',
                  color: colors.text.secondary,
                  lineHeight: 1.8,
                }}
              >
                Workblox isn't just another project management tool—it's a
                complete reimagining of how work gets done. By combining the
                best of AI, automation, and intuitive design, we're creating a
                workspace that adapts to you, not the other way around.
              </Typography>
            </motion.div>
          </Box>

          {/* Values */}
          <Box sx={{ mb: 10 }}>
            <Typography
              variant='h2'
              sx={{
                fontWeight: 700,
                color: colors.text.primary,
                mb: 5,
                textAlign: 'center',
              }}
            >
              Our Values
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 4,
              }}
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: '16px',
                        bgcolor: colors.isDark
                          ? 'rgba(20, 20, 30, 0.8)'
                          : 'white',
                        border: `1px solid ${
                          colors.isDark
                            ? 'rgba(255,255,255,0.1)'
                            : 'rgba(0,0,0,0.1)'
                        }`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: colors.isDark
                            ? `0 8px 24px ${value.color}20`
                            : `0 8px 24px ${value.color}15`,
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Icon
                          sx={{ fontSize: '2.5rem', color: value.color, mb: 2 }}
                        />
                        <Typography
                          variant='h5'
                          sx={{
                            fontWeight: 600,
                            color: colors.text.primary,
                            mb: 1.5,
                          }}
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          variant='body2'
                          sx={{ color: colors.text.secondary, lineHeight: 1.7 }}
                        >
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </Box>
          </Box>

          {/* Timeline */}
          <Box sx={{ maxWidth: '56rem', mx: 'auto', px: { xs: 1.5, sm: 3 } }}>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 700,
                color: colors.text.primary,
                mb: { xs: 4, sm: 5 },
                textAlign: 'center',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              }}
            >
              Our Journey
            </Typography>
            <Box sx={{ position: 'relative', pl: { xs: 0.5, sm: 0 } }}>
              {/* Vertical Line */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '12px', sm: '14px', md: '50%' },
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  bgcolor:
                    colors.mode === 'dark'
                      ? 'rgba(147,51,234,0.3)'
                      : 'rgba(147,51,234,0.2)',
                  transform: { md: 'translateX(-50%)' },
                }}
              />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: { xs: 4.5, sm: 5, md: 6 },
                      flexDirection: {
                        xs: 'row',
                        md: index % 2 === 0 ? 'row' : 'row-reverse',
                      },
                    }}
                  >
                    {/* Timeline Dot */}
                    <Box
                      sx={{
                        position: { xs: 'absolute', md: 'absolute' },
                        left: { xs: '4px', sm: '6px', md: '50%' },
                        top: { xs: '2px', sm: '3px', md: 0 },
                        width: { xs: '18px', sm: '20px' },
                        height: { xs: '18px', sm: '20px' },
                        borderRadius: '50%',
                        bgcolor: '#9333ea',
                        border: `3px solid ${colors.bg.primary}`,
                        transform: { md: 'translateX(-50%)' },
                        zIndex: 2,
                        flexShrink: 0,
                      }}
                    />

                    {/* Content */}
                    <Box
                      sx={{
                        flex: { xs: 1, md: '0 0 calc(50% - 40px)' },
                        textAlign: {
                          xs: 'left',
                          md: index % 2 === 0 ? 'right' : 'left',
                        },
                        pl: {
                          xs: '36px',
                          sm: '42px',
                          md: index % 2 === 0 ? 0 : 3,
                        },
                        pr: {
                          xs: '8px',
                          sm: '12px',
                          md: index % 2 === 0 ? 3 : 0,
                        },
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{
                          fontWeight: 700,
                          color: '#9333ea',
                          mb: 0.5,
                          fontSize: {
                            xs: '0.875rem',
                            sm: '0.9375rem',
                            md: '1.25rem',
                          },
                          lineHeight: 1.3,
                        }}
                      >
                        {milestone.year}
                      </Typography>
                      <Typography
                        variant='h6'
                        sx={{
                          fontWeight: 600,
                          color: colors.text.primary,
                          mb: { xs: 0.75, md: 1 },
                          fontSize: {
                            xs: '1rem',
                            sm: '1.0625rem',
                            md: '1.25rem',
                          },
                          lineHeight: 1.3,
                        }}
                      >
                        {milestone.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{
                          color: colors.text.secondary,
                          lineHeight: { xs: 1.5, md: 1.6 },
                          fontSize: {
                            xs: '0.875rem',
                            sm: '0.9375rem',
                            md: '0.875rem',
                          },
                        }}
                      >
                        {milestone.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* CTA */}
          <Box
            sx={{
              mt: 10,
              p: 6,
              borderRadius: '16px',
              bgcolor:
                colors.mode === 'dark'
                  ? 'rgba(147,51,234,0.1)'
                  : 'rgba(147,51,234,0.05)',
              border: `1px solid ${
                colors.mode === 'dark'
                  ? 'rgba(147,51,234,0.2)'
                  : 'rgba(147,51,234,0.1)'
              }`,
              textAlign: 'center',
            }}
          >
            <TrendingUp sx={{ fontSize: '3rem', color: '#9333ea', mb: 2 }} />
            <Typography
              variant='h4'
              sx={{ fontWeight: 700, color: colors.text.primary, mb: 2 }}
            >
              Join Us on This Journey
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: colors.text.secondary,
                maxWidth: '40rem',
                mx: 'auto',
                mb: 3,
              }}
            >
              We're building Workblox in the open, with input from users like
              you. Join our beta program and help shape the future of work
              management.
            </Typography>
            <Typography
              variant='body2'
              sx={{ color: colors.text.secondary, fontSize: '0.875rem' }}
            >
              💼 We'll be hiring soon. Interested? Email{' '}
              <a
                href='mailto:careers@workblox.ai'
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                careers@workblox.ai
              </a>
              .
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
