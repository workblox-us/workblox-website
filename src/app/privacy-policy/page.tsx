'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';

import { useThemeColors } from '@/hooks/useThemeColors';

import { SEOHead } from '@/components/SEOHead';

export default function PrivacyPolicy() {
  const colors = useThemeColors();

  return (
    <>
      <SEOHead page='privacy-policy' />

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
                Privacy Policy
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
                Workblox ("Workblox," "we," "us") respects your privacy. This
                Privacy Policy explains what we collect, why we collect it, and
                how you can control your information.
              </Typography>
            </motion.div>
          </Box>

          {/* Overview */}
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
              Overview
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              We collect only what we need to provide early access, run the
              site, and improve Workblox. We do not sell personal information.
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

          {/* Information We Collect */}
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
              Information We Collect
            </Typography>

            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                fontWeight: 600,
                mb: 2,
              }}
            >
              1) Information you provide
            </Typography>
            <Box component='ul' sx={{ pl: 3, mb: 4, '& li': { mb: 1.5 } }}>
              <li>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    color: colors.text.primary,
                    lineHeight: 1.8,
                  }}
                >
                  Contact details like name and email when you join early
                  access, request a demo, or contact us
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
                  Optional details you share, like team size, role, and what you
                  want to manage in Workblox
                </Typography>
              </li>
            </Box>

            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                fontWeight: 600,
                mb: 2,
              }}
            >
              2) Information collected automatically
            </Typography>
            <Box component='ul' sx={{ pl: 3, mb: 4, '& li': { mb: 1.5 } }}>
              <li>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    color: colors.text.primary,
                    lineHeight: 1.8,
                  }}
                >
                  Basic usage data, like pages viewed, clicks, device type, and
                  approximate location (city or region)
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
                  Technical data, like IP address, browser type, and referral
                  source
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
                  Cookies or similar technologies used for site functionality
                  and analytics
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

          {/* How We Use Information */}
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
              How We Use Information
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              We use information to:
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
                  Provide early access updates, onboarding, and product
                  announcements
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
                  Respond to requests and support questions
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
                  Understand what content and features are most useful
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
                  Improve reliability, security, and performance
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
                  Prevent fraud, abuse, and unauthorized access
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

          {/* Cookies and Analytics */}
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
              Cookies and Analytics
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              We use cookies for core site functionality and to understand
              performance. You can control cookies through your browser
              settings. If we use third-party analytics tools, they may set
              their own cookies to help measure traffic and engagement.
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

          {/* Data Sharing */}
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
              Data Sharing
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              We may share information with:
            </Typography>
            <Box component='ul' sx={{ pl: 3, mb: 3, '& li': { mb: 1.5 } }}>
              <li>
                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    color: colors.text.primary,
                    lineHeight: 1.8,
                  }}
                >
                  Service providers that help us run the website and
                  communications (for example, hosting, analytics, and email
                  delivery)
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
                  Legal or safety requests when required by law, or to protect
                  users and the platform
                </Typography>
              </li>
            </Box>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
                fontWeight: 600,
              }}
            >
              We do not sell personal information.
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

          {/* Data Security */}
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
              Data Security
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              We use reasonable administrative, technical, and physical
              safeguards designed to protect information. No system is 100%
              secure, so we cannot guarantee absolute security.
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

          {/* Data Retention */}
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
              Data Retention
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              We keep information only as long as needed for the purposes
              described in this policy, unless a longer period is required by
              law.
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

          {/* Your Choices */}
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
              Your Choices
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              You can:
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
                  Unsubscribe from marketing or product emails at any time using
                  the link in our emails
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
                  Request access, correction, or deletion of your information by
                  contacting us
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
                  Control cookies through your browser settings
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

          {/* International Visitors */}
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
              International Visitors
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              If you visit from outside the United States, you understand your
              information may be processed in the United States or other
              locations where our service providers operate.
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

          {/* Changes to This Policy */}
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
              Changes to This Policy
            </Typography>
            <Typography
              sx={{
                fontSize: '1.125rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              We may update this policy as Workblox evolves. If we make material
              changes, we will update the "Last updated" date and, when
              appropriate, provide additional notice.
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
              Privacy questions can be sent to:{' '}
              <Typography
                component='a'
                href='mailto:privacy@workblox.ai'
                sx={{
                  color: '#9333ea',
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                privacy@workblox.ai
              </Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
