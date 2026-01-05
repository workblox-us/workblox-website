import { useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button, IconButton, Portal } from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import { Close, ArrowForward, CheckCircle, PlayArrow } from '@mui/icons-material';
import { useThemeColors } from '../hooks/useThemeColors';

interface BetaModalProps {
  open: boolean;
  onClose: () => void;
}

export function BetaModal({ open, onClose }: BetaModalProps) {
  const colors = useThemeColors();
  const [formState, setFormState] = useState({
    email: '',
    company: '',
    role: '',
    teamSize: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const roles = ['Founder', 'Product', 'Engineering', 'Operations', 'Other'];
  const teamSizes = ['1–10', '11–50', '51–200', '200+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormState({ email: '', company: '', role: '', teamSize: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <Portal>
          <>
            {/* Backdrop with blur */}
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
              sx={{
                position: "fixed",
                inset: 0,
                bgcolor: colors.isDark
                  ? "rgba(0, 0, 0, 0.7)"
                  : "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(12px)",
                zIndex: 9998,
              }}
            />

            {/* Modal Container */}
            <Box
              sx={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                p: 2,
                // keep your pointerEvents trick:
                pointerEvents: "none",
              }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "520px",
                  pointerEvents: "auto",
                }}
              >
                {!submitted ? (
                  // Form State
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: '24px',
                      background: colors.isDark
                        ? 'linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(15, 15, 35, 0.95) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 248, 252, 0.98) 100%)',
                      border: colors.isDark
                        ? '1px solid rgba(139, 92, 246, 0.2)'
                        : '1px solid rgba(139, 92, 246, 0.15)',
                      backdropFilter: 'blur(40px)',
                      boxShadow: colors.isDark
                        ? '0 0 80px rgba(139, 92, 246, 0.3), 0 40px 80px rgba(0, 0, 0, 0.6)'
                        : '0 0 60px rgba(139, 92, 246, 0.15), 0 40px 80px rgba(0, 0, 0, 0.15)',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Gradient glow */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: '200px',
                        background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15), transparent 70%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Close Button */}
                    <IconButton
                      onClick={handleClose}
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        color: colors.text.secondary,
                        zIndex: 10,
                        '&:hover': {
                          bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                          color: colors.text.primary,
                        },
                      }}
                    >
                      <Close />
                    </IconButton>

                    {/* Content */}
                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      sx={{ p: { xs: 4, sm: 5 }, position: 'relative' }}
                    >
                      {/* Header */}
                      <Box sx={{ mb: 4, textAlign: 'center' }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: { xs: '1.75rem', sm: '2rem' },
                            fontWeight: 700,
                            color: colors.text.primary,
                            mb: 1.5,
                            letterSpacing: '-0.02em',
                          }}
                        >
                          Join the Workblox Beta
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: colors.text.secondary,
                            fontSize: '0.9375rem',
                            lineHeight: 1.6,
                          }}
                        >
                          Be among the first to experience the future of work.
                        </Typography>

                        {/* Gradient divider */}
                        <Box
                          sx={{
                            width: '60px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #c084fc 0%, #60a5fa 100%)',
                            borderRadius: '2px',
                            mx: 'auto',
                            mt: 2.5,
                          }}
                        />
                      </Box>

                      {/* Form Fields */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                        {/* Email */}
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{
                              display: 'block',
                              color: colors.text.primary,
                              fontSize: '0.8125rem',
                              fontWeight: 500,
                              mb: 0.75,
                            }}
                          >
                            Work email *
                          </Typography>
                          <TextField
                            fullWidth
                            required
                            type="email"
                            placeholder="you@company.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                '& fieldset': {
                                  borderColor: colors.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.1)',
                                  transition: 'all 0.3s ease',
                                },
                                '&:hover fieldset': {
                                  borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
                                },
                                '&.Mui-focused': {
                                  bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)',
                                  boxShadow: colors.isDark
                                    ? '0 0 0 3px rgba(139, 92, 246, 0.15)'
                                    : '0 0 0 3px rgba(139, 92, 246, 0.1)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.6)',
                                },
                              },
                              '& .MuiOutlinedInput-input': {
                                color: colors.text.primary,
                                fontSize: '0.9375rem',
                                py: 1.5,
                              },
                            }}
                          />
                        </Box>

                        {/* Company */}
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{
                              display: 'block',
                              color: colors.text.primary,
                              fontSize: '0.8125rem',
                              fontWeight: 500,
                              mb: 0.75,
                            }}
                          >
                            Company name
                          </Typography>
                          <TextField
                            fullWidth
                            placeholder="Acme Inc."
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                '& fieldset': {
                                  borderColor: colors.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.1)',
                                  transition: 'all 0.3s ease',
                                },
                                '&:hover fieldset': {
                                  borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
                                },
                                '&.Mui-focused': {
                                  bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)',
                                  boxShadow: colors.isDark
                                    ? '0 0 0 3px rgba(139, 92, 246, 0.15)'
                                    : '0 0 0 3px rgba(139, 92, 246, 0.1)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.6)',
                                },
                              },
                              '& .MuiOutlinedInput-input': {
                                color: colors.text.primary,
                                fontSize: '0.9375rem',
                                py: 1.5,
                              },
                            }}
                          />
                        </Box>

                        {/* Role */}
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{
                              display: 'block',
                              color: colors.text.primary,
                              fontSize: '0.8125rem',
                              fontWeight: 500,
                              mb: 0.75,
                            }}
                          >
                            Role
                          </Typography>
                          <TextField
                            fullWidth
                            select
                            placeholder="Select your role"
                            value={formState.role}
                            onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                '& fieldset': {
                                  borderColor: colors.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.1)',
                                  transition: 'all 0.3s ease',
                                },
                                '&:hover fieldset': {
                                  borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
                                },
                                '&.Mui-focused': {
                                  bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)',
                                  boxShadow: colors.isDark
                                    ? '0 0 0 3px rgba(139, 92, 246, 0.15)'
                                    : '0 0 0 3px rgba(139, 92, 246, 0.1)',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.6)',
                                },
                              },
                              '& .MuiOutlinedInput-input': {
                                color: colors.text.primary,
                                fontSize: '0.9375rem',
                                py: 1.5,
                              },
                            }}
                          >
                            {roles.map((role) => (
                              <MenuItem key={role} value={role}>
                                {role}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Box>

                        {/* Team Size */}
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{
                              display: 'block',
                              color: colors.text.primary,
                              fontSize: '0.8125rem',
                              fontWeight: 500,
                              mb: 0.75,
                            }}
                          >
                            Team size
                          </Typography>
                          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
                            {teamSizes.map((size) => (
                              <Box
                                key={size}
                                onClick={() => setFormState({ ...formState, teamSize: size })}
                                sx={{
                                  py: 1.5,
                                  px: 1.5,
                                  borderRadius: '10px',
                                  textAlign: 'center',
                                  fontSize: '0.875rem',
                                  fontWeight: 500,
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  bgcolor: formState.teamSize === size
                                    ? colors.isDark ? 'rgba(139, 92, 246, 0.2)' : 'rgba(139, 92, 246, 0.15)'
                                    : colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                                  border: formState.teamSize === size
                                    ? colors.isDark ? '1px solid rgba(139, 92, 246, 0.5)' : '1px solid rgba(139, 92, 246, 0.6)'
                                    : colors.isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.1)',
                                  color: formState.teamSize === size
                                    ? colors.isDark ? '#c084fc' : '#7c3aed'
                                    : colors.text.secondary,
                                  '&:hover': {
                                    bgcolor: colors.isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.08)',
                                    borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
                                    transform: 'translateY(-1px)',
                                  },
                                }}
                              >
                                {size}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>

                      {/* Primary CTA */}
                      <Button
                        type="submit"
                        fullWidth
                        endIcon={<ArrowForward />}
                        sx={{
                          mt: 4,
                          py: 1.75,
                          borderRadius: '12px',
                          background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                          color: 'white',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(90deg, #a855f7 0%, #60a5fa 100%)',
                            boxShadow: '0 0 40px rgba(147, 51, 234, 0.6)',
                            transform: 'translateY(-2px)',
                          },
                          '&:active': {
                            transform: 'translateY(0)',
                          },
                        }}
                      >
                        Join Beta Waitlist
                      </Button>

                      {/* Secondary Actions */}
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 3 }}>
                        <Button
                          startIcon={<PlayArrow />}
                          sx={{
                            color: colors.isDark ? '#c084fc' : '#7c3aed',
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                            textTransform: 'none',
                            '&:hover': {
                              bgcolor: colors.isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.08)',
                            },
                          }}
                        >
                          Watch Preview
                        </Button>
                        <Button
                          sx={{
                            color: colors.text.muted,
                            fontSize: '0.8125rem',
                            fontWeight: 400,
                            textTransform: 'none',
                            '&:hover': {
                              bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                            },
                          }}
                        >
                          No thanks, just updates
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  // Success State
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    sx={{
                      position: 'relative',
                      borderRadius: '24px',
                      background: colors.isDark
                        ? 'linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(15, 15, 35, 0.95) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 248, 252, 0.98) 100%)',
                      border: colors.isDark
                        ? '1px solid rgba(139, 92, 246, 0.2)'
                        : '1px solid rgba(139, 92, 246, 0.15)',
                      backdropFilter: 'blur(40px)',
                      boxShadow: colors.isDark
                        ? '0 0 80px rgba(139, 92, 246, 0.3), 0 40px 80px rgba(0, 0, 0, 0.6)'
                        : '0 0 60px rgba(139, 92, 246, 0.15), 0 40px 80px rgba(0, 0, 0, 0.15)',
                      p: { xs: 4, sm: 6 },
                      textAlign: 'center',
                    }}
                  >
                    {/* Close Button */}
                    <IconButton
                      onClick={handleClose}
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        color: colors.text.secondary,
                        '&:hover': {
                          bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                          color: colors.text.primary,
                        },
                      }}
                    >
                      <Close />
                    </IconButton>

                    {/* Success Icon */}
                    <Box
                      component={motion.div}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
                      sx={{ mb: 3 }}
                    >
                      <CheckCircle
                        sx={{
                          fontSize: '4rem',
                          color: '#22c55e',
                          filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.4))',
                        }}
                      />
                    </Box>

                    {/* Success Message */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.75rem', sm: '2rem' },
                        fontWeight: 700,
                        color: colors.text.primary,
                        mb: 2,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      You're on the list! 🎉
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.text.secondary,
                        fontSize: '0.9375rem',
                        lineHeight: 1.7,
                        maxWidth: '380px',
                        mx: 'auto',
                        mb: 1,
                      }}
                    >
                      Thanks for joining the Workblox beta waitlist.
                      <br />
                      We're onboarding users in waves.
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'inline-block',
                        color: colors.isDark ? '#c084fc' : '#7c3aed',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        px: 2,
                        py: 0.75,
                        borderRadius: '20px',
                        bgcolor: colors.isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.08)',
                        border: colors.isDark ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(139, 92, 246, 0.15)',
                        mt: 2,
                        mb: 4,
                      }}
                    >
                      Expected access: Q1 2025
                    </Typography>

                    {/* Follow-up CTAs */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Button
                        variant="outlined"
                        sx={{
                          py: 1.5,
                          borderRadius: '12px',
                          borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
                          color: colors.isDark ? '#c084fc' : '#7c3aed',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.6)',
                            bgcolor: colors.isDark ? 'rgba(139, 92, 246, 0.05)' : 'rgba(139, 92, 246, 0.03)',
                          },
                        }}
                      >
                        Invite teammates
                      </Button>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                          fullWidth
                          variant="text"
                          sx={{
                            color: colors.text.secondary,
                            fontSize: '0.8125rem',
                            fontWeight: 400,
                            textTransform: 'none',
                            '&:hover': {
                              bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                            },
                          }}
                        >
                          Follow Workblox
                        </Button>
                        <Button
                          fullWidth
                          variant="text"
                          startIcon={<PlayArrow />}
                          sx={{
                            color: colors.text.secondary,
                            fontSize: '0.8125rem',
                            fontWeight: 400,
                            textTransform: 'none',
                            '&:hover': {
                              bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
                            },
                          }}
                        >
                          Watch preview
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </>
        </Portal>
      )}
    </AnimatePresence>
  );
}
