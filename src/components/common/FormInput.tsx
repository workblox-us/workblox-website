import { TextField, TextFieldProps } from '@mui/material';
import { useThemeColors } from '@/hooks/useThemeColors';
import { tokens } from '@/utils/design-tokens';

type FormInputProps = Omit<TextFieldProps, 'variant'>;

/**
 * Reusable form input component
 * Standardized text field with consistent theming
 */
export function FormInput(props: FormInputProps) {
  const colors = useThemeColors();

  return (
    <TextField
      fullWidth
      variant='outlined'
      {...props}
      sx={{
        '& .MuiOutlinedInput-root': {
          bgcolor: colors.bg.input,
          borderRadius: tokens.radius.lg,
          transition: `all ${tokens.transitions.normal}`,
          '& fieldset': {
            borderColor: colors.border.input,
          },
          '&:hover fieldset': {
            borderColor: colors.border.inputAlt,
          },
          '&.Mui-focused': {
            bgcolor: colors.bg.input,
            boxShadow: colors.isDark
              ? `0 0 0 3px rgba(139, 92, 246, 0.2)`
              : `0 0 0 3px rgba(139, 92, 246, 0.1)`,
          },
          '&.Mui-focused fieldset': {
            borderColor: colors.isDark ? '#a78bfa' : '#8b5cf6',
            borderWidth: '1px',
          },
        },
        '& .MuiInputLabel-root': {
          color: colors.text.secondary,
          '&.Mui-focused': {
            color: colors.isDark ? '#a78bfa' : '#8b5cf6',
          },
        },
        '& .MuiInputBase-input': {
          color: colors.text.primary,
        },
        ...props.sx,
      }}
    />
  );
}
