'use client';
import {
  AutoAwesome,
  CheckCircle,
  Extension,
  Search,
} from '@mui/icons-material';
import {
  Box,
  Chip,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';

import { useThemeColors } from '@/hooks/useThemeColors';

import { IntegrationCategory, integrationsData } from '@/data/integrationsData';

import { SEOHead } from '@/components/SEOHead';

export default function IntegrationsPage() {
  const colors = useThemeColors();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: IntegrationCategory[] = [
    'All',
    'Communication',
    'Project Management',
    'Development',
    'Storage',
    'Productivity',
    'Design',
    'Analytics',
    'CRM',
    'Marketing',
    'Finance',
    'HR',
    'E-commerce',
    'Automation',
    'Communication & Calling',
  ];

  const filteredIntegrations = useMemo(() => {
    let filtered = integrationsData;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((app) => app.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (app) =>
          app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          app.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <SEOHead page='integrations' />

      <Box sx={{ minHeight: '100vh', bgcolor: '#000000' }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            pt: { xs: 14, md: 18 },
            pb: { xs: 10, md: 14 },
            overflow: 'hidden',
            background: colors.isDark
              ? 'linear-gradient(to bottom, #000000, rgba(30, 64, 175, 0.08), #000000)'
              : 'linear-gradient(to bottom, #ffffff, rgba(168, 85, 247, 0.03), #f8f9fa)',
          }}
        >
          {/* Animated background gradients */}
          <Box
            component={motion.div}
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity }}
            sx={{
              position: 'absolute',
              top: '20%',
              left: '30%',
              transform: 'translate(-50%, -50%)',
              width: '800px',
              height: '800px',
              bgcolor: 'rgba(147, 51, 234, 0.2)',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
          <Box
            component={motion.div}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            sx={{
              position: 'absolute',
              top: '30%',
              right: '20%',
              width: '600px',
              height: '600px',
              bgcolor: 'rgba(59, 130, 246, 0.2)',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />

          <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 10 }}>
            <Box sx={{ textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2.5,
                    py: 1,
                    borderRadius: '50px',
                    bgcolor: colors.badge.bg,
                    border: `1px solid ${colors.border.accent}`,
                    backdropFilter: 'blur(12px)',
                    mb: 4,
                  }}
                >
                  <Extension
                    sx={{
                      fontSize: '0.875rem',
                      color: colors.isDark ? '#c084fc' : '#7c3aed',
                    }}
                  />
                  <Typography
                    variant='caption'
                    sx={{
                      color: colors.badge.text,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    100+ Integrations
                  </Typography>
                </Box>

                <Typography
                  variant='h1'
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.75rem' },
                    fontWeight: 700,
                    color: colors.text.primary,
                    mb: 3,
                    lineHeight: 1.15,
                  }}
                >
                  Connect Everything,{' '}
                  <Box
                    component='span'
                    sx={{
                      background:
                        'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Effortlessly
                  </Box>
                </Typography>

                <Typography
                  variant='h6'
                  sx={{
                    fontSize: { xs: '1.0625rem', md: '1.1875rem' },
                    color: colors.text.secondary,
                    maxWidth: '48rem',
                    mx: 'auto',
                    lineHeight: 1.7,
                    mb: 6,
                  }}
                >
                  Workblox makes third-party integrations incredibly simple. No
                  technical background needed. Our Contextual AI handles the
                  heavy lifting, connecting your favorite tools in seconds.
                </Typography>

                {/* Key Features */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: 3,
                    maxWidth: '64rem',
                    mx: 'auto',
                    mb: 8,
                  }}
                >
                  {[
                    {
                      icon: AutoAwesome,
                      title: 'AI-Powered Setup',
                      description: 'Let AI configure integrations for you',
                    },
                    {
                      icon: Extension,
                      title: 'No Code Required',
                      description: 'Connect apps with zero technical knowledge',
                    },
                    {
                      icon: CheckCircle,
                      title: 'Instant Sync',
                      description: 'Real-time data flow across all tools',
                    },
                  ].map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            p: 3.5,
                            borderRadius: '16px',
                            background: colors.isDark
                              ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(147, 51, 234, 0.02))'
                              : 'linear-gradient(135deg, rgba(147, 51, 234, 0.06), rgba(255, 255, 255, 0.9))',
                            border: colors.isDark
                              ? '1px solid rgba(147, 51, 234, 0.2)'
                              : '1px solid rgba(147, 51, 234, 0.15)',
                            backdropFilter: 'blur(10px)',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: colors.isDark
                                ? '0 12px 40px rgba(147, 51, 234, 0.2)'
                                : '0 12px 40px rgba(147, 51, 234, 0.15)',
                              border: colors.isDark
                                ? '1px solid rgba(147, 51, 234, 0.4)'
                                : '1px solid rgba(147, 51, 234, 0.3)',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              mx: 'auto',
                              mb: 2,
                              borderRadius: '14px',
                              background: colors.isDark
                                ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(147, 51, 234, 0.1))'
                                : 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(147, 51, 234, 0.05))',
                              border: colors.isDark
                                ? '1px solid rgba(147, 51, 234, 0.3)'
                                : '1px solid rgba(147, 51, 234, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon
                              sx={{
                                fontSize: '1.75rem',
                                color: colors.isDark ? '#c084fc' : '#7c3aed',
                              }}
                            />
                          </Box>
                          <Typography
                            variant='h6'
                            sx={{
                              color: colors.text.primary,
                              mb: 1,
                              fontSize: '1rem',
                              fontWeight: 600,
                            }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            sx={{
                              color: colors.text.secondary,
                              fontSize: '0.875rem',
                              lineHeight: 1.6,
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </Box>
                      </motion.div>
                    );
                  })}
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>

        {/* Integrations Grid Section */}
        <Container maxWidth='lg' sx={{ py: { xs: 8, md: 12 } }}>
          {/* Search and Filter */}
          <Box sx={{ mb: 6 }}>
            {/* Search Bar */}
            <TextField
              fullWidth
              placeholder='Search integrations...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search
                      sx={{
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: '1.25rem',
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  fontSize: '1rem',
                  '& fieldset': {
                    border: 'none',
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(147, 51, 234, 0.3)',
                  },
                  '&.Mui-focused': {
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(147, 51, 234, 0.6)',
                    boxShadow: '0 0 0 3px rgba(147, 51, 234, 0.1)',
                  },
                },
                '& .MuiInputBase-input': {
                  py: 2,
                  '&::placeholder': {
                    color: 'rgba(255, 255, 255, 0.4)',
                  },
                },
              }}
            />

            {/* Category Filters */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  sx={{
                    bgcolor:
                      selectedCategory === category
                        ? 'rgba(147, 51, 234, 0.25)'
                        : 'rgba(255, 255, 255, 0.04)',
                    color:
                      selectedCategory === category
                        ? '#e9d5ff'
                        : 'rgba(255, 255, 255, 0.7)',
                    border:
                      selectedCategory === category
                        ? '1px solid rgba(147, 51, 234, 0.6)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                    fontWeight: selectedCategory === category ? 600 : 500,
                    fontSize: '0.875rem',
                    px: 1.5,
                    py: 2.5,
                    height: 'auto',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      bgcolor:
                        selectedCategory === category
                          ? 'rgba(147, 51, 234, 0.35)'
                          : 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(147, 51, 234, 0.6)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Results Count */}
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              mb: 4,
              fontSize: '0.9375rem',
              fontWeight: 500,
            }}
          >
            Showing {filteredIntegrations.length} integration
            {filteredIntegrations.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </Typography>

          {/* Integrations Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
                lg: 'repeat(5, 1fr)',
              },
              gap: 3,
            }}
          >
            {filteredIntegrations.map((app, index) => (
              <motion.div
                key={`${app.name}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.02, 0.5),
                }}
                whileHover={{ scale: 1.03 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    p: 3,
                    borderRadius: '20px',
                    bgcolor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(147, 51, 234, 0.5)',
                      boxShadow: '0 12px 40px rgba(147, 51, 234, 0.25)',
                      transform: 'translateY(-4px)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background:
                        'linear-gradient(90deg, #c084fc 0%, #3b82f6 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                  }}
                >
                  {/* Category Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '8px',
                      bgcolor: 'rgba(147, 51, 234, 0.15)',
                      border: '1px solid rgba(147, 51, 234, 0.3)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.625rem',
                        color: '#c084fc',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {app.category}
                    </Typography>
                  </Box>

                  {/* Logo Container */}
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      mx: 'auto',
                      mt: 3,
                      mb: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '16px',
                      bgcolor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      p: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Box
                      component='img'
                      src={app.logo}
                      alt={app.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>

                  {/* App Name */}
                  <Typography
                    variant='subtitle1'
                    sx={{
                      color: '#ffffff',
                      mb: 1,
                      fontSize: '1rem',
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    {app.name}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant='caption'
                    sx={{
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontSize: '0.75rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {app.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* No Results */}
          {filteredIntegrations.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 12 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 3,
                  borderRadius: '50%',
                  bgcolor: 'rgba(147, 51, 234, 0.1)',
                  border: '1px solid rgba(147, 51, 234, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Search
                  sx={{ fontSize: '2rem', color: 'rgba(255, 255, 255, 0.4)' }}
                />
              </Box>
              <Typography
                variant='h6'
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 1.5,
                  fontWeight: 600,
                }}
              >
                No integrations found
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: 'rgba(255, 255, 255, 0.4)',
                  fontSize: '0.9375rem',
                }}
              >
                Try adjusting your search or filter criteria
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
