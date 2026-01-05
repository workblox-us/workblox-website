import { useTheme } from '@mui/material';

export function useThemeColors() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return {
    isDark,
    bg: {
      primary: isDark ? '#000000' : '#ffffff',
      secondary: isDark ? '#0a0a0a' : '#f8f9fa',
      tertiary: isDark ? '#1a1a1a' : '#f1f3f5',
      glass: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
      glassHover: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.95)',
      card: isDark 
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))' 
        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
      cardSolid: isDark ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    },
    text: {
      primary: isDark ? '#ffffff' : '#0f172a',
      secondary: isDark ? '#9ca3af' : '#475569',
      muted: isDark ? '#6b7280' : '#64748b',
      accent: '#22d3ee',
      link: isDark ? '#60a5fa' : '#2563eb',
    },
    border: {
      light: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
      lighter: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
      accent: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(6, 182, 212, 0.25)',
      card: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)',
    },
    gradient: {
      background: isDark
        ? 'linear-gradient(to bottom, #000000, rgba(6, 182, 212, 0.05), #000000)'
        : 'linear-gradient(to bottom, #ffffff, #f8f9fa, #ffffff)',
      purple: isDark
        ? 'linear-gradient(to bottom, #000000, rgba(88, 28, 135, 0.2), #000000)'
        : 'linear-gradient(to bottom, #fefefe, rgba(168, 85, 247, 0.02), #fefefe)',
      radialTop: isDark
        ? 'radial-gradient(ellipse at top, rgba(88, 28, 135, 0.3), transparent)'
        : 'radial-gradient(ellipse at top, rgba(168, 85, 247, 0.04), transparent)',
      radialBottomRight: isDark
        ? 'radial-gradient(ellipse at bottom right, rgba(30, 64, 175, 0.2), transparent)'
        : 'radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.04), transparent)',
    },
    grid: {
      background: isDark
        ? 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)'
        : 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
    },
    badge: {
      bg: isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.08)',
      border: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(6, 182, 212, 0.3)',
      text: isDark ? '#22d3ee' : '#0891b2',
    },
    chip: {
      bg: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
      border: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
    },
    shadow: {
      card: isDark 
        ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
        : '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
      hover: isDark
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)'
        : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  };
}