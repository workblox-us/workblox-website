import { motion } from 'motion/react';
import { 
  Code, 
  Business, 
  Rocket, 
  TrendingUp, 
  Campaign, 
  Support, 
  Groups, 
  Settings, 
  Palette 
} from '@mui/icons-material';
import { Box, Container, Typography, Chip } from '@mui/material';
import { useThemeColors } from '../hooks/useThemeColors';

export function UseCasesSection() {
  const colors = useThemeColors();
  const useCases = [
    {
      icon: Rocket,
      title: 'Founders & Operators',
      description: 'Run your company without drowning in tools. See everything, decide faster, and keep your team aligned.',
      gradient: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
      color: '#a855f7'
    },
    {
      icon: TrendingUp,
      title: 'Project & Program Managers',
      description: 'Coordinate complex work across teams. Track dependencies, timelines, and priorities in one system.',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      color: '#3b82f6'
    },
    {
      icon: Settings,
      title: 'Transformation & Strategy Leaders',
      description: 'Drive organizational change with clarity. Plan initiatives, measure progress, and communicate effectively.',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      color: '#06b6d4'
    },
    {
      icon: Code,
      title: 'Product & Engineering Teams',
      description: 'Build and ship with less friction. Connect planning, development, and deployment in one workspace.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      color: '#8b5cf6'
    },
    {
      icon: Business,
      title: 'Cross-Functional Teams',
      description: 'Stop context switching between tools. Work together where priorities, tasks, and conversations connect.',
      gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      color: '#22c55e'
    },
    {
      icon: Groups,
      title: 'Remote & Distributed Teams',
      description: 'Stay coordinated across time zones. Async communication that keeps everyone on the same page.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      color: '#f59e0b'
    }
  ];

  return (
    <Box component="section" id="solutions" sx={{ position: 'relative', py: { xs: 10, md: 16 }, overflow: 'hidden' }}>
      {/* Background */}
      <Box sx={{ position: 'absolute', inset: 0, background: colors.gradient.background }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}
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
              mb: 2,
            }}
          >
            <Typography variant="caption" sx={{ color: colors.badge.text }}>Solutions</Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, color: colors.text.primary, mb: 2, fontWeight: 700 }}>
            Built for how
            <br />
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #22d3ee 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              teams actually work
            </Box>
          </Typography>
          <Typography variant="h6" sx={{ color: colors.text.secondary, maxWidth: '32rem', mx: 'auto' }}>
            Flexible solutions that adapt to your workflow, not the other way around
          </Typography>
        </Box>

        {/* Use Cases Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: { xs: 3, md: 4 } }}>
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Box
                key={useCase.title}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ position: 'relative', height: '100%' }}
              >
                {/* Hover Glow */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: -0.5,
                    background: useCase.gradient,
                    borderRadius: '16px',
                    opacity: 0,
                    filter: 'blur(24px)',
                    transition: 'opacity 0.5s',
                    '.MuiBox-root:hover > &': {
                      opacity: 0.2,
                    },
                  }}
                />

                {/* Card */}
                <Box
                  sx={{
                    position: 'relative',
                    height: '100%',
                    p: { xs: 4, md: 5 },
                    borderRadius: '16px',
                    background: colors.bg.card,
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${useCase.color}33`,
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: colors.border.light,
                      boxShadow: `0 20px 40px ${useCase.color}33`,
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '12px',
                      background: useCase.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      transition: 'transform 0.3s',
                    }}
                  >
                    <Icon sx={{ fontSize: '2rem', color: 'white' }} />
                  </Box>

                  {/* Content */}
                  <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, color: colors.text.primary, mb: 1.5 }}>
                    {useCase.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: colors.text.secondary, lineHeight: 1.7, mb: 3 }}>
                    {useCase.description}
                  </Typography>

                  {/* Features */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {['AI-Powered', 'Real-time', 'Collaborative'].map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: colors.chip.bg,
                          border: `1px solid ${colors.chip.border}`,
                          color: colors.text.muted,
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}