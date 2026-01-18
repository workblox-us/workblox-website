import { Box, Typography, BoxProps } from '@mui/material';
import { useThemeColors } from '@/hooks/useThemeColors';
import { tokens } from '@/utils/design-tokens';
import { ReactNode } from 'react';  

interface BadgeProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
  icon?: ReactNode;
  size?: 'small' | 'medium';
}

/**
 * Reusable badge component for labels and tags
 */
export function Badge({
  children,
  icon,
  size = 'medium',
  sx,
  ...props
}: BadgeProps) {
  const colors = useThemeColors();

  const sizeStyles = {
    small: {
      px: 1.5,
      py: 0.5,
      fontSize: tokens.typography.fontSize.xs,
      gap: 0.5,
    },
    medium: {
      px: 2,
      py: 0.75,
      fontSize: tokens.typography.fontSize.sm,
      gap: 1,
    },
  };

  return (
    <Box
      {...props}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        ...sizeStyles[size],
        borderRadius: tokens.radius.sm,
        bgcolor: colors.badge.bg,
        border: `1px solid ${colors.badge.border}`,
        color: colors.badge.text,
        fontWeight: tokens.typography.fontWeight.medium,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        ...sx,
      }}
    >
      {icon}
      <Typography
        component='span'
        sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}
      >
        {children}
      </Typography>
    </Box>
  );
}
