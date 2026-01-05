import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Article,
  Rocket,
  DraftsOutlined,
  Schedule,
  BarChart,
  Settings,
  Add,
  MoreVert,
  Visibility,
  Edit,
  ContentCopy,
  Public,
  FormatBold,
  FormatItalic,
  Code,
  Image as ImageIcon,
  Link,
  Check,
  Close,
  CalendarToday,
  Tag,
  People,
  TrendingUp,
  AutoAwesome,
  RemoveRedEye,
  FavoriteBorder,
  Share,
} from '@mui/icons-material';
import { Box, Container, Typography, IconButton, Chip } from '@mui/material';
import { useThemeColors } from '../hooks/useThemeColors';

export function ArticlesSection() {
  const colors = useThemeColors();
  const [activeView, setActiveView] = useState<'feed' | 'editor' | 'preview'>('feed');
  const [selectedArticle, setSelectedArticle] = useState(0);
  const [showFormatBar, setShowFormatBar] = useState(false);
  const [publishStatus, setPublishStatus] = useState<'draft' | 'scheduled' | 'published'>('draft');

  // Auto-cycle through views
  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveView(prev => {
        if (prev === 'feed') return 'editor';
        if (prev === 'editor') return 'preview';
        return 'feed';
      });
    }, 8000);
    return () => clearInterval(cycle);
  }, []);

  const articles = [
    {
      id: 1,
      title: 'Introducing AI-Powered Workflow Automation',
      type: 'Product Update',
      status: 'Published',
      author: 'Sarah Chen',
      date: '2 hours ago',
      views: 1247,
      reactions: 89,
      badge: 'New',
    },
    {
      id: 2,
      title: 'How to Build Better Product Roadmaps',
      type: 'Article',
      status: 'Published',
      author: 'Mike Rodriguez',
      date: '1 day ago',
      views: 2134,
      reactions: 156,
    },
    {
      id: 3,
      title: 'Q1 2025 Platform Performance Updates',
      type: 'Product Update',
      status: 'Scheduled',
      author: 'Emily Watson',
      date: 'Tomorrow at 9:00 AM',
      views: 0,
      reactions: 0,
      badge: 'Improved',
    },
    {
      id: 4,
      title: 'Team Collaboration Best Practices',
      type: 'Article',
      status: 'Draft',
      author: 'You',
      date: 'Edited 5 min ago',
      views: 0,
      reactions: 0,
    },
  ];

  const sidebarItems = [
    { icon: Article, label: 'Articles', count: 12, active: true },
    { icon: Rocket, label: 'Product Updates', count: 8 },
    { icon: DraftsOutlined, label: 'Drafts', count: 3 },
    { icon: Schedule, label: 'Scheduled', count: 2 },
    { icon: BarChart, label: 'Analytics' },
    { icon: Settings, label: 'Settings' },
  ];

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
            ? 'linear-gradient(to bottom, #000000, rgba(99, 102, 241, 0.1), #000000)'
            : 'linear-gradient(to bottom, #ffffff, rgba(99, 102, 241, 0.03), #f8f9fa)',
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
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: '50px',
              bgcolor: colors.isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
              border: colors.isDark ? '1px solid rgba(99, 102, 241, 0.2)' : '1px solid rgba(99, 102, 241, 0.3)',
              backdropFilter: 'blur(8px)',
              mb: 2,
            }}
          >
            <Typography variant="caption" sx={{ color: colors.isDark ? '#a5b4fc' : '#6366f1' }}>
              Editorial Platform
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, color: colors.text.primary, mb: 2, fontWeight: 700 }}>
            Articles & Product Updates
          </Typography>
          <Typography variant="h6" sx={{ color: colors.text.secondary, maxWidth: '42rem', mx: 'auto', lineHeight: 1.7 }}>
            Publish updates with confidence. Create, manage, and share articles with a professional editorial experience.
          </Typography>
        </Box>

        {/* View Toggle */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            mb: 4,
            justifyContent: 'center',
          }}
        >
          {[
            { id: 'feed', label: 'Content Feed' },
            { id: 'editor', label: 'Editor' },
            { id: 'preview', label: 'Preview' },
          ].map((view) => (
            <Box
              key={view.id}
              component="button"
              onClick={() => setActiveView(view.id as any)}
              sx={{
                px: 3,
                py: 1,
                borderRadius: '8px',
                border: activeView === view.id 
                  ? '1px solid rgba(99, 102, 241, 0.5)' 
                  : '1px solid rgba(255, 255, 255, 0.1)',
                bgcolor: activeView === view.id 
                  ? 'rgba(99, 102, 241, 0.15)' 
                  : 'rgba(255, 255, 255, 0.03)',
                color: activeView === view.id ? '#a5b4fc' : '#9ca3af',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(99, 102, 241, 0.1)',
                  color: '#a5b4fc',
                },
              }}
            >
              {view.label}
            </Box>
          ))}
        </Box>

        {/* Main Demo Container */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{ position: 'relative' }}
        >
          {/* Glow Effect */}
          <Box
            component={motion.div}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
              filter: 'blur(64px)',
              opacity: 0.3,
            }}
          />

          {/* Interface Container */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(0, 0, 0, 0.9))',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Browser Chrome */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1.5,
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                bgcolor: 'rgba(0, 0, 0, 0.4)',
              }}
            >
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'rgba(239, 68, 68, 0.8)' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'rgba(251, 191, 36, 0.8)' }} />
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'rgba(34, 197, 94, 0.8)' }} />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  mx: 2,
                  height: 28,
                  borderRadius: '6px',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  px: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="caption" sx={{ color: '#6b7280' }}>
                  articles.workblox.ai
                </Typography>
              </Box>
            </Box>

            {/* Main Interface */}
            <Box sx={{ display: 'flex', minHeight: '600px' }}>
              {/* Left Sidebar */}
              <Box
                sx={{
                  width: 220,
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                  bgcolor: 'rgba(0, 0, 0, 0.4)',
                  p: 2,
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                {/* Create Button */}
                <Box
                  component={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    width: '100%',
                    p: 1.5,
                    mb: 2,
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    border: 'none',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                  }}
                >
                  <Add sx={{ fontSize: '1.125rem' }} />
                  New Article
                </Box>

                {/* Navigation Items */}
                {sidebarItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Box
                      key={idx}
                      component={motion.div}
                      whileHover={{ x: 4 }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.25,
                        borderRadius: '8px',
                        bgcolor: item.active ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                        border: item.active ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent',
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: '1.125rem', color: item.active ? '#a5b4fc' : '#9ca3af' }} />
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          flex: 1, 
                          color: item.active ? '#e5e7eb' : '#9ca3af',
                          fontSize: '0.8125rem',
                        }}
                      >
                        {item.label}
                      </Typography>
                      {item.count !== undefined && (
                        <Box
                          sx={{
                            px: 1,
                            py: 0.25,
                            borderRadius: '12px',
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            fontSize: '0.7rem',
                            color: '#9ca3af',
                          }}
                        >
                          {item.count}
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>

              {/* Main Content Area */}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <AnimatePresence mode="wait">
                  {activeView === 'feed' && (
                    <FeedView key="feed" articles={articles} />
                  )}
                  {activeView === 'editor' && (
                    <EditorView 
                      key="editor" 
                      showFormatBar={showFormatBar}
                      setShowFormatBar={setShowFormatBar}
                      publishStatus={publishStatus}
                      setPublishStatus={setPublishStatus}
                    />
                  )}
                  {activeView === 'preview' && (
                    <PreviewView key="preview" />
                  )}
                </AnimatePresence>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Feature Highlights */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
            mt: 6,
          }}
        >
          {[
            {
              icon: Edit,
              title: 'Distraction-Free Editor',
              description: 'Focused writing experience with markdown support and live preview',
            },
            {
              icon: Schedule,
              title: 'Smart Scheduling',
              description: 'Schedule updates ahead of time and publish automatically',
            },
            {
              icon: BarChart,
              title: 'Engagement Analytics',
              description: 'Track views, reads, and engagement for every article',
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Box
                key={idx}
                component={motion.div}
                whileHover={{ y: -4 }}
                sx={{
                  p: 3,
                  borderRadius: '12px',
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <Icon sx={{ fontSize: '1.5rem', color: '#a5b4fc' }} />
                </Box>
                <Typography variant="h6" sx={{ color: colors.text.primary, mb: 1, fontSize: '1rem' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary, fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

// Feed View Component
function FeedView({ articles }: { articles: any[] }) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      sx={{ p: 3 }}
    >
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ color: '#e5e7eb', fontSize: '1.25rem', fontWeight: 600 }}>
          All Content
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Chip label="All" size="small" sx={{ bgcolor: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc', border: '1px solid rgba(99, 102, 241, 0.3)' }} />
          <Chip label="Published" size="small" sx={{ bgcolor: 'transparent', color: '#9ca3af', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
          <Chip label="Drafts" size="small" sx={{ bgcolor: 'transparent', color: '#9ca3af', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
        </Box>
      </Box>

      {/* Articles List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {articles.map((article, idx) => (
          <Box
            key={article.id}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.01, x: 4 }}
            sx={{
              p: 2.5,
              borderRadius: '12px',
              bgcolor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Chip 
                    label={article.type} 
                    size="small" 
                    sx={{ 
                      height: 20,
                      fontSize: '0.7rem',
                      bgcolor: article.type === 'Article' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(139, 92, 246, 0.15)',
                      color: article.type === 'Article' ? '#60a5fa' : '#a78bfa',
                      border: `1px solid ${article.type === 'Article' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)'}`,
                    }} 
                  />
                  <Chip 
                    label={article.status} 
                    size="small" 
                    sx={{ 
                      height: 20,
                      fontSize: '0.7rem',
                      bgcolor: article.status === 'Published' 
                        ? 'rgba(34, 197, 94, 0.15)' 
                        : article.status === 'Scheduled'
                        ? 'rgba(251, 191, 36, 0.15)'
                        : 'rgba(156, 163, 175, 0.15)',
                      color: article.status === 'Published' 
                        ? '#4ade80' 
                        : article.status === 'Scheduled'
                        ? '#fbbf24'
                        : '#9ca3af',
                      border: `1px solid ${article.status === 'Published' 
                        ? 'rgba(34, 197, 94, 0.3)' 
                        : article.status === 'Scheduled'
                        ? 'rgba(251, 191, 36, 0.3)'
                        : 'rgba(156, 163, 175, 0.3)'}`,
                    }} 
                  />
                  {article.badge && (
                    <Chip 
                      label={article.badge} 
                      size="small" 
                      sx={{ 
                        height: 20,
                        fontSize: '0.7rem',
                        bgcolor: 'rgba(236, 72, 153, 0.15)',
                        color: '#ec4899',
                        border: '1px solid rgba(236, 72, 153, 0.3)',
                      }} 
                    />
                  )}
                </Box>
                <Typography sx={{ color: '#e5e7eb', fontSize: '1rem', fontWeight: 600, mb: 1 }}>
                  {article.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: '#6b7280', fontSize: '0.8125rem' }}>
                  <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                    {article.author}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#6b7280' }}>
                    •
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                    {article.date}
                  </Typography>
                  {article.status === 'Published' && (
                    <>
                      <Typography variant="caption" sx={{ color: '#6b7280' }}>
                        •
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <RemoveRedEye sx={{ fontSize: '0.875rem', color: '#6b7280' }} />
                        <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                          {article.views}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <FavoriteBorder sx={{ fontSize: '0.875rem', color: '#6b7280' }} />
                        <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                          {article.reactions}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
              <IconButton size="small" sx={{ color: '#9ca3af' }}>
                <MoreVert sx={{ fontSize: '1rem' }} />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// Editor View Component
function EditorView({ 
  showFormatBar, 
  setShowFormatBar,
  publishStatus,
  setPublishStatus 
}: { 
  showFormatBar: boolean;
  setShowFormatBar: (show: boolean) => void;
  publishStatus: 'draft' | 'scheduled' | 'published';
  setPublishStatus: (status: 'draft' | 'scheduled' | 'published') => void;
}) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      sx={{ display: 'flex', flex: 1 }}
    >
      {/* Editor Area */}
      <Box sx={{ flex: 1, p: 4, maxWidth: '800px', mx: 'auto' }}>
        {/* Title */}
        <Box
          sx={{
            mb: 3,
            pb: 2,
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <Typography
            sx={{
              color: '#e5e7eb',
              fontSize: '2rem',
              fontWeight: 600,
              outline: 'none',
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            Introducing AI-Powered Workflow Automation
          </Typography>
        </Box>

        {/* Format Toolbar */}
        <AnimatePresence>
          {showFormatBar && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              sx={{
                display: 'flex',
                gap: 0.5,
                p: 1,
                mb: 2,
                borderRadius: '8px',
                bgcolor: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                width: 'fit-content',
              }}
            >
              {[FormatBold, FormatItalic, Code, ImageIcon, Link].map((Icon, idx) => (
                <IconButton
                  key={idx}
                  size="small"
                  sx={{
                    color: '#9ca3af',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      color: '#e5e7eb',
                    },
                  }}
                >
                  <Icon sx={{ fontSize: '1rem' }} />
                </IconButton>
              ))}
            </Box>
          )}
        </AnimatePresence>

        {/* Content */}
        <Box
          onMouseEnter={() => setShowFormatBar(true)}
          onMouseLeave={() => setShowFormatBar(false)}
          sx={{
            color: '#d1d5db',
            fontSize: '1rem',
            lineHeight: 1.8,
            '& p': {
              mb: 2,
            },
          }}
        >
          <Typography sx={{ color: '#d1d5db', mb: 2, lineHeight: 1.8 }}>
            We're excited to announce a major update to Workblox: AI-powered workflow automation that helps teams work smarter, not harder.
          </Typography>
          <Typography sx={{ color: '#d1d5db', mb: 2, lineHeight: 1.8 }}>
            With this release, you can now create complex automations using natural language. Simply describe what you want to happen, and Workblox's AI will build the workflow for you.
          </Typography>
          <Box
            component={motion.div}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            sx={{
              height: 2,
              width: 4,
              bgcolor: '#6366f1',
              mt: 1,
              borderRadius: '1px',
            }}
          />
        </Box>

        {/* Autosave Indicator */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 3,
            pt: 2,
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <Check sx={{ fontSize: '0.875rem', color: '#22c55e' }} />
          <Typography variant="caption" sx={{ color: '#6b7280' }}>
            Saved 2 seconds ago
          </Typography>
        </Box>
      </Box>

      {/* Right Panel - Publishing */}
      <Box
        sx={{
          width: 280,
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          p: 2.5,
          display: { xs: 'none', lg: 'flex' },
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography sx={{ color: '#e5e7eb', fontSize: '0.9375rem', fontWeight: 600 }}>
          Publishing
        </Typography>

        {/* Status */}
        <Box>
          <Typography sx={{ color: '#9ca3af', fontSize: '0.75rem', mb: 1 }}>
            Status
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {['draft', 'scheduled', 'published'].map((status) => (
              <Box
                key={status}
                component="button"
                onClick={() => setPublishStatus(status as any)}
                sx={{
                  flex: 1,
                  py: 0.75,
                  px: 1,
                  fontSize: '0.75rem',
                  borderRadius: '6px',
                  border: publishStatus === status 
                    ? '1px solid rgba(99, 102, 241, 0.5)' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  bgcolor: publishStatus === status 
                    ? 'rgba(99, 102, 241, 0.15)' 
                    : 'rgba(255, 255, 255, 0.03)',
                  color: publishStatus === status ? '#a5b4fc' : '#9ca3af',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  '&:hover': {
                    bgcolor: 'rgba(99, 102, 241, 0.1)',
                  },
                }}
              >
                {status}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Schedule Date */}
        <Box>
          <Typography sx={{ color: '#9ca3af', fontSize: '0.75rem', mb: 1 }}>
            Publish Date
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              p: 1.5,
              borderRadius: '8px',
              bgcolor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <CalendarToday sx={{ fontSize: '1rem', color: '#9ca3af' }} />
            <Typography sx={{ color: '#d1d5db', fontSize: '0.8125rem' }}>
              Today at 2:00 PM
            </Typography>
          </Box>
        </Box>

        {/* Tags */}
        <Box>
          <Typography sx={{ color: '#9ca3af', fontSize: '0.75rem', mb: 1 }}>
            Tags
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {['Product', 'AI', 'Automation'].map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                onDelete={() => {}}
                deleteIcon={<Close sx={{ fontSize: '0.875rem' }} />}
                sx={{
                  height: 24,
                  fontSize: '0.75rem',
                  bgcolor: 'rgba(99, 102, 241, 0.15)',
                  color: '#a5b4fc',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  '& .MuiChip-deleteIcon': {
                    color: '#a5b4fc',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Visibility */}
        <Box>
          <Typography sx={{ color: '#9ca3af', fontSize: '0.75rem', mb: 1 }}>
            Visibility
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              p: 1.5,
              borderRadius: '8px',
              bgcolor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Public sx={{ fontSize: '1rem', color: '#9ca3af' }} />
            <Typography sx={{ color: '#d1d5db', fontSize: '0.8125rem' }}>
              Public
            </Typography>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box
            component={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            sx={{
              width: '100%',
              p: 1.5,
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              border: 'none',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
            }}
          >
            Publish Now
          </Box>
          <Box
            component="button"
            sx={{
              width: '100%',
              p: 1.5,
              borderRadius: '8px',
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#d1d5db',
              fontSize: '0.875rem',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            Preview
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Preview View Component
function PreviewView() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      sx={{ p: 4, maxWidth: '800px', mx: 'auto' }}
    >
      {/* Article Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Chip 
            label="Product Update" 
            size="small" 
            sx={{ 
              bgcolor: 'rgba(139, 92, 246, 0.15)',
              color: '#a78bfa',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }} 
          />
          <Chip 
            label="New" 
            size="small" 
            sx={{ 
              bgcolor: 'rgba(236, 72, 153, 0.15)',
              color: '#ec4899',
              border: '1px solid rgba(236, 72, 153, 0.3)',
            }} 
          />
        </Box>
        <Typography 
          sx={{ 
            color: '#e5e7eb', 
            fontSize: '2.5rem', 
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Introducing AI-Powered Workflow Automation
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: '#9ca3af', fontSize: '0.875rem' }}>
          <Typography variant="caption" sx={{ color: '#9ca3af' }}>
            By Sarah Chen
          </Typography>
          <Typography variant="caption" sx={{ color: '#6b7280' }}>
            •
          </Typography>
          <Typography variant="caption" sx={{ color: '#9ca3af' }}>
            March 15, 2025
          </Typography>
          <Typography variant="caption" sx={{ color: '#6b7280' }}>
            •
          </Typography>
          <Typography variant="caption" sx={{ color: '#9ca3af' }}>
            5 min read
          </Typography>
        </Box>
      </Box>

      {/* Article Content */}
      <Box sx={{ color: '#d1d5db', fontSize: '1.0625rem', lineHeight: 1.8, mb: 4 }}>
        <Typography sx={{ mb: 3, lineHeight: 1.8 }}>
          We're excited to announce a major update to Workblox: AI-powered workflow automation that helps teams work smarter, not harder.
        </Typography>
        <Typography sx={{ mb: 3, lineHeight: 1.8 }}>
          With this release, you can now create complex automations using natural language. Simply describe what you want to happen, and Workblox's AI will build the workflow for you.
        </Typography>
        <Typography sx={{ mb: 3, lineHeight: 1.8, fontWeight: 600, color: '#e5e7eb' }}>
          Key Features:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
          <li style={{ marginBottom: '12px' }}>Natural language workflow creation</li>
          <li style={{ marginBottom: '12px' }}>Smart suggestions based on your team's patterns</li>
          <li style={{ marginBottom: '12px' }}>One-click deployment to production</li>
        </Box>
      </Box>

      {/* Engagement Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          pt: 3,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Box
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 1,
            borderRadius: '8px',
            bgcolor: 'rgba(236, 72, 153, 0.15)',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            color: '#ec4899',
            fontSize: '0.875rem',
            cursor: 'pointer',
          }}
        >
          <FavoriteBorder sx={{ fontSize: '1rem' }} />
          89
        </Box>
        <Box
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 1,
            borderRadius: '8px',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#9ca3af',
            fontSize: '0.875rem',
            cursor: 'pointer',
          }}
        >
          <Share sx={{ fontSize: '1rem' }} />
          Share
        </Box>
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1, color: '#6b7280' }}>
          <RemoveRedEye sx={{ fontSize: '1rem' }} />
          <Typography variant="caption">
            1,247 views
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
