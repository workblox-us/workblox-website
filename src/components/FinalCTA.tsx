import { motion } from 'motion/react';
import { ArrowForward, CheckCircle, PlayArrow } from '@mui/icons-material';
import { Box, Container, Typography, Button } from '@mui/material';
import { useThemeColors } from '../hooks/useThemeColors';
import { useState } from 'react';
import { BetaModal } from './BetaModal';
import { VideoPreviewModal } from './VideoPreviewModal';

export function FinalCTA() {
  const colors = useThemeColors();
  const [betaModalOpen, setBetaModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const benefits = [
    'Early adopter pricing',
    'Exclusive beta features',
    'Priority support',
    'Lifetime perks'
  ];

  return (
    <Box component="section" sx={{ position: 'relative', py: { xs: 10, md: 16 }, overflow: 'hidden' }}>
      {/* Background Effects */}
      <Box sx={{ 
        position: 'absolute', 
        inset: 0, 
        background: colors.isDark 
          ? 'linear-gradient(to bottom, #000000, rgba(88, 28, 135, 0.2), #000000)' 
          : 'linear-gradient(to bottom, #ffffff, rgba(168, 85, 247, 0.03), #f8f9fa)' 
      }} />
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: colors.isDark 
            ? 'linear-gradient(90deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
            : 'linear-gradient(90deg, rgba(147, 51, 234, 0.04), rgba(59, 130, 246, 0.04), rgba(6, 182, 212, 0.04))',
          borderRadius: '50%',
          filter: 'blur(64px)',
        }}
      />

      {/* Grid Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: colors.grid.background,
          backgroundSize: '64px 64px',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center' }}
        >
          {/* Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: '50px',
              bgcolor: colors.bg.glass,
              border: `1px solid ${colors.border.light}`,
              backdropFilter: 'blur(8px)',
              mb: 4,
            }}
          >
            <Typography variant="body2" sx={{ color: colors.text.secondary, fontSize: '0.875rem' }}>
              ⚡ Limited Spots • Beta Launching Q1 2025
            </Typography>
          </Box>

          {/* Headline */}
          <Typography variant="h1" sx={{ fontSize: { xs: '1.875rem', md: '2.5rem', lg: '3rem' }, color: colors.text.primary, mb: 3, letterSpacing: '-0.02em', fontWeight: 700 }}>
            Be part of shaping
            <br />
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #c084fc 0%, #60a5fa 50%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              the next system of work
            </Box>
          </Typography>

          {/* Description */}
          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, color: colors.text.secondary, mb: 6, maxWidth: '48rem', mx: 'auto', lineHeight: 1.7 }}>
            Join forward-thinking teams securing their spot in the beta. Early users help shape the product and get exclusive benefits.
          </Typography>

          {/* Benefits */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 3, mb: 6 }}>
            {benefits.map((benefit, index) => (
              <Box
                key={benefit}
                component={motion.div}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.text.secondary }}
              >
                <CheckCircle sx={{ fontSize: '1rem', color: '#4ade80' }} />
                <Typography variant="body1" sx={{ fontSize: '0.875rem' }}>{benefit}</Typography>
              </Box>
            ))}
          </Box>

          {/* CTA Buttons */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 2 }}
          >
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                px: 5,
                py: 2.5,
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 50%, #06b6d4 100%)',
                color: 'white',
                fontSize: '0.875rem',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(147, 51, 234, 0.5)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  animation: 'shimmer 2.5s infinite',
                },
                '@keyframes shimmer': {
                  '0%': { left: '-100%' },
                  '100%': { left: '100%' },
                },
              }}
              onClick={() => setBetaModalOpen(true)}
            >
              Reserve Your Spot
            </Button>
            <Button
              variant="outlined"
              sx={{
                px: 5,
                py: 2.5,
                borderRadius: '12px',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '0.875rem',
                backdropFilter: 'blur(8px)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                },
              }}
              onClick={() => setVideoModalOpen(true)}
            >
              Watch Video
            </Button>
          </Box>

          {/* Trust Indicators */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            sx={{ mt: 8, pt: 6, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#6b7280', 
                mb: 3,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Built for teams like yours at
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: { xs: 4, md: 6 },
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Spotify', 'Airbnb'].map((company, index) => (
                <Box
                  key={company}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    opacity: 1,
                  }}
                  sx={{
                    opacity: 0.5,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                    }
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      fontWeight: 600,
                    }}
                  >
                    {company}
                  </Typography>
                </Box>
              ))}
            </Box>
            
            {/* Animated gradient bar underneath */}
            <Box
              component={motion.div}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              sx={{
                mt: 4,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #9333ea, #3b82f6, #06b6d4, transparent)',
                transformOrigin: 'center',
              }}
            />
          </Box>
        </Box>
      </Container>
      <BetaModal open={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
      <VideoPreviewModal open={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </Box>
  );
}