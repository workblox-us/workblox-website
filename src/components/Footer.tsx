import { motion } from 'motion/react';
import { GitHub, Twitter, LinkedIn, YouTube } from '@mui/icons-material';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { WorkbloxLogo } from './WorkbloxLogo';

export function Footer() {
  const footerLinks = {
    Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Templates', 'API'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance', 'Cookie Policy']
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: GitHub, href: '#', label: 'GitHub' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' },
    { icon: YouTube, href: '#', label: 'YouTube' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        bgcolor: '#000000',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        {/* Top Section */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(6, 1fr)' }, gap: { xs: 4, md: 6 }, mb: 6 }}>
          {/* Brand */}
          <Box sx={{ gridColumn: { xs: 'span 2', md: 'span 2' } }}>
            <Box sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/images/logo.png"
                alt="Workblox"
                sx={{
                  height: 28,        // adjust
                  width: "auto",
                  display: "block",
                  mb: 1,
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: '#9ca3af', mb: 3, maxWidth: '20rem' }}>
              The intelligent workspace that unifies planning, communication, and execution with AI.
            </Typography>
            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <IconButton
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '8px',
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#9ca3af',
                      '&:hover': {
                        color: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: '1.125rem' }} />
                  </IconButton>
                );
              })}
            </Box>
          </Box>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Box key={category}>
              <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                {category}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, '& > li': { mb: 1.5 } }}>
                {links.map((link) => (
                  <Box component="li" key={link}>
                    <Box
                      component="a"
                      href="#"
                      sx={{
                        color: '#9ca3af',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s',
                        '&:hover': {
                          color: 'white',
                        },
                      }}
                    >
                      {link}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: '#6b7280' }}>
            © 2024 Workblox. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((link) => (
              <Box
                key={link}
                component="a"
                href="#"
                sx={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                {link}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}