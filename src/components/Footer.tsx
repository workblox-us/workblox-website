import {
  ArrowForward,
  GitHub,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

import { BetaModal } from './BetaModal';
import { GradientButton } from './common';
import { WorkbloxLogo } from './WorkbloxLogo';
import { useNavigation } from '../contexts/NavigationContext';
import { useThemeColors } from '../hooks/useThemeColors';

interface FooterLinkProps {
  label: string;
  action?: () => void;
  page?: string;
}

export function Footer() {
  const { navigateTo } = useNavigation();
  const [betaModalOpen, setBetaModalOpen] = useState(false);
  const colors = useThemeColors();

  const footerLinks: Record<string, FooterLinkProps[]> = {
    Product: [
      { label: 'Features', page: '/#features' },
      { label: 'Solutions', page: '/#solutions' },
      {
        label: 'Integrations',
        page: '/#integrations',
      },
      { label: 'Security', page: '/#security' },
    ],
    Company: [
      { label: 'About', page: 'about' },
      { label: 'Blog', page: 'blog' },
      { label: 'Articles', page: 'articles' },
      { label: 'FAQ', page: 'faq' },
      { label: 'Contact', page: 'contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', page: 'privacy-policy' },
      { label: 'Terms of Service', page: 'terms' },
      { label: 'Security Policy', page: 'security' },
      { label: 'Compliance', page: 'compliance' },
      { label: 'Cookie Policy', page: 'cookie-policy' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: GitHub, href: '#', label: 'GitHub', color: '#FFFFFF' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn', color: '#0077B5' },
    { icon: YouTube, href: '#', label: 'YouTube', color: '#FF0000' },
  ];

  return (
    <>
      <Box
        component='footer'
        sx={{
          position: 'relative',
          fontFamily: 'Inter, sans-serif',
          bgcolor: colors.isDark ? '#000000' : '#f8fafb',
          overflow: 'hidden',
        }}
      >
        {/* Pre-Footer CTA Section */}
        <Box
          sx={{
            position: 'relative',
            borderTop: colors.isDark
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(15, 23, 42, 0.1)',
            borderBottom: colors.isDark
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(15, 23, 42, 0.1)',
            background: colors.isDark
              ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
              : 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%)',
            py: { xs: 6, md: 8 },
            overflow: 'hidden',
          }}
        >
          {/* Glow effect */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '600px',
              background: colors.isDark
                ? 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <Container maxWidth='lg' sx={{ position: 'relative' }}>
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant='h3'
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    background: colors.isDark
                      ? 'linear-gradient(90deg, #FFFFFF 0%, #E0E0E0 100%)'
                      : 'linear-gradient(90deg, #1e293b 0%, #334155 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Ready to Transform Your Workflow?
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    color: colors.isDark ? '#9ca3af' : '#1e293b',
                    fontSize: { xs: '0.9375rem', md: '1.125rem' },
                    maxWidth: '600px',
                    mb: 1,
                    px: { xs: 1, sm: 0 },
                  }}
                >
                  Join the waitlist and be among the first to experience the
                  future of work management.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <GradientButton
                  endIcon={<ArrowForward />}
                  onClick={() => setBetaModalOpen(true)}
                  sx={{
                    mt: 2,
                    width: { xs: '100%', sm: 'auto' },
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.75, sm: 1.5 },
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    fontWeight: 600,
                    borderRadius: '12px',
                    textTransform: 'none',
                    boxShadow: '0 10px 40px rgba(147, 51, 234, 0.3)',
                    '&:hover': {
                      boxShadow: '0 15px 50px rgba(147, 51, 234, 0.5)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Early Access
                </GradientButton>
              </motion.div>
            </Box>
          </Container>
        </Box>

        {/* Main Footer Content */}
        <Container
          maxWidth='lg'
          sx={{ py: { xs: 6, md: 12 }, px: { xs: 2.5, sm: 3 } }}
        >
          {/* Top Section - Brand + Links */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'grid' },
              flexDirection: { xs: 'column', md: 'row' },
              gridTemplateColumns: { md: '2fr 1fr 1fr 1fr' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: { xs: 5, md: 8 },
              mb: { xs: 6, md: 8 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* Brand Section */}
            <Box sx={{ maxWidth: { xs: '100%', md: '350px' } }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    mb: 3,
                    display: { xs: 'flex', md: 'block' },
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  <Link href='/'>
                    <WorkbloxLogo />
                  </Link>
                </Box>
                <Typography
                  variant='body2'
                  sx={{
                    color: colors.isDark ? '#9ca3af' : '#64748b',
                    mb: 4,
                    lineHeight: 1.7,
                    fontSize: '0.9375rem',
                  }}
                >
                  The intelligent workspace that unifies planning,
                  communication, and execution with AI-powered automation.
                </Typography>

                {/* Social Links */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.div
                        key={social.label}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton
                          href={social.href}
                          aria-label={social.label}
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: '10px',
                            bgcolor: colors.isDark
                              ? 'rgba(255, 255, 255, 0.05)'
                              : 'rgba(15, 23, 42, 0.04)',
                            border: colors.isDark
                              ? '1px solid rgba(255, 255, 255, 0.1)'
                              : '1px solid rgba(15, 23, 42, 0.08)',
                            color: colors.isDark ? '#9ca3af' : '#64748b',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: social.color,
                              bgcolor: colors.isDark
                                ? 'rgba(255, 255, 255, 0.1)'
                                : 'rgba(15, 23, 42, 0.08)',
                              borderColor: social.color,
                              boxShadow: `0 8px 25px ${social.color}40`,
                            },
                          }}
                        >
                          <Icon sx={{ fontSize: '1.25rem' }} />
                        </IconButton>
                      </motion.div>
                    );
                  })}
                </Box>
              </motion.div>
            </Box>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Box>
                  <Typography
                    variant='h6'
                    sx={{
                      color: colors.isDark ? 'white' : colors.text.primary,
                      mb: 3,
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    {category}
                  </Typography>
                  <Box
                    component='ul'
                    sx={{
                      listStyle: 'none',
                      p: 0,
                      m: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.5,
                      alignItems: { xs: 'center', md: 'flex-start' },
                    }}
                  >
                    {links.map((link) => {
                      return (
                        <Box component='li' key={link.label}>
                          <Box
                            component={Link}
                            href={link.page ? `/${link.page}` : '/'}
                            onClick={() => {
                              setTimeout(() => {
                                if (link.action) {
                                  link.action();
                                }
                              }, 100);
                            }}
                            sx={{
                              color: colors.isDark ? '#9ca3af' : '#64748b',
                              textDecoration: 'none',
                              fontSize: '0.9375rem',
                              transition: 'all 0.2s ease',
                              cursor: 'pointer',
                              display: 'inline-block',
                              position: 'relative',
                              '&:hover': {
                                color: colors.isDark
                                  ? 'white'
                                  : colors.text.primary,
                                transform: { md: 'translateX(4px)' },
                              },
                              '&:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -2,
                                left: 0,
                                width: 0,
                                height: '1px',
                                background:
                                  'linear-gradient(90deg, #9333ea, #3b82f6)',
                                transition: 'width 0.3s ease',
                              },
                              '&:hover:after': {
                                width: '100%',
                              },
                            }}
                          >
                            {link.label}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Bottom Bar */}
          <Box
            sx={{
              pt: 6,
              borderTop: colors.isDark
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(15, 23, 42, 0.1)',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant='body2'
              sx={{
                color: colors.isDark ? '#6b7280' : '#94a3b8',
                fontSize: '0.875rem',
              }}
            >
              © 2026 Workblox. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      <BetaModal open={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
    </>
  );
}
