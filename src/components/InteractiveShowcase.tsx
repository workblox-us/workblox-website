import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CalendarMonth,
  AutoAwesome,
  AccountTree,
  Assessment,
  Dashboard,
  CheckCircle,
  Bolt,
  TrendingUp,
  MailOutline,
  FolderOpen,
  ChatBubble,
  CloudUpload,
  Code,
  Add,
  Notifications,
  Settings,
  Send,
  ChevronLeft,
  Description,
  Build,
  Inbox,
  AccountCircle,
  People
} from '@mui/icons-material';
import { Box, Container, Typography, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import { useThemeColors } from '../hooks/useThemeColors';

export function InteractiveShowcase() {
  const colors = useThemeColors();
  const [activeTab, setActiveTab] = useState(0);
  const [showAIPanel, setShowAIPanel] = useState(true);
  const [selectedApp, setSelectedApp] = useState('ai-assistant');
  const [aiInput, setAIInput] = useState('');

  const features = [
    {
      id: 'calendar',
      title: 'Smart Calendar and Daily Priorities',
      icon: CalendarMonth,
      microcopy: 'Connect email and calendars. Workblox automatically organizes your day, prioritizes tasks, and adapts your schedule in real time.',
      color: '#0891b2',
      gradient: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
    },
    {
      id: 'ai-workspace',
      title: 'AI Builds Your Workspace',
      icon: AutoAwesome,
      microcopy: 'Describe what you want to work on. Workblox creates a complete workspace with tasks, structure, and workflows already in place.',
      color: '#9333ea',
      gradient: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
    },
    {
      id: 'automations',
      title: 'Natural Language Automations',
      icon: AccountTree,
      microcopy: 'Tell Workblox what should happen. No rules. No logic builders. Just clear instructions that turn into automations.',
      color: '#16a34a',
      gradient: 'linear-gradient(135deg, #16a34a 0%, #059669 100%)',
    },
    {
      id: 'advisor',
      title: 'AI Advisor and Work Insights',
      icon: Assessment,
      microcopy: 'Workblox reviews your workload and helps you work smarter. It highlights risks, suggests improvements, and recommends integrations.',
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
    },
    {
      id: 'dashboard',
      title: 'Unified Work Dashboard',
      icon: Dashboard,
      microcopy: 'One place to see everything that matters. Tasks, projects, priorities, and insights, all in real time.',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    },
  ];

  const activeFeature = features[activeTab];

  // AI suggestions based on active tab
  const aiSuggestions = {
    calendar: [
      { text: 'Move design review to accommodate team standup', icon: CalendarMonth },
      { text: 'Block focus time before client presentation', icon: Bolt },
    ],
    'ai-workspace': [
      { text: 'Create workspace for Q1 Product Launch', icon: FolderOpen },
      { text: 'Add dependencies from engineering roadmap', icon: Code },
    ],
    automations: [
      { text: 'Send weekly summary to stakeholders', icon: MailOutline },
      { text: 'Update CRM when deal closes', icon: TrendingUp },
    ],
    advisor: [
      { text: 'Connect Slack for team communication', icon: ChatBubble },
      { text: 'Link Google Drive for file storage', icon: CloudUpload },
    ],
    dashboard: [
      { text: 'Your workload is 15% over capacity', icon: Assessment },
      { text: 'Suggest redistributing tasks to team', icon: TrendingUp },
    ],
  };

  const currentSuggestions = aiSuggestions[activeFeature.id as keyof typeof aiSuggestions] || [];

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
            ? 'linear-gradient(to bottom, #000000, rgba(30, 64, 175, 0.1), #000000)'
            : 'linear-gradient(to bottom, #ffffff, rgba(59, 130, 246, 0.03), #f8f9fa)',
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
              bgcolor: colors.isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.08)',
              border: colors.isDark ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid rgba(59, 130, 246, 0.3)',
              backdropFilter: 'blur(8px)',
              mb: 2,
            }}
          >
            <Typography variant="caption" sx={{ color: colors.isDark ? '#60a5fa' : '#2563eb' }}>
              Interactive Showcase
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, color: colors.text.primary, mb: 2, fontWeight: 700 }}>
            Experience Workblox in Action
          </Typography>
          <Typography variant="h6" sx={{ color: colors.text.secondary, maxWidth: '42rem', mx: 'auto', lineHeight: 1.7 }}>
            Explore how Workblox helps you plan, prioritize, and execute work with clarity, without switching tools.
          </Typography>
        </Box>

        {/* Tab Navigation */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            mb: 4,
            overflowX: 'auto',
            pb: 1,
            justifyContent: { xs: 'flex-start', md: 'center' },
            '&::-webkit-scrollbar': { height: 6 },
            '&::-webkit-scrollbar-track': { bgcolor: 'rgba(255, 255, 255, 0.05)' },
            '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(255, 255, 255, 0.2)', borderRadius: '3px' },
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                sx={{
                  px: 2,
                  py: 1.5,
                  borderRadius: '12px',
                  textTransform: 'none',
                  whiteSpace: 'nowrap',
                  minWidth: 'auto',
                  position: 'relative',
                  ...(activeTab === index
                    ? {
                        bgcolor: `${feature.color}22`,
                        border: `1px solid ${feature.color}55`,
                        color: 'white',
                      }
                    : {
                        color: '#9ca3af',
                        bgcolor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          color: 'white',
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                        },
                      }),
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Icon sx={{ fontSize: '1.125rem' }} />
                  <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {feature.title}
                  </Typography>
                </Box>
                {activeTab === index && (
                  <Box
                    component={motion.div}
                    layoutId="activeTab"
                    sx={{
                      position: 'absolute',
                      bottom: -1,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: feature.gradient,
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Button>
            );
          })}
        </Box>

        {/* Feature Content */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{ position: 'relative' }}
        >
          {/* Animated Glow Effect */}
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
              background: activeFeature.gradient,
              filter: 'blur(64px)',
              opacity: 0.3,
            }}
          />

          {/* Main Demo Container */}
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
                  app.workblox.ai
                </Typography>
              </Box>
            </Box>

            {/* Demo Content with AI Panel */}
            <Box sx={{ display: 'flex', position: 'relative', minHeight: '560px', height: '560px' }}>
              {/* Main Demo Area */}
              <Box sx={{ flex: 1, p: 3, background: 'linear-gradient(135deg, #0a0a0a, rgba(88, 28, 135, 0.2), rgba(30, 64, 175, 0.2))' }}>
                <AnimatePresence mode="wait">
                  <Box
                    component={motion.div}
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Feature microcopy */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '36rem' }}>
                        {activeFeature.microcopy}
                      </Typography>
                    </Box>

                    {/* Feature-specific demo content */}
                    <DemoContent featureId={activeFeature.id} color={activeFeature.color} gradient={activeFeature.gradient} />
                  </Box>
                </AnimatePresence>
              </Box>

              {/* Expand AI Panel Button (when collapsed) - Minimal left edge */}
              <AnimatePresence>
                {!showAIPanel && (
                  <Box
                    component={motion.button}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setShowAIPanel(true)}
                    sx={{
                      position: 'absolute',
                      right: 60,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 24,
                      height: 80,
                      bgcolor: 'rgba(236, 72, 153, 0.1)',
                      border: 'none',
                      borderLeft: '2px solid rgba(236, 72, 153, 0.4)',
                      borderTopLeftRadius: '4px',
                      borderBottomLeftRadius: '4px',
                      cursor: 'pointer',
                      display: { xs: 'none', md: 'flex' },
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.5,
                      transition: 'all 0.2s ease',
                      zIndex: 10,
                      '&:hover': {
                        bgcolor: 'rgba(236, 72, 153, 0.15)',
                        borderLeftColor: 'rgba(236, 72, 153, 0.6)',
                        width: 28,
                      },
                    }}
                  >
                    <ChevronLeft sx={{ fontSize: '1rem', color: '#ec4899' }} />
                  </Box>
                )}
              </AnimatePresence>

              {/* AI Assistant Panel */}
              <AnimatePresence>
                {showAIPanel && (
                  <Box
                    component={motion.div}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    sx={{
                      width: 280,
                      borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                      bgcolor: 'rgba(0, 0, 0, 0.4)',
                      p: 2,
                      display: { xs: 'none', md: 'flex' },
                      flexDirection: 'column',
                      position: 'relative',
                    }}
                  >
                    {/* Minimal collapse button on left edge */}
                    <Box
                      component={motion.button}
                      onClick={() => setShowAIPanel(false)}
                      whileHover={{ x: -2 }}
                      sx={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 20,
                        height: 60,
                        bgcolor: 'rgba(236, 72, 153, 0.1)',
                        border: 'none',
                        borderLeft: '2px solid rgba(236, 72, 153, 0.4)',
                        borderTopLeftRadius: '4px',
                        borderBottomLeftRadius: '4px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                        zIndex: 10,
                        '&:hover': {
                          bgcolor: 'rgba(236, 72, 153, 0.2)',
                          borderLeftColor: 'rgba(236, 72, 153, 0.6)',
                        },
                      }}
                    >
                      <ChevronLeft 
                        sx={{ 
                          fontSize: '0.875rem', 
                          color: '#ec4899',
                          transform: 'rotate(180deg)',
                        }} 
                      />
                    </Box>
                    {/* AI Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, pb: 2, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <Box
                        component={motion.div}
                        animate={{
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            '0 0 10px rgba(236, 72, 153, 0.4)',
                            '0 0 20px rgba(236, 72, 153, 0.6)',
                            '0 0 10px rgba(236, 72, 153, 0.4)'
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #ec4899, #db2777)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <AutoAwesome sx={{ fontSize: '1rem', color: 'white' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                          AI Assistant
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.7rem' }}>
                          Context aware
                        </Typography>
                      </Box>
                      <Box
                        component={motion.div}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: '#22c55e',
                        }}
                      />
                    </Box>

                    {/* AI Suggestions */}
                    <Typography variant="caption" sx={{ color: '#9ca3af', mb: 2, display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Suggestions
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {currentSuggestions.map((suggestion, index) => {
                        const Icon = suggestion.icon;
                        return (
                          <Box
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 4 }}
                            sx={{
                              p: 1.5,
                              borderRadius: '8px',
                              bgcolor: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              cursor: 'pointer',
                              '&:hover': {
                                bgcolor: 'rgba(255, 255, 255, 0.08)',
                                border: `1px solid ${activeFeature.color}44`,
                              },
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                              <Icon sx={{ fontSize: '1rem', color: activeFeature.color, flexShrink: 0, mt: 0.25 }} />
                              <Typography variant="caption" sx={{ color: '#d1d5db', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                                {suggestion.text}
                              </Typography>
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>

                    {/* Conversational Input Field */}
                    <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <TextField
                        fullWidth
                        placeholder="Ask AI anything..."
                        value={aiInput}
                        onChange={(e) => setAIInput(e.target.value)}
                        variant="outlined"
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                size="small"
                                sx={{
                                  color: aiInput ? '#ec4899' : '#6b7280',
                                  '&:hover': { bgcolor: 'rgba(236, 72, 153, 0.1)' },
                                }}
                              >
                                <Send sx={{ fontSize: '1rem' }} />
                              </IconButton>
                            </InputAdornment>
                          ),
                          sx: {
                            fontSize: '0.8125rem',
                            color: 'white',
                            bgcolor: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '8px',
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.1)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#ec4899',
                            },
                            '& input': {
                              color: 'white',
                              '&::placeholder': {
                                color: '#6b7280',
                                opacity: 1,
                              },
                            },
                          },
                        }}
                      />
                    </Box>
                  </Box>
                )}
              </AnimatePresence>

              {/* Vertical App Sidebar - Always on far right */}
              <Box
                sx={{
                  width: 60,
                  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                  bgcolor: 'rgba(0, 0, 0, 0.6)',
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: 'column',
                  alignItems: 'center',
                  py: 2,
                  gap: 1,
                }}
              >
                {[
                  { id: 'calendar', icon: CalendarMonth, label: 'Calendar' },
                  { id: 'dashboard', icon: Dashboard, label: 'Dashboard' },
                  { id: 'ai-assistant', icon: AutoAwesome, label: 'AI Assistant' },
                  { id: 'notifications', icon: Notifications, label: 'Notifications' },
                  { id: 'settings', icon: Settings, label: 'Settings' },
                ].map((app) => {
                  const Icon = app.icon;
                  const isSelected = app.id === 'ai-assistant';
                  return (
                    <Box
                      key={app.id}
                      component={motion.button}
                      whileHover={{ scale: 1.1, x: -4 }}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        border: 'none',
                        position: 'relative',
                        bgcolor: isSelected ? 'rgba(236, 72, 153, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        '&:hover': {
                          bgcolor: isSelected ? 'rgba(236, 72, 153, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: '1.25rem', color: isSelected ? '#ec4899' : '#9ca3af' }} />
                      {isSelected && (
                        <Box
                          component={motion.div}
                          layoutId="selectedApp"
                          sx={{
                            position: 'absolute',
                            right: -1,
                            top: 0,
                            bottom: 0,
                            width: 3,
                            background: 'linear-gradient(135deg, #ec4899, #db2777)',
                            borderRadius: '3px',
                          }}
                        />
                      )}
                    </Box>
                  );
                })}

                {/* Add More Button */}
                <Box
                  component={motion.button}
                  whileHover={{ scale: 1.1, x: -4 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: '1px dashed rgba(255, 255, 255, 0.2)',
                    bgcolor: 'transparent',
                    mt: 'auto',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                  }}
                >
                  <Add sx={{ fontSize: '1.25rem', color: '#6b7280' }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// Demo content for each feature
function DemoContent({ featureId, color, gradient }: { featureId: string; color: string; gradient: string }) {
  if (featureId === 'calendar') {
    return <CalendarDemo color={color} gradient={gradient} />;
  }
  if (featureId === 'ai-workspace') {
    return <AIWorkspaceDemo color={color} gradient={gradient} />;
  }
  if (featureId === 'automations') {
    return <AutomationsDemo color={color} gradient={gradient} />;
  }
  if (featureId === 'advisor') {
    return <AdvisorDemo color={color} gradient={gradient} />;
  }
  if (featureId === 'dashboard') {
    return <DashboardDemo color={color} gradient={gradient} />;
  }
  return null;
}

// Calendar Demo
function CalendarDemo({ color, gradient }: { color: string; gradient: string }) {
  const [movingItems, setMovingItems] = useState<number[]>([]);
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Move 4-5 items to show comprehensive AI adjustment
      setMovingItems([2, 4, 6, 8]);
      setTimeout(() => {
        setMovingItems([]);
        setIteration(prev => prev + 1);
      }, 2500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  
  // Events and tasks - AI adjusts multiple items across different days
  const getCalendarItems = () => {
    const baseItems = [
      { id: 1, day: 0, time: '9:00', title: 'Design Review', type: 'event', priority: 'high', duration: 2 },
      { id: 2, day: 0, time: '14:00', title: 'Client Call', type: 'event', priority: 'high', duration: 2 },
      { id: 3, day: 1, time: '10:00', title: 'Team Standup', type: 'event', priority: 'medium', duration: 1 },
      { id: 4, day: 1, time: '15:00', title: 'Review Mockups', type: 'task', priority: 'high', duration: 1 },
      { id: 5, day: 2, time: '11:00', title: 'Strategy Meeting', type: 'event', priority: 'high', duration: 2 },
      { id: 6, day: 2, time: '16:00', title: 'Update Docs', type: 'task', priority: 'low', duration: 1 },
      { id: 7, day: 3, time: '9:30', title: 'Sprint Planning', type: 'event', priority: 'high', duration: 2 },
      { id: 8, day: 3, time: '14:00', title: 'Code Review', type: 'task', priority: 'medium', duration: 1 },
      { id: 9, day: 4, time: '10:00', title: 'Weekly Sync', type: 'event', priority: 'medium', duration: 1 },
      { id: 10, day: 4, time: '15:00', title: 'Plan Next Week', type: 'task', priority: 'low', duration: 1 },
    ];

    // AI adjusts multiple items, including moving between days
    if (iteration % 2 === 1) {
      return baseItems.map(item => {
        if (item.id === 2) {
          // Move Client Call to Tuesday afternoon to create Monday focus block
          return { ...item, day: 1, time: '14:00' };
        }
        if (item.id === 4) {
          // Move Review Mockups to Wednesday morning to balance workload
          return { ...item, day: 2, time: '9:00' };
        }
        if (item.id === 6) {
          // Move Update Docs to Thursday to spread low-priority tasks
          return { ...item, day: 3, time: '15:30' };
        }
        if (item.id === 8) {
          // Move Code Review to Tuesday to consolidate review tasks
          return { ...item, day: 1, time: '11:00' };
        }
        return item;
      });
    }
    return baseItems;
  };

  const calendarItems = getCalendarItems();
  const isRearranging = movingItems.length > 0;

  return (
    <Box>
      {/* AI Status Indicator */}
      <Box
        component={motion.div}
        animate={{
          backgroundColor: isRearranging 
            ? 'rgba(6, 182, 212, 0.1)' 
            : 'rgba(34, 197, 94, 0.1)',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        sx={{
          mb: 3,
          p: 1.5,
          borderRadius: '8px',
          border: isRearranging ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid rgba(34, 197, 94, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <Box
          component={motion.div}
          animate={isRearranging ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1.5, repeat: isRearranging ? Infinity : 0, ease: 'linear' }}
        >
          <AutoAwesome sx={{ fontSize: '1rem', color: isRearranging ? '#06b6d4' : '#22c55e' }} />
        </Box>
        <Typography variant="caption" sx={{ color: '#d1d5db', fontSize: '0.8125rem' }}>
          {isRearranging ? 'AI balancing workload across the week...' : 'Schedule optimized for productivity'}
        </Typography>
      </Box>

      {/* Weekly Calendar Grid */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {/* Day headers */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0.5, mb: 1 }}>
          {days.map((day) => (
            <Box
              key={day}
              sx={{
                p: 1,
                borderRadius: '6px',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                textAlign: 'center',
              }}
            >
              <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem', fontWeight: 600 }}>
                {day}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Calendar Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0.5, position: 'relative', minHeight: 320 }}>
          {days.map((day, dayIdx) => (
            <Box
              key={day}
              sx={{
                borderRadius: '8px',
                bgcolor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                p: 1,
                position: 'relative',
                minHeight: 320,
              }}
            >
              {/* Time slots visual reference */}
              <Box sx={{ position: 'absolute', inset: 0, p: 1, opacity: 0.3 }}>
                {[9, 11, 13, 15, 17].map((hour) => (
                  <Box
                    key={hour}
                    sx={{
                      position: 'absolute',
                      left: 4,
                      top: `${((hour - 9) / 8) * 100}%`,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.6rem' }}>
                      {hour}:00
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Events and tasks for this day */}
              {calendarItems
                .filter(item => item.day === dayIdx)
                .map((item, idx) => {
                  const timeHour = parseInt(item.time.split(':')[0]);
                  const timeMin = parseInt(item.time.split(':')[1] || '0');
                  const topPosition = ((timeHour - 9 + timeMin / 60) / 8) * 100;
                  const heightCalc = (item.duration / 8) * 100;
                  const isMoving = movingItems.includes(item.id);

                  return (
                    <Box
                      key={item.id}
                      component={motion.div}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                      }}
                      transition={{
                        layout: { 
                          type: 'spring', 
                          stiffness: 120, 
                          damping: 20,
                          mass: 0.5
                        },
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.3 },
                      }}
                      sx={{
                        position: 'absolute',
                        left: 8,
                        right: 8,
                        top: `${topPosition}%`,
                        height: `${heightCalc}%`,
                        minHeight: item.duration === 1 ? 50 : 70,
                        p: 1,
                        borderRadius: '6px',
                        bgcolor: item.type === 'event' 
                          ? 'rgba(59, 130, 246, 0.2)' 
                          : item.priority === 'high' 
                            ? 'rgba(236, 72, 153, 0.2)' 
                            : 'rgba(139, 92, 246, 0.15)',
                        border: item.priority === 'high' 
                          ? `1px solid ${color}66` 
                          : '1px solid rgba(255, 255, 255, 0.15)',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        '&:hover': {
                          bgcolor: item.type === 'event' 
                            ? 'rgba(59, 130, 246, 0.3)' 
                            : item.priority === 'high'
                              ? 'rgba(236, 72, 153, 0.3)'
                              : 'rgba(139, 92, 246, 0.25)',
                        },
                      }}
                    >
                      {/* Priority indicator */}
                      {item.priority === 'high' && (
                        <Box
                          component={motion.div}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 3,
                            height: '100%',
                            background: gradient,
                          }}
                        />
                      )}

                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                          <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.65rem' }}>
                            {item.time}
                          </Typography>
                          {item.type === 'event' ? (
                            <CalendarMonth sx={{ fontSize: '0.7rem', color: '#60a5fa' }} />
                          ) : (
                            <CheckCircle sx={{ fontSize: '0.7rem', color: item.priority === 'high' ? '#ec4899' : '#a855f7' }} />
                          )}
                        </Box>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: 'white', 
                            fontSize: '0.75rem',
                            display: 'block',
                            fontWeight: 500,
                            lineHeight: 1.3,
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>

                      {/* Moving indicator - smooth glow and scale */}
                      {isMoving && (
                        <>
                          {/* Outer glow */}
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: [0, 0.6, 0.6, 0],
                            }}
                            transition={{ 
                              duration: 2.5,
                              times: [0, 0.15, 0.85, 1],
                              ease: 'easeInOut'
                            }}
                            sx={{
                              position: 'absolute',
                              inset: -4,
                              border: '3px solid',
                              borderColor: '#06b6d4',
                              borderRadius: '8px',
                              pointerEvents: 'none',
                              boxShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)',
                              filter: 'blur(1px)',
                            }}
                          />
                          {/* Inner highlight */}
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: [0, 0.3, 0.3, 0],
                            }}
                            transition={{ 
                              duration: 2.5,
                              times: [0, 0.15, 0.85, 1],
                              ease: 'easeInOut'
                            }}
                            sx={{
                              position: 'absolute',
                              inset: 0,
                              bgcolor: 'rgba(6, 182, 212, 0.2)',
                              borderRadius: '6px',
                              pointerEvents: 'none',
                            }}
                          />
                          {/* Movement arrow indicator */}
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ 
                              opacity: [0, 1, 1, 0],
                              y: [-10, 0, 0, 10],
                            }}
                            transition={{ 
                              duration: 2.5,
                              times: [0, 0.2, 0.8, 1],
                              ease: 'easeInOut'
                            }}
                            sx={{
                              position: 'absolute',
                              top: -20,
                              right: 4,
                              bgcolor: '#06b6d4',
                              color: 'white',
                              fontSize: '0.65rem',
                              px: 0.75,
                              py: 0.25,
                              borderRadius: '4px',
                              fontWeight: 600,
                              boxShadow: '0 2px 8px rgba(6, 182, 212, 0.6)',
                              pointerEvents: 'none',
                              zIndex: 10,
                            }}
                          >
                            Moving
                          </Box>
                        </>
                      )}
                    </Box>
                  );
                })}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Legend */}
      <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <CalendarMonth sx={{ fontSize: '0.875rem', color: '#60a5fa' }} />
          <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
            Events
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <CheckCircle sx={{ fontSize: '0.875rem', color: '#ec4899' }} />
          <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
            High Priority Tasks
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <Bolt sx={{ fontSize: '0.875rem', color }} />
          <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
            AI Optimized
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// AI Workspace Demo - Complete Workspace Build Experience
function AIWorkspaceDemo({ color, gradient }: { color: string; gradient: string }) {
  const [phase, setPhase] = useState<'prompt' | 'building' | 'complete'>('prompt');
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = ['Summary', 'Backlog', 'Team Structure', 'Whiteboard', 'Files', 'Timeline'];
  const projectTitle = 'Agile Product Launch';

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('building'), 2000);
    const timer2 = setTimeout(() => setPhase('complete'), 4000);
    const resetTimer = setInterval(() => {
      setPhase('prompt');
      setTimeout(() => setPhase('building'), 2000);
      setTimeout(() => setPhase('complete'), 4000);
    }, 12000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(resetTimer);
    };
  }, []);

  return (
    <Box>
      {/* AI Prompt Input */}
      <Box
        component={motion.div}
        animate={{
          opacity: phase === 'prompt' ? 1 : 0.3,
          scale: phase === 'prompt' ? 1 : 0.95,
        }}
        transition={{ duration: 0.4 }}
        sx={{
          p: 2,
          mb: 3,
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.05))',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Breathing glow effect */}
        <Box
          component={motion.div}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          sx={{
            position: 'absolute',
            top: -20,
            left: -20,
            right: -20,
            bottom: -20,
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        
        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
          <Box
            component={motion.div}
            animate={{
              rotate: phase === 'building' ? 360 : 0,
            }}
            transition={{
              duration: 1,
              repeat: phase === 'building' ? Infinity : 0,
              ease: 'linear',
            }}
            sx={{
              width: 32,
              height: 32,
              borderRadius: '8px',
              background: gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <AutoAwesome sx={{ fontSize: '1rem', color: 'white' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ color: '#9ca3af', fontSize: '0.75rem', mb: 0.5 }}>
              AI Assistant
            </Typography>
            <Typography sx={{ color: '#e5e7eb', fontSize: '0.875rem', lineHeight: 1.5 }}>
              "Create a new workspace for an Agile product launch using Scrum framework"
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Workspace Interface */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: phase !== 'prompt' ? 1 : 0,
          y: phase !== 'prompt' ? 0 : 20,
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        sx={{
          borderRadius: '12px',
          bgcolor: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
        }}
      >
        {/* Level 1: Main Navigation Bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            px: 2,
            py: 1.5,
            bgcolor: 'rgba(0, 0, 0, 0.3)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: Main Menu Items */}
          <Box sx={{ display: 'flex', gap: 0.5, flex: 1, flexWrap: 'wrap' }}>
            {['Dashboards', 'Workspaces', 'DocHub', 'Reports', 'Tool Center'].map((item, idx) => (
              <Box
                key={item}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: phase === 'complete' ? 1 : 0.5,
                  scale: phase === 'complete' ? 1 : 0.8,
                }}
                transition={{
                  delay: 0.5 + idx * 0.1,
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 200,
                }}
                sx={{
                  px: 1.5,
                  py: 0.5,
                  fontSize: '0.75rem',
                  color: idx === 1 ? '#3b82f6' : '#9ca3af',
                  borderRadius: '6px',
                  bgcolor: idx === 1 ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                {item}
              </Box>
            ))}
            
            {/* Create Button */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: phase === 'complete' ? 1 : 0.5,
                scale: phase === 'complete' ? 1 : 0.8,
              }}
              transition={{
                delay: 1,
                duration: 0.3,
                type: 'spring',
                stiffness: 200,
              }}
              sx={{
                px: 1.5,
                py: 0.5,
                fontSize: '0.75rem',
                color: 'white',
                borderRadius: '6px',
                background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(147, 51, 234, 0.4)',
                },
              }}
            >
              <Add sx={{ fontSize: '0.875rem' }} />
              Create
            </Box>
          </Box>

          {/* Right: User Actions */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {[Inbox, Notifications, AccountCircle].map((Icon, idx) => (
              <Box
                key={idx}
                component={motion.div}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: phase === 'complete' ? 1 : 0.3,
                  scale: phase === 'complete' ? 1 : 0,
                }}
                transition={{
                  delay: 1.2 + idx * 0.1,
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 200,
                }}
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: idx === 2 ? 'rgba(147, 51, 234, 0.3)' : 'transparent',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <Icon sx={{ fontSize: '1rem', color: '#9ca3af' }} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Level 2: Workspace View */}
        <Box sx={{ p: 2 }}>
          {/* Project Title */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: phase === 'complete' ? 1 : 0.3,
              x: phase === 'complete' ? 0 : -20,
            }}
            transition={{ delay: 1.5, duration: 0.4 }}
            sx={{ mb: 2 }}
          >
            <Typography sx={{ color: '#e5e7eb', fontSize: '1.125rem', mb: 0.5 }}>
              {projectTitle}
            </Typography>
            <Typography sx={{ color: '#6b7280', fontSize: '0.75rem' }}>
              Scrum Framework • 6 sections created
            </Typography>
          </Box>

          {/* Tab Navigation */}
          <Box
            sx={{
              display: 'flex',
              gap: 0.5,
              mb: 2,
              pb: 1.5,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              overflowX: 'auto',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {tabs.map((tab, idx) => (
              <Box
                key={tab}
                component={motion.div}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: phase === 'complete' ? 1 : 0,
                  y: phase === 'complete' ? 0 : 10,
                }}
                transition={{
                  delay: 1.8 + idx * 0.15,
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 150,
                }}
                onClick={() => setActiveTab(idx)}
                sx={{
                  px: 2,
                  py: 1,
                  fontSize: '0.75rem',
                  color: activeTab === idx ? '#3b82f6' : '#9ca3af',
                  borderRadius: '8px',
                  bgcolor: activeTab === idx ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                  border: activeTab === idx ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid transparent',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                {tab}
                {/* Active indicator */}
                {activeTab === idx && (
                  <Box
                    component={motion.div}
                    layoutId="activeTabShowcase"
                    sx={{
                      position: 'absolute',
                      bottom: -8,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: 2,
                      bgcolor: '#3b82f6',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

          {/* Tab Content Preview */}
          <Box
            component={motion.div}
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            sx={{
              p: 2,
              borderRadius: '8px',
              bgcolor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  bgcolor: '#22c55e',
                }}
              />
              <Typography sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                {tabs[activeTab]} view ready
              </Typography>
            </Box>
            
            {/* Mock content rows */}
            {[0, 1, 2].map((row) => (
              <Box
                key={row}
                component={motion.div}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{
                  delay: row * 0.1,
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                sx={{
                  height: 6,
                  mb: 0.75,
                  borderRadius: '3px',
                  bgcolor: 'rgba(99, 102, 241, 0.2)',
                  width: `${100 - row * 15}%`,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Automations Demo
function AutomationsDemo({ color, gradient }: { color: string; gradient: string }) {
  return (
    <Box>
      {/* Input */}
      <Box
        sx={{
          p: 2,
          mb: 2,
          borderRadius: '10px',
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Typography variant="body2" sx={{ color: '#d1d5db', fontSize: '0.875rem' }}>
          "Send weekly summary every Friday at 5pm"
        </Typography>
      </Box>

      {/* Automation blocks */}
      {[
        { label: 'Trigger', detail: 'Every Friday at 5:00 PM' },
        { label: 'Action', detail: 'Generate summary report' },
        { label: 'Send to', detail: 'Team & stakeholders' },
      ].map((block, idx) => (
        <Box
          key={idx}
          component={motion.div}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.15 }}
          sx={{
            p: 2,
            mb: 1.5,
            borderRadius: '8px',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${color}33`,
          }}
        >
          <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.7rem', display: 'block', mb: 0.5 }}>
            {block.label}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            {block.detail}
          </Typography>
        </Box>
      ))}

      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        sx={{
          mt: 2,
          p: 1.5,
          borderRadius: '8px',
          bgcolor: 'rgba(34, 197, 94, 0.15)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <CheckCircle sx={{ fontSize: '1rem', color: '#22c55e' }} />
        <Typography variant="caption" sx={{ color: '#22c55e', fontSize: '0.8125rem' }}>
          Automation ready
        </Typography>
      </Box>
    </Box>
  );
}

// Advisor Demo
function AdvisorDemo({ color, gradient }: { color: string; gradient: string }) {
  return (
    <Box>
      {/* Workload analysis */}
      <Box
        sx={{
          p: 2,
          mb: 3,
          borderRadius: '10px',
          bgcolor: 'rgba(234, 88, 12, 0.1)',
          border: '1px solid rgba(234, 88, 12, 0.3)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
          <Assessment sx={{ fontSize: '1.25rem', color: '#f97316' }} />
          <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
            Workload Alert
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: '#d1d5db', fontSize: '0.875rem', mb: 2 }}>
          Your team is 20% over capacity this week. Consider redistributing tasks.
        </Typography>
      </Box>

      {/* Integration recommendations */}
      <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem', display: 'block', mb: 2 }}>
        Recommended integrations
      </Typography>

      {[
        { name: 'Slack', icon: ChatBubble, benefit: 'Sync team communication' },
        { name: 'Google Drive', icon: CloudUpload, benefit: 'Connect file storage' },
        { name: 'GitHub', icon: Code, benefit: 'Link development workflow' },
      ].map((integration, idx) => {
        const Icon = integration.icon;
        return (
          <Box
            key={idx}
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ x: 4 }}
            sx={{
              p: 2,
              mb: 1.5,
              borderRadius: '8px',
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                border: `1px solid ${color}44`,
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Icon sx={{ fontSize: '1.125rem', color }} />
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ color: 'white', mb: 0.25 }}>
                  {integration.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                  {integration.benefit}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

// Dashboard Demo
function DashboardDemo({ color, gradient }: { color: string; gradient: string }) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
      {[
        { label: 'Active Tasks', value: '24', trend: '+12% this week', icon: CheckCircle },
        { label: 'Team Members', value: '8', trend: '2 online now', icon: People },
        { label: 'Projects', value: '3', trend: '1 launching soon', icon: Dashboard },
        { label: 'Completion', value: '87%', trend: 'On track', icon: TrendingUp },
      ].map((widget, idx) => {
        const Icon = widget.icon;
        return (
          <Box
            key={idx}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            sx={{
              p: 2,
              borderRadius: '8px',
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <Icon sx={{ fontSize: '1rem', color }} />
              <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                {widget.label}
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ color: 'white', mb: 0.5 }}>
              {widget.value}
            </Typography>
            <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>
              {widget.trend}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}