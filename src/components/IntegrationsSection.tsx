import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { Extension } from '@mui/icons-material';
import { motion } from 'motion/react';
import { useThemeColors } from '../hooks/useThemeColors';

export function IntegrationsSection() {
  const colors = useThemeColors();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // Premium curated integration list - only 10 core apps
  const integrations = [
    { 
      name: 'Slack', 
      logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
      category: 'Communication',
    },
    { 
      name: 'Jira', 
      logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
      category: 'Project Management',
    },
    { 
      name: 'Asana', 
      logo: 'https://cdn.worldvectorlogo.com/logos/asana-logo.svg',
      category: 'Project Management',
    },
    { 
      name: 'Monday.com', 
      logo: 'https://cdn.worldvectorlogo.com/logos/monday-1.svg',
      category: 'Project Management',
    },
    { 
      name: 'ClickUp', 
      logo: 'https://cdn.worldvectorlogo.com/logos/clickup.svg',
      category: 'Project Management',
    },
    { 
      name: 'GitHub', 
      logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
      category: 'Development',
    },
    { 
      name: 'Microsoft Teams', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg',
      category: 'Communication',
    },
    { 
      name: 'Dropbox', 
      logo: 'https://cdn.worldvectorlogo.com/logos/dropbox-1.svg',
      category: 'Storage',
    },
    { 
      name: 'Google Workspace', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg',
      category: 'Productivity',
    },
    { 
      name: 'Gmail', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
      category: 'Email',
    },
  ];

  const radius = 320;

  const handleAppClick = (index: number) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 1000);
  };

  return (
    <Box 
      component="section" 
      id="integrations" 
      sx={{ 
        position: 'relative', 
        py: { xs: 12, md: 20 }, 
        overflow: 'hidden',
        bgcolor: colors.isDark ? '#000000' : '#fafafa',
      }}
    >
      {/* Ultra-clean gradient background */}
      <Box 
        sx={{ 
          position: 'absolute', 
          inset: 0, 
          background: colors.isDark 
            ? 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.08) 0%, rgba(0, 0, 0, 0) 60%)'
            : 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.04) 0%, rgba(250, 250, 250, 0) 60%)',
        }} 
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Minimal Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 10, md: 16 }, maxWidth: '600px', mx: 'auto' }}>
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
              Integrations
            </Typography>
          </Box>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2.25rem', md: '3rem' }, 
              color: colors.text.primary, 
              mb: 1.5, 
              fontWeight: 700,
            }}
          >
            Everything connects
            <br />
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #c084fc 0%, #60a5fa 50%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              through Workblox
            </Box>
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: colors.text.secondary, 
              maxWidth: '32rem', 
              mx: 'auto',
              fontSize: '0.875rem',
            }}
          >
            Seamlessly connect with the tools your team already uses. A unified hub for your entire workflow.
          </Typography>
        </Box>

        {/* Premium Integration Ecosystem - Desktop */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '800px',
            mb: 12
          }}
        >
          {/* SVG for elegant connection lines */}
          <Box
            component="svg"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
            <defs>
              {/* Premium gradient for connection lines */}
              <linearGradient id="lineGradientPremium" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={colors.isDark ? "rgba(124, 58, 237, 0.4)" : "rgba(124, 58, 237, 0.3)"} />
                <stop offset="100%" stopColor={colors.isDark ? "rgba(168, 85, 247, 0.2)" : "rgba(168, 85, 247, 0.15)"} />
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Thin elegant connection lines with pulse animation */}
            {integrations.map((integration, index) => {
              const angle = (index / integrations.length) * 2 * Math.PI - Math.PI / 2;
              const x2 = `calc(50% + ${Math.cos(angle) * radius}px)`;
              const y2 = `calc(50% + ${Math.sin(angle) * radius}px)`;
              const isHovered = hoveredIndex === index;
              const isClicked = clickedIndex === index;

              return (
                <g key={`connection-${index}`}>
                  {/* Base line */}
                  <line
                    x1="50%"
                    y1="50%"
                    x2={x2}
                    y2={y2}
                    stroke={isHovered ? (colors.isDark ? 'rgba(168, 85, 247, 0.6)' : 'rgba(124, 58, 237, 0.5)') : 'url(#lineGradientPremium)'}
                    strokeWidth={isHovered ? '1.5' : '1'}
                    opacity={isHovered ? 1 : 0.4}
                    style={{
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                  
                  {/* Pulsing data stream on hover */}
                  {isHovered && (
                    <>
                      <circle r="3" fill={colors.isDark ? '#a78bfa' : '#7c3aed'} opacity="0.8">
                        <animateMotion
                          dur="1.5s"
                          repeatCount="indefinite"
                          path={`M 0 0 L ${Math.cos(angle) * radius} ${Math.sin(angle) * radius}`}
                        />
                      </circle>
                      <circle r="3" fill={colors.isDark ? '#a78bfa' : '#7c3aed'} opacity="0.5">
                        <animateMotion
                          dur="1.5s"
                          repeatCount="indefinite"
                          begin="0.5s"
                          path={`M 0 0 L ${Math.cos(angle) * radius} ${Math.sin(angle) * radius}`}
                        />
                      </circle>
                    </>
                  )}

                  {/* Ripple effect on click */}
                  {isClicked && (
                    <circle 
                      cx={x2} 
                      cy={y2} 
                      r="0" 
                      fill="none" 
                      stroke={colors.isDark ? '#a78bfa' : '#7c3aed'}
                      strokeWidth="2"
                    >
                      <animate
                        attributeName="r"
                        from="0"
                        to="50"
                        dur="1s"
                        begin="0s"
                      />
                      <animate
                        attributeName="opacity"
                        from="1"
                        to="0"
                        dur="1s"
                        begin="0s"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </Box>

          {/* Central Workblox Hub - Premium "Breathing" Effect */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 20,
            }}
          >
            <Box
              component={motion.div}
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                position: 'relative',
                width: 160,
                height: 160,
                borderRadius: '50%',
                background: colors.isDark 
                  ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(168, 85, 247, 0.1))'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 250, 250, 0.9))',
                border: colors.isDark ? '1px solid rgba(168, 85, 247, 0.2)' : '1px solid rgba(124, 58, 237, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: colors.isDark 
                  ? '0 0 60px rgba(124, 58, 237, 0.2), 0 20px 60px rgba(0, 0, 0, 0.3)'
                  : '0 0 40px rgba(124, 58, 237, 0.08), 0 20px 60px rgba(0, 0, 0, 0.08)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Subtle outer glow ring */}
              <Box
                component={motion.div}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  position: 'absolute',
                  inset: -30,
                  borderRadius: '50%',
                  background: colors.isDark 
                    ? 'radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent 70%)'
                    : 'radial-gradient(circle, rgba(124, 58, 237, 0.1), transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              
              {/* Center content */}
              <Box sx={{ textAlign: 'center', zIndex: 1 }}>
                <Extension 
                  sx={{ 
                    fontSize: '3.5rem', 
                    color: colors.isDark ? '#a78bfa' : '#7c3aed',
                    filter: colors.isDark ? 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))' : 'none',
                    mb: 0.5,
                  }} 
                />
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: colors.text.primary, 
                    fontWeight: 500,
                    fontSize: '1rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Workblox
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Orbiting Integration Icons - Smooth Floating */}
          {integrations.map((integration, index) => {
            const angle = (index / integrations.length) * 2 * Math.PI - Math.PI / 2;
            const baseX = Math.cos(angle) * radius;
            const baseY = Math.sin(angle) * radius;
            const isHovered = hoveredIndex === index;

            return (
              <Box
                key={integration.name}
                component={motion.div}
                animate={{
                  x: [baseX - 5, baseX + 5, baseX - 5],
                  y: [baseY - 5, baseY + 5, baseY - 5],
                }}
                transition={{
                  duration: 6 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleAppClick(index)}
              >
                <Box
                  component={motion.div}
                  whileHover={{ 
                    scale: 1.15,
                    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    position: 'relative',
                    width: 80,
                    height: 80,
                    borderRadius: '20px',
                    bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.9)',
                    border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)',
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    cursor: 'pointer',
                    boxShadow: isHovered
                      ? colors.isDark 
                        ? '0 20px 50px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.2)'
                        : '0 20px 50px rgba(124, 58, 237, 0.15), 0 0 30px rgba(124, 58, 237, 0.1)'
                      : colors.isDark 
                        ? '0 8px 24px rgba(0, 0, 0, 0.3)'
                        : '0 8px 24px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {/* Logo */}
                  <Box
                    component="img"
                    src={integration.logo}
                    alt={integration.name}
                    sx={{
                      width: '55%',
                      height: '55%',
                      objectFit: 'contain',
                      filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                      transition: 'filter 0.3s ease',
                    }}
                  />

                  {/* Premium tooltip on hover */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      y: isHovered ? 0 : 10 
                    }}
                    transition={{ duration: 0.2 }}
                    sx={{
                      position: 'absolute',
                      bottom: -55,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      whiteSpace: 'nowrap',
                      bgcolor: colors.isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)',
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      color: colors.text.primary,
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: colors.isDark 
                        ? '0 10px 30px rgba(0, 0, 0, 0.5)'
                        : '0 10px 30px rgba(0, 0, 0, 0.1)',
                      pointerEvents: 'none',
                      zIndex: 100,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {integration.name}
                    <Box
                      component="span"
                      sx={{
                        display: 'block',
                        fontSize: '0.6875rem',
                        color: colors.text.muted,
                        mt: 0.25,
                        opacity: 0.7,
                      }}
                    >
                      Connected via Workblox
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Mobile Grid - Clean & Minimal */}
        <Box 
          sx={{ 
            display: { xs: 'grid', md: 'none' },
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
            mb: 8,
            maxWidth: '400px',
            mx: 'auto',
          }}
        >
          {integrations.map((integration, index) => (
            <Box
              key={integration.name}
              sx={{
                position: 'relative',
                aspectRatio: '1',
                borderRadius: '16px',
                bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.9)',
                border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.06)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                boxShadow: colors.isDark ? '0 4px 16px rgba(0, 0, 0, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.04)',
              }}
            >
              <Box
                component="img"
                src={integration.logo}
                alt={integration.name}
                sx={{
                  width: '50%',
                  height: '50%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Premium Stats - Minimal & Clean */}
        <Box
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3, 
            maxWidth: '800px', 
            mx: 'auto', 
            mt: { xs: 10, md: 0 }
          }}
        >
          {[
            { value: '100+', label: 'Integrations' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: 'Real-time', label: 'Data Sync' }
          ].map((stat) => (
            <Box
              key={stat.label}
              sx={{
                textAlign: 'center',
                p: 3.5,
                borderRadius: '16px',
                bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.6)',
                border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.8)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  fontSize: '1.75rem', 
                  color: colors.text.primary, 
                  mb: 0.5,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: colors.text.secondary, 
                  fontSize: '0.8125rem',
                  letterSpacing: '0.02em',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}