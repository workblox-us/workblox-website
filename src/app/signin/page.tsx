'use client';
import {
  ArrowBack,
  BarChart,
  Chat,
  Check,
  Dashboard,
  Timeline,
  Timer,
  Visibility,
  VisibilityOff,
  Widgets,
} from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { useThemeColors } from '@/hooks/useThemeColors';

import { WorkbloxLogo } from '@/components/WorkbloxLogo';

interface SignInPageProps {
  onBack: () => void;
  onSignInSuccess?: () => void;
}

type PageStep =
  | 'login'
  | 'forgot-password'
  | 'reset-verification'
  | 'new-password'
  | 'waitlist'
  | 'waitlist-success';

export default function SignInPage({
  onBack = () => null,
  onSignInSuccess = () => null,
}: SignInPageProps) {
  const colors = useThemeColors();
  const [step, setStep] = useState<PageStep>('login');

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Forgot password state
  const [resetEmail, setResetEmail] = useState('');
  const [resetOtpCode, setResetOtpCode] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  // Waitlist state
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email: loginEmail, password: loginPassword });
    if (onSignInSuccess) {
      onSignInSuccess();
    }
  };

  const handleResetOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...resetOtpCode];
      newOtp[index] = value;
      setResetOtpCode(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`reset-otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleResetOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !resetOtpCode[index] && index > 0) {
      const prevInput = document.getElementById(`reset-otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset requested for:', resetEmail);
    setStep('reset-verification');
  };

  const handleResetVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset OTP verified:', resetOtpCode.join(''));
    setStep('new-password');
  };

  const handleNewPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password reset completed');
    setResetEmail('');
    setResetOtpCode(['', '', '', '', '', '']);
    setNewPassword('');
    setConfirmNewPassword('');
    setStep('login');
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist submission:', {
      name: waitlistName,
      email: waitlistEmail,
    });
    setStep('waitlist-success');
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: colors.isDark
          ? 'linear-gradient(135deg, #0a0a0f 0%, #1a0b2e 50%, #0f0a1e 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f1f5f9 100%)',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: colors.isDark
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        sx={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '700px',
          height: '700px',
          background: colors.isDark
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Left Side - Form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: { xs: 3, md: 8 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Back Button */}
        <Box
          sx={{
            position: 'absolute',
            top: { xs: 20, md: 40 },
            left: { xs: 20, md: 40 },
          }}
        >
          <IconButton
            onClick={onBack}
            sx={{
              color: colors.text,
              bgcolor: colors.isDark
                ? 'rgba(255, 255, 255, 0.05)'
                : 'rgba(0, 0, 0, 0.05)',
              border: colors.isDark
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                bgcolor: colors.isDark
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <ArrowBack />
          </IconButton>
        </Box>

        {/* Form Container */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          sx={{
            width: '100%',
            maxWidth: '500px',
            bgcolor: colors.isDark
              ? 'rgba(15, 15, 25, 0.8)'
              : 'rgba(255, 255, 255, 0.9)',
            borderRadius: '24px',
            border: colors.isDark
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: colors.isDark
              ? '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(168, 85, 247, 0.1)'
              : '0 20px 60px rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(20px)',
            p: { xs: 4, md: 6 },
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Box sx={{ width: 48, height: 48 }}>
              <WorkbloxLogo />
            </Box>
          </Box>

          <AnimatePresence mode='wait'>
            {/* Step 1: Login */}
            {step === 'login' && (
              <Box
                component={motion.div}
                key='login'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    color: colors.text,
                    fontWeight: 700,
                    mb: 1,
                    fontSize: '2rem',
                  }}
                >
                  Welcome back
                </Typography>
                <Typography
                  sx={{ color: colors.textSecondary, mb: 4, fontSize: '1rem' }}
                >
                  Sign in to your workspace
                </Typography>

                <Box component='form' onSubmit={handleLogin}>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      sx={{
                        color: colors.text,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Email address
                    </Typography>
                    <TextField
                      fullWidth
                      type='email'
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder='you@company.com'
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: colors.isDark
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(255, 255, 255, 0.8)',
                          borderRadius: '12px',
                          color: colors.text,
                          '& fieldset': {
                            borderColor: colors.isDark
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.2)',
                            borderWidth: '2px',
                          },
                          '&:hover fieldset': {
                            borderColor: '#a855f7',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#a855f7',
                            boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.1)',
                          },
                        },
                        '& .MuiOutlinedInput-input::placeholder': {
                          color: colors.textSecondary,
                          opacity: 0.6,
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography
                      sx={{
                        color: colors.text,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Password
                    </Typography>
                    <TextField
                      fullWidth
                      type={showLoginPassword ? 'text' : 'password'}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder='Enter your password'
                      required
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={() =>
                              setShowLoginPassword(!showLoginPassword)
                            }
                            edge='end'
                            size='small'
                            sx={{ color: colors.textSecondary }}
                          >
                            {showLoginPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: colors.isDark
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(255, 255, 255, 0.8)',
                          borderRadius: '12px',
                          color: colors.text,
                          '& fieldset': {
                            borderColor: colors.isDark
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.2)',
                            borderWidth: '2px',
                          },
                          '&:hover fieldset': {
                            borderColor: '#a855f7',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#a855f7',
                            boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.1)',
                          },
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ textAlign: 'right', mb: 4 }}>
                    <Typography
                      component='span'
                      onClick={() => setStep('forgot-password')}
                      sx={{
                        color: '#a855f7',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Forgot password?
                    </Typography>
                  </Box>

                  <Button
                    type='submit'
                    fullWidth
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    sx={{
                      background:
                        'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                      color: '#ffffff',
                      py: 1.75,
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      mb: 3,
                      boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)',
                      '&:hover': {
                        background:
                          'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
                        boxShadow: '0 12px 32px rgba(168, 85, 247, 0.4)',
                      },
                    }}
                  >
                    Sign in
                  </Button>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{
                        color: colors.textSecondary,
                        fontSize: '0.9375rem',
                      }}
                    >
                      Don't have an account?{' '}
                      <Typography
                        component='span'
                        onClick={() => setStep('waitlist')}
                        sx={{
                          color: '#a855f7',
                          cursor: 'pointer',
                          fontWeight: 600,
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Get Early Access
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}

            {/* Forgot Password Step 1: Email Input */}
            {step === 'forgot-password' && (
              <Box
                component={motion.div}
                key='forgot-password'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    color: colors.text,
                    fontWeight: 700,
                    mb: 1,
                    fontSize: '2rem',
                  }}
                >
                  Reset Password
                </Typography>
                <Typography
                  sx={{ color: colors.textSecondary, mb: 4, fontSize: '1rem' }}
                >
                  Enter your email to receive a verification code
                </Typography>

                <Box component='form' onSubmit={handleForgotPasswordSubmit}>
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      sx={{
                        color: colors.text,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Email address
                    </Typography>
                    <TextField
                      fullWidth
                      type='email'
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder='you@company.com'
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: colors.isDark
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(255, 255, 255, 0.8)',
                          borderRadius: '12px',
                          color: colors.text,
                          '& fieldset': {
                            borderColor: colors.isDark
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.2)',
                            borderWidth: '2px',
                          },
                          '&:hover fieldset': {
                            borderColor: '#a855f7',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#a855f7',
                            boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.1)',
                          },
                        },
                        '& .MuiOutlinedInput-input::placeholder': {
                          color: colors.textSecondary,
                          opacity: 0.6,
                        },
                      }}
                    />
                  </Box>

                  <Button
                    type='submit'
                    fullWidth
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    sx={{
                      background:
                        'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                      color: '#ffffff',
                      py: 1.75,
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      mb: 3,
                      boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)',
                      '&:hover': {
                        background:
                          'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
                        boxShadow: '0 12px 32px rgba(168, 85, 247, 0.4)',
                      },
                    }}
                  >
                    Send Reset Code
                  </Button>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{
                        color: colors.textSecondary,
                        fontSize: '0.9375rem',
                      }}
                    >
                      Remember your password?{' '}
                      <Typography
                        component='span'
                        onClick={() => setStep('login')}
                        sx={{
                          color: '#a855f7',
                          cursor: 'pointer',
                          fontWeight: 600,
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Sign in
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}

            {/* Forgot Password Step 2: Verification Code */}
            {step === 'reset-verification' && (
              <Box
                component={motion.div}
                key='reset-verification'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    color: colors.text,
                    fontWeight: 700,
                    mb: 1,
                    fontSize: '2rem',
                  }}
                >
                  Verify Your Email
                </Typography>
                <Typography
                  sx={{ color: colors.textSecondary, mb: 1, fontSize: '1rem' }}
                >
                  We sent a code to
                </Typography>
                <Typography
                  sx={{
                    color: '#a855f7',
                    mb: 4,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  {resetEmail}
                </Typography>

                <Box component='form' onSubmit={handleResetVerificationSubmit}>
                  <Typography
                    sx={{
                      color: colors.text,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Enter 6-digit code
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
                    {resetOtpCode.map((digit, index) => (
                      <TextField
                        key={index}
                        id={`reset-otp-${index}`}
                        value={digit}
                        onChange={(e) =>
                          handleResetOtpChange(index, e.target.value)
                        }
                        onKeyDown={(e) => handleResetOtpKeyDown(index, e)}
                        inputProps={{
                          maxLength: 1,
                          style: {
                            textAlign: 'center',
                            fontSize: '1.75rem',
                            fontWeight: 700,
                            color: colors.text,
                          },
                        }}
                        sx={{
                          flex: 1,
                          '& .MuiOutlinedInput-root': {
                            bgcolor: colors.isDark
                              ? 'rgba(255, 255, 255, 0.05)'
                              : 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '12px',
                            height: '64px',
                            '& fieldset': {
                              borderColor: colors.isDark
                                ? 'rgba(255, 255, 255, 0.1)'
                                : 'rgba(0, 0, 0, 0.2)',
                              borderWidth: '2px',
                            },
                            '&:hover fieldset': {
                              borderColor: '#a855f7',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#a855f7',
                              boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.1)',
                            },
                            ...(digit && {
                              '& fieldset': {
                                borderColor: '#22c55e',
                              },
                            }),
                          },
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                      sx={{
                        color: colors.textSecondary,
                        fontSize: '0.875rem',
                        mb: 1,
                      }}
                    >
                      Didn't receive the code?
                    </Typography>
                    <Typography
                      component='span'
                      onClick={() => console.log('Resend reset code')}
                      sx={{
                        color: '#a855f7',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Resend code
                    </Typography>
                  </Box>

                  <Button
                    type='submit'
                    fullWidth
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={resetOtpCode.join('').length !== 6}
                    sx={{
                      background:
                        'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                      color: '#ffffff',
                      py: 1.75,
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      mb: 3,
                      boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)',
                      '&:hover': {
                        background:
                          'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
                        boxShadow: '0 12px 32px rgba(168, 85, 247, 0.4)',
                      },
                      '&:disabled': {
                        background: colors.isDark
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.1)',
                        color: colors.textSecondary,
                        boxShadow: 'none',
                      },
                    }}
                  >
                    Verify Code
                  </Button>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      component='span'
                      onClick={() => setStep('login')}
                      sx={{
                        color: '#a855f7',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      ← Back to login
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}

            {/* Forgot Password Step 3: New Password */}
            {step === 'new-password' && (
              <Box
                component={motion.div}
                key='new-password'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    color: colors.text,
                    fontWeight: 700,
                    mb: 1,
                    fontSize: '2rem',
                  }}
                >
                  Create New Password
                </Typography>
                <Typography
                  sx={{ color: colors.textSecondary, mb: 4, fontSize: '1rem' }}
                >
                  Choose a strong password for your account
                </Typography>

                <Box component='form' onSubmit={handleNewPasswordSubmit}>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      sx={{
                        color: colors.text,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      New Password
                    </Typography>
                    <TextField
                      fullWidth
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder='Enter new password'
                      required
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            edge='end'
                            size='small'
                            sx={{ color: colors.textSecondary }}
                          >
                            {showNewPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: colors.isDark
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(255, 255, 255, 0.8)',
                          borderRadius: '12px',
                          color: colors.text,
                          '& fieldset': {
                            borderColor: colors.isDark
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.2)',
                            borderWidth: '2px',
                          },
                          '&:hover fieldset': {
                            borderColor: '#a855f7',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#a855f7',
                            boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.1)',
                          },
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        color: colors.textSecondary,
                        fontSize: '0.8125rem',
                        mt: 1.5,
                      }}
                    >
                      Must be at least 8 characters with letters and numbers
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography
                      sx={{
                        color: colors.text,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Confirm New Password
                    </Typography>
                    <TextField
                      fullWidth
                      type={showConfirmNewPassword ? 'text' : 'password'}
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder='Confirm new password'
                      required
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={() =>
                              setShowConfirmNewPassword(!showConfirmNewPassword)
                            }
                            edge='end'
                            size='small'
                            sx={{ color: colors.textSecondary }}
                          >
                            {showConfirmNewPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: colors.isDark
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(255, 255, 255, 0.8)',
                          borderRadius: '12px',
                          color: colors.text,
                          '& fieldset': {
                            borderColor: colors.isDark
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.2)',
                            borderWidth: '2px',
                          },
                          '&:hover fieldset': {
                            borderColor: '#a855f7',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#a855f7',
                            boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.1)',
                          },
                          ...(newPassword &&
                            confirmNewPassword &&
                            newPassword === confirmNewPassword && {
                              '& fieldset': {
                                borderColor: '#22c55e',
                              },
                            }),
                          ...(confirmNewPassword &&
                            newPassword !== confirmNewPassword && {
                              '& fieldset': {
                                borderColor: '#ef4444',
                              },
                            }),
                        },
                      }}
                    />
                    {confirmNewPassword &&
                      newPassword !== confirmNewPassword && (
                        <Typography
                          sx={{
                            color: '#ef4444',
                            fontSize: '0.8125rem',
                            mt: 1,
                          }}
                        >
                          Passwords do not match
                        </Typography>
                      )}
                  </Box>

                  <Button
                    type='submit'
                    fullWidth
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={
                      !newPassword ||
                      !confirmNewPassword ||
                      newPassword !== confirmNewPassword
                    }
                    sx={{
                      background:
                        'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                      color: '#ffffff',
                      py: 1.75,
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      mb: 3,
                      boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)',
                      '&:hover': {
                        background:
                          'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
                        boxShadow: '0 12px 32px rgba(168, 85, 247, 0.4)',
                      },
                      '&:disabled': {
                        background: colors.isDark
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.1)',
                        color: colors.textSecondary,
                        boxShadow: 'none',
                      },
                    }}
                  >
                    Reset Password
                  </Button>
                </Box>
              </Box>
            )}

            {/* Join Waitlist */}
            {step === 'waitlist' && (
              <Box
                component={motion.div}
                key='waitlist'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography
                  variant='h4'
                  sx={{
                    color: colors.text,
                    fontWeight: 700,
                    mb: 1,
                    fontSize: '2rem',
                  }}
                >
                  Get Early Access
                </Typography>
                <Typography
                  sx={{ color: colors.textSecondary, mb: 4, fontSize: '1rem' }}
                >
                  Be among the first to experience Workblox
                </Typography>

                <Box component='form' onSubmit={handleWaitlistSubmit}>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      sx={{
                        color: colors.text,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Your Name
                    </Typography>
                    <TextField
                      fullWidth
                      value={waitlistName}
                      onChange={(e) => setWaitlistName(e.target.value)}
                      placeholder='John Doe'
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: colors.isDark
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(255, 255, 255, 0.8)',
                          borderRadius: '12px',
                          color: colors.text,
                          '& fieldset': {
                            borderColor: colors.isDark
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.2)',
                            borderWidth: '2px',
                          },
                          '&:hover fieldset': { borderColor: '#a855f7' },
                          '&.Mui-focused fieldset': {
                            borderColor: '#a855f7',
                            boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.1)',
                          },
                        },
                        '& .MuiOutlinedInput-input::placeholder': {
                          color: colors.textSecondary,
                          opacity: 0.6,
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography
                      sx={{
                        color: colors.text,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Email Address
                    </Typography>
                    <TextField
                      fullWidth
                      type='email'
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      placeholder='you@company.com'
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: colors.isDark
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(255, 255, 255, 0.8)',
                          borderRadius: '12px',
                          color: colors.text,
                          '& fieldset': {
                            borderColor: colors.isDark
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.2)',
                            borderWidth: '2px',
                          },
                          '&:hover fieldset': { borderColor: '#a855f7' },
                          '&.Mui-focused fieldset': {
                            borderColor: '#a855f7',
                            boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.1)',
                          },
                        },
                        '& .MuiOutlinedInput-input::placeholder': {
                          color: colors.textSecondary,
                          opacity: 0.6,
                        },
                      }}
                    />
                  </Box>

                  <Button
                    type='submit'
                    fullWidth
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    sx={{
                      background:
                        'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                      color: '#ffffff',
                      py: 1.75,
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      mb: 3,
                      boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)',
                      '&:hover': {
                        background:
                          'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
                        boxShadow: '0 12px 32px rgba(168, 85, 247, 0.4)',
                      },
                    }}
                  >
                    Get Early Access
                  </Button>

                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{
                        color: colors.textSecondary,
                        fontSize: '0.9375rem',
                      }}
                    >
                      Already have an account?{' '}
                      <Typography
                        component='span'
                        onClick={() => setStep('login')}
                        sx={{
                          color: '#a855f7',
                          cursor: 'pointer',
                          fontWeight: 600,
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Sign in
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}

            {/* Waitlist Success */}
            {step === 'waitlist-success' && (
              <Box
                component={motion.div}
                key='waitlist-success'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    py: 4,
                  }}
                >
                  <Box
                    component={motion.div}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background:
                        'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 2rem',
                      boxShadow: '0 8px 32px rgba(168, 85, 247, 0.4)',
                    }}
                  >
                    <Check sx={{ fontSize: '3rem', color: '#ffffff' }} />
                  </Box>

                  <Typography
                    variant='h4'
                    sx={{
                      color: colors.text,
                      fontWeight: 700,
                      mb: 2,
                      fontSize: '2rem',
                    }}
                  >
                    You're on the list!
                  </Typography>

                  <Typography
                    sx={{
                      color: colors.textSecondary,
                      mb: 1,
                      fontSize: '1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Thank you for joining the Workblox waitlist.
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.textSecondary,
                      mb: 4,
                      fontSize: '1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    We'll notify you at{' '}
                    <strong style={{ color: '#a855f7' }}>
                      {waitlistEmail}
                    </strong>{' '}
                    when we launch.
                  </Typography>

                  <Box
                    sx={{
                      bgcolor: colors.isDark
                        ? 'rgba(168, 85, 247, 0.1)'
                        : 'rgba(168, 85, 247, 0.05)',
                      border: colors.isDark
                        ? '1px solid rgba(168, 85, 247, 0.3)'
                        : '1px solid rgba(168, 85, 247, 0.2)',
                      borderRadius: '12px',
                      p: 3,
                      mb: 4,
                    }}
                  >
                    <Typography
                      sx={{
                        color: colors.text,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      What's next?
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.textSecondary,
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                      }}
                    >
                      • We'll send you early access when we launch
                      <br />
                      • Get exclusive updates on new features
                      <br />• Join our community of early adopters
                    </Typography>
                  </Box>

                  <Button
                    fullWidth
                    onClick={onBack}
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    sx={{
                      background:
                        'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                      color: '#ffffff',
                      py: 1.75,
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)',
                      '&:hover': {
                        background:
                          'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
                        boxShadow: '0 12px 32px rgba(168, 85, 247, 0.4)',
                      },
                    }}
                  >
                    Back to Home
                  </Button>
                </Box>
              </Box>
            )}
          </AnimatePresence>
        </Box>
      </Box>

      {/* Right Side - Interactive Animations */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flex: 1,
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Grid Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: colors.isDark
              ? 'linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)'
              : 'linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.5,
          }}
        />

        {/* Geometric Shape 1 - Top Right */}
        <Box
          component={motion.div}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '200px',
            height: '200px',
            borderRadius: '30%',
            background: colors.isDark
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
            border: colors.isDark
              ? '1px solid rgba(168, 85, 247, 0.2)'
              : '1px solid rgba(168, 85, 247, 0.1)',
            filter: 'blur(2px)',
          }}
        />

        {/* Geometric Shape 2 - Bottom Left */}
        <Box
          component={motion.div}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          sx={{
            position: 'absolute',
            bottom: '8%',
            left: '8%',
            width: '250px',
            height: '250px',
            borderRadius: '40%',
            background: colors.isDark
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
            border: colors.isDark
              ? '1px solid rgba(59, 130, 246, 0.2)'
              : '1px solid rgba(59, 130, 246, 0.1)',
            filter: 'blur(2px)',
          }}
        />

        {/* Pulsing Orbs */}
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          sx={{
            position: 'absolute',
            top: '35%',
            left: '30%',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: colors.isDark
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
            filter: 'blur(4px)',
          }}
        />
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          sx={{
            position: 'absolute',
            bottom: '30%',
            right: '35%',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: colors.isDark
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
            filter: 'blur(4px)',
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <Box
            key={particle.id}
            component={motion.div}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            sx={{
              position: 'absolute',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: colors.isDark
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
            }}
          />
        ))}

        {/* Central glow orb */}
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          sx={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: colors.isDark
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Floating Feature Cards */}
        {/* Dashboard Card */}
        <Box
          component={motion.div}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          whileHover={{ scale: 1.05, y: -25 }}
          transition={{ duration: 6, repeat: Infinity, delay: 0 }}
          sx={{
            position: 'absolute',
            top: '15%',
            left: '20%',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              bgcolor: colors.isDark
                ? 'rgba(15, 15, 25, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              borderRadius: '18px',
              border: colors.isDark
                ? '1px solid rgba(168, 85, 247, 0.4)'
                : '1px solid rgba(168, 85, 247, 0.3)',
              backdropFilter: 'blur(30px)',
              p: 2.5,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              boxShadow:
                '0 12px 40px rgba(168, 85, 247, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow:
                  '0 20px 60px rgba(168, 85, 247, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: colors.isDark
                  ? '1px solid rgba(168, 85, 247, 0.6)'
                  : '1px solid rgba(168, 85, 247, 0.5)',
              },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Dashboard sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: colors.text,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  mb: 0.5,
                }}
              >
                Dashboard
              </Typography>
              <Typography
                sx={{ color: colors.textSecondary, fontSize: '0.75rem' }}
              >
                Real-time insights
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Chat Card */}
        <Box
          component={motion.div}
          animate={{
            y: [0, -25, 0],
            rotate: [0, -5, 0],
          }}
          whileHover={{ scale: 1.05, y: -30 }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
          sx={{
            position: 'absolute',
            top: '25%',
            right: '15%',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              bgcolor: colors.isDark
                ? 'rgba(15, 15, 25, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              borderRadius: '18px',
              border: colors.isDark
                ? '1px solid rgba(59, 130, 246, 0.4)'
                : '1px solid rgba(59, 130, 246, 0.3)',
              backdropFilter: 'blur(30px)',
              p: 2.5,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              boxShadow:
                '0 12px 40px rgba(59, 130, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow:
                  '0 20px 60px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: colors.isDark
                  ? '1px solid rgba(59, 130, 246, 0.6)'
                  : '1px solid rgba(59, 130, 246, 0.5)',
              },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Chat sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: colors.text,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  mb: 0.5,
                }}
              >
                Team Chat
              </Typography>
              <Typography
                sx={{ color: colors.textSecondary, fontSize: '0.75rem' }}
              >
                Seamless collaboration
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Timer Card */}
        <Box
          component={motion.div}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          whileHover={{ scale: 1.05, y: -20 }}
          transition={{ duration: 5.5, repeat: Infinity, delay: 1 }}
          sx={{
            position: 'absolute',
            top: '55%',
            left: '15%',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              bgcolor: colors.isDark
                ? 'rgba(15, 15, 25, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              borderRadius: '18px',
              border: colors.isDark
                ? '1px solid rgba(236, 72, 153, 0.4)'
                : '1px solid rgba(236, 72, 153, 0.3)',
              backdropFilter: 'blur(30px)',
              p: 2.5,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              boxShadow:
                '0 12px 40px rgba(236, 72, 153, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow:
                  '0 20px 60px rgba(236, 72, 153, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: colors.isDark
                  ? '1px solid rgba(236, 72, 153, 0.6)'
                  : '1px solid rgba(236, 72, 153, 0.5)',
              },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Timer sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: colors.text,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  mb: 0.5,
                }}
              >
                Time Tracking
              </Typography>
              <Typography
                sx={{ color: colors.textSecondary, fontSize: '0.75rem' }}
              >
                Smart automation
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Analytics Card */}
        <Box
          component={motion.div}
          animate={{
            y: [0, -18, 0],
            rotate: [0, -4, 0],
          }}
          whileHover={{ scale: 1.05, y: -23 }}
          transition={{ duration: 6.5, repeat: Infinity, delay: 1.5 }}
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '20%',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              bgcolor: colors.isDark
                ? 'rgba(15, 15, 25, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              borderRadius: '18px',
              border: colors.isDark
                ? '1px solid rgba(34, 197, 94, 0.4)'
                : '1px solid rgba(34, 197, 94, 0.3)',
              backdropFilter: 'blur(30px)',
              p: 2.5,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              boxShadow:
                '0 12px 40px rgba(34, 197, 94, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow:
                  '0 20px 60px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: colors.isDark
                  ? '1px solid rgba(34, 197, 94, 0.6)'
                  : '1px solid rgba(34, 197, 94, 0.5)',
              },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BarChart sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: colors.text,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  mb: 0.5,
                }}
              >
                Analytics
              </Typography>
              <Typography
                sx={{ color: colors.textSecondary, fontSize: '0.75rem' }}
              >
                Data-driven decisions
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Widgets Card */}
        <Box
          component={motion.div}
          animate={{
            y: [0, -22, 0],
            rotate: [0, 6, 0],
          }}
          whileHover={{ scale: 1.05, y: -27 }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          sx={{
            position: 'absolute',
            top: '45%',
            right: '25%',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              bgcolor: colors.isDark
                ? 'rgba(15, 15, 25, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              borderRadius: '18px',
              border: colors.isDark
                ? '1px solid rgba(245, 158, 11, 0.4)'
                : '1px solid rgba(245, 158, 11, 0.3)',
              backdropFilter: 'blur(30px)',
              p: 2.5,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              boxShadow:
                '0 12px 40px rgba(245, 158, 11, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow:
                  '0 20px 60px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: colors.isDark
                  ? '1px solid rgba(245, 158, 11, 0.6)'
                  : '1px solid rgba(245, 158, 11, 0.5)',
              },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Widgets sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: colors.text,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  mb: 0.5,
                }}
              >
                Integrations
              </Typography>
              <Typography
                sx={{ color: colors.textSecondary, fontSize: '0.75rem' }}
              >
                Connect everything
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Timeline Card */}
        <Box
          component={motion.div}
          animate={{
            y: [0, -20, 0],
            rotate: [0, -3, 0],
          }}
          whileHover={{ scale: 1.05, y: -25 }}
          transition={{ duration: 6.8, repeat: Infinity, delay: 2.5 }}
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '25%',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              bgcolor: colors.isDark
                ? 'rgba(15, 15, 25, 0.95)'
                : 'rgba(255, 255, 255, 0.95)',
              borderRadius: '18px',
              border: colors.isDark
                ? '1px solid rgba(139, 92, 246, 0.4)'
                : '1px solid rgba(139, 92, 246, 0.3)',
              backdropFilter: 'blur(30px)',
              p: 2.5,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              boxShadow:
                '0 12px 40px rgba(139, 92, 246, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow:
                  '0 20px 60px rgba(139, 92, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                border: colors.isDark
                  ? '1px solid rgba(139, 92, 246, 0.6)'
                  : '1px solid rgba(139, 92, 246, 0.5)',
              },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Timeline sx={{ color: '#ffffff', fontSize: '1.5rem' }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: colors.text,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  mb: 0.5,
                }}
              >
                Timeline
              </Typography>
              <Typography
                sx={{ color: colors.textSecondary, fontSize: '0.75rem' }}
              >
                Track progress
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
