"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Chip,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  RemoveRedEye,
  FavoriteBorder,
  Favorite,
  Share,
  Bookmark,
  BookmarkBorder,
  Schedule,
  Twitter,
  LinkedIn,
  Link as LinkIcon,
} from '@mui/icons-material';
import { useThemeColors } from '../hooks/useThemeColors';
import { useNavigation } from '../contexts/NavigationContext';
import {
  getArticleById,
  getRelatedArticles,
  Article,
} from '../data/articlesData';
import { toast } from 'sonner';

interface ArticleDetailProps {
  articleId: string;
}

function ArticleDetail({ articleId }: ArticleDetailProps) {
  const colors = useThemeColors();
  const { goBack, navigateTo } = useNavigation();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const article = getArticleById(articleId);
  const relatedArticles = getRelatedArticles(articleId);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const contentTop = contentRef.current.offsetTop;
        const contentHeight = contentRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        const progress = Math.min(
          Math.max(
            ((scrollPosition - contentTop + windowHeight) / contentHeight) *
              100,
            0
          ),
          100
        );

        setReadingProgress(Math.round(progress));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ color: colors.text.primary }}>
          Article not found
        </Typography>
      </Box>
    );
  }

  const getTypeColor = (type: Article['type']) => {
    switch (type) {
      case 'Product Update':
        return {
          bg: 'rgba(139, 92, 246, 0.15)',
          border: 'rgba(139, 92, 246, 0.3)',
          text: '#a78bfa',
        };
      case 'Article':
        return {
          bg: 'rgba(59, 130, 246, 0.15)',
          border: 'rgba(59, 130, 246, 0.3)',
          text: '#60a5fa',
        };
      case 'Guide':
        return {
          bg: 'rgba(16, 185, 129, 0.15)',
          border: 'rgba(16, 185, 129, 0.3)',
          text: '#34d399',
        };
      case 'Release Notes':
        return {
          bg: 'rgba(245, 158, 11, 0.15)',
          border: 'rgba(245, 158, 11, 0.3)',
          text: '#fbbf24',
        };
    }
  };

  const typeColors = getTypeColor(article.type);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article.title;

    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          '_blank'
        );
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard');
        break;
    }
    setShowShareMenu(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: colors.isDark ? '#000000' : '#ffffff',
        pt: { xs: 10, md: 12 },
        pb: 10,
      }}
    >
      {/* Reading Progress Bar */}
      <Box
        component={motion.div}
        style={{ scaleX }}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
          transformOrigin: '0%',
          zIndex: 100,
        }}
      />

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

      <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1 }}>
        {/* Back Button */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          sx={{ mb: 4 }}
        >
          <IconButton
            onClick={goBack}
            sx={{
              color: colors.text.secondary,
              '&:hover': {
                color: colors.text.primary,
                bgcolor: colors.isDark
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(0, 0, 0, 0.05)',
              },
            }}
          >
            <ArrowBack />
          </IconButton>
        </Box>

        {/* Article Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ mb: 6 }}
        >
          {/* Meta Info */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 3,
              flexWrap: 'wrap',
            }}
          >
            <Chip
              label={article.type}
              size='small'
              sx={{
                bgcolor: typeColors.bg,
                color: typeColors.text,
                border: `1px solid ${typeColors.border}`,
              }}
            />
            {article.badge && (
              <Chip
                label={article.badge}
                size='small'
                sx={{
                  bgcolor: 'rgba(236, 72, 153, 0.15)',
                  color: '#ec4899',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                }}
              />
            )}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: colors.text.secondary,
              }}
            >
              <Schedule sx={{ fontSize: '0.875rem' }} />
              <Typography sx={{ fontSize: '0.875rem' }}>
                {article.readTime} min read
              </Typography>
            </Box>
          </Box>

          {/* Title */}
          <Typography
            variant='h1'
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              color: colors.text.primary,
              mb: 3,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {article.title}
          </Typography>

          {/* Excerpt */}
          <Typography
            sx={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            {article.excerpt}
          </Typography>

          {/* Author & Date */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              >
                {article.author.avatar}
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: colors.text.primary,
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                  }}
                >
                  {article.author.name}
                </Typography>
                <Typography
                  sx={{ color: colors.text.secondary, fontSize: '0.8125rem' }}
                >
                  {article.author.role} • {formatDate(article.publishedDate)}
                </Typography>
              </Box>
            </Box>

            {/* Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, px: 1 }}
              >
                <RemoveRedEye
                  sx={{ fontSize: '1rem', color: colors.text.secondary }}
                />
                <Typography
                  sx={{ color: colors.text.secondary, fontSize: '0.875rem' }}
                >
                  {article.views}
                </Typography>
              </Box>

              <IconButton
                size='small'
                onClick={() => setLiked(!liked)}
                sx={{ color: liked ? '#ec4899' : colors.text.secondary }}
              >
                {liked ? (
                  <Favorite sx={{ fontSize: '1.125rem' }} />
                ) : (
                  <FavoriteBorder sx={{ fontSize: '1.125rem' }} />
                )}
              </IconButton>

              <IconButton
                size='small'
                onClick={() => setBookmarked(!bookmarked)}
                sx={{ color: bookmarked ? '#fbbf24' : colors.text.secondary }}
              >
                {bookmarked ? (
                  <Bookmark sx={{ fontSize: '1.125rem' }} />
                ) : (
                  <BookmarkBorder sx={{ fontSize: '1.125rem' }} />
                )}
              </IconButton>

              <Box sx={{ position: 'relative' }}>
                <IconButton
                  size='small'
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  sx={{ color: colors.text.secondary }}
                >
                  <Share sx={{ fontSize: '1.125rem' }} />
                </IconButton>

                <AnimatePresence>
                  {showShareMenu && (
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        mt: 1,
                        p: 1,
                        borderRadius: '12px',
                        bgcolor: colors.isDark
                          ? 'rgba(0, 0, 0, 0.95)'
                          : 'rgba(255, 255, 255, 0.95)',
                        border: colors.isDark
                          ? '1px solid rgba(255, 255, 255, 0.1)'
                          : '1px solid rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(16px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        zIndex: 10,
                      }}
                    >
                      <IconButton
                        size='small'
                        onClick={() => handleShare('twitter')}
                        sx={{ color: '#1DA1F2' }}
                      >
                        <Twitter />
                      </IconButton>
                      <IconButton
                        size='small'
                        onClick={() => handleShare('linkedin')}
                        sx={{ color: '#0A66C2' }}
                      >
                        <LinkedIn />
                      </IconButton>
                      <IconButton
                        size='small'
                        onClick={() => handleShare('copy')}
                        sx={{ color: colors.text.secondary }}
                      >
                        <LinkIcon />
                      </IconButton>
                    </Box>
                  )}
                </AnimatePresence>
              </Box>
            </Box>
          </Box>

          <Divider
            sx={{
              mt: 4,
              borderColor: colors.isDark
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.1)',
            }}
          />
        </Box>

        {/* Article Content */}
        <Box
          ref={contentRef}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{ mb: 8 }}
        >
          {/* Introduction */}
          <Typography
            sx={{
              fontSize: '1.125rem',
              color: colors.text.primary,
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            {article.content.introduction}
          </Typography>

          {/* Sections */}
          {article.content.sections.map((section, idx) => (
            <Box key={idx} sx={{ mb: 5 }}>
              <Typography
                variant='h3'
                sx={{
                  fontSize: '1.5rem',
                  color: colors.text.primary,
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                {section.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.0625rem',
                  color: colors.text.secondary,
                  lineHeight: 1.8,
                }}
              >
                {section.content}
              </Typography>
            </Box>
          ))}

          {/* Conclusion */}
          <Box
            sx={{
              p: 4,
              borderRadius: '12px',
              bgcolor: colors.isDark
                ? 'rgba(99, 102, 241, 0.05)'
                : 'rgba(99, 102, 241, 0.03)',
              border: colors.isDark
                ? '1px solid rgba(99, 102, 241, 0.2)'
                : '1px solid rgba(99, 102, 241, 0.15)',
              mt: 6,
            }}
          >
            <Typography
              sx={{
                fontSize: '1.0625rem',
                color: colors.text.primary,
                lineHeight: 1.8,
              }}
            >
              {article.content.conclusion}
            </Typography>
          </Box>

          {/* Tags */}
          <Box sx={{ display: 'flex', gap: 1, mt: 6, flexWrap: 'wrap' }}>
            {article.tags.map((tag) => (
              <Chip
                key={tag}
                label={`#${tag}`}
                size='small'
                sx={{
                  bgcolor: colors.isDark
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.05)',
                  color: colors.text.secondary,
                  border: colors.isDark
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(99, 102, 241, 0.1)',
                    color: '#a5b4fc',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Divider
              sx={{
                mb: 6,
                borderColor: colors.isDark
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)',
              }}
            />

            <Typography
              variant='h4'
              sx={{
                fontSize: '1.5rem',
                color: colors.text.primary,
                mb: 4,
                fontWeight: 600,
              }}
            >
              Related Articles
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 3,
              }}
            >
              {relatedArticles.map((relatedArticle) => {
                const relatedTypeColors = getTypeColor(relatedArticle.type);
                return (
                  <Box
                    key={relatedArticle.id}
                    component={motion.div}
                    whileHover={{ y: -4 }}
                    onClick={() => navigateTo('article', relatedArticle.id)}
                    sx={{
                      p: 3,
                      borderRadius: '12px',
                      bgcolor: colors.isDark
                        ? 'rgba(255, 255, 255, 0.03)'
                        : 'rgba(0, 0, 0, 0.02)',
                      border: colors.isDark
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : '1px solid rgba(0, 0, 0, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: colors.isDark
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.04)',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                      },
                    }}
                  >
                    <Chip
                      label={relatedArticle.type}
                      size='small'
                      sx={{
                        height: 20,
                        fontSize: '0.7rem',
                        bgcolor: relatedTypeColors.bg,
                        color: relatedTypeColors.text,
                        border: `1px solid ${relatedTypeColors.border}`,
                        mb: 2,
                      }}
                    />
                    <Typography
                      sx={{
                        color: colors.text.primary,
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        mb: 1,
                        lineHeight: 1.4,
                      }}
                    >
                      {relatedArticle.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.text.secondary,
                        fontSize: '0.8125rem',
                      }}
                    >
                      {relatedArticle.readTime} min read
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </Container>

      {/* Reading Progress Indicator (Fixed) */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          opacity: readingProgress > 0 && readingProgress < 100 ? 1 : 0,
        }}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          px: 2,
          py: 1,
          borderRadius: '50px',
          bgcolor: colors.isDark
            ? 'rgba(0, 0, 0, 0.9)'
            : 'rgba(255, 255, 255, 0.9)',
          border: colors.isDark
            ? '1px solid rgba(255, 255, 255, 0.2)'
            : '1px solid rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
          zIndex: 50,
        }}
      >
        <Typography
          sx={{
            color: colors.text.primary,
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          {readingProgress}% read
        </Typography>
      </Box>
    </Box>
  );
}

export default ArticleDetail;
