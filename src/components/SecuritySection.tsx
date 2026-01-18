import { motion } from 'motion/react';
import {
  Security,
  LockOutlined as Lock,
  VerifiedUserOutlined as VerifiedUser,
  AdminPanelSettings as Shield,
  PolicyOutlined as Policy,
} from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useThemeColors } from '../hooks/useThemeColors';

export function SecuritySection() {
  const colors = useThemeColors();

  return (
    <Box component="section" id="security" sx={{ position: 'relative', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: '20px',
            background: colors.isDark 
              ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.05))' 
              : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.03))',
            border: `1px solid ${colors.isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.15)'}`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background glow effect */}
          <Box
            sx={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 5, position: 'relative' }}>
            <Box
              component={motion.div}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              sx={{
                display: 'inline-flex',
                p: 2,
                borderRadius: '16px',
                bgcolor: colors.isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.1)',
                mb: 3,
              }}
            >
              <Shield sx={{ fontSize: '2.5rem', color: '#8b5cf6' }} />
            </Box>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2.25rem', md: '3rem' },
                fontWeight: 700,
                mb: 2
              }}
            >
              <Box component="span" sx={{ color: colors.text.primary }}>
                Enterprise-Grade{' '}
              </Box>
              <Box 
                component="span" 
                sx={{ 
                  background: colors.isDark
                    ? 'linear-gradient(90deg, #c084fc 0%, #8b5cf6 100%)'
                    : 'linear-gradient(90deg, #9333ea 0%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent' 
                }}
              >
                Security & Privacy
              </Box>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: colors.text.secondary,
                fontSize: '1.125rem',
                lineHeight: 1.7,
                maxWidth: '48rem',
                mx: 'auto',
                mb: 2
              }}
            >
              <Box component="span" sx={{ color: colors.text.primary, fontWeight: 600 }}>Your data stays yours.</Box> 
              {' '}Built with industry-leading security standards and compliance frameworks to protect your team's most sensitive information.
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: colors.text.secondary,
                fontSize: '0.8125rem',
                fontStyle: 'italic',
                display: 'block'
              }}
            >
              Pre-launch, roadmap status may change before launch.
            </Typography>
          </Box>

          {/* Security Features Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
            gap: 3,
            mb: 5
          }}>
            {[
              { icon: Lock, title: 'Encryption in Transit & At Rest', desc: 'TLS in transit and encryption at rest where appropriate' },
              { icon: VerifiedUser, title: 'Zero Trust Approach', desc: 'Least privilege access with verified identity for every request' },
              { icon: Security, title: 'Data Residency Options', desc: 'Regional hosting options as availability expands' },
              { icon: Policy, title: 'Compliance Ready', desc: 'Built for regulatory requirements' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Box
                  key={item.title}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  sx={{
                    p: 3,
                    borderRadius: '12px',
                    bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.5)',
                    border: `1px solid ${colors.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: colors.isDark 
                        ? '0 12px 24px rgba(139, 92, 246, 0.2)' 
                        : '0 12px 24px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  <Icon sx={{ fontSize: '2rem', color: '#8b5cf6', mb: 1.5 }} />
                  <Typography variant="body2" sx={{ color: colors.text.primary, fontWeight: 600, mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: colors.text.secondary, fontSize: '0.8125rem' }}>
                    {item.desc}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* Certifications & Compliance */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: colors.text.secondary, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                display: 'block',
                mb: 3
              }}
            >
              Security Certifications & Compliance
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: 'center', 
              gap: 2,
              alignItems: 'center'
            }}>
              {[
                { name: 'SOC 2 Readiness', subtitle: 'In Progress' },
                { name: 'ISO 27001', subtitle: 'Aligned Controls (Planned)' },
                { name: 'GDPR', subtitle: 'Ready' },
                { name: 'CCPA', subtitle: 'Ready' },
              ].map((cert, idx) => (
                <Box
                  key={cert.name}
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  sx={{
                    px: 3,
                    py: 2,
                    borderRadius: '10px',
                    bgcolor: colors.isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.08)',
                    border: `1px solid ${colors.isDark ? 'rgba(139, 92, 246, 0.25)' : 'rgba(139, 92, 246, 0.2)'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: 120,
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: colors.text.primary, 
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      mb: 0.25
                    }}
                  >
                    {cert.name}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: colors.text.secondary,
                      fontSize: '0.75rem'
                    }}
                  >
                    {cert.subtitle}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}