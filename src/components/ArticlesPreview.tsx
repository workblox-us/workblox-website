import { motion } from 'motion/react';
import { Box, Container, Typography, Button } from '@mui/material';
import { 
  ArrowForward, 
  RemoveRedEye,
  TrendingUp,
  Rocket,
  Article as ArticleIcon,
} from '@mui/icons-material';
import { useThemeColors } from '../hooks/useThemeColors';
import { useNavigation } from '../contexts/NavigationContext';
import { getFeaturedArticles, Article } from '../data/articlesData';

export function ArticlesPreview() {
  const colors = useThemeColors();
  const { navigateTo } = useNavigation();
  const featuredArticles = getFeaturedArticles().slice(0, 3);

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
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 16 },
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: colors.isDark 
            ? 'linear-gradient(to bottom, #000000, rgba(99, 102, 241, 0.05), #000000)'
            : 'linear-gradient(to bottom, #ffffff, rgba(99, 102, 241, 0.02), #f8f9fa)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 3,
            mb: 6,
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.75,
                borderRadius: '50px',
                bgcolor: colors.isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
                border: colors.isDark ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid rgba(99, 102, 241, 0.3)',
                backdropFilter: 'blur(8px)',
                mb: 2,
              }}
            >
              <TrendingUp sx={{ fontSize: '0.875rem', color: colors.isDark ? '#a5b4fc' : '#6366f1' }} />
              <Typography variant="caption" sx={{ color: colors.isDark ? '#a5b4fc' : '#6366f1', fontSize: '0.8125rem' }}>
                Latest Updates
              </Typography>
            </Box>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: colors.text.primary,
                fontWeight: 700,
              }}
            >
              Articles & Product Updates
            </Typography>
            <Typography 
              sx={{ 
                color: colors.text.secondary,
                mt: 1,
                fontSize: '1.0625rem',
              }}
            >
              Insights, updates, and guides from the Workblox team
            </Typography>
          </Box>

          <Button
            endIcon={<ArrowForward />}
            onClick={() => navigateTo('articles')}
            sx={{
              px: 3,
              py: 1.25,
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              fontSize: '0.9375rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            View All Articles
          </Button>
        </Box>

        {/* Featured Articles Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {featuredArticles.map((article, idx) => {
            const typeColors = getTypeColor(article.type);
            const badgeColors = article.badge ? getBadgeColor(article.badge) : null;

            return (
              <Box
                key={article.id}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => navigateTo('article', article.id)}
                sx={{
                  p: 4,
                  borderRadius: '16px',
                  bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                  border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    boxShadow: '0 12px 40px rgba(99, 102, 241, 0.2)',
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
                    background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    {article.type === 'Product Update' ? (
                      <Rocket sx={{ fontSize: '1.5rem', color: '#a78bfa' }} />
                    ) : (
                      <ArticleIcon sx={{ fontSize: '1.5rem', color: '#60a5fa' }} />
                    )}
                  </Box>

                  {/* Badges */}
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '6px',
                        bgcolor: typeColors.bg,
                        border: `1px solid ${typeColors.border}`,
                        fontSize: '0.75rem',
                        color: typeColors.text,
                        fontWeight: 600,
                      }}
                    >
                      {article.type}
                    </Box>
                    {article.badge && badgeColors && (
                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '6px',
                          bgcolor: badgeColors.bg,
                          border: `1px solid ${badgeColors.border}`,
                          fontSize: '0.75rem',
                          color: badgeColors.text,
                          fontWeight: 600,
                        }}
                      >
                        {article.badge}
                      </Box>
                    )}
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      color: colors.text.primary,
                      fontSize: '1.125rem',
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
                      fontSize: '0.875rem',
                      mb: 3,
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article.excerpt}
                  </Typography>

                  {/* Meta */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ color: colors.text.secondary, fontSize: '0.8125rem' }}>
                      {article.readTime} min read
                    </Typography>
                    <Typography sx={{ color: colors.text.secondary }}>•</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <RemoveRedEye sx={{ fontSize: '0.875rem', color: colors.text.secondary }} />
                      <Typography sx={{ color: colors.text.secondary, fontSize: '0.8125rem' }}>
                        {article.views}
                      </Typography>
                    </Box>
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
