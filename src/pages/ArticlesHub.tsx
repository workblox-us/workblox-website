import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
} from '@mui/material';
import {
  Search,
  FilterList,
  TrendingUp,
  Schedule,
  RemoveRedEye,
  FavoriteBorder,
  ArrowForward,
  Article as ArticleIcon,
  Rocket,
  MenuBook,
  Description,
} from '@mui/icons-material';
import { useThemeColors } from '../hooks/useThemeColors';
import { useNavigation } from '../contexts/NavigationContext';
import { articlesData, Article } from '../data/articlesData';

export function ArticlesHub() {
  const colors = useThemeColors();
  const { navigateTo } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const types = ['All', 'Product Update', 'Article', 'Guide', 'Release Notes'];
  const categories = ['All', 'Features', 'Best Practices', 'Technical'];

  // Filter articles
  const filteredArticles = articlesData.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = selectedType === 'All' || article.type === selectedType;
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

    return matchesSearch && matchesType && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Product Update': return Rocket;
      case 'Article': return ArticleIcon;
      case 'Guide': return MenuBook;
      case 'Release Notes': return Description;
      default: return ArticleIcon;
    }
  };

  const getTypeColor = (type: Article['type']) => {
    switch (type) {
      case 'Product Update': return { bg: 'rgba(139, 92, 246, 0.15)', border: 'rgba(139, 92, 246, 0.3)', text: '#a78bfa' };
      case 'Article': return { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.3)', text: '#60a5fa' };
      case 'Guide': return { bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.3)', text: '#34d399' };
      case 'Release Notes': return { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.3)', text: '#fbbf24' };
    }
  };

  const getBadgeColor = (badge: Article['badge']) => {
    switch (badge) {
      case 'New': return { bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.3)', text: '#ec4899' };
      case 'Improved': return { bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.3)', text: '#a5b4fc' };
      case 'Breaking': return { bg: 'rgba(239, 68, 68, 0.15)', border: 'rgba(239, 68, 68, 0.3)', text: '#f87171' };
      case 'Popular': return { bg: 'rgba(251, 191, 36, 0.15)', border: 'rgba(251, 191, 36, 0.3)', text: '#fbbf24' };
      default: return { bg: 'rgba(156, 163, 175, 0.15)', border: 'rgba(156, 163, 175, 0.3)', text: '#9ca3af' };
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: colors.isDark ? '#000000' : '#ffffff',
        pt: { xs: 12, md: 14 },
        pb: 10,
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          background: colors.isDark 
            ? 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1), transparent 50%)'
            : 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.05), transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2.5,
              py: 1,
              borderRadius: '50px',
              bgcolor: colors.isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
              border: colors.isDark ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid rgba(99, 102, 241, 0.3)',
              backdropFilter: 'blur(8px)',
              mb: 3,
            }}
          >
            <TrendingUp sx={{ fontSize: '1rem', color: colors.isDark ? '#a5b4fc' : '#6366f1' }} />
            <Typography variant="caption" sx={{ color: colors.isDark ? '#a5b4fc' : '#6366f1' }}>
              Knowledge Hub
            </Typography>
          </Box>

          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' }, 
              color: colors.text.primary, 
              mb: 2,
              fontWeight: 700,
              background: colors.isDark 
                ? 'linear-gradient(135deg, #ffffff, #a5b4fc)'
                : 'linear-gradient(135deg, #000000, #6366f1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Articles & Updates
          </Typography>

          <Typography 
            variant="h6" 
            sx={{ 
              color: colors.text.secondary, 
              maxWidth: '48rem', 
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Product updates, guides, and insights to help you get the most out of Workblox
          </Typography>
        </Box>

        {/* Search and Filters */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          sx={{ mb: 6 }}
        >
          {/* Search Bar */}
          <TextField
            fullWidth
            placeholder="Search articles, updates, and guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: colors.text.secondary }} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                borderRadius: '12px',
                border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  border: colors.isDark ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(99, 102, 241, 0.3)',
                },
                '&.Mui-focused': {
                  border: colors.isDark ? '1px solid rgba(99, 102, 241, 0.5)' : '1px solid rgba(99, 102, 241, 0.5)',
                },
              },
            }}
          />

          {/* Type Filters */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
            <FilterList sx={{ fontSize: '1.125rem', color: colors.text.secondary, mr: 1 }} />
            {types.map((type) => {
              const Icon = getTypeIcon(type);
              return (
                <Chip
                  key={type}
                  icon={<Icon sx={{ fontSize: '1rem' }} />}
                  label={type}
                  onClick={() => setSelectedType(type)}
                  sx={{
                    bgcolor: selectedType === type 
                      ? 'rgba(99, 102, 241, 0.15)' 
                      : colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                    color: selectedType === type 
                      ? '#a5b4fc' 
                      : colors.text.secondary,
                    border: selectedType === type 
                      ? '1px solid rgba(99, 102, 241, 0.3)' 
                      : colors.isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      bgcolor: 'rgba(99, 102, 241, 0.1)',
                      color: '#a5b4fc',
                    },
                  }}
                />
              );
            })}
          </Box>

          {/* Category Filters */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                size="small"
                sx={{
                  bgcolor: selectedCategory === category 
                    ? 'rgba(139, 92, 246, 0.15)' 
                    : colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                  color: selectedCategory === category 
                    ? '#a78bfa' 
                    : colors.text.secondary,
                  border: selectedCategory === category 
                    ? '1px solid rgba(139, 92, 246, 0.3)' 
                    : colors.isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    bgcolor: 'rgba(139, 92, 246, 0.1)',
                    color: '#a78bfa',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Results Count */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          sx={{ mb: 4 }}
        >
          <Typography sx={{ color: colors.text.secondary, fontSize: '0.875rem' }}>
            {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
          </Typography>
        </Box>

        {/* Articles Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          <AnimatePresence>
            {filteredArticles.map((article, idx) => {
              const typeColors = getTypeColor(article.type);
              const badgeColors = article.badge ? getBadgeColor(article.badge) : null;

              return (
                <Box
                  key={article.id}
                  component={motion.div}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  onClick={() => navigateTo('article', article.id)}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                    border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      boxShadow: '0 8px 32px rgba(99, 102, 241, 0.15)',
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
                      background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.1), transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />

                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    {/* Badges */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      <Chip
                        label={article.type}
                        size="small"
                        sx={{
                          height: 22,
                          fontSize: '0.75rem',
                          bgcolor: typeColors.bg,
                          color: typeColors.text,
                          border: `1px solid ${typeColors.border}`,
                        }}
                      />
                      {article.badge && badgeColors && (
                        <Chip
                          label={article.badge}
                          size="small"
                          sx={{
                            height: 22,
                            fontSize: '0.75rem',
                            bgcolor: badgeColors.bg,
                            color: badgeColors.text,
                            border: `1px solid ${badgeColors.border}`,
                          }}
                        />
                      )}
                    </Box>

                    {/* Title */}
                    <Typography 
                      sx={{ 
                        color: colors.text.primary, 
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        mb: 2,
                        lineHeight: 1.4,
                      }}
                    >
                      {article.title}
                    </Typography>

                    {/* Excerpt */}
                    <Typography 
                      sx={{ 
                        color: colors.text.secondary, 
                        fontSize: '0.9375rem',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {article.excerpt}
                    </Typography>

                    {/* Meta Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                          }}
                        >
                          {article.author.avatar}
                        </Box>
                        <Box>
                          <Typography sx={{ color: colors.text.primary, fontSize: '0.8125rem', fontWeight: 500 }}>
                            {article.author.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography sx={{ color: colors.text.secondary, fontSize: '0.75rem' }}>
                              {article.readTime} min read
                            </Typography>
                            <Typography sx={{ color: colors.text.secondary, fontSize: '0.75rem' }}>
                              •
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <RemoveRedEye sx={{ fontSize: '0.875rem', color: colors.text.secondary }} />
                              <Typography sx={{ color: colors.text.secondary, fontSize: '0.75rem' }}>
                                {article.views}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      <IconButton
                        size="small"
                        sx={{
                          color: colors.text.secondary,
                          '&:hover': {
                            color: '#a5b4fc',
                            transform: 'translateX(4px)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <ArrowForward sx={{ fontSize: '1.125rem' }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </AnimatePresence>
        </Box>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            sx={{
              textAlign: 'center',
              py: 12,
            }}
          >
            <Search sx={{ fontSize: '4rem', color: colors.text.secondary, mb: 2, opacity: 0.5 }} />
            <Typography sx={{ color: colors.text.primary, fontSize: '1.25rem', mb: 1 }}>
              No articles found
            </Typography>
            <Typography sx={{ color: colors.text.secondary }}>
              Try adjusting your search or filters
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
