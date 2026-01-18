import { Box, BoxProps } from '@mui/material';
import { useThemeColors } from '@/hooks/useThemeColors';
import { tokens } from '@/utils/design-tokens';
import { ReactNode } from 'react';

interface GlassCardProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
  blur?: boolean;
  hover?: boolean;
  padding?: number | { xs?: number; sm?: number; md?: number };
}

/**
 * Reusable glass morphism card component
 * Dark glass panel with optional blur and hover effects
 */
export function GlassCard({ 
  children, 
  blur = true,
  hover = true,
  padding = 3,
  sx,
  ...props 
}: GlassCardProps) {
  const colors = useThemeColors();

  return (
    <Box
      {...props}
      sx={{
        p: padding,
        borderRadius: tokens.radius.lg,
        background: colors.bg.card,
        border: `1px solid ${colors.border.light}`,
        backdropFilter: blur ? 'blur(20px)' : 'none',
        boxShadow: colors.shadow.card,
        transition: `all ${tokens.transitions.slow} ease`,
        ...(hover && {
          '&:hover': {
            boxShadow: colors.shadow.hover,
            transform: 'translateY(-4px)',
            border: `1px solid ${colors.isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.12)'}`,
          },
        }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
