'use client';
import {
  AutoAwesome,
  People,
  Search,
  Speed,
  TrendingUp,
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
import Link from 'next/link';
import { useState } from 'react';

import { useThemeColors } from '@/hooks/useThemeColors';

import { BetaModal } from '@/components/BetaModal';
import { SEOHead } from '@/components/SEOHead';

import { useNavigation } from '@/contexts/NavigationContext';

export default function BlogPage() {
  const colors = useThemeColors();
  const { navigateTo } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [betaModalOpen, setBetaModalOpen] = useState(false);

  const blogPosts = [
    {
      title: 'The Future of AI-Powered Work Management',
      excerpt:
        'How artificial intelligence is transforming the way teams plan, execute, and deliver projects in 2025 and beyond.',
      category: 'AI & Innovation',
      date: 'January 10, 2025',
      readTime: '8 min read',
      icon: AutoAwesome,
      color: '#9333ea',
      iconColor: '#c084fc',
      featured: true,
      id: 'ai-powered-work-management',
    },
    {
      title: '10 Signs You Need a Unified Workspace',
      excerpt:
        "Are scattered tools killing your productivity? Here are the warning signs that it's time to consolidate your work stack.",
      category: 'Productivity',
      date: 'January 5, 2025',
      readTime: '6 min read',
      icon: Speed,
      color: '#0891b2',
      iconColor: '#22d3ee',
      featured: false,
      id: 'unified-workspace-signs',
    },
    {
      title: 'How Workblox Helps Remote Teams Stay Aligned',
      excerpt:
        'Best practices for distributed teams using AI-powered workspace management to maintain collaboration and visibility.',
      category: 'Remote Work',
      date: 'December 28, 2024',
      readTime: '7 min read',
      icon: People,
      color: '#3b82f6',
      iconColor: '#60a5fa',
      featured: false,
      id: 'remote-teams-alignment',
    },
    {
      title: "From Chaos to Clarity: A Founder's Journey",
      excerpt:
        'How we built Workblox to solve the work management challenges we faced while scaling our own startup.',
      category: 'Company',
      date: 'December 20, 2024',
      readTime: '10 min read',
      icon: TrendingUp,
      color: '#16a34a',
      iconColor: '#34d399',
      featured: false,
      id: 'founder-journey',
    },
    {
      title: 'Natural Language Automations Explained',
      excerpt:
        "Learn how to build powerful workflows without writing code using Workblox's natural language automation engine.",
      category: 'Features',
      date: 'December 15, 2024',
      readTime: '5 min read',
      icon: AutoAwesome,
      color: '#9333ea',
      iconColor: '#c084fc',
      featured: false,
      id: 'natural-language-automations',
    },
    {
      title: 'Security Best Practices for Work Management Tools',
      excerpt:
        'A comprehensive guide to data security, compliance, and privacy in modern workspace platforms.',
      category: 'Security',
      date: 'December 10, 2024',
      readTime: '9 min read',
      icon: Speed,
      color: '#16a34a',
      iconColor: '#34d399',
      featured: false,
      id: 'security-best-practices',
    },
  ];

  const categories = [
    'All Posts',
    'AI & Innovation',
    'Productivity',
    'Remote Work',
    'Features',
    'Security',
    'Company',
  ];

  return (
    <>
      <SEOHead page='blog' />

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
              ? 'radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.1), transparent 50%)'
              : 'radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.05), transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: colors.isDark
                    ? 'linear-gradient(135deg, #ffffff, #c084fc)'
                    : 'linear-gradient(135deg, #000000, #9333ea)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Workblox Blog
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
                Insights on productivity, AI, remote work, and the future of
                work management.
              </Typography>
            </motion.div>
          </Box>

          {/* Search Bar */}
          <Box sx={{ maxWidth: '100%', mx: 'auto', mb: 6 }}>
            <TextField
              fullWidth
              placeholder='Search articles'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search sx={{ color: colors.text.secondary }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: colors.isDark
                    ? 'rgba(255, 255, 255, 0.03)'
                    : 'rgba(0, 0, 0, 0.03)',
                  borderRadius: '12px',
                  border: colors.isDark
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    border: colors.isDark
                      ? '1px solid rgba(147, 51, 234, 0.3)'
                      : '1px solid rgba(147, 51, 234, 0.3)',
                  },
                  '&.Mui-focused': {
                    border: colors.isDark
                      ? '1px solid rgba(147, 51, 234, 0.5)'
                      : '1px solid rgba(147, 51, 234, 0.5)',
                  },
                },
              }}
            />
          </Box>

          {/* Categories */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              mb: 6,
              overflowX: 'auto',
              pb: 2,
              justifyContent: 'center',
              '&::-webkit-scrollbar': { height: 6 },
              '&::-webkit-scrollbar-track': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              },
              '&::-webkit-scrollbar-thumb': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '3px',
              },
            }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  px: 2,
                  py: 2.5,
                  borderRadius: '12px',
                  bgcolor:
                    category === selectedCategory
                      ? colors.mode === 'dark'
                        ? 'rgba(147,51,234,0.2)'
                        : 'rgba(147,51,234,0.1)'
                      : colors.mode === 'dark'
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(0,0,0,0.05)',
                  color:
                    category === selectedCategory
                      ? '#9333ea'
                      : colors.text.secondary,
                  fontWeight: 600,
                  border:
                    category === selectedCategory
                      ? '1px solid #9333ea'
                      : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor:
                      colors.mode === 'dark'
                        ? 'rgba(147,51,234,0.3)'
                        : 'rgba(147,51,234,0.2)',
                    transform: 'translateY(-2px)',
                  },
                }}
              />
            ))}
          </Box>

          {/* Blog Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: 4,
            }}
          >
            {blogPosts
              .filter(
                (post) =>
                  selectedCategory === 'All Posts' ||
                  post.category === selectedCategory
              )
              .filter((post) =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((post, index) => {
                const Icon = post.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Box
                      component={Link}
                      href={`/blog/${post.id}`}
                      sx={{
                        textDecoration: 'none',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '16px',
                        bgcolor: colors.isDark
                          ? 'rgba(255, 255, 255, 0.03)'
                          : 'rgba(0, 0, 0, 0.02)',
                        border: colors.isDark
                          ? '1px solid rgba(255, 255, 255, 0.1)'
                          : '1px solid rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          bgcolor: colors.isDark
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(0, 0, 0, 0.04)',
                          border: '1px solid rgba(147, 51, 234, 0.3)',
                          boxShadow: '0 8px 32px rgba(147, 51, 234, 0.15)',
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      {/* Hover Glow */}
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: `radial-gradient(circle at top right, ${post.color}15, transparent 70%)`,
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Gradient Header */}
                      <Box
                        sx={{
                          height: '160px',
                          background: colors.isDark
                            ? `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), linear-gradient(135deg, ${post.color}20, ${post.color}10)`
                            : `linear-gradient(135deg, ${post.color}50, ${post.color}30)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          overflow: 'hidden',
                          borderBottom: colors.isDark
                            ? '1px solid rgba(255, 255, 255, 0.1)'
                            : '1px solid rgba(0, 0, 0, 0.05)',
                        }}
                      >
                        <Icon
                          sx={{
                            fontSize: '4rem',
                            color: colors.isDark ? post.iconColor : 'white',
                            opacity: colors.isDark ? 0.85 : 0.6,
                          }}
                        />
                        {post.featured && (
                          <Chip
                            label='Featured'
                            size='small'
                            sx={{
                              position: 'absolute',
                              top: 12,
                              right: 12,
                              bgcolor: colors.isDark
                                ? 'rgba(0, 0, 0, 0.5)'
                                : 'rgba(255, 255, 255, 0.95)',
                              color: post.color,
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              border: `1px solid ${post.color}`,
                            }}
                          />
                        )}
                      </Box>

                      <Box
                        sx={{
                          p: 3,
                          flexGrow: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        <Box sx={{ mb: 2 }}>
                          <Chip
                            label={post.category}
                            size='small'
                            sx={{
                              bgcolor: `${post.color}20`,
                              color: post.color,
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              mb: 1.5,
                            }}
                          />
                        </Box>

                        <Typography
                          variant='h6'
                          sx={{
                            fontWeight: 600,
                            color: colors.text.primary,
                            mb: 1.5,
                            lineHeight: 1.4,
                          }}
                        >
                          {post.title}
                        </Typography>

                        <Typography
                          variant='body2'
                          sx={{
                            color: colors.text.secondary,
                            mb: 2,
                            flexGrow: 1,
                            lineHeight: 1.6,
                          }}
                        >
                          {post.excerpt}
                        </Typography>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            pt: 2,
                            borderTop: colors.isDark
                              ? '1px solid rgba(255, 255, 255, 0.1)'
                              : '1px solid rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          <Typography
                            variant='caption'
                            sx={{ color: colors.text.secondary }}
                          >
                            {post.date}
                          </Typography>
                          <Typography
                            variant='caption'
                            sx={{ color: post.color, fontWeight: 600 }}
                          >
                            {post.readTime}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                );
              })}
          </Box>

          {/* Newsletter CTA */}
          <Box
            sx={{
              mt: 10,
              py: 4,
              px: 5,
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
            <Typography
              variant='h6'
              sx={{ fontWeight: 600, color: colors.text.primary, mb: 1.5 }}
            >
              Stay Updated
            </Typography>
            <Typography
              variant='body2'
              sx={{
                color: colors.text.secondary,
                maxWidth: '40rem',
                mx: 'auto',
                mb: 2,
              }}
            >
              Product updates, launch milestones, and early access invites. No
              spam.
            </Typography>
            <Typography
              onClick={() => setBetaModalOpen(true)}
              sx={{
                color: colors.isDark ? '#a78bfa' : '#9333ea',
                fontSize: '0.9375rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: colors.isDark ? '#c084fc' : '#7c3aed',
                  textDecoration: 'underline',
                  transform: 'translateX(2px)',
                },
              }}
            >
              Get updates + early access →
            </Typography>
          </Box>

          {/* Note */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography
              variant='body2'
              sx={{ color: colors.text.secondary, fontSize: '0.875rem' }}
            >
              📝 Blog posts are currently in preview. Full content coming with
              beta launch.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Beta Modal */}
      <BetaModal open={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
    </>
  );
}
