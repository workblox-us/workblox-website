import {
  AccessTime,
  AccountTree,
  Assessment,
  AutoAwesome,
  CalendarMonth,
  ChatBubble,
  CheckCircle,
  Dashboard,
  Description,
  FolderOpen,
  MenuBook,
  Message,
  Notifications,
} from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { AIWorkspaceDemo } from './AIWorkspaceDemo_NEW';
import { useThemeColors } from '../hooks/useThemeColors';

export function FeaturesSection() {
  const colors = useThemeColors();

  // Reorganized into three systems
  const featureSystems = [
    {
      systemName: 'The Planning System',
      systemDescription:
        'Work starts with knowing what matters. Your calendar, email, and tasks stay connected so priorities stay clear.',
      features: [
        {
          icon: CalendarMonth,
          title: 'Smart Calendar',
          description:
            'Calendar connected to email and tasks. AI prioritizes work and meetings throughout the day so you know what to do next.',
          gradient: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
          color: '#06b6d4',
          stats: { value: '5hrs', label: 'Saved weekly' },
        },
        {
          icon: FolderOpen,
          title: 'Connected Workspaces',
          description:
            'Tasks, notes, and conversations organized by project. Everything you need in one place without switching apps.',
          gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          color: '#3b82f6',
          stats: { value: '85%', label: 'Better organized' },
        },
        {
          icon: Dashboard,
          title: 'Intelligent Dashboards',
          description:
            'Real-time views that surface what matters. Modular widgets adapt to your workflow and keep you focused.',
          gradient: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
          color: '#a855f7',
          stats: { value: '10x', label: 'Faster insights' },
        },
      ],
    },
    {
      systemName: 'The Execution System',
      systemDescription:
        'Get things done with less manual work. Simple rules and automations that save hours every week.',
      features: [
        {
          icon: AccountTree,
          title: 'Natural Language Automations',
          description:
            'Create rules like "send weekly summary" or "update CRM when task closes." No coding, just plain language.',
          gradient: 'linear-gradient(135deg, #16a34a 0%, #059669 100%)',
          color: '#22c55e',
          stats: { value: '100+', label: 'Automations' },
        },
        {
          icon: Notifications,
          title: 'Smart Notifications',
          description:
            'AI filters the noise and highlights what matters. Get updates on your terms without constant interruptions.',
          gradient: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
          color: '#f97316',
          stats: { value: '90%', label: 'Less noise' },
        },
        {
          icon: ChatBubble,
          title: 'Unified Communications',
          description:
            'Conversations tied to tasks and projects. No more digging through chat history to find what you need.',
          gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
          color: '#0ea5e9',
          stats: { value: '50+', label: 'Integrations' },
        },
      ],
    },
    {
      systemName: 'The Intelligence Layer',
      systemDescription:
        'AI that helps without getting in the way. Suggestions, guidance, and support exactly when you need it.',
      features: [
        {
          icon: AutoAwesome,
          title: 'On-Screen AI Assistant',
          description:
            "AI embedded in your workflow. Get suggestions, summaries, and help without leaving what you're doing.",
          gradient: 'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
          color: '#ec4899',
          stats: { value: '24/7', label: 'Available' },
        },
        {
          icon: MenuBook,
          title: 'AI Workspaces from Prompts',
          description:
            'Describe a project and AI creates the workspace, tasks, and structure. Start organized from day one.',
          gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          color: '#6366f1',
          stats: { value: 'AI', label: 'Generated' },
        },
        {
          icon: Dashboard,
          title: 'Workload Advisor',
          description:
            'AI reviews your schedule and suggests improvements. Get clarity on what is realistic and where to focus.',
          gradient: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
          color: '#a855f7',
          stats: { value: 'Smart', label: 'Guidance' },
        },
      ],
    },
  ];

  return (
    <Box
      component='section'
      id='features'
      sx={{ position: 'relative', py: { xs: 8, md: 12 }, overflow: 'hidden' }}
    >
      {/* Header */}
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 10, mb: 8 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center' }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 1.5,
              py: 0.75,
              borderRadius: '50px',
              bgcolor: colors.badge.bg,
              border: `1px solid ${colors.border.accent}`,
              backdropFilter: 'blur(8px)',
              mb: 1.5,
            }}
          >
            <Typography variant='caption' sx={{ color: colors.badge.text }}>
              Three Systems
            </Typography>
          </Box>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '2.25rem', md: '3rem' },
              color: colors.text.primary,
              mb: 1.5,
              fontWeight: 700,
            }}
          >
            Plan, Execute,{' '}
            <Box
              component='span'
              sx={{
                background:
                  'linear-gradient(90deg, #c084fc 0%, #60a5fa 50%, #22d3ee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get Smarter
            </Box>
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: colors.text.secondary,
              maxWidth: '38rem',
              mx: 'auto',
              fontSize: '0.9375rem',
              lineHeight: 1.7,
            }}
          >
            Workblox isn't a collection of features. It's an intelligent system
            that understands how work really happens.
          </Typography>
        </Box>
      </Container>

      {/* Feature Systems */}
      <Box sx={{ '& > *:not(:last-child)': { mb: 12 } }}>
        {featureSystems.map((system, systemIndex) => (
          <Box key={system.systemName}>
            {/* System Header */}
            <Container maxWidth='lg' sx={{ mb: 6 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={{ textAlign: 'center' }}
              >
                <Typography
                  variant='h3'
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    color: colors.text.primary,
                    mb: 2,
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {system.systemName}
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: colors.text.secondary,
                    maxWidth: '36rem',
                    mx: 'auto',
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                  }}
                >
                  {system.systemDescription}
                </Typography>
              </Box>
            </Container>

            {/* Features in this system */}
            <Box sx={{ '& > *:not(:last-child)': { mb: 8 } }}>
              {system.features.map((feature, featureIndex) => {
                const globalIndex = systemIndex * 3 + featureIndex;
                return (
                  <FeatureSection
                    key={feature.title}
                    feature={feature}
                    index={globalIndex}
                  />
                );
              })}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function FeatureSection({ feature, index }: { feature: any; index: number }) {
  const ref = useRef(null);
  const colors = useThemeColors();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  const Icon = feature.icon;
  const isEven = index % 2 === 0;

  return (
    <Box
      component={motion.div}
      ref={ref}
      style={{ opacity }}
      sx={{ position: 'relative' }}
    >
      {/* Background gradient effect */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: isEven
            ? `linear-gradient(to right, ${feature.color}33, transparent)`
            : `linear-gradient(to left, ${feature.color}33, transparent)`,
          filter: 'blur(64px)',
        }}
      />

      <Container maxWidth='lg' sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
            gap: { xs: 4, sm: 5, lg: 6 },
            alignItems: 'center',
            px: { xs: 0, lg: 0 },
          }}
        >
          {/* Content Side */}
          <Box
            component={motion.div}
            style={{ scale }}
            sx={{
              order: { xs: 1, lg: isEven ? 1 : 2 },
              textAlign: { xs: 'center', lg: 'left' },
              width: '100%',
              maxWidth: { xs: '360px', lg: 'none' },
              mx: { xs: 'auto', lg: 0 },
              px: { xs: '20px', sm: '24px', lg: 0 },
            }}
          >
            {/* Animated Icon with Particles */}
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
                mb: { xs: 2, lg: 2 },
                mx: { xs: 'auto', lg: 0 },
              }}
            >
              <Box
                component={motion.div}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: feature.gradient,
                  borderRadius: '12px',
                  filter: 'blur(16px)',
                  opacity: 0.5,
                }}
              />
              <Box
                component={motion.div}
                whileHover={{ scale: 1.1, rotate: 15 }}
                sx={{
                  position: 'relative',
                  width: 56,
                  height: 56,
                  borderRadius: '12px',
                  background: feature.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon sx={{ fontSize: '1.75rem', color: 'white' }} />
              </Box>

              {/* Floating particles */}
              {[...Array(2)].map((_, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, Math.random() * 15 - 7, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  sx={{
                    position: 'absolute',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: feature.color,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </Box>

            <Typography
              variant='h3'
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.875rem', md: '1.875rem' },
                color: colors.text.primary,
                mb: { xs: 1.5, lg: 1.5 },
                fontWeight: 700,
                lineHeight: { xs: 1.2, md: 1.2 },
                wordBreak: 'normal',
                overflowWrap: 'anywhere',
                whiteSpace: 'normal',
                width: '100%',
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                color: colors.text.secondary,
                mb: { xs: 2, lg: 2.5 },
                lineHeight: 1.7,
                fontSize: { xs: '0.9375rem', md: '0.9375rem' },
                maxWidth: { xs: '100%', lg: 'none' },
                mx: { xs: 'auto', lg: 0 },
                wordBreak: 'normal',
                overflowWrap: 'anywhere',
                whiteSpace: 'normal',
                width: '100%',
              }}
            >
              {feature.description}
            </Typography>

            {/* Stats */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: '8px',
                background: `${feature.gradient}22`,
                border: `1px solid ${feature.color}33`,
                mx: { xs: 'auto', lg: 0 },
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  color: colors.text.primary,
                  fontSize: '1.25rem',
                  fontWeight: 700,
                }}
              >
                {feature.stats.value}
              </Typography>
              <Typography
                variant='caption'
                sx={{ color: colors.text.secondary, fontSize: '0.75rem' }}
              >
                {feature.stats.label}
              </Typography>
            </Box>
          </Box>

          {/* Visual Side - Interactive Demo */}
          <Box
            component={motion.div}
            style={{ y }}
            sx={{
              order: { xs: 2, lg: isEven ? 2 : 1 },
              width: '100%',
              maxWidth: { xs: '360px', lg: 'none' },
              mx: { xs: 'auto', lg: 0 },
              px: { xs: '20px', sm: '24px', lg: 0 },
            }}
          >
            <Box sx={{ position: 'relative', width: '100%' }}>
              {/* Animated Background Glow */}
              <Box
                component={motion.div}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: feature.gradient,
                  borderRadius: '24px',
                  filter: 'blur(64px)',
                  opacity: 0.2,
                }}
              />

              {/* Main Card */}
              <Box
                component={motion.div}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                sx={{
                  position: 'relative',
                  borderRadius: '12px',
                  border: colors.isDark
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(15, 23, 42, 0.12)',
                  background: colors.isDark
                    ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(0, 0, 0, 0.9))'
                    : 'linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(241, 245, 249, 0.95))',
                  backdropFilter: 'blur(24px)',
                  p: 2.5,
                  overflow: 'hidden',
                  minHeight: 280,
                }}
              >
                {/* Animated Grid Background */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: colors.isDark
                      ? 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)'
                      : 'linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Feature-specific demo */}
                <FeatureDemo feature={feature} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// Feature-specific demos
function FeatureDemo({ feature }: { feature: any }) {
  const title = feature.title;

  // AI Workspaces from Prompts
  if (title === 'AI Workspaces from Prompts') {
    return (
      <AIWorkspaceDemo color={feature.color} gradient={feature.gradient} />
    );
  }

  // Smart Calendar Demo
  if (title === 'Smart Calendar') {
    return <SmartCalendarDemo feature={feature} />;
  }

  // Connected Workspaces Demo
  if (title === 'Connected Workspaces') {
    return <ConnectedWorkspacesDemo feature={feature} />;
  }

  // Intelligent Dashboards Demo
  if (title === 'Intelligent Dashboards') {
    return <IntelligentDashboardsDemo feature={feature} />;
  }

  // Natural Language Automations Demo
  if (title === 'Natural Language Automations') {
    return <AutomationsDemo feature={feature} />;
  }

  // Smart Notifications Demo
  if (title === 'Smart Notifications') {
    return <SmartNotificationsDemo feature={feature} />;
  }

  // Unified Communications Demo
  if (title === 'Unified Communications') {
    return <UnifiedCommunicationsDemo feature={feature} />;
  }

  // On-Screen AI Assistant Demo
  if (title === 'On-Screen AI Assistant') {
    return <AIAssistantDemo feature={feature} />;
  }

  // Workload Advisor Demo
  if (title === 'Workload Advisor') {
    return <WorkloadAdvisorDemo feature={feature} />;
  }

  // Default fallback
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant='body2' sx={{ color: '#9ca3af' }}>
        {feature.title} interactive demo
      </Typography>
    </Box>
  );
}

// Individual demo components
function SmartCalendarDemo({ feature }: { feature: any }) {
  const colors = useThemeColors();
  return (
    <Box sx={{ '& > *:not(:last-child)': { mb: 1.5 } }}>
      {['Day', 'Week', 'Month'].map((view, idx) => (
        <Box
          key={view}
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          sx={{
            display: 'inline-flex',
            px: 1.5,
            py: 0.5,
            mr: 1,
            borderRadius: '6px',
            bgcolor:
              idx === 0
                ? 'rgba(6, 182, 212, 0.2)'
                : colors.isDark
                ? 'rgba(255, 255, 255, 0.05)'
                : 'rgba(15, 23, 42, 0.05)',
            border:
              idx === 0
                ? '1px solid rgba(6, 182, 212, 0.4)'
                : colors.isDark
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(15, 23, 42, 0.1)',
          }}
        >
          <Typography
            variant='caption'
            sx={{
              color:
                idx === 0 ? '#06b6d4' : colors.isDark ? '#9ca3af' : '#64748b',
              fontSize: '0.75rem',
            }}
          >
            {view}
          </Typography>
        </Box>
      ))}

      {[
        { time: '9:00 AM', title: 'Design Review', priority: true },
        { time: '11:30 AM', title: 'Team Sync', priority: false },
        { time: '2:00 PM', title: 'Client Call', priority: false },
      ].map((event, idx) => (
        <Box
          key={idx}
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + idx * 0.1 }}
          sx={{
            p: 1.5,
            borderRadius: '8px',
            bgcolor: event.priority
              ? 'rgba(6, 182, 212, 0.1)'
              : colors.isDark
              ? 'rgba(255, 255, 255, 0.03)'
              : 'rgba(15, 23, 42, 0.04)',
            border: event.priority
              ? '1px solid rgba(6, 182, 212, 0.3)'
              : colors.isDark
              ? '1px solid rgba(255, 255, 255, 0.05)'
              : '1px solid rgba(15, 23, 42, 0.08)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTime
              sx={{
                fontSize: '0.875rem',
                color: event.priority
                  ? '#06b6d4'
                  : colors.isDark
                  ? '#6b7280'
                  : '#94a3b8',
              }}
            />
            <Typography
              variant='caption'
              sx={{
                color: event.priority
                  ? '#06b6d4'
                  : colors.isDark
                  ? '#9ca3af'
                  : '#64748b',
                fontSize: '0.75rem',
              }}
            >
              {event.time}
            </Typography>
          </Box>
          <Typography
            variant='body2'
            sx={{
              color: colors.isDark ? '#e5e7eb' : colors.text.primary,
              fontSize: '0.875rem',
              mt: 0.5,
            }}
          >
            {event.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function ConnectedWorkspacesDemo({ feature }: { feature: any }) {
  const colors = useThemeColors();
  return (
    <Box>
      {['Tasks', 'Notes', 'Files'].map((tab, idx) => (
        <Box
          key={tab}
          component={motion.div}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          sx={{
            p: 1.5,
            mb: 1.5,
            borderRadius: '8px',
            bgcolor:
              idx === 0
                ? 'rgba(59, 130, 246, 0.1)'
                : colors.isDark
                ? 'rgba(255, 255, 255, 0.03)'
                : 'rgba(15, 23, 42, 0.04)',
            border:
              idx === 0
                ? '1px solid rgba(59, 130, 246, 0.3)'
                : colors.isDark
                ? '1px solid rgba(255, 255, 255, 0.05)'
                : '1px solid rgba(15, 23, 42, 0.08)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            {idx === 0 && (
              <CheckCircle sx={{ fontSize: '0.875rem', color: '#3b82f6' }} />
            )}
            {idx === 1 && (
              <Description
                sx={{
                  fontSize: '0.875rem',
                  color: colors.isDark ? '#6b7280' : '#94a3b8',
                }}
              />
            )}
            {idx === 2 && (
              <FolderOpen
                sx={{
                  fontSize: '0.875rem',
                  color: colors.isDark ? '#6b7280' : '#94a3b8',
                }}
              />
            )}
            <Typography
              variant='caption'
              sx={{
                color:
                  idx === 0 ? '#3b82f6' : colors.isDark ? '#9ca3af' : '#64748b',
                fontSize: '0.75rem',
                fontWeight: 600,
              }}
            >
              {tab}
            </Typography>
          </Box>
          <Box
            component={motion.div}
            animate={{ width: ['50%', '75%', '50%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            sx={{
              height: 6,
              bgcolor: colors.isDark
                ? 'rgba(255, 255, 255, 0.15)'
                : 'rgba(15, 23, 42, 0.12)',
              borderRadius: '3px',
              mb: 0.5,
            }}
          />
          <Box
            sx={{
              height: 5,
              width: '60%',
              bgcolor: colors.isDark
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(15, 23, 42, 0.08)',
              borderRadius: '3px',
            }}
          />
        </Box>
      ))}
    </Box>
  );
}

function IntelligentDashboardsDemo({ feature }: { feature: any }) {
  return (
    <Box
      sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5 }}
    >
      {['Tasks', 'Progress', 'Team', 'Metrics'].map((widget, idx) => (
        <Box
          key={widget}
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.05 }}
          sx={{
            p: 1.5,
            borderRadius: '8px',
            bgcolor: 'rgba(147, 51, 234, 0.1)',
            border: '1px solid rgba(147, 51, 234, 0.2)',
          }}
        >
          <Typography
            variant='caption'
            sx={{
              color: '#a855f7',
              fontSize: '0.7rem',
              mb: 1,
              display: 'block',
            }}
          >
            {widget}
          </Typography>
          <Box
            component={motion.div}
            animate={{
              height: [
                `${40 + Math.random() * 30}%`,
                `${60 + Math.random() * 30}%`,
                `${40 + Math.random() * 30}%`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            sx={{
              width: '100%',
              bgcolor: 'rgba(168, 85, 247, 0.3)',
              borderRadius: '4px',
            }}
          />
        </Box>
      ))}
    </Box>
  );
}

function AutomationsDemo({ feature }: { feature: any }) {
  return (
    <Box>
      {[
        { trigger: 'When task closes', action: 'Update CRM' },
        { trigger: 'Every Monday 9am', action: 'Send weekly summary' },
        { trigger: 'New file added', action: 'Notify team' },
      ].map((automation, idx) => (
        <Box
          key={idx}
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.15 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            p: 1.5,
            mb: 1.5,
            borderRadius: '8px',
            bgcolor: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: feature.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <AccountTree sx={{ fontSize: '0.75rem', color: 'white' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant='caption'
              sx={{ color: '#22c55e', fontSize: '0.7rem', display: 'block' }}
            >
              {automation.trigger}
            </Typography>
            <Typography
              variant='caption'
              sx={{ color: '#9ca3af', fontSize: '0.65rem' }}
            >
              → {automation.action}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function SmartNotificationsDemo({ feature }: { feature: any }) {
  const colors = useThemeColors();
  return (
    <Box>
      {[
        {
          type: 'High Priority',
          message: 'Client approval needed',
          important: true,
        },
        { type: 'Team Update', message: 'Design complete', important: false },
        { type: 'Reminder', message: 'Meeting in 30min', important: false },
      ].map((notif, idx) => (
        <Box
          key={idx}
          component={motion.div}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.15 }}
          sx={{
            p: 1.5,
            mb: 1.5,
            borderRadius: '8px',
            bgcolor: notif.important
              ? 'rgba(249, 115, 22, 0.15)'
              : colors.isDark
              ? 'rgba(255, 255, 255, 0.03)'
              : 'rgba(15, 23, 42, 0.04)',
            border: notif.important
              ? '1px solid rgba(249, 115, 22, 0.3)'
              : colors.isDark
              ? '1px solid rgba(255, 255, 255, 0.05)'
              : '1px solid rgba(15, 23, 42, 0.08)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: notif.important
                  ? '#f97316'
                  : colors.isDark
                  ? '#6b7280'
                  : '#94a3b8',
              }}
            />
            <Typography
              variant='caption'
              sx={{
                color: notif.important
                  ? '#f97316'
                  : colors.isDark
                  ? '#9ca3af'
                  : '#64748b',
                fontSize: '0.7rem',
                fontWeight: 600,
              }}
            >
              {notif.type}
            </Typography>
          </Box>
          <Typography
            variant='body2'
            sx={{
              color: colors.isDark ? '#e5e7eb' : colors.text.primary,
              fontSize: '0.8rem',
            }}
          >
            {notif.message}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function UnifiedCommunicationsDemo({ feature }: { feature: any }) {
  const colors = useThemeColors();
  return (
    <Box>
      {[
        { type: 'Chat', from: 'Sarah', time: '2m ago' },
        { type: 'Email', from: 'Client', time: '1h ago' },
        { type: 'Comment', from: 'Team', time: '3h ago' },
      ].map((msg, idx) => (
        <Box
          key={idx}
          component={motion.div}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 1.5,
            p: 1.5,
            mb: 1.5,
            borderRadius: '8px',
            bgcolor: 'rgba(14, 165, 233, 0.1)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
          }}
        >
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: feature.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {idx === 0 && (
              <Message sx={{ fontSize: '0.75rem', color: 'white' }} />
            )}
            {idx === 1 && (
              <Message sx={{ fontSize: '0.75rem', color: 'white' }} />
            )}
            {idx === 2 && (
              <ChatBubble sx={{ fontSize: '0.75rem', color: 'white' }} />
            )}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}
            >
              <Typography
                variant='caption'
                sx={{ color: '#0ea5e9', fontSize: '0.75rem', fontWeight: 600 }}
              >
                {msg.from}
              </Typography>
              <Typography
                variant='caption'
                sx={{
                  color: colors.isDark ? '#6b7280' : '#94a3b8',
                  fontSize: '0.65rem',
                }}
              >
                {msg.time}
              </Typography>
            </Box>
            <Box
              component={motion.div}
              animate={{ width: ['60%', '80%', '60%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              sx={{
                height: 6,
                bgcolor: colors.isDark
                  ? 'rgba(255, 255, 255, 0.15)'
                  : 'rgba(15, 23, 42, 0.12)',
                borderRadius: '3px',
                mb: 0.5,
              }}
            />
            <Box
              sx={{
                height: 5,
                width: '50%',
                bgcolor: colors.isDark
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(15, 23, 42, 0.08)',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function AIAssistantDemo({ feature }: { feature: any }) {
  const colors = useThemeColors();
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowSuggestion(true);
      setTimeout(() => setShowSuggestion(false), 3000);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      {/* AI Orb */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
      >
        <Box
          component={motion.div}
          animate={{
            y: [0, -4, 0],
            boxShadow: [
              `0 4px 20px ${feature.color}44`,
              `0 8px 30px ${feature.color}66`,
              `0 4px 20px ${feature.color}44`,
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: feature.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <AutoAwesome sx={{ fontSize: '1.25rem', color: 'white' }} />
        </Box>
      </Box>

      {/* Suggestion Bubble */}
      {showSuggestion && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          sx={{
            position: 'absolute',
            bottom: 72,
            right: 16,
            minWidth: 200,
            p: 1.5,
            borderRadius: '10px',
            bgcolor: 'rgba(236, 72, 153, 0.15)',
            border: '1px solid rgba(236, 72, 153, 0.4)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Typography
            variant='caption'
            sx={{
              color: feature.color,
              fontSize: '0.65rem',
              display: 'block',
              mb: 0.5,
              fontWeight: 600,
            }}
          >
            AI Suggestion
          </Typography>
          <Typography
            variant='body2'
            sx={{
              color: colors.isDark ? 'white' : colors.text.primary,
              fontSize: '0.8rem',
            }}
          >
            Schedule this for tomorrow?
          </Typography>
        </Box>
      )}

      {/* Content area */}
      <Box sx={{ p: 2, minHeight: 200 }}>
        {[1, 2, 3].map((item) => (
          <Box
            key={item}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: item * 0.2 }}
            sx={{
              height: 8,
              mb: 1.5,
              bgcolor: colors.isDark
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(15, 23, 42, 0.08)',
              borderRadius: '4px',
              width: `${100 - item * 15}%`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

function WorkloadAdvisorDemo({ feature }: { feature: any }) {
  const colors = useThemeColors();
  return (
    <Box>
      <Box
        sx={{
          mb: 2,
          p: 1.5,
          borderRadius: '8px',
          bgcolor: colors.isDark
            ? 'rgba(255, 255, 255, 0.03)'
            : 'rgba(15, 23, 42, 0.04)',
          border: colors.isDark
            ? '1px solid rgba(255, 255, 255, 0.05)'
            : '1px solid rgba(15, 23, 42, 0.08)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
          <Typography
            variant='caption'
            sx={{
              color: colors.isDark ? '#9ca3af' : '#64748b',
              fontSize: '0.75rem',
            }}
          >
            This Week
          </Typography>
          <Box
            component={motion.div}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            sx={{
              px: 1.5,
              py: 0.25,
              borderRadius: '50px',
              bgcolor: 'rgba(234, 88, 12, 0.2)',
              border: '1px solid rgba(234, 88, 12, 0.4)',
            }}
          >
            <Typography
              variant='caption'
              sx={{ color: '#f97316', fontSize: '0.7rem' }}
            >
              Overload
            </Typography>
          </Box>
        </Box>

        {['Mon', 'Tue', 'Wed'].map((day, idx) => {
          const workload = [60, 75, 95];
          return (
            <Box key={day} sx={{ mb: 1.5 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}
              >
                <Typography
                  variant='caption'
                  sx={{
                    color: colors.isDark ? '#6b7280' : '#94a3b8',
                    fontSize: '0.7rem',
                    minWidth: 30,
                  }}
                >
                  {day}
                </Typography>
                <Box
                  component={motion.div}
                  initial={{ width: 0 }}
                  animate={{ width: `${workload[idx]}%` }}
                  transition={{ duration: 1, delay: idx * 0.2 }}
                  sx={{
                    height: 8,
                    bgcolor: idx === 2 ? '#f97316' : '#a855f7',
                    borderRadius: '4px',
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1.5,
          p: 1.5,
          borderRadius: '8px',
          bgcolor: 'rgba(168, 85, 247, 0.1)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
        }}
      >
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: feature.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Assessment sx={{ fontSize: '0.875rem', color: 'white' }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant='caption'
            sx={{
              color: feature.color,
              fontSize: '0.7rem',
              display: 'block',
              mb: 0.5,
            }}
          >
            Suggestion
          </Typography>
          <Typography
            variant='caption'
            sx={{
              color: colors.isDark ? '#9ca3af' : '#64748b',
              fontSize: '0.75rem',
            }}
          >
            Move 2 tasks to Thursday
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
