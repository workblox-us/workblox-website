import { motion } from 'motion/react';
import { Box } from '@mui/material';

interface WorkbloxLogoProps {
  size?: number;
  showText?: boolean;
}

export function WorkbloxLogo({ size = 32, showText = true }: WorkbloxLogoProps) {
  const blockSize = size / 3;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      {/* Logo Icon - Inspired by colorful blocks */}
      <Box
        sx={{
          position: 'relative',
          width: size,
          height: size,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: '2px',
        }}
      >
        {/* Top Left - Orange */}
        <Box
          component={motion.div}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          sx={{
            gridColumn: '1 / 2',
            gridRow: '1 / 2',
            background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(251, 146, 60, 0.3)',
          }}
        />

        {/* Top Right - Pink */}
        <Box
          component={motion.div}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          sx={{
            gridColumn: '3 / 4',
            gridRow: '1 / 2',
            background: 'linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(251, 113, 133, 0.3)',
          }}
        />

        {/* Center - Cyan (Main Block) */}
        <Box
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
          sx={{
            gridColumn: '2 / 3',
            gridRow: '2 / 3',
            background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(34, 211, 238, 0.4)',
            zIndex: 2,
          }}
        />

        {/* Bottom Left - Cyan */}
        <Box
          component={motion.div}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          sx={{
            gridColumn: '1 / 2',
            gridRow: '3 / 4',
            background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(34, 211, 238, 0.3)',
          }}
        />

        {/* Bottom Right - Orange */}
        <Box
          component={motion.div}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          sx={{
            gridColumn: '3 / 4',
            gridRow: '3 / 4',
            background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(251, 146, 60, 0.3)',
          }}
        />

        {/* Subtle glow effect */}
        <Box
          component={motion.div}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            inset: -4,
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3), transparent)',
            borderRadius: '8px',
            filter: 'blur(8px)',
            zIndex: -1,
          }}
        />
      </Box>

      {/* Text */}
      {showText && (
        <Box
          component={motion.span}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          sx={{
            fontSize: '1.125rem',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #ffffff 0%, #e5e7eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
          }}
        >
          Workblox
        </Box>
      )}
    </Box>
  );
}