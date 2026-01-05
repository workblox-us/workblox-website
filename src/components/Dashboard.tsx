import { useState } from 'react';
import { Box, Container, Typography, Button, IconButton, Avatar, Card, LinearProgress } from '@mui/material';
import { motion } from 'motion/react';
import { 
  Dashboard as DashboardIcon, 
  Article, 
  People, 
  Settings, 
  Notifications,
  Logout,
  Add,
  TrendingUp,
  CheckCircle,
  Schedule,
  LightMode,
  DarkMode
} from '@mui/icons-material';
import { useThemeColors } from '../hooks/useThemeColors';
import { useThemeMode } from '../contexts/ThemeContext';

interface DashboardProps {
  userEmail?: string;
  onSignOut?: () => void;
}

export function Dashboard({ userEmail = 'demo@workblox.com', onSignOut }: DashboardProps) {
  const colors = useThemeColors();
  const { mode, toggleTheme } = useThemeMode();

  const stats = [
    { label: 'Active Tasks', value: '24', change: '+12%', color: '#3b82f6' },
    { label: 'Completed', value: '156', change: '+8%', color: '#22c55e' },
    { label: 'Team Members', value: '12', change: '+2', color: '#a855f7' },
    { label: 'Projects', value: '8', change: '+1', color: '#f59e0b' },
  ];

  const recentTasks = [
    { id: 1, title: 'Design new landing page', status: 'in-progress', progress: 65 },
    { id: 2, title: 'API integration with Slack', status: 'in-progress', progress: 40 },
    { id: 3, title: 'User onboarding flow', status: 'completed', progress: 100 },
    { id: 4, title: 'Mobile app prototype', status: 'pending', progress: 15 },
  ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: '100vh',
        bgcolor: colors.isDark ? '#000000' : '#f8f9fa',
      }}
    >
      {/* Top Navigation */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(24px)',
          bgcolor: colors.isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          borderBottom: colors.isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #c084fc 0%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                Workblox
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '6px',
                  bgcolor: colors.isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.08)',
                  color: colors.isDark ? '#c084fc' : '#7c3aed',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                Dashboard
              </Typography>
            </Box>

            {/* Right Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton onClick={toggleTheme} sx={{ color: colors.text.secondary }}>
                {mode === 'dark' ? <LightMode /> : <DarkMode />}
              </IconButton>
              <IconButton sx={{ color: colors.text.secondary }}>
                <Notifications />
              </IconButton>
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: 'linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}
              >
                {userEmail.charAt(0).toUpperCase()}
              </Avatar>
              <IconButton onClick={onSignOut} sx={{ color: colors.text.secondary }}>
                <Logout />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {/* Sidebar */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            sx={{
              width: '240px',
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Box
              sx={{
                position: 'sticky',
                top: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {[
                { icon: <DashboardIcon />, label: 'Dashboard', active: true },
                { icon: <Article />, label: 'Projects' },
                { icon: <People />, label: 'Team' },
                { icon: <Settings />, label: 'Settings' },
              ].map((item) => (
                <Button
                  key={item.label}
                  startIcon={item.icon}
                  sx={{
                    justifyContent: 'flex-start',
                    px: 2,
                    py: 1.5,
                    borderRadius: '12px',
                    color: item.active ? (colors.isDark ? '#c084fc' : '#7c3aed') : colors.text.secondary,
                    bgcolor: item.active
                      ? colors.isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.08)'
                      : 'transparent',
                    textTransform: 'none',
                    fontWeight: item.active ? 600 : 400,
                    '&:hover': {
                      bgcolor: colors.isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Main Dashboard Area */}
          <Box sx={{ flex: 1 }}>
            {/* Welcome Header */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              sx={{ mb: 4 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: colors.text.primary,
                  mb: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                Welcome back! 👋
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: colors.text.secondary,
                  fontSize: '0.9375rem',
                }}
              >
                Here's what's happening with your projects today.
              </Typography>
            </Box>

            {/* Stats Grid */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                gap: 2,
                mb: 4,
              }}
            >
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  sx={{
                    p: 3,
                    borderRadius: '16px',
                    background: colors.isDark
                      ? 'linear-gradient(135deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 15, 35, 0.6) 100%)'
                      : 'white',
                    border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                    boxShadow: colors.isDark
                      ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                      : '0 4px 20px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colors.text.secondary,
                        fontSize: '0.8125rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.25,
                        borderRadius: '4px',
                        bgcolor: colors.isDark ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.08)',
                        color: '#22c55e',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      <TrendingUp sx={{ fontSize: '0.875rem' }} />
                      {stat.change}
                    </Box>
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: colors.text.primary,
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Box
                    sx={{
                      width: '40px',
                      height: '4px',
                      borderRadius: '2px',
                      bgcolor: stat.color,
                      boxShadow: `0 0 10px ${stat.color}`,
                    }}
                  />
                </Card>
              ))}
            </Box>

            {/* Recent Tasks */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: colors.text.primary,
                  }}
                >
                  Recent Tasks
                </Typography>
                <Button
                  startIcon={<Add />}
                  sx={{
                    px: 2.5,
                    py: 1,
                    borderRadius: '10px',
                    background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                    color: 'white',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)',
                    },
                  }}
                >
                  New Task
                </Button>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {recentTasks.map((task, index) => (
                  <Card
                    key={task.id}
                    component={motion.div}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    sx={{
                      p: 3,
                      borderRadius: '16px',
                      background: colors.isDark
                        ? 'linear-gradient(135deg, rgba(30, 27, 75, 0.6) 0%, rgba(15, 15, 35, 0.6) 100%)'
                        : 'white',
                      border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                      boxShadow: colors.isDark
                        ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                        : '0 4px 20px rgba(0, 0, 0, 0.05)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: colors.isDark
                          ? '0 8px 30px rgba(139, 92, 246, 0.2)'
                          : '0 8px 30px rgba(139, 92, 246, 0.1)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {task.status === 'completed' ? (
                          <CheckCircle sx={{ color: '#22c55e', fontSize: '1.5rem' }} />
                        ) : (
                          <Schedule sx={{ color: '#3b82f6', fontSize: '1.5rem' }} />
                        )}
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: colors.text.primary,
                          }}
                        >
                          {task.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '6px',
                          bgcolor: task.status === 'completed'
                            ? colors.isDark ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.08)'
                            : task.status === 'in-progress'
                            ? colors.isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.08)'
                            : colors.isDark ? 'rgba(251, 146, 60, 0.1)' : 'rgba(251, 146, 60, 0.08)',
                          color: task.status === 'completed' ? '#22c55e' : task.status === 'in-progress' ? '#3b82f6' : '#fb923c',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          textTransform: 'capitalize',
                        }}
                      >
                        {task.status.replace('-', ' ')}
                      </Typography>
                    </Box>
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: colors.text.secondary,
                            fontSize: '0.75rem',
                          }}
                        >
                          Progress
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: colors.text.primary,
                            fontSize: '0.75rem',
                            fontWeight: 600,
                          }}
                        >
                          {task.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={task.progress}
                        sx={{
                          height: 6,
                          borderRadius: '3px',
                          bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: '3px',
                            background: task.status === 'completed'
                              ? 'linear-gradient(90deg, #22c55e 0%, #10b981 100%)'
                              : 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                          },
                        }}
                      />
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}