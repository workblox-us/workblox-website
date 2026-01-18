import { useTheme } from '@mui/material';

import { getThemeColors } from '../utils/design-tokens';

/**
 * Hook to get theme-aware colors
 * Wraps the centralized design tokens with theme mode detection
 */
export function useThemeColors() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return {
    ...getThemeColors(isDark),
    // Legacy support for components still using old structure
    gradient: {
      background: isDark
        ? 'linear-gradient(to bottom, #000000, rgba(6, 182, 212, 0.05), #000000)'
        : 'linear-gradient(to bottom, #ffffff, rgba(248, 250, 252, 1), #ffffff)',
      purple: isDark
        ? 'linear-gradient(to bottom, #000000, rgba(88, 28, 135, 0.2), #000000)'
        : 'linear-gradient(to bottom, #ffffff, rgba(139, 92, 246, 0.03), #ffffff)',
      radialTop: isDark
        ? 'radial-gradient(ellipse at top, rgba(88, 28, 135, 0.3), transparent)'
        : 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.06), transparent)',
      radialBottomRight: isDark
        ? 'radial-gradient(ellipse at bottom right, rgba(30, 64, 175, 0.2), transparent)'
        : 'radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.05), transparent)',
      hero: isDark
        ? 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15), transparent 60%)'
        : 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08), transparent 70%)',
    },
    grid: {
      background: isDark
        ? 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)'
        : 'linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)',
    },
    badge: {
      bg: isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.08)',
      border: isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)',
      text: isDark ? '#a78bfa' : '#7c3aed',
    },
    chip: {
      bg: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.04)',
      border: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.08)',
    },
    shadow: {
      card: isDark
        ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
        : '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -1px rgba(15, 23, 42, 0.03)',
      hover: isDark
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)'
        : '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 10px 10px -5px rgba(15, 23, 42, 0.04)',
      glow: isDark
        ? '0 0 40px rgba(139, 92, 246, 0.3)'
        : '0 0 40px rgba(139, 92, 246, 0.15)',
    },
    purple: {
      light: isDark ? '#a78bfa' : '#8b5cf6',
      main: isDark ? '#8b5cf6' : '#7c3aed',
      dark: isDark ? '#7c3aed' : '#6d28d9',
    },
    blue: {
      light: isDark ? '#60a5fa' : '#3b82f6',
      main: isDark ? '#3b82f6' : '#2563eb',
      dark: isDark ? '#2563eb' : '#1d4ed8',
    },
  };
}
