import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import {
  Dashboard as DashboardIcon,
  CalendarMonth,
  CheckBox,
  Message,
  TrendingUp,
  Schedule,
  People,
  Bolt
} from '@mui/icons-material';
import { Box, Container, Typography, Button, Checkbox } from '@mui/material';
import { useThemeColors } from '../hooks/useThemeColors';

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [hoveredWidget, setHoveredWidget] = useState<string | null>(null);
  const colors = useThemeColors();

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'tasks', label: 'Tasks', icon: CheckBox },
    { id: 'calendar', label: 'Calendar', icon: CalendarMonth },
    { id: 'messages', label: 'Messages', icon: Message }
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
          sx={{ textAlign: 'center', mb: 8 }}
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
              Interactive Demo
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, color: colors.text.primary, mb: 2, fontWeight: 700 }}>
            Experience Workblox
          </Typography>
          <Typography variant="h6" sx={{ color: colors.text.secondary, maxWidth: '32rem', mx: 'auto' }}>
            Click and hover to explore the intelligent interface
          </Typography>
        </Box>

        {/* Interactive Dashboard */}
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
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2), transparent)',
              filter: 'blur(64px)',
            }}
          />
          <Box
            component={motion.div}
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(147, 51, 234, 0.2), transparent)',
              filter: 'blur(64px)',
            }}
          />

          {/* Dashboard Container */}
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

            {/* Tab Navigation */}
            <Box
              sx={{
                display: 'flex',
                gap: 0.5,
                px: 2,
                py: 1.5,
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                bgcolor: 'rgba(0, 0, 0, 0.2)',
                overflowX: 'auto',
              }}
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    startIcon={<Icon sx={{ fontSize: '0.875rem' }} />}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      textTransform: 'none',
                      whiteSpace: 'nowrap',
                      minWidth: 'auto',
                      ...(activeTab === tab.id
                        ? {
                            bgcolor: 'rgba(147, 51, 234, 0.2)',
                            border: '1px solid rgba(147, 51, 234, 0.3)',
                            color: 'white',
                          }
                        : {
                            color: '#9ca3af',
                            '&:hover': {
                              color: 'white',
                              bgcolor: 'rgba(255, 255, 255, 0.05)',
                            },
                          }),
                    }}
                  >
                    <Typography variant="body2">{tab.label}</Typography>
                  </Button>
                );
              })}
            </Box>

            {/* Interactive Dashboard Content */}
            <Box sx={{ position: 'relative', minHeight: '500px', background: 'linear-gradient(135deg, #0a0a0a, rgba(88, 28, 135, 0.2), rgba(30, 64, 175, 0.2))', p: 3 }}>
              <Box
                component={motion.div}
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2, height: '100%' }}
              >
                {/* Main Widget */}
                <Box
                  component={motion.div}
                  onHoverStart={() => setHoveredWidget('main')}
                  onHoverEnd={() => setHoveredWidget(null)}
                  whileHover={{ scale: 1.02, y: -4 }}
                  sx={{
                    gridColumn: { xs: 'span 1', md: 'span 2' },
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                    backdropFilter: 'blur(8px)',
                    border: hoveredWidget === 'main' ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                    p: 3,
                    cursor: 'pointer',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <TrendingUp sx={{ fontSize: '1.25rem', color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="body1" sx={{ color: 'white' }}>
                          {activeTab === 'dashboard' && 'Project Overview'}
                          {activeTab === 'tasks' && 'Active Tasks'}
                          {activeTab === 'calendar' && 'This Week'}
                          {activeTab === 'messages' && 'Team Chat'}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                          Updated just now
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      component={motion.div}
                      animate={{ rotate: hoveredWidget === 'main' ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: 'rgba(34, 197, 94, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        component={motion.div}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e' }}
                      />
                    </Box>
                  </Box>

                  {/* Dynamic Content */}
                  <Box sx={{ '& > *': { mb: 1.5 } }}>
                    {activeTab === 'dashboard' && ['Website Redesign - 78%', 'Mobile App Launch - 45%', 'Marketing Campaign - 92%'].map((item) => (
                      <Box
                        key={item}
                        sx={{
                          p: 1.5,
                          borderRadius: '8px',
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
                          transition: 'background-color 0.2s',
                          color: 'white',
                        }}
                      >
                        <Typography variant="body2">{item}</Typography>
                      </Box>
                    ))}
                    {activeTab === 'tasks' && ['Review design mockups', 'Update documentation', 'Team standup meeting'].map((item) => (
                      <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 1.5, borderRadius: '8px', bgcolor: 'rgba(255, 255, 255, 0.05)', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>
                        <Checkbox size="small" sx={{ color: 'rgba(255, 255, 255, 0.2)' }} />
                        <Typography variant="body2" sx={{ color: 'white' }}>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Side Widgets */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    { icon: Bolt, label: 'AI Insights', value: '87%', color: '#a855f7', subtext: 'Task completion rate ↑ 12%' },
                    { icon: People, label: 'Team', value: '12', color: '#3b82f6', subtext: 'Active members online' },
                    { icon: Schedule, label: 'Time Saved', value: '24h', color: '#22c55e', subtext: 'This week with AI' },
                  ].map((widget) => {
                    const Icon = widget.icon;
                    return (
                      <Box
                        key={widget.label}
                        component={motion.div}
                        onHoverStart={() => setHoveredWidget(widget.label)}
                        onHoverEnd={() => setHoveredWidget(null)}
                        whileHover={{ scale: 1.05, y: -4 }}
                        sx={{
                          p: 2,
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, ${widget.color}33, ${widget.color}11)`,
                          backdropFilter: 'blur(8px)',
                          border: `1px solid ${widget.color}33`,
                          cursor: 'pointer',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                          <Icon sx={{ fontSize: '1.25rem', color: widget.color }} />
                          <Typography variant="body2" sx={{ color: 'white' }}>{widget.label}</Typography>
                        </Box>
                        <Typography
                          component={motion.div}
                          animate={{ scale: hoveredWidget === widget.label ? [1, 1.1, 1] : 1 }}
                          transition={{ duration: 0.5 }}
                          variant="h4"
                          sx={{ color: 'white', mb: 0.5 }}
                        >
                          {widget.value}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#9ca3af' }}>{widget.subtext}</Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Floating Hint */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            sx={{
              position: 'absolute',
              bottom: -4,
              left: '50%',
              transform: 'translateX(-50%)',
              px: 2,
              py: 1,
              borderRadius: '50px',
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Typography variant="caption" sx={{ color: '#9ca3af' }}>
              👆 Try clicking the tabs and hovering over widgets
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}