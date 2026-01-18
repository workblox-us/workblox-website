'use client';
import {
  AccessTime,
  ArrowBack,
  ArrowForward,
  AutoAwesome,
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  Share,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  LinearProgress,
  Typography,
} from '@mui/material';
import { motion } from 'motion/react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Link from 'next/link';

import { useThemeColors } from '@/hooks/useThemeColors';

import { getBlogPostById, getRelatedBlogPosts } from '@/data/blogData';

import { useNavigation } from '@/contexts/NavigationContext';

export default function BlogDetail() {
  const colors = useThemeColors();
  const param = useParams();
  const blogId = param.blogId as string;
  const { navigateTo } = useNavigation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const blogPost = getBlogPostById(blogId);
  const relatedPosts = getRelatedBlogPosts(blogId);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!blogPost) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: colors.isDark ? '#000000' : '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth='md'>
          <Typography
            variant='h4'
            sx={{ color: colors.text.primary, textAlign: 'center', mb: 2 }}
          >
            Blog Post Not Found
          </Typography>
          <Typography
            sx={{ color: colors.text.secondary, textAlign: 'center', mb: 4 }}
          >
            The blog post you're looking for doesn't exist or has been removed.
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <IconButton
              onClick={() => navigateTo('blog')}
              sx={{ color: colors.text.primary }}
            >
              <ArrowBack /> Back to Blog
            </IconButton>
          </Box>
        </Container>
      </Box>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Bookmark removed' : 'Bookmark saved');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        text: blogPost.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: colors.isDark ? '#000000' : '#ffffff',
        pt: { xs: 10, md: 12 },
        pb: 8,
      }}
    >
      {/* Progress Bar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
        }}
      >
        <LinearProgress
          variant='determinate'
          value={scrollProgress}
          sx={{
            height: 3,
            bgcolor: 'transparent',
            '& .MuiLinearProgress-bar': {
              bgcolor: blogPost.color,
            },
          }}
        />
      </Box>

      {/* Background Effects */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          background: colors.isDark
            ? `radial-gradient(circle at 50% 0%, ${blogPost.color}15, transparent 50%)`
            : `radial-gradient(circle at 50% 0%, ${blogPost.color}08, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1 }}>
        {/* Back Button */}
        <Box sx={{ mb: 4 }}>
          <IconButton
            component={Link}
            href='/blog'
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
            <ArrowBack sx={{ mr: 1 }} />
            <Typography variant='body2'>Back to Blog</Typography>
          </IconButton>
        </Box>

        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ mb: 6 }}
        >
          <Chip
            label={blogPost.category}
            sx={{
              bgcolor: `${blogPost.color}20`,
              color: blogPost.color,
              fontWeight: 600,
              mb: 3,
              border: `1px solid ${blogPost.color}40`,
            }}
          />

          <Typography
            variant='h1'
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              color: colors.text.primary,
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            {blogPost.title}
          </Typography>

          <Typography
            variant='h6'
            sx={{
              fontSize: '1.25rem',
              color: colors.text.secondary,
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            {blogPost.excerpt}
          </Typography>

          {/* Meta Info */}
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
                  background: `linear-gradient(135deg, ${blogPost.color}, ${blogPost.iconColor})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                {blogPost.author.avatar}
              </Box>
              <Box>
                <Typography
                  sx={{ color: colors.text.primary, fontWeight: 600 }}
                >
                  {blogPost.author.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant='caption'
                    sx={{ color: colors.text.secondary }}
                  >
                    {blogPost.author.role}
                  </Typography>
                  <Typography
                    variant='caption'
                    sx={{ color: colors.text.secondary }}
                  >
                    •
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTime
                      sx={{
                        fontSize: '0.875rem',
                        color: colors.text.secondary,
                      }}
                    />
                    <Typography
                      variant='caption'
                      sx={{ color: colors.text.secondary }}
                    >
                      {blogPost.readTime} min read
                    </Typography>
                  </Box>
                  <Typography
                    variant='caption'
                    sx={{ color: colors.text.secondary }}
                  >
                    •
                  </Typography>
                  <Typography
                    variant='caption'
                    sx={{ color: colors.text.secondary }}
                  >
                    {blogPost.date}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                onClick={handleLike}
                size='small'
                sx={{
                  color: isLiked ? blogPost.color : colors.text.secondary,
                  '&:hover': {
                    bgcolor: colors.isDark
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                {isLiked ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
              <IconButton
                onClick={handleBookmark}
                size='small'
                sx={{
                  color: isBookmarked ? blogPost.color : colors.text.secondary,
                  '&:hover': {
                    bgcolor: colors.isDark
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                {isBookmarked ? <Bookmark /> : <BookmarkBorder />}
              </IconButton>
              <IconButton
                onClick={handleShare}
                size='small'
                sx={{
                  color: colors.text.secondary,
                  '&:hover': {
                    bgcolor: colors.isDark
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                <Share />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: 1,
            bgcolor: colors.isDark
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.1)',
            mb: 6,
          }}
        />

        {/* Content */}
        <Box
          component={motion.article}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            '& p': {
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: colors.text.primary,
              mb: 3,
            },
            '& h2': {
              fontSize: '1.75rem',
              fontWeight: 600,
              color: colors.text.primary,
              mt: 6,
              mb: 3,
            },
          }}
        >
          {/* Introduction */}
          <Typography component='p'>{blogPost.content.introduction}</Typography>

          {/* Sections */}
          {blogPost.content.sections.map((section, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography component='h2'>{section.heading}</Typography>
              <Typography component='p'>{section.content}</Typography>
            </Box>
          ))}

          {/* Conclusion */}
          <Box
            sx={{
              mt: 6,
              p: 4,
              borderLeft: `4px solid ${blogPost.color}`,
              bgcolor: colors.isDark
                ? 'rgba(255, 255, 255, 0.03)'
                : 'rgba(0, 0, 0, 0.02)',
              borderRadius: '0 8px 8px 0',
            }}
          >
            <Typography component='p' sx={{ mb: 0 }}>
              {blogPost.content.conclusion}
            </Typography>
          </Box>
        </Box>

        {/* Tags */}
        <Box sx={{ mt: 6, mb: 8 }}>
          <Typography
            variant='subtitle2'
            sx={{ color: colors.text.secondary, mb: 2 }}
          >
            Tags
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {blogPost.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size='small'
                sx={{
                  bgcolor: colors.isDark
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.05)',
                  color: colors.text.secondary,
                  '&:hover': {
                    bgcolor: colors.isDark
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* CTA Sections */}
        <Box sx={{ mt: 10, mb: 8 }}>
          {/* Get Early Access CTA */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              p: 6,
              borderRadius: '16px',
              background: colors.isDark
                ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.1))'
                : 'linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(59, 130, 246, 0.05))',
              border: colors.isDark
                ? '1px solid rgba(147, 51, 234, 0.3)'
                : '1px solid rgba(147, 51, 234, 0.2)',
              textAlign: 'center',
              mb: 4,
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
              }}
            >
              <AutoAwesome sx={{ fontSize: '1.75rem', color: 'white' }} />
            </Box>
            <Typography
              variant='h4'
              sx={{ fontWeight: 700, color: colors.text.primary, mb: 2 }}
            >
              Ready to Transform Your Workflow?
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: colors.text.secondary,
                maxWidth: '36rem',
                mx: 'auto',
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              Join the waitlist for early access to Workblox and experience the
              future of AI-powered work management.
            </Typography>
            <Button
              variant='contained'
              endIcon={<ArrowForward />}
              onClick={() => {
                navigateTo('home');
                setTimeout(() => {
                  const heroSection = document.querySelector('section');
                  heroSection?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }, 100);
              }}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(147, 51, 234, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Early Access
            </Button>
          </Box>

          {/* Experience Features CTA */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            sx={{
              p: 5,
              borderRadius: '16px',
              bgcolor: colors.isDark
                ? 'rgba(255, 255, 255, 0.03)'
                : 'rgba(0, 0, 0, 0.02)',
              border: colors.isDark
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 3,
            }}
          >
            <Box sx={{ flex: 1, minWidth: '250px' }}>
              <Typography
                variant='h6'
                sx={{ fontWeight: 600, color: colors.text.primary, mb: 1 }}
              >
                Explore Workblox Features
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: colors.text.secondary, lineHeight: 1.6 }}
              >
                See how AI-powered workspace management can help you plan,
                prioritize, and execute with clarity.
              </Typography>
            </Box>
            <Button
              variant='outlined'
              endIcon={<ArrowForward />}
              onClick={() => {
                navigateTo('home');
                setTimeout(() => {
                  const showcaseSection =
                    document.querySelectorAll('section')[1];
                  showcaseSection?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }, 100);
              }}
              sx={{
                px: 3,
                py: 1.25,
                borderRadius: '12px',
                border: `1px solid ${
                  colors.isDark
                    ? 'rgba(147, 51, 234, 0.4)'
                    : 'rgba(147, 51, 234, 0.3)'
                }`,
                color: '#9333ea',
                fontWeight: 600,
                '&:hover': {
                  border: `1px solid ${
                    colors.isDark
                      ? 'rgba(147, 51, 234, 0.6)'
                      : 'rgba(147, 51, 234, 0.5)'
                  }`,
                  bgcolor: colors.isDark
                    ? 'rgba(147, 51, 234, 0.1)'
                    : 'rgba(147, 51, 234, 0.05)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Interactive Demo
            </Button>
          </Box>
        </Box>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <Box sx={{ mt: 10 }}>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 600,
                color: colors.text.primary,
                mb: 4,
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
              {relatedPosts.map((relatedPost) => (
                <Box
                  key={relatedPost.id}
                  component={motion.div}
                  whileHover={{ y: -4 }}
                  onClick={() => navigateTo('blogPost', relatedPost.id)}
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
                      border: `1px solid ${relatedPost.color}40`,
                      boxShadow: `0 8px 24px ${relatedPost.color}20`,
                    },
                  }}
                >
                  <Chip
                    label={relatedPost.category}
                    size='small'
                    sx={{
                      bgcolor: `${relatedPost.color}20`,
                      color: relatedPost.color,
                      fontSize: '0.75rem',
                      mb: 2,
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: colors.text.primary,
                      mb: 1,
                      lineHeight: 1.4,
                    }}
                  >
                    {relatedPost.title}
                  </Typography>
                  <Typography
                    variant='caption'
                    sx={{
                      color: colors.text.secondary,
                      display: 'block',
                    }}
                  >
                    {relatedPost.readTime} min read
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
