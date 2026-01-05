import { Box, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';
import { 
  Home, 
  Article, 
  ViewList, 
  ArrowForward,
  KeyboardBackspace,
} from '@mui/icons-material';
import { useThemeColors } from '../hooks/useThemeColors';

export function FlowDiagram() {
  const colors = useThemeColors();

  const nodeStyle = {
    p: 3,
    borderRadius: '12px',
    bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
    border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.15)',
    textAlign: 'center' as const,
    minWidth: '180px',
  };

  const arrowStyle = {
    color: colors.isDark ? '#a5b4fc' : '#6366f1',
    fontSize: '2rem',
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        p: 3,
        borderRadius: '16px',
        bgcolor: colors.isDark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(24px)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        maxWidth: '400px',
        zIndex: 1000,
      }}
    >
      <Typography 
        sx={{ 
          color: colors.text.primary, 
          fontWeight: 700,
          mb: 3,
          fontSize: '1.125rem',
        }}
      >
        🗺️ Navigation Flow
      </Typography>

      {/* Landing Page */}
      <Box sx={nodeStyle}>
        <Home sx={{ fontSize: '2rem', color: colors.isDark ? '#a5b4fc' : '#6366f1', mb: 1 }} />
        <Typography sx={{ color: colors.text.primary, fontWeight: 600, fontSize: '0.875rem' }}>
          Landing Page
        </Typography>
        <Typography sx={{ color: colors.text.secondary, fontSize: '0.75rem', mt: 0.5 }}>
          Articles Preview
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
        <ArrowForward sx={arrowStyle} />
      </Box>

      {/* Articles Hub */}
      <Box sx={nodeStyle}>
        <ViewList sx={{ fontSize: '2rem', color: colors.isDark ? '#60a5fa' : '#3b82f6', mb: 1 }} />
        <Typography sx={{ color: colors.text.primary, fontWeight: 600, fontSize: '0.875rem' }}>
          Articles Hub
        </Typography>
        <Typography sx={{ color: colors.text.secondary, fontSize: '0.75rem', mt: 0.5 }}>
          Browse, Search, Filter
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
        <ArrowForward sx={arrowStyle} />
      </Box>

      {/* Article Detail */}
      <Box sx={nodeStyle}>
        <Article sx={{ fontSize: '2rem', color: colors.isDark ? '#34d399' : '#10b981', mb: 1 }} />
        <Typography sx={{ color: colors.text.primary, fontWeight: 600, fontSize: '0.875rem' }}>
          Article Detail
        </Typography>
        <Typography sx={{ color: colors.text.secondary, fontSize: '0.75rem', mt: 0.5 }}>
          Read, Like, Share
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
        <KeyboardBackspace sx={arrowStyle} />
      </Box>

      <Box 
        sx={{ 
          mt: 3, 
          pt: 3, 
          borderTop: colors.isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography sx={{ color: colors.text.secondary, fontSize: '0.75rem', mb: 1 }}>
          <strong style={{ color: colors.text.primary }}>✨ Features:</strong>
        </Typography>
        <Typography sx={{ color: colors.text.secondary, fontSize: '0.7rem', mb: 0.5 }}>
          • Real-time search & filtering
        </Typography>
        <Typography sx={{ color: colors.text.secondary, fontSize: '0.7rem', mb: 0.5 }}>
          • Reading progress tracking
        </Typography>
        <Typography sx={{ color: colors.text.secondary, fontSize: '0.7rem', mb: 0.5 }}>
          • Like, bookmark & share
        </Typography>
        <Typography sx={{ color: colors.text.secondary, fontSize: '0.7rem' }}>
          • Smart related articles
        </Typography>
      </Box>

      <Typography 
        sx={{ 
          color: colors.text.secondary, 
          fontSize: '0.7rem',
          mt: 2,
          textAlign: 'center',
          fontStyle: 'italic',
        }}
      >
        See /FLOW_DOCUMENTATION.md for details
      </Typography>
    </Box>
  );
}
