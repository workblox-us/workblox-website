import { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, Divider, Link, Avatar } from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import { Close, ArrowForward, Visibility, VisibilityOff, CheckCircle, Rocket } from '@mui/icons-material';
import { useThemeColors } from '../hooks/useThemeColors';

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
  onSignInSuccess?: () => void;
}

export function SignInModal({ open, onClose, onSignInSuccess }: SignInModalProps) {
  const colors = useThemeColors();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [signInSuccess, setSignInSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError && validateEmail(value)) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (passwordError && value.length >= 6) {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    let isValid = true;
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    }

    if (!isValid) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setSignInSuccess(true);
    
    // After showing success, redirect to dashboard
    setTimeout(() => {
      if (onSignInSuccess) {
        onSignInSuccess();
      }
    }, 2000);
  };

  const handleSocialSignIn = async (provider: 'google' | 'microsoft') => {
    setIsLoading(true);
    // Simulate OAuth flow
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setSignInSuccess(true);
    setEmail(`demo@${provider}.com`);
    
    // After showing success, redirect to dashboard
    setTimeout(() => {
      if (onSignInSuccess) {
        onSignInSuccess();
      }
    }, 2000);
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
    setIsLoading(false);
    setShowPassword(false);
    setSignInSuccess(false);
    onClose();
  };

  const isFormValid = email && password && validateEmail(email) && password.length >= 6;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop with blur */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={signInSuccess ? undefined : handleClose}
            sx={{
              position: 'fixed',
              inset: 0,
              bgcolor: colors.isDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(12px)',
              zIndex: 9998,
            }}
          />

          {/* Modal Container */}
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              p: 2,
              pointerEvents: 'none',
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                pointerEvents: 'auto',
              }}
            >
              {!signInSuccess ? (
                // Sign In Form State
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
                  <Box sx={{ p: { xs: 4, sm: 5 }, position: 'relative' }}>
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
                        Welcome back
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: colors.text.secondary,
                          fontSize: '0.9375rem',
                          lineHeight: 1.6,
                        }}
                      >
                        Sign in to access your workspace and integrations.
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

                    {/* Social Sign In Buttons */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                      <Button
                        fullWidth
                        onClick={() => handleSocialSignIn('google')}
                        disabled={isLoading}
                        sx={{
                          py: 1.5,
                          borderRadius: '12px',
                          bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                          border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.1)',
                          color: colors.text.primary,
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          textTransform: 'none',
                          justifyContent: 'flex-start',
                          pl: 2,
                          gap: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                            borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
                            transform: 'translateY(-1px)',
                          },
                          '&:disabled': {
                            opacity: 0.5,
                            cursor: 'not-allowed',
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src="https://www.google.com/favicon.ico"
                          alt="Google"
                          sx={{ width: 18, height: 18 }}
                        />
                        Continue with Google
                      </Button>

                      <Button
                        fullWidth
                        onClick={() => handleSocialSignIn('microsoft')}
                        disabled={isLoading}
                        sx={{
                          py: 1.5,
                          borderRadius: '12px',
                          bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                          border: colors.isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.1)',
                          color: colors.text.primary,
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          textTransform: 'none',
                          justifyContent: 'flex-start',
                          pl: 2,
                          gap: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                            borderColor: colors.isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
                            transform: 'translateY(-1px)',
                          },
                          '&:disabled': {
                            opacity: 0.5,
                            cursor: 'not-allowed',
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src="https://www.microsoft.com/favicon.ico"
                          alt="Microsoft"
                          sx={{ width: 18, height: 18 }}
                        />
                        Continue with Microsoft
                      </Button>
                    </Box>

                    {/* Divider */}
                    <Divider sx={{ my: 3 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: colors.text.muted,
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          px: 2,
                        }}
                      >
                        or sign in with email
                      </Typography>
                    </Divider>

                    {/* Email & Password Form */}
                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
                    >
                      {/* Email Field */}
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
                          type="email"
                          placeholder="you@company.com"
                          value={email}
                          onChange={handleEmailChange}
                          error={!!emailError}
                          helperText={emailError}
                          disabled={isLoading}
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
                              '&.Mui-error fieldset': {
                                borderColor: '#ef4444',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              color: colors.text.primary,
                              fontSize: '0.9375rem',
                              py: 1.5,
                            },
                            '& .MuiFormHelperText-root': {
                              fontSize: '0.75rem',
                              mt: 0.5,
                            },
                          }}
                        />
                      </Box>

                      {/* Password Field */}
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.75 }}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: colors.text.primary,
                              fontSize: '0.8125rem',
                              fontWeight: 500,
                            }}
                          >
                            Password *
                          </Typography>
                          <Link
                            href="#"
                            sx={{
                              color: colors.isDark ? '#c084fc' : '#7c3aed',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              textDecoration: 'none',
                              '&:hover': {
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            Forgot password?
                          </Link>
                        </Box>
                        <TextField
                          fullWidth
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          value={password}
                          onChange={handlePasswordChange}
                          error={!!passwordError}
                          helperText={passwordError}
                          disabled={isLoading}
                          InputProps={{
                            endAdornment: (
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                                sx={{
                                  color: colors.text.secondary,
                                  '&:hover': {
                                    color: colors.text.primary,
                                  },
                                }}
                              >
                                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                              </IconButton>
                            ),
                          }}
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
                              '&.Mui-error fieldset': {
                                borderColor: '#ef4444',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              color: colors.text.primary,
                              fontSize: '0.9375rem',
                              py: 1.5,
                            },
                            '& .MuiFormHelperText-root': {
                              fontSize: '0.75rem',
                              mt: 0.5,
                            },
                          }}
                        />
                      </Box>

                      {/* Sign In Button */}
                      <Button
                        type="submit"
                        fullWidth
                        disabled={!isFormValid || isLoading}
                        endIcon={isLoading ? null : <ArrowForward />}
                        sx={{
                          mt: 1.5,
                          py: 1.75,
                          borderRadius: '12px',
                          background: isFormValid 
                            ? 'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)'
                            : colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                          color: isFormValid ? 'white' : colors.text.muted,
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          boxShadow: isFormValid ? '0 0 30px rgba(147, 51, 234, 0.4)' : 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: isFormValid
                              ? 'linear-gradient(90deg, #a855f7 0%, #60a5fa 100%)'
                              : colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                            boxShadow: isFormValid ? '0 0 40px rgba(147, 51, 234, 0.6)' : 'none',
                            transform: isFormValid ? 'translateY(-2px)' : 'none',
                          },
                          '&:active': {
                            transform: isFormValid ? 'translateY(0)' : 'none',
                          },
                          '&:disabled': {
                            color: colors.text.muted,
                            cursor: 'not-allowed',
                          },
                        }}
                      >
                        {isLoading ? (
                          <Box
                            component={motion.div}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            sx={{
                              width: 20,
                              height: 20,
                              border: '2px solid rgba(255, 255, 255, 0.3)',
                              borderTopColor: 'white',
                              borderRadius: '50%',
                            }}
                          />
                        ) : (
                          'Sign In'
                        )}
                      </Button>
                    </Box>

                    {/* Footer Actions */}
                    <Box sx={{ mt: 4, textAlign: 'center' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.text.secondary,
                          fontSize: '0.875rem',
                        }}
                      >
                        New to Workblox?{' '}
                        <Link
                          href="#"
                          sx={{
                            color: colors.isDark ? '#c084fc' : '#7c3aed',
                            fontWeight: 600,
                            textDecoration: 'none',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          Join Beta
                        </Link>
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          color: colors.text.muted,
                          fontSize: '0.75rem',
                          mt: 2,
                        }}
                      >
                        Enterprise?{' '}
                        <Link
                          href="#"
                          sx={{
                            color: colors.text.secondary,
                            textDecoration: 'none',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          Sign in with SSO
                        </Link>
                      </Typography>
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
                    Welcome back! 👋
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
                    Successfully signed in as
                    <br />
                    <strong>{email}</strong>
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
                      mb: 3,
                    }}
                  >
                    Redirecting to your workspace...
                  </Typography>

                  {/* Loading Progress */}
                  <Box sx={{ width: '100%', maxWidth: '200px', mx: 'auto', mt: 3 }}>
                    <Box
                      component={motion.div}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, ease: 'easeInOut' }}
                      sx={{
                        height: '4px',
                        borderRadius: '2px',
                        background: 'linear-gradient(90deg, #9333ea 0%, #3b82f6 50%, #06b6d4 100%)',
                        boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)',
                      }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </>
      )}
    </AnimatePresence>
  );
}
