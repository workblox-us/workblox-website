import { motion } from 'motion/react';
import { AutoAwesome, Psychology, Bolt, Security } from '@mui/icons-material';
import { Box, Container, Typography, Button } from '@mui/material';
import { useThemeColors } from '../hooks/useThemeColors';

export function AIAssistantSection() {
  const colors = useThemeColors();
  const aiFeatures = [
    {
      icon: Psychology,
      title: 'Understands Context',
      description: 'AI that knows what you\'re working on and what matters right now'
    },
    {
      icon: Bolt,
      title: 'Helpful, Not Intrusive',
      description: 'Get suggestions and clarity exactly when you need them'
    },
    {
      icon: Security,
      title: 'Privacy You Control',
      description: 'Your data stays yours. AI works on your terms, always.'
    }
  ];

  return (
    <Box component="section" sx={{ position: 'relative', py: { xs: 10, md: 16 }, overflow: 'hidden' }}>
      {/* Background Effects */}
      <Box sx={{ 
        position: 'absolute', 
        inset: 0, 
        background: colors.isDark 
          ? 'linear-gradient(to bottom, #000000, rgba(30, 64, 175, 0.1), #000000)' 
          : 'linear-gradient(to bottom, #ffffff, rgba(168, 85, 247, 0.03), #f8f9fa)' 
      }} />
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          bgcolor: colors.isDark ? 'rgba(147, 51, 234, 0.2)' : 'rgba(147, 51, 234, 0.05)',
          borderRadius: '50%',
          filter: 'blur(64px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, gap: { xs: 6, lg: 8 }, alignItems: 'center' }}>
          {/* Left Content */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              <AutoAwesome sx={{ fontSize: '0.875rem', color: colors.isDark ? '#c084fc' : '#7c3aed' }} />
              <Typography variant="caption" sx={{ color: colors.badge.text, fontSize: '0.75rem' }}>
                AI Partner
              </Typography>
            </Box>

            <Typography variant="h2" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, color: colors.text.primary, mb: 3, fontWeight: 700 }}>
              Your intelligent
              <br />
              <Box component="span" sx={{ background: 'linear-gradient(90deg, #c084fc 0%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                work partner
              </Box>
            </Typography>

            <Typography variant="h6" sx={{ color: colors.text.secondary, mb: 4, lineHeight: 1.7, fontSize: '0.9375rem' }}>
              AI that helps without getting in the way. Get clarity, suggestions, and support exactly when you need it.
            </Typography>

            {/* Features List */}
            <Box sx={{ '& > *:not(:last-child)': { mb: 3 }, mb: 4 }}>
              {aiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Box
                    key={feature.title}
                    component={motion.div}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{ display: 'flex', gap: 2 }}
                  >
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 48,
                        height: 48,
                        borderRadius: '8px',
                        background: colors.isDark 
                          ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(147, 51, 234, 0.05))' 
                          : 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(147, 51, 234, 0.03))',
                        border: colors.isDark ? '1px solid rgba(147, 51, 234, 0.2)' : '1px solid rgba(147, 51, 234, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon sx={{ fontSize: '1.5rem', color: colors.isDark ? '#c084fc' : '#7c3aed' }} />
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ color: colors.text.primary, mb: 0.5, fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.text.secondary, lineHeight: 1.6 }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Right side - keep existing visual */}
          <Box>
            {/* Existing visual content would go here */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}