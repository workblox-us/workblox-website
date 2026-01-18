import { Button, ButtonProps } from '@mui/material';
import { tokens } from '@/utils/design-tokens';
import { ReactNode } from 'react';

interface GradientButtonProps extends Omit<ButtonProps, 'variant'> {
  children: ReactNode;
  fullWidth?: boolean;
  gradient?: 'primary' | 'primaryExtended';
  size?: 'small' | 'medium' | 'large';
}

/**
 * Reusable gradient button component
 * Primary CTA button with purple-to-blue gradient
 */
export function GradientButton({
  children,
  fullWidth = false,
  gradient = 'primary',
  size = 'medium',
  sx,
  ...props
}: GradientButtonProps) {
  const sizeStyles = {
    small: {
      px: { xs: 1.25, sm: 2 },
      py: { xs: 0.5, sm: 0.75 },
      fontSize: {
        xs: tokens.typography.fontSize.xs,
        sm: tokens.typography.fontSize.sm,
      },
    },
    medium: {
      px: { xs: 2, sm: 3, md: 4 },
      py: { xs: 1.5, sm: 1.75 },
      fontSize: {
        xs: tokens.typography.fontSize.sm,
        sm: tokens.typography.fontSize.base,
        md: tokens.typography.fontSize.md,
      },
    },
    large: {
      px: { xs: 3, sm: 4 },
      py: { xs: 1.75, sm: 2 },
      fontSize: {
        xs: tokens.typography.fontSize.base,
        sm: tokens.typography.fontSize.lg,
      },
    },
  };

  return (
    <Button
      variant='contained'
      {...props}
      sx={{
        width: fullWidth ? '100%' : 'auto',
        ...sizeStyles[size],
        borderRadius: tokens.radius.lg,
        background: tokens.gradients[gradient],
        color: 'white',
        fontWeight: tokens.typography.fontWeight.semibold,
        textTransform: 'none',
        boxShadow: tokens.shadows.md,
        '&:hover': {
          boxShadow: tokens.shadows.button,
          transform: 'translateY(-2px)',
        },
        transition: `all ${tokens.transitions.slow} ease`,
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
