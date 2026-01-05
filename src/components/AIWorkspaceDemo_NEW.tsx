import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  AutoAwesome,
  Add,
  Inbox,
  Notifications,
  AccountCircle,
  Dashboard,
  FolderOpen,
  Description,
  Assessment,
  Build
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

// AI Workspace Demo - Complete Workspace Build Experience
export function AIWorkspaceDemo({ color, gradient }: { color: string; gradient: string }) {
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
    </Box>
  );
}
