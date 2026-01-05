import { motion, useScroll, useTransform } from 'motion/react';
import {
  CalendarMonth,
  FolderOpen,
  Dashboard,
  AutoAwesome,
  AccountTree,
  Notifications,
  MenuBook,
  ChatBubble,
  DragIndicator,
  BarChart,
  Sync,
  Message,
  CheckCircle,
  Assessment,
  AccessTime,
  Security,
  LockOutlined as Lock,
  VerifiedUserOutlined as VerifiedUser,
  AdminPanelSettings as Shield,
  PolicyOutlined as Policy,
  Add,
  Inbox,
  AccountCircle
} from '@mui/icons-material';
import { useRef, useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useThemeColors } from '../hooks/useThemeColors';

export function FeaturesSection() {
  const colors = useThemeColors();
  
  // Reorganized into three systems
  const featureSystems = [
    {
      systemName: 'The Planning System',
      systemDescription: 'Work starts with knowing what matters. Your calendar, email, and tasks stay connected so priorities stay clear.',
      features: [
        {
          icon: CalendarMonth,
          title: 'Smart Calendar',
          description: 'Calendar connected to email and tasks. AI prioritizes work and meetings throughout the day so you know what to do next.',
          gradient: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
          color: '#06b6d4',
          stats: { value: '5hrs', label: 'Saved weekly' }
        },
        {
          icon: FolderOpen,
          title: 'Connected Workspaces',
          description: 'Tasks, notes, and conversations organized by project. Everything you need in one place without switching apps.',
          gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          color: '#3b82f6',
          stats: { value: '85%', label: 'Better organized' }
        },
        {
          icon: Dashboard,
          title: 'Intelligent Dashboards',
          description: 'Real-time views that surface what matters. Modular widgets adapt to your workflow and keep you focused.',
          gradient: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
          color: '#a855f7',
          stats: { value: '10x', label: 'Faster insights' }
        },
      ]
    },
    {
      systemName: 'The Execution System',
      systemDescription: 'Get things done with less manual work. Simple rules and automations that save hours every week.',
      features: [
        {
          icon: AccountTree,
          title: 'Natural Language Automations',
          description: 'Create rules like "send weekly summary" or "update CRM when task closes." No coding, just plain language.',
          gradient: 'linear-gradient(135deg, #16a34a 0%, #059669 100%)',
          color: '#22c55e',
          stats: { value: '100+', label: 'Automations' }
        },
        {
          icon: Notifications,
          title: 'Smart Notifications',
          description: 'AI filters the noise and highlights what matters. Get updates on your terms without constant interruptions.',
          gradient: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
          color: '#f97316',
          stats: { value: '90%', label: 'Less noise' }
        },
        {
          icon: ChatBubble,
          title: 'Unified Communications',
          description: 'Conversations tied to tasks and projects. No more digging through chat history to find what you need.',
          gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
          color: '#0ea5e9',
          stats: { value: '50+', label: 'Integrations' }
        },
      ]
    },
    {
      systemName: 'The Intelligence Layer',
      systemDescription: 'AI that helps without getting in the way. Suggestions, guidance, and support exactly when you need it.',
      features: [
        {
          icon: AutoAwesome,
          title: 'On-Screen AI Assistant',
          description: 'AI embedded in your workflow. Get suggestions, summaries, and help without leaving what you\'re doing.',
          gradient: 'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
          color: '#ec4899',
          stats: { value: '24/7', label: 'Available' }
        },
        {
          icon: MenuBook,
          title: 'AI Workspaces from Prompts',
          description: 'Describe a project and AI creates the workspace, tasks, and structure. Start organized from day one.',
          gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          color: '#6366f1',
          stats: { value: 'AI', label: 'Generated' }
        },
        {
          icon: Dashboard,
          title: 'Workload Advisor',
          description: 'AI reviews your schedule and suggests improvements. Get clarity on what is realistic and where to focus.',
          gradient: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
          color: '#a855f7',
          stats: { value: 'Smart', label: 'Guidance' }
        },
      ]
    }
  ];

  return (
    <Box component="section" id="features" sx={{ position: 'relative', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      {/* Header */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, mb: 8 }}>
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
            <Typography variant="caption" sx={{ color: colors.badge.text }}>
              Three Systems
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, color: colors.text.primary, mb: 1.5, fontWeight: 700 }}>
            Plan, Execute,
            <br />
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #c084fc 0%, #60a5fa 50%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Get Smarter
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: colors.text.secondary, maxWidth: '38rem', mx: 'auto', fontSize: '0.9375rem', lineHeight: 1.7 }}>
            Workblox isn't a collection of features. It's an intelligent system that understands how work really happens.
          </Typography>
        </Box>
      </Container>

      {/* Feature Systems */}
      <Box sx={{ '& > *:not(:last-child)': { mb: 12 } }}>
        {featureSystems.map((system, systemIndex) => (
          <Box key={system.systemName}>
            {/* System Header */}
            <Container maxWidth="lg" sx={{ mb: 6 }}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={{ textAlign: 'center' }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: { xs: '1.75rem', md: '2.25rem' }, 
                    color: colors.text.primary, 
                    mb: 2, 
                    fontWeight: 700,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {system.systemName}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: colors.text.secondary, 
                    maxWidth: '36rem', 
                    mx: 'auto', 
                    fontSize: '0.9375rem',
                    lineHeight: 1.7
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

      {/* Privacy & Security Section */}
      <Container maxWidth="lg" sx={{ mt: 12 }} id="security">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: '20px',
            background: colors.isDark 
              ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(59, 130, 246, 0.05))' 
              : 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.03))',
            border: `1px solid ${colors.isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.15)'}`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background glow effect */}
          <Box
            sx={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 5, position: 'relative' }}>
            <Box
              component={motion.div}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              sx={{
                display: 'inline-flex',
                p: 2,
                borderRadius: '16px',
                bgcolor: colors.isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.1)',
                mb: 3,
              }}
            >
              <Shield sx={{ fontSize: '2.5rem', color: '#8b5cf6' }} />
            </Box>
            <Typography 
              variant="h3" 
              sx={{ 
                color: colors.text.primary,
                fontWeight: 700,
                mb: 2
              }}
            >
              Enterprise-Grade Security & Privacy
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: colors.text.secondary,
                fontSize: '1.125rem',
                lineHeight: 1.7,
                maxWidth: '48rem',
                mx: 'auto'
              }}
            >
              <Box component="span" sx={{ color: colors.text.primary, fontWeight: 600 }}>Your data stays yours.</Box> 
              {' '}Built with industry-leading security standards and compliance frameworks to protect your team's most sensitive information.
            </Typography>
          </Box>

          {/* Security Features Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
            gap: 3,
            mb: 5
          }}>
            {[
              { icon: Lock, title: 'End-to-End Encryption', desc: 'AES-256 encryption at rest and in transit' },
              { icon: VerifiedUser, title: 'Zero Trust Architecture', desc: 'Verified access for every request' },
              { icon: Security, title: 'Data Sovereignty', desc: 'You control where data lives' },
              { icon: Policy, title: 'Compliance Ready', desc: 'Built for regulatory requirements' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Box
                  key={item.title}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  sx={{
                    p: 3,
                    borderRadius: '12px',
                    bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.5)',
                    border: `1px solid ${colors.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: colors.isDark 
                        ? '0 12px 24px rgba(139, 92, 246, 0.2)' 
                        : '0 12px 24px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  <Icon sx={{ fontSize: '2rem', color: '#8b5cf6', mb: 1.5 }} />
                  <Typography variant="body2" sx={{ color: colors.text.primary, fontWeight: 600, mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: colors.text.secondary, fontSize: '0.8125rem' }}>
                    {item.desc}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* Certifications & Compliance */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: colors.text.secondary, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                display: 'block',
                mb: 3
              }}
            >
              Security Certifications & Compliance
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: 'center', 
              gap: 2,
              alignItems: 'center'
            }}>
              {[
                { name: 'SOC 2 Type II', subtitle: 'Certified' },
                { name: 'ISO 27001', subtitle: 'Compliant' },
                { name: 'GDPR', subtitle: 'Ready' },
                { name: 'HIPAA', subtitle: 'Compliant' },
                { name: 'CCPA', subtitle: 'Ready' },
                { name: 'PCI DSS', subtitle: 'Level 1' },
              ].map((cert, idx) => (
                <Box
                  key={cert.name}
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  sx={{
                    px: 3,
                    py: 2,
                    borderRadius: '10px',
                    bgcolor: colors.isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.08)',
                    border: `1px solid ${colors.isDark ? 'rgba(139, 92, 246, 0.25)' : 'rgba(139, 92, 246, 0.2)'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: 120,
                  }}
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: colors.text.primary, 
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      mb: 0.25
                    }}
                  >
                    {cert.name}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: colors.text.secondary,
                      fontSize: '0.75rem'
                    }}
                  >
                    {cert.subtitle}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function FeatureSection({ feature, index }: { feature: any; index: number }) {
  const ref = useRef(null);
  const colors = useThemeColors();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

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

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* Content Side */}
          <Box
            component={motion.div}
            style={{ scale }}
            sx={{
              order: { xs: 1, lg: isEven ? 1 : 2 },
            }}
          >
            {/* Animated Icon with Particles */}
            <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
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

            <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, color: colors.text.primary, mb: 1.5, fontWeight: 700 }}>
              {feature.title}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.text.secondary, mb: 2.5, lineHeight: 1.7, fontSize: '0.9375rem' }}>
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
              }}
            >
              <Typography variant="h5" sx={{ color: colors.text.primary, fontSize: '1.25rem', fontWeight: 700 }}>
                {feature.stats.value}
              </Typography>
              <Typography variant="caption" sx={{ color: colors.text.secondary, fontSize: '0.75rem' }}>
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
            }}
          >
            <Box sx={{ position: 'relative' }}>
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
                  ease: 'linear'
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
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(0, 0, 0, 0.9))',
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
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Demo Content - Customized per feature */}
                <Box sx={{ position: 'relative', minHeight: 230 }}>
                  <FeatureDemo feature={feature} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// Component to render feature-specific demo animations
function FeatureDemo({ feature }: { feature: any }) {
  const title = feature.title;
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // 1️⃣ Smart Calendar - Time clarity & intelligent flow
  if (title === 'Smart Calendar') {
    return (
      <Box sx={{ '& > *:not(:last-child)': { mb: 1.5 } }}>
        {/* View switcher */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          {['Day', 'Week', 'Month'].map((view, idx) => (
            <Box
              key={view}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: '6px',
                bgcolor: idx === 0 ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: idx === 0 ? '1px solid rgba(6, 182, 212, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
              }}
            >
              <Typography variant="caption" sx={{ color: idx === 0 ? '#06b6d4' : '#9ca3af', fontSize: '0.75rem' }}>
                {view}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Calendar events with AI priority glow */}
        {[
          { time: '9:00', title: 'Design Review', priority: true },
          { time: '11:30', title: 'Team Sync', priority: false },
          { time: '14:00', title: 'Client Call', priority: false },
        ].map((event, idx) => (
          <Box
            key={idx}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: idx * 0.12,
              duration: 0.18,
              ease: [0.4, 0, 0.2, 1]
            }}
            whileHover={{ scale: 1.02, x: 4 }}
            onHoverStart={() => setHoveredItem(idx)}
            onHoverEnd={() => setHoveredItem(null)}
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              p: 1.5,
              borderRadius: '8px',
              bgcolor: hoveredItem === idx ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)',
              cursor: 'grab',
              transition: 'background-color 0.15s ease-in-out',
            }}
          >
            {/* AI Priority Glow */}
            {event.priority && (
              <Box
                component={motion.div}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  boxShadow: [
                    `0 0 8px ${feature.color}`,
                    `0 0 16px ${feature.color}`,
                    `0 0 8px ${feature.color}`
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                sx={{
                  position: 'absolute',
                  inset: -1,
                  borderRadius: '8px',
                  border: '2px solid',
                  borderColor: feature.color,
                  pointerEvents: 'none',
                }}
              />
            )}

            <DragIndicator sx={{ fontSize: '1rem', color: '#6b7280' }} />
            <Box sx={{ minWidth: 50 }}>
              <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
                {event.time}
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                height: 32,
                borderRadius: '6px',
                background: feature.gradient,
                display: 'flex',
                alignItems: 'center',
                px: 1.5,
              }}
            >
              <Typography variant="body2" sx={{ color: 'white', fontSize: '0.875rem' }}>
                {event.title}
              </Typography>
            </Box>
          </Box>
        ))}
        
        <ActiveIndicator color={feature.color} label="Magnetic snap · Soft scale" />
      </Box>
    );
  }

  // 2️⃣ Connected Workspaces - Seamless context switching
  if (title === 'Connected Workspaces') {
    const [activeWorkspace, setActiveWorkspace] = useState(0);
    const workspaces = ['Marketing', 'Engineering', 'Design'];

    return (
      <Box>
        {/* Workspace switcher */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2, position: 'relative' }}>
          {workspaces.map((ws, idx) => (
            <Box
              key={ws}
              component={motion.div}
              onClick={() => setActiveWorkspace(idx)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                scale: activeWorkspace === idx ? 1 : 0.95,
                y: activeWorkspace === idx ? -2 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25
              }}
              sx={{
                flex: 1,
                px: 1.5,
                py: 1,
                borderRadius: '8px',
                bgcolor: activeWorkspace === idx ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: activeWorkspace === idx ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                boxShadow: activeWorkspace === idx ? '0 4px 12px rgba(59, 130, 246, 0.2)' : 'none',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, justifyContent: 'center' }}>
                <Box
                  component={motion.div}
                  animate={activeWorkspace === idx ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 1, ease: 'linear' }}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sync sx={{ fontSize: '0.875rem', color: activeWorkspace === idx ? '#3b82f4' : '#6b7280' }} />
                  </Box>
                </Box>
                <Typography variant="caption" sx={{ color: activeWorkspace === idx ? '#3b82f6' : '#9ca3af', fontSize: '0.75rem' }}>
                  {ws}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Workspace content with horizontal slide */}
        <Box
          component={motion.div}
          key={activeWorkspace}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          sx={{ '& > *:not(:last-child)': { mb: 1 } }}
        >
          {[1, 2, 3].map((item) => (
            <Box
              key={item}
              component={motion.div}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: item * 0.06,
                duration: 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
              sx={{
                p: 1.5,
                borderRadius: '6px',
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <FolderOpen sx={{ fontSize: '1.125rem', color: feature.color }} />
              <Box
                component={motion.div}
                animate={{ width: ['40%', '65%', '40%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: item * 0.3 }}
                sx={{
                  height: 8,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                }}
              />
            </Box>
          ))}
        </Box>

        <ActiveIndicator color={feature.color} label="Depth & continuity" />
      </Box>
    );
  }

  // 3️⃣ Intelligent Dashboards - Insight without overload
  if (title === 'Intelligent Dashboards') {
    return (
      <Box>
        {/* Widgets grid with shimmer loading */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5, mb: 2 }}>
          {[1, 2, 3, 4].map((widget) => (
            <Box
              key={widget}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: widget * 0.08,
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ scale: 1.03, y: -2 }}
              sx={{
                p: 1.5,
                borderRadius: '8px',
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Skeleton shimmer */}
              <Box
                component={motion.div}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: widget * 0.2
                }}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
                }}
              />
              
              <Box sx={{ position: 'relative' }}>
                <Box
                  component={motion.div}
                  animate={{ width: ['35%', '55%', '35%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: widget * 0.2 }}
                  sx={{
                    height: 6,
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '3px',
                    mb: 1,
                  }}
                />
                <Box
                  component={motion.div}
                  animate={{ height: [18, 28, 18] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: widget * 0.3
                  }}
                  sx={{
                    height: 24,
                    background: feature.gradient,
                    borderRadius: '4px',
                    opacity: 0.5,
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Chart animates from baseline */}
        <Box
          sx={{
            p: 1.5,
            borderRadius: '8px',
            bgcolor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <Box sx={{ display: 'flex', gap: 0.5, height: 40, alignItems: 'flex-end' }}>
            {[30, 50, 45, 70, 55, 80].map((height, idx) => (
              <Box
                key={idx}
                component={motion.div}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.24,
                  ease: [0.4, 0, 0.2, 1]
                }}
                sx={{
                  flex: 1,
                  background: feature.gradient,
                  borderRadius: '3px 3px 0 0',
                  opacity: 0.7,
                }}
              />
            ))}
          </Box>
        </Box>

        <ActiveIndicator color={feature.color} label="Sequential reveal · Baseline up" />
      </Box>
    );
  }

  // 4️⃣ Natural Language Automations - Language → action
  if (title === 'Natural Language Automations') {
    return (
      <Box>
        {/* Text input morphing to blocks */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.18 }}
          sx={{
            p: 1.5,
            mb: 2,
            borderRadius: '8px',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Box
            component={motion.div}
            animate={{ width: ['50%', '75%', '50%'] }}
            transition={{ duration: 3, repeat: Infinity }}
            sx={{
              height: 8,
              bgcolor: 'rgba(34, 197, 94, 0.3)',
              borderRadius: '4px',
            }}
          />
        </Box>

        {/* Parsing animation - AI understanding */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          {[0, 1, 2].map((dot) => (
            <Box
              key={dot}
              component={motion.div}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: dot * 0.15,
                ease: 'easeInOut'
              }}
              sx={{
                width: 6,
                height: 6,
                mx: 0.5,
                borderRadius: '50%',
                bgcolor: feature.color,
              }}
            />
          ))}
        </Box>

        {/* Structured automation blocks */}
        {[
          { label: 'When', icon: AccessTime },
          { label: 'Then', icon: AccountTree },
        ].map((block, idx) => {
          const BlockIcon = block.icon;
          return (
            <Box
              key={idx}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4 + idx * 0.12,
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                p: 1.5,
                mb: 1,
                borderRadius: '8px',
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '6px',
                  background: feature.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BlockIcon sx={{ fontSize: '1rem', color: 'white' }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.7rem', display: 'block', mb: 0.5 }}>
                  {block.label}
                </Typography>
                <Box
                  component={motion.div}
                  animate={{ width: ['45%', '70%', '45%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.5 }}
                  sx={{
                    height: 7,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                  }}
                />
              </Box>
              <Box
                component={motion.div}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.12 }}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <CheckCircle sx={{ fontSize: '1rem', color: feature.color }} />
              </Box>
            </Box>
          );
        })}

        <ActiveIndicator color={feature.color} label="Text → blocks · Checkmark fade" />
      </Box>
    );
  }

  // 5️⃣ Smart Notifications - Inform, not interrupt
  if (title === 'Smart Notifications') {
    return (
      <Box>
        {/* Notifications slide in from edge */}
        {[
          { priority: true, text: 'Design review ready' },
          { priority: false, text: 'New comment on task' },
          { priority: false, text: 'Meeting in 15 minutes' },
        ].map((notif, idx) => (
          <Box
            key={idx}
            component={motion.div}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: idx * 0.15,
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
            whileHover={{ x: -4, scale: 1.01 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              p: 1.5,
              mb: 1.5,
              borderRadius: '8px',
              bgcolor: notif.priority ? 'rgba(234, 88, 12, 0.1)' : 'rgba(255, 255, 255, 0.03)',
              border: notif.priority ? '1px solid rgba(234, 88, 12, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
              cursor: 'pointer',
            }}
          >
            <Box
              component={motion.div}
              animate={notif.priority ? {
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: notif.priority ? 'linear-gradient(135deg, #ea580c, #dc2626)' : 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Notifications sx={{ fontSize: '1rem', color: 'white' }} />
              </Box>
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <Box
                component={motion.div}
                animate={{ width: ['55%', '75%', '55%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
                sx={{
                  height: 8,
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '4px',
                  mb: 0.5,
                }}
              />
              <Box
                sx={{
                  height: 6,
                  width: '40%',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '3px',
                }}
              />
            </Box>

            <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.7rem' }}>
              2m
            </Typography>
          </Box>
        ))}

        <ActiveIndicator color={feature.color} label="Soft slide · Color emphasis" />
      </Box>
    );
  }

  // 6️⃣ Unified Communications - Fluid conversation
  if (title === 'Unified Communications') {
    return (
      <Box>
        {/* Message stream with types */}
        {[
          { type: 'chat', side: 'left' },
          { type: 'email', side: 'right' },
          { type: 'task', side: 'left' },
        ].map((msg, idx) => (
          <Box
            key={idx}
            component={motion.div}
            initial={{ opacity: 0, x: msg.side === 'left' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: idx * 0.12,
              duration: 0.18,
              ease: [0.4, 0, 0.2, 1]
            }}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1.5,
              mb: 1.5,
              justifyContent: msg.side === 'right' ? 'flex-end' : 'flex-start',
            }}
          >
            {msg.side === 'left' && (
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: feature.gradient,
                  flexShrink: 0,
                }}
              />
            )}
            
            <Box
              sx={{
                maxWidth: '70%',
                p: 1.5,
                borderRadius: '8px',
                bgcolor: msg.side === 'right' ? feature.gradient : 'rgba(255, 255, 255, 0.05)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.75 }}>
                <Message sx={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)' }} />
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.65rem' }}>
                  {msg.type}
                </Typography>
              </Box>
              <Box
                component={motion.div}
                animate={{ width: ['50%', '75%', '50%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.4 }}
                sx={{
                  height: 7,
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '3px',
                  mb: 0.5,
                }}
              />
              <Box
                sx={{
                  height: 6,
                  width: '60%',
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '3px',
                }}
              />
            </Box>

            {msg.side === 'right' && (
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  flexShrink: 0,
                }}
              />
            )}
          </Box>
        ))}

        <ActiveIndicator color={feature.color} label="Accordion motion · One stream" />
      </Box>
    );
  }

  // 7️⃣ On-Screen AI Assistant - Present, not intrusive
  if (title === 'On-Screen AI Assistant') {
    return <AIAssistantDemo feature={feature} />;
  }

  // 8️⃣ AI Workspaces from Prompts - Creation at speed
  if (title === 'AI Workspaces from Prompts') {
    const [phase, setPhase] = useState<'prompt' | 'building' | 'complete'>('prompt');
    const [activeTab, setActiveTab] = useState(0);
    
    const tabs = ['Summary', 'Backlog', 'Team Structure', 'Whiteboard', 'Files', 'Timeline'];
    const projectTitle = 'Agile Product Launch';

    useEffect(() => {
      const timer1 = setTimeout(() => setPhase('building'), 2000);
      const timer2 = setTimeout(() => setPhase('complete'), 4000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
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
                background: feature.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AutoAwesome sx={{ fontSize: '1rem', color: 'white' }} />
              </Box>
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
                      layoutId="activeTab"
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

        <ActiveIndicator color={feature.color} label="AI-generated workspace · Real-time assembly" />
      </Box>
    );
  }

  // 9️⃣ Workload Advisor - Guidance & balance
  if (title === 'Workload Advisor') {
    return (
      <Box>
        {/* Workload bars with weight distribution */}
        <Box
          sx={{
            p: 1.5,
            mb: 2,
            borderRadius: '8px',
            bgcolor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
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
              <Typography variant="caption" sx={{ color: '#f97316', fontSize: '0.7rem' }}>
                Overload
              </Typography>
            </Box>
          </Box>

          {/* Daily bars */}
          {['Mon', 'Tue', 'Wed'].map((day, idx) => {
            const isOverload = idx === 2;
            const workload = [60, 75, 95];
            
            return (
              <Box key={day} sx={{ mb: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.7rem', minWidth: 30 }}>
                    {day}
                  </Typography>
                  <Box sx={{ flex: 1, height: 8, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                    <Box
                      component={motion.div}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${workload[idx]}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.12,
                        duration: 0.24,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      sx={{
                        height: '100%',
                        background: isOverload 
                          ? 'linear-gradient(90deg, #ea580c, #dc2626)'
                          : feature.gradient,
                        borderRadius: '4px',
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* AI adjustment suggestion */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          sx={{
            p: 1.5,
            borderRadius: '8px',
            bgcolor: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
            <Box
              component={motion.div}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
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
              <Typography variant="caption" sx={{ color: feature.color, fontSize: '0.7rem', display: 'block', mb: 0.75 }}>
                Suggestion
              </Typography>
              <Box
                component={motion.div}
                animate={{ width: ['50%', '75%', '50%'] }}
                transition={{ duration: 3, repeat: Infinity }}
                sx={{
                  height: 7,
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '3px',
                  mb: 0.5,
                }}
              />
              <Box
                sx={{
                  height: 6,
                  width: '60%',
                  bgcolor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '3px',
                }}
              />
            </Box>
          </Box>
        </Box>

        <ActiveIndicator color={feature.color} label="Weight balance · Timeline adjust" />
      </Box>
    );
  }

  // Default fallback
  return (
    <Box sx={{ '& > *:not(:last-child)': { mb: 1.5 } }}>
      {[1, 2].map((item) => (
        <Box
          key={item}
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: item * 0.1 }}
          whileHover={{ x: 10, scale: 1.02 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            p: 1.5,
            borderRadius: '8px',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            cursor: 'pointer',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          <IconBox feature={feature} item={item}>
            {feature.icon && (() => {
              const Icon = feature.icon;
              return <Icon sx={{ fontSize: '1.125rem', color: 'white' }} />;
            })()}
          </IconBox>
          <AnimatedBars item={item} />
        </Box>
      ))}
      <ActiveIndicator color={feature.color} label="Motion demo" />
    </Box>
  );
}

// AI Assistant Interactive Demo Component
function AIAssistantDemo({ feature }: { feature: any }) {
  const [showTyping, setShowTyping] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);

  // Realistic AI interaction cycle
  useEffect(() => {
    const cycle = setInterval(() => {
      setShowTyping(true);
      
      setTimeout(() => {
        setShowTyping(false);
        setShowSuggestion(true);
        
        setTimeout(() => {
          setShowSuggestion(false);
        }, 3500);
      }, 2000);
    }, 8000);
    
    return () => clearInterval(cycle);
  }, []);

  return (
    <Box>
      {/* Simulated work context */}
      <Box
        sx={{
          p: 1.5,
          mb: 2,
          borderRadius: '8px',
          bgcolor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: '4px',
              bgcolor: 'rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircle sx={{ fontSize: '0.75rem', color: '#3b82f6' }} />
          </Box>
          <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
            Team meeting notes
          </Typography>
        </Box>
        
        {/* Simulated text content */}
        {[1, 2, 3].map((line) => (
          <Box
            key={line}
            component={motion.div}
            animate={{ width: ['50%', line === 2 ? '85%' : '65%', '50%'] }}
            transition={{ duration: 4, repeat: Infinity, delay: line * 0.3 }}
            sx={{
              height: 6,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '3px',
              mb: 0.75,
            }}
          />
        ))}
      </Box>

      {/* AI Assistant - Floating positioned */}
      <Box sx={{ position: 'relative', minHeight: 140 }}>
        {/* AI Orb - Bottom right corner */}
        <Box
          component={motion.div}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.3,
            type: 'spring',
            stiffness: 300
          }}
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
        >
          <Box sx={{ position: 'relative' }}>
            {/* Active pulse rings */}
            {[0, 1].map((ring) => (
              <Box
                key={ring}
                component={motion.div}
                animate={{
                  scale: [1, 2.2, 2.2],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: ring * 0.4,
                  ease: 'easeOut'
                }}
                sx={{
                  position: 'absolute',
                  inset: -8,
                  borderRadius: '50%',
                  border: '2px solid',
                  borderColor: feature.color,
                }}
              />
            ))}

            {/* Main AI orb */}
            <Box
              component={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -4, 0],
                boxShadow: [
                  `0 4px 20px ${feature.color}44`,
                  `0 8px 30px ${feature.color}66`,
                  `0 4px 20px ${feature.color}44`
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
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
              {showTyping ? (
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  {[0, 1, 2].map((dot) => (
                    <Box
                      key={dot}
                      component={motion.div}
                      animate={{
                        y: [0, -6, 0],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: dot * 0.1,
                        ease: 'easeInOut'
                      }}
                      sx={{
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        bgcolor: 'white',
                      }}
                    />
                  ))}
                </Box>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AutoAwesome
                    sx={{ fontSize: '1.25rem', color: 'white' }}
                  />
                </Box>
              )}
            </Box>

            {/* Status indicator */}
            <Box
              component={motion.div}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              sx={{
                position: 'absolute',
                bottom: 2,
                right: 2,
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: '#22c55e',
                border: '2px solid rgba(0, 0, 0, 0.8)',
              }}
            />
          </Box>
        </Box>

        {/* Contextual suggestion popup */}
        {showSuggestion && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 10, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
            sx={{
              position: 'absolute',
              bottom: 60,
              right: 0,
              minWidth: 240,
              maxWidth: 280,
            }}
          >
            {/* Suggestion card */}
            <Box
              sx={{
                p: 1.5,
                borderRadius: '10px',
                bgcolor: 'rgba(236, 72, 153, 0.15)',
                border: '1px solid rgba(236, 72, 153, 0.4)',
                backdropFilter: 'blur(12px)',
                boxShadow: `0 8px 24px ${feature.color}33`,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.5 }}>
                <Box
                  component={motion.div}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: feature.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AutoAwesome sx={{ fontSize: '0.7rem', color: 'white' }} />
                  </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="caption" sx={{ color: feature.color, fontSize: '0.65rem', display: 'block', mb: 0.5, fontWeight: 600 }}>
                    AI Suggestion
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', fontSize: '0.8rem', lineHeight: 1.4 }}>
                    Schedule this for tomorrow?
                  </Typography>
                </Box>
              </Box>
              
              {/* Action buttons */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box
                  component={motion.button}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    flex: 1,
                    px: 1.5,
                    py: 0.75,
                    borderRadius: '6px',
                    background: feature.gradient,
                    border: 'none',
                    color: 'white',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                  }}
                >
                  <CheckCircle sx={{ fontSize: '0.875rem' }} />
                  Accept
                </Box>
                <Box
                  component={motion.button}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    px: 1.5,
                    py: 0.75,
                    borderRadius: '6px',
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#d1d5db',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    fontWeight: 500,
                  }}
                >
                  Later
                </Box>
              </Box>
            </Box>
            
            {/* Arrow pointer */}
            <Box
              sx={{
                position: 'absolute',
                bottom: -6,
                right: 16,
                width: 12,
                height: 12,
                background: 'rgba(236, 72, 153, 0.15)',
                border: '1px solid rgba(236, 72, 153, 0.4)',
                borderTop: 'none',
                borderLeft: 'none',
                transform: 'rotate(45deg)',
              }}
            />
          </Box>
        )}

        {/* Typing indicator when processing */}
        {showTyping && !showSuggestion && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            sx={{
              position: 'absolute',
              bottom: 60,
              right: 0,
              px: 1.5,
              py: 1,
              borderRadius: '8px',
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.7rem' }}>
              AI is thinking...
            </Typography>
          </Box>
        )}
      </Box>

      <ActiveIndicator color={feature.color} label="Contextual · Non-intrusive" />
    </Box>
  );
}

// Helper components for reusable patterns

function IconBox({ feature, item, children }: { feature: any; item: number; children: React.ReactNode }) {
  return (
    <Box
      component={motion.div}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: item * 0.3,
      }}
      sx={{
        width: 36,
        height: 36,
        borderRadius: '6px',
        background: feature.gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </Box>
    </Box>
  );
}

function AnimatedBars({ item, widths }: { item: number; widths?: string[] }) {
  const defaultWidths = widths || ['60%', '90%', '60%'];
  
  return (
    <Box sx={{ flex: 1 }}>
      <Box
        component={motion.div}
        animate={{ width: defaultWidths }}
        transition={{ duration: 3, repeat: Infinity, delay: item * 0.2 }}
        sx={{ height: 10, bgcolor: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px', mb: 0.75 }}
      />
      <Box
        component={motion.div}
        animate={{ width: ['40%', '70%', '40%'] }}
        transition={{ duration: 3, repeat: Infinity, delay: item * 0.2 + 0.5 }}
        sx={{ height: 7, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px' }}
      />
    </Box>
  );
}

function ActiveIndicator({ color, label }: { color: string; label?: string }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 2, mt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          bgcolor: color,
        }}
      />
      <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.7rem' }}>
        {label || '120–240ms · Ease-in-out'}
      </Typography>
    </Box>
  );
}
