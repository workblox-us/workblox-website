/**
 * Centralized Design Tokens
 * Single source of truth for all design values across the application
 */

export const tokens = {
  // Color Gradients
  gradients: {
    primary: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
    primaryExtended:
      'linear-gradient(90deg, #9333ea 0%, #3b82f6 50%, #06b6d4 100%)',
    textPurple: 'linear-gradient(90deg, #c084fc 0%, #60a5fa 50%, #22d3ee 100%)',
    textPurpleDark:
      'linear-gradient(90deg, #9333ea 0%, #3b82f6 50%, #0891b2 100%)',
    textPurpleAlt: 'linear-gradient(90deg, #c084fc 0%, #8b5cf6 100%)',
    textPurpleAltDark: 'linear-gradient(90deg, #9333ea 0%, #7c3aed 100%)',
    underline: 'linear-gradient(90deg, #9333ea, #3b82f6)',
    success: 'linear-gradient(90deg, #22c55e 0%, #10b981 100%)',
  },

  // Border Radius
  radius: {
    xs: '6px',
    sm: '8px',
    md: '10px',
    lg: '12px',
    xl: '16px',
  },

  // Spacing (multipliers of 8px)
  spacing: {
    xs: 0.5, // 4px
    sm: 1, // 8px
    md: 2, // 16px
    lg: 3, // 24px
    xl: 4, // 32px
    '2xl': 6, // 48px
    '3xl': 8, // 64px
  },

  // Typography Scale
  typography: {
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '0.9375rem', // 15px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '2rem', // 32px
      '4xl': '2.5rem', // 40px
      '5xl': '3rem', // 48px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      snug: 1.3,
      normal: 1.5,
      relaxed: 1.7,
    },
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 40px rgba(139, 92, 246, 0.3)',
    glowLight: '0 0 40px rgba(139, 92, 246, 0.15)',
    button: '0 10px 30px rgba(147, 51, 234, 0.5)',
    buttonLarge: '0 15px 50px rgba(147, 51, 234, 0.5)',
  },

  // Breakpoints (MUI default)
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },

  // Transitions
  transitions: {
    fast: '0.15s',
    normal: '0.2s',
    slow: '0.3s',
    slower: '0.5s',
  },

  // Z-index layers
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
  },
};

/**
 * Get theme-aware colors based on mode
 */
export function getThemeColors(isDark: boolean) {
  return {
    isDark,
    mode: isDark ? 'dark' : 'light',
    bg: {
      primary: isDark ? '#000000' : '#ffffff',
      secondary: isDark ? '#0a0a0a' : '#fafbfc',
      tertiary: isDark ? '#1a1a1a' : '#f4f6f8',
      glass: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)',
      glassHover: isDark
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(255, 255, 255, 1)',
      card: isDark
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))'
        : 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(248, 250, 252, 0.95))',
      cardSolid: isDark ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 1)',
      input: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
      inputAlt: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
    },
    text: {
      primary: isDark ? '#ffffff' : '#0f172a',
      secondary: isDark ? '#9ca3af' : '#64748b',
      muted: isDark ? '#6b7280' : '#94a3b8',
      accent: isDark ? '#22d3ee' : '#0891b2',
      link: isDark ? '#60a5fa' : '#2563eb',
    },
    border: {
      light: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.08)',
      lighter: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.04)',
      accent: isDark ? 'rgba(147, 51, 234, 0.3)' : 'rgba(147, 51, 234, 0.2)',
      input: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      inputAlt: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
      accent: isDark ? 'rgba(181, 51, 234, 0.2)' : 'rgba(147, 51, 234, 0.15)',
    },
  };
}
