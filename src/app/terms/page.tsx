'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';

import { SEOHead } from '@/components/SEOHead';
import { useNavigation } from '@/contexts/NavigationContext';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function TermsOfService() {
  const colors = useThemeColors();
  const { navigateTo } = useNavigation();

  const handleGetEarlyAccess = () => {
    navigateTo('home');
    setTimeout(() => {
      const heroSection = document.querySelector('section');
      heroSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      <SEOHead page='terms-of-service' />

      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: colors.isDark ? '#000000' : '#ffffff',
          pt: { xs: 12, md: 16 },
          pb: 8,
        }}
      >
        {/* Background Effects */}
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            background: colors.isDark
              ? 'radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.08), transparent 50%)'
              : 'radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.04), transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: colors.text.primary,
                  mb: 2,
                }}
              >
                Terms of Service
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: colors.text.secondary,
                  mb: 4,
                }}
              >
                Last updated: January 16, 2026
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: colors.text.secondary,
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                These Terms govern your access to and use of the Workblox
                website and any early access or beta services we offer
                (collectively, the "Services"). By using the Services, you agree
                to these Terms.
              </Typography>
            </motion.div>
          </Box>

          {/* Acceptance of Terms */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 3,
              }}
            >
              Acceptance of Terms
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              If you do not agree, do not use the Services.
            </Typography>
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

          {/* Early Access and Beta */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Early Access and Beta
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              Workblox may offer early access or beta features. Beta features
              may change, be discontinued, or be unavailable at any time. We do
              not guarantee timelines, uptime, or feature completeness during
              beta.
            </Typography>
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

          {/* Accounts and Eligibility */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Accounts and Eligibility
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              You are responsible for the accuracy of information you provide
              and for maintaining the confidentiality of any account
              credentials. You must use the Services only if you are permitted
              to do so under applicable law.
            </Typography>
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

          {/* Acceptable Use */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Acceptable Use
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              You agree not to:
            </Typography>
            <Box component='ul' sx={{ pl: 3, '& li': { mb: 1.5 } }}>
              <li>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    color: colors.text.primary,
                    lineHeight: 1.8,
                  }}
                >
                  Use the Services for unlawful, harmful, or abusive purposes
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    color: colors.text.primary,
                    lineHeight: 1.8,
                  }}
                >
                  Attempt to access systems, data, or accounts you do not have
                  permission to access
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    color: colors.text.primary,
                    lineHeight: 1.8,
                  }}
                >
                  Interfere with or disrupt the Services
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    color: colors.text.primary,
                    lineHeight: 1.8,
                  }}
                >
                  Upload or transmit malware or malicious code
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    color: colors.text.primary,
                    lineHeight: 1.8,
                  }}
                >
                  Reverse engineer or attempt to extract source code from the
                  Services (except where permitted by law)
                </Typography>
              </li>
            </Box>
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

          {/* Content and Feedback */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Content and Feedback
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              You may submit feedback, suggestions, or ideas. You grant Workblox
              a non-exclusive, worldwide, royalty-free right to use feedback to
              improve the Services, without compensation to you.
            </Typography>
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

          {/* Intellectual Property */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Intellectual Property
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              Workblox and its logos, designs, and content are owned by Workblox
              or its licensors and are protected by intellectual property laws.
              You may not use our branding without written permission.
            </Typography>
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

          {/* Third-Party Services */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Third-Party Services
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              The Services may reference or integrate with third-party tools. We
              are not responsible for third-party services, their availability,
              or their privacy practices.
            </Typography>
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

          {/* Disclaimers */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Disclaimers
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              The Services are provided "as is" and "as available." We make no
              warranties, express or implied, including warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </Typography>
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

          {/* Limitation of Liability */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Limitation of Liability
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              To the maximum extent permitted by law, Workblox will not be
              liable for indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits, data, or goodwill,
              arising from your use of the Services. Our total liability for any
              claim will not exceed the amount you paid us for the Services in
              the 12 months before the event giving rise to the claim, or $100
              if you paid nothing.
            </Typography>
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

          {/* Suspension and Termination */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Suspension and Termination
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              We may suspend or terminate access to the Services if we believe
              you violated these Terms or if needed to protect the Services or
              users.
            </Typography>
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

          {/* Changes to the Services or Terms */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Changes to the Services or Terms
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              We may update the Services and these Terms as Workblox evolves. We
              will update the "Last updated" date when changes are made.
            </Typography>
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

          {/* Governing Law */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Governing Law
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              These Terms are governed by the laws of the State of New York,
              without regard to conflict of law principles.
            </Typography>
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

          {/* Contact */}
          <Box sx={{ mb: 10 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
              }}
            >
              Contact
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              Terms questions can be sent to:{' '}
              <Typography
                component='a'
                href='mailto:legal@workblox.ai'
                sx={{
                  color: '#9333ea',
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                legal@workblox.ai
              </Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
