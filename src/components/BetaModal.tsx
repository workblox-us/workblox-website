'use client';
import { ArrowForward, CheckCircle, Close } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useMailChimpForm } from 'use-mailchimp-form';

import { useThemeColors } from '@/hooks/useThemeColors';

interface BetaModalProps {
  open: boolean;
  onClose: () => void;
}
const mailchimpKey =
  'https://workblox.us10.list-manage.com/subscribe/post?u=b8163170f1ff79ffb74ebeb99&amp;id=458262d21c&amp;f_id=0024e1e3f0';
const surveyData = {
  features: {
    analytics: false,
    embedded_surveys: false,
    add_html_select_element_feature_to_surveys: false,
  },
  userId: 'b8163170f1ff79ffb74ebeb99',
  surveyId: 'b833a1368b',
  emailId: '*|UNIQID|*',
  attribution: true,
  surveyData: {
    id: 2856,
    listId: 855001,
    hostedUrl:
      'https://us10.list-manage.com/survey?u=b8163170f1ff79ffb74ebeb99&id=b833a1368b',
    hostedStatus: 'on',
    hostedStyles: {
      assetUrl: '',
      assetId: '',
      assetFilename: '',
      backgroundColor: '',
      buttonColor: '',
      buttonTextColor: '',
      submitButtonText: '',
      logoEnabled: false,
      description: '',
      confirmationMessage: '',
      closedMessage: '',
      requiredResponseMessage: '',
      logoUrl: null,
      footerBrandingEnabled: true,
    },
    sections: [
      {
        id: 180,
        type: 'question',
        text: null,
        options: {
          question_id: 9048,
          origin_id: 'yo00h',
          sub_type: null,
          video_id: null,
          video_type: null,
          image_url: null,
          image_alt_text: null,
        },
        question: {
          id: 9048,
          response: 'pickMany',
          inquiry: '<p>What are your biggest pain points now?</p>',
          isRequired: false,
          properties: {
            options: [
              {
                label: 'Too many tools',
                value: '7n7eg',
              },
              {
                label: 'Context switching',
                value: 'dexqc',
              },
              {
                label: 'Missing updates',
                value: '5dt3s',
              },
              {
                label: 'Manual tracking',
                value: 'uaja2',
              },
              {
                label: 'Unclear priorities',
                value: '33lik',
              },
              {
                label: 'Team alignment',
                value: 'e14xz',
              },
              {
                label: 'Progress visibility',
                value: 'v7x9u',
              },
              {
                label: 'Time management',
                value: 'bf0ys',
              },
            ],
            hasOther: true,
            otherLabel: 'Other',
            lowRangeValue: 0,
            highRangeValue: 10,
            rangePresentation: 'number',
            lowRangeLabel: '',
            highRangeLabel: '',
            placeholderLabel: '',
            subscribeCheckboxEnabled: false,
            subscribeCheckboxLabel: '',
          },
          merge_field: null,
        },
      },
      {
        id: 181,
        type: 'question',
        text: null,
        options: {
          question_id: 9049,
          origin_id: 'kzng3',
          sub_type: null,
          video_id: null,
          video_type: null,
          image_url: null,
          image_alt_text: null,
        },
        question: {
          id: 9049,
          response: 'pickMany',
          inquiry: '<p>How do you plan to use Workblox?</p>',
          isRequired: false,
          properties: {
            options: [
              {
                label: 'Project management',
                value: 'qmc78',
              },
              {
                label: 'Team collaboration',
                value: '6aoic',
              },
              {
                label: 'Client projects',
                value: 'rr94c',
              },
              {
                label: 'Recurring processes',
                value: 'x1gjw',
              },
              {
                label: 'Product launches',
                value: 'ibtxy',
              },
              {
                label: 'Sprint planning',
                value: 'tbvtx',
              },
              {
                label: 'Daily standups',
                value: '790c8',
              },
              {
                label: 'Remote work',
                value: 'erngo',
              },
              {
                label: 'Agency workflow',
                value: 'iygkz',
              },
            ],
            hasOther: true,
            otherLabel: 'Other',
            lowRangeValue: 0,
            highRangeValue: 10,
            rangePresentation: 'number',
            lowRangeLabel: '',
            highRangeLabel: '',
            placeholderLabel: '',
            subscribeCheckboxEnabled: false,
            subscribeCheckboxLabel: '',
          },
          merge_field: null,
        },
      },
    ],
  },
  openTracking: 'https://admin.mailchimp.com/lists/surveys/track/open',
  completeTracking: 'https://admin.mailchimp.com/lists/surveys/track/complete',
};

interface FormInputs {
  FNAME: string;
  EMAIL: string;
}

interface SurveyResponse {
  keys: string[];
  freeform: string;
}

export function BetaModal({ open, onClose }: BetaModalProps) {
  const {
    loading,
    success,
    handleSubmit: handleMailchimpSubmit,
    error,
    message,
  } = useMailChimpForm(mailchimpKey);
  const { register, handleSubmit } = useForm<FormInputs>();
  const colors = useThemeColors();
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Survey state
  const [responses, setResponses] = useState<Record<string, SurveyResponse>>(
    {}
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = (data: any) => {
    setSubscribedEmail(data.EMAIL);
    handleMailchimpSubmit(data);
  };

  useEffect(() => {
    if (!loading && success) {
      setSubmitted(true);
    }
  }, [loading, success]);

  const handleClose = () => {
    setSubmitted(false);
    setSubscribedEmail('');
    setResponses({});
    onClose();
  };

  const toggleOption = (questionId: number, value: string) => {
    setResponses((prev) => {
      const current = prev[questionId] || { keys: [], freeform: '' };
      const newKeys = current.keys.includes(value)
        ? current.keys.filter((k) => k !== value)
        : [...current.keys, value];
      return {
        ...prev,
        [questionId]: { ...current, keys: newKeys },
      };
    });
  };

  const handleSurveySubmit = async () => {
    const url = '/api/survey/submit';
    const payload = {
      questions: Object.entries(responses).reduce((acc, [id, data]) => {
        acc[id] = { answer: data };
        return acc;
      }, {} as Record<string, { answer: SurveyResponse }>),
      email: subscribedEmail,
    };

    try {
      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      handleClose();
    } catch (err) {
      console.error('Survey submission failed', err);
      // Still close the modal as the user joined the waitlist
      handleClose();
    }
  };

  const modalContent = (
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
            onClick={handleClose}
            sx={{
              position: 'fixed',
              inset: 0,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: colors.isDark
                ? 'rgba(0, 0, 0, 0.7)'
                : 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(12px)',
              zIndex: 9998,
            }}
          />

          {/* Modal Container */}
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
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
              {!submitted ? (
                // Form State - Ultra Light
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
                      background:
                        'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15), transparent 70%)',
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
                        bgcolor: colors.isDark
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.05)',
                        color: colors.text.primary,
                      },
                    }}
                  >
                    <Close />
                  </IconButton>

                  {/* Content */}
                  <Box
                    component='form'
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ p: { xs: 4, sm: 5 }, position: 'relative' }}
                  >
                    {/* Header */}
                    <Box sx={{ mb: 4, textAlign: 'center' }}>
                      <Typography
                        variant='h4'
                        sx={{
                          fontSize: { xs: '1.75rem', sm: '2rem' },
                          fontWeight: 700,
                          color: colors.text.primary,
                          mb: 1.5,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        Get Early Access
                      </Typography>
                      <Typography
                        variant='body1'
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
                          background:
                            'linear-gradient(90deg, #c084fc 0%, #60a5fa 100%)',
                          borderRadius: '2px',
                          mx: 'auto',
                          mt: 2.5,
                        }}
                      />
                      {error && (
                        <Typography
                          variant='caption'
                          sx={{ color: 'error.main' }}
                        >
                          {message}
                        </Typography>
                      )}
                    </Box>

                    {/* Form Fields - Only Name and Email */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2.5,
                      }}
                    >
                      {/* Name */}
                      <Box>
                        <Typography
                          variant='caption'
                          sx={{
                            display: 'block',
                            color: colors.text.primary,
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                            mb: 0.75,
                          }}
                        >
                          Full name *
                        </Typography>
                        <TextField
                          fullWidth
                          type='text'
                          placeholder='Jane Smith'
                          {...register('FNAME')}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              bgcolor: colors.isDark
                                ? 'rgba(255, 255, 255, 0.03)'
                                : 'rgba(0, 0, 0, 0.02)',
                              borderRadius: '12px',
                              transition: 'all 0.3s ease',
                              '& fieldset': {
                                borderColor: colors.isDark
                                  ? 'rgba(255, 255, 255, 0.08)'
                                  : 'rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                              },
                              '&:hover fieldset': {
                                borderColor: colors.isDark
                                  ? 'rgba(139, 92, 246, 0.3)'
                                  : 'rgba(139, 92, 246, 0.4)',
                              },
                              '&.Mui-focused': {
                                bgcolor: colors.isDark
                                  ? 'rgba(255, 255, 255, 0.05)'
                                  : 'rgba(255, 255, 255, 0.9)',
                                boxShadow: colors.isDark
                                  ? '0 0 0 3px rgba(139, 92, 246, 0.15)'
                                  : '0 0 0 3px rgba(139, 92, 246, 0.1)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: colors.isDark
                                  ? 'rgba(139, 92, 246, 0.5)'
                                  : 'rgba(139, 92, 246, 0.6)',
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

                      {/* Email */}
                      <Box>
                        <Typography
                          variant='caption'
                          sx={{
                            display: 'block',
                            color: colors.text.primary,
                            fontSize: '0.8125rem',
                            fontWeight: 500,
                            mb: 0.75,
                          }}
                        >
                          Email address *
                        </Typography>
                        <TextField
                          fullWidth
                          required
                          type='email'
                          placeholder='you@company.com'
                          {...register('EMAIL')}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              bgcolor: colors.isDark
                                ? 'rgba(255, 255, 255, 0.03)'
                                : 'rgba(0, 0, 0, 0.02)',
                              borderRadius: '12px',
                              transition: 'all 0.3s ease',
                              '& fieldset': {
                                borderColor: colors.isDark
                                  ? 'rgba(255, 255, 255, 0.08)'
                                  : 'rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                              },
                              '&:hover fieldset': {
                                borderColor: colors.isDark
                                  ? 'rgba(139, 92, 246, 0.3)'
                                  : 'rgba(139, 92, 246, 0.4)',
                              },
                              '&.Mui-focused': {
                                bgcolor: colors.isDark
                                  ? 'rgba(255, 255, 255, 0.05)'
                                  : 'rgba(255, 255, 255, 0.9)',
                                boxShadow: colors.isDark
                                  ? '0 0 0 3px rgba(139, 92, 246, 0.15)'
                                  : '0 0 0 3px rgba(139, 92, 246, 0.1)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: colors.isDark
                                  ? 'rgba(139, 92, 246, 0.5)'
                                  : 'rgba(139, 92, 246, 0.6)',
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
                    </Box>

                    {/* Primary CTA */}
                    <Button
                      type='submit'
                      fullWidth
                      endIcon={<ArrowForward />}
                      sx={{
                        mt: 4,
                        py: 1.75,
                        borderRadius: '12px',
                        background:
                          'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                        color: 'white',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background:
                            'linear-gradient(90deg, #a855f7 0%, #60a5fa 100%)',
                          boxShadow: '0 0 40px rgba(147, 51, 234, 0.6)',
                          transform: 'translateY(-2px)',
                        },
                        '&:active': {
                          transform: 'translateY(0)',
                        },
                      }}
                    >
                      Join Waitlist
                    </Button>

                    {/* Footer Note */}
                    <Typography
                      variant='caption'
                      sx={{
                        display: 'block',
                        textAlign: 'center',
                        color: colors.text.muted,
                        fontSize: '0.75rem',
                        mt: 3,
                        lineHeight: 1.5,
                      }}
                    >
                      No spam. Early access invites go out in waves.
                    </Typography>
                  </Box>
                </Box>
              ) : (
                // Success State with Optional Survey
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
                    p: { xs: 4, sm: 5 },
                    maxHeight: '90vh',
                    overflowY: 'auto',
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
                        bgcolor: colors.isDark
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.05)',
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
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    sx={{ mb: 3, textAlign: 'center' }}
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
                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography
                      variant='h4'
                      sx={{
                        fontSize: { xs: '1.75rem', sm: '2rem' },
                        fontWeight: 700,
                        color: colors.text.primary,
                        mb: 2,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      You're in.
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{
                        color: colors.text.secondary,
                        fontSize: '0.9375rem',
                        lineHeight: 1.7,
                        maxWidth: '380px',
                        mx: 'auto',
                        mb: 2.5,
                      }}
                    >
                      Thanks for joining early access. We onboard in waves to
                      ensure quality.
                    </Typography>
                    <Typography
                      variant='caption'
                      sx={{
                        display: 'inline-block',
                        color: colors.text.secondary,
                        fontSize: '0.8125rem',
                        fontWeight: 400,
                        px: 2,
                        py: 0.75,
                        borderRadius: '20px',
                        bgcolor: colors.isDark
                          ? 'rgba(255, 255, 255, 0.03)'
                          : 'rgba(0, 0, 0, 0.03)',
                        border: colors.isDark
                          ? '1px solid rgba(255, 255, 255, 0.08)'
                          : '1px solid rgba(0, 0, 0, 0.08)',
                        boxShadow: colors.isDark
                          ? '0 0 15px rgba(139, 92, 246, 0.15)'
                          : '0 0 10px rgba(139, 92, 246, 0.08)',
                      }}
                    >
                      Rolling invites, starting soon.
                    </Typography>
                  </Box>

                  {/* Divider */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '1px',
                      background: colors.isDark
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(0, 0, 0, 0.08)',
                      my: 4,
                    }}
                  />

                  {/* Optional Survey Section */}
                  <Box>
                    <Typography
                      variant='body2'
                      sx={{
                        color: colors.isDark
                          ? 'rgba(255, 255, 255, 0.6)'
                          : 'rgba(0, 0, 0, 0.55)',
                        fontSize: '0.875rem',
                        textAlign: 'center',
                        mb: 2,
                        fontWeight: 400,
                      }}
                    >
                      Optional, helps us personalize your early access.
                    </Typography>

                    {/* Partnership Line */}
                    <Typography
                      variant='caption'
                      sx={{
                        display: 'block',
                        color: colors.isDark
                          ? 'rgba(255, 255, 255, 0.5)'
                          : 'rgba(0, 0, 0, 0.45)',
                        fontSize: '0.75rem',
                        textAlign: 'center',
                        mb: 4,
                        fontWeight: 400,
                        '& a': {
                          color: colors.isDark
                            ? 'rgba(139, 92, 246, 0.85)'
                            : 'rgba(139, 92, 246, 0.9)',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            textDecoration: 'underline',
                            color: colors.isDark ? '#a78bfa' : '#8b5cf6',
                          },
                        },
                      }}
                    >
                      Piloting or partnership interest? Email{' '}
                      <a href='mailto:partnerships@workblox.ai'>
                        partnerships@workblox.ai
                      </a>
                      .
                    </Typography>

                    {/* Dynamic Survey Questions */}
                    {surveyData.surveyData.sections.map((section) => {
                      if (section.type !== 'question') return null;
                      const q = section.question;
                      const currentResponse = responses[q.id] || {
                        keys: [],
                        freeform: '',
                      };

                      return (
                        <Box key={q.id} sx={{ mb: 4 }}>
                          <Typography
                            variant='h6'
                            sx={{
                              color: colors.text.primary,
                              fontSize: '1rem',
                              fontWeight: 600,
                              mb: 2,
                            }}
                          >
                            <span
                              dangerouslySetInnerHTML={{ __html: q.inquiry }}
                            />
                          </Typography>
                          <Box
                            sx={{
                              display: 'grid',
                              gridTemplateColumns: {
                                xs: 'repeat(2, 1fr)',
                                sm: 'repeat(3, 1fr)',
                              },
                              gap: 1,
                            }}
                          >
                            {q.properties.options.map((opt) => (
                              <Chip
                                key={opt.value}
                                label={opt.label}
                                onClick={() => toggleOption(q.id, opt.value)}
                                sx={{
                                  cursor: 'pointer',
                                  fontSize: '0.8125rem',
                                  fontWeight: 500,
                                  py: 2.5,
                                  px: 1,
                                  justifyContent: 'center',
                                  transition: 'all 0.2s ease',
                                  bgcolor: currentResponse.keys.includes(
                                    opt.value
                                  )
                                    ? colors.isDark
                                      ? 'rgba(139, 92, 246, 0.35)'
                                      : 'rgba(139, 92, 246, 0.25)'
                                    : colors.isDark
                                    ? 'rgba(255, 255, 255, 0.03)'
                                    : 'rgba(0, 0, 0, 0.03)',
                                  border: currentResponse.keys.includes(
                                    opt.value
                                  )
                                    ? colors.isDark
                                      ? '1px solid rgba(139, 92, 246, 0.7)'
                                      : '1px solid rgba(139, 92, 246, 0.8)'
                                    : colors.isDark
                                    ? '1px solid rgba(255, 255, 255, 0.15)'
                                    : '1px solid rgba(0, 0, 0, 0.12)',
                                  color: currentResponse.keys.includes(
                                    opt.value
                                  )
                                    ? colors.isDark
                                      ? '#ffffff'
                                      : '#ffffff'
                                    : colors.isDark
                                    ? 'rgba(255, 255, 255, 0.7)'
                                    : 'rgba(0, 0, 0, 0.6)',
                                  boxShadow: currentResponse.keys.includes(
                                    opt.value
                                  )
                                    ? colors.isDark
                                      ? '0 0 16px rgba(139, 92, 246, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)'
                                      : '0 0 12px rgba(139, 92, 246, 0.3)'
                                    : 'none',
                                  '&:hover': {
                                    bgcolor: currentResponse.keys.includes(
                                      opt.value
                                    )
                                      ? colors.isDark
                                        ? 'rgba(139, 92, 246, 0.4)'
                                        : 'rgba(139, 92, 246, 0.3)'
                                      : colors.isDark
                                      ? 'rgba(139, 92, 246, 0.08)'
                                      : 'rgba(139, 92, 246, 0.06)',
                                    borderColor: colors.isDark
                                      ? 'rgba(139, 92, 246, 0.5)'
                                      : 'rgba(139, 92, 246, 0.5)',
                                    transform: 'translateY(-1px)',
                                    boxShadow: colors.isDark
                                      ? '0 0 20px rgba(139, 92, 246, 0.35)'
                                      : '0 0 14px rgba(139, 92, 246, 0.25)',
                                    color: currentResponse.keys.includes(
                                      opt.value
                                    )
                                      ? '#ffffff'
                                      : colors.isDark
                                      ? 'rgba(255, 255, 255, 0.7)'
                                      : 'rgba(0, 0, 0, 0.7)',
                                  },
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>

                  {/* Primary CTA */}
                  <Button
                    fullWidth
                    onClick={handleSurveySubmit}
                    sx={{
                      py: 1.75,
                      borderRadius: '12px',
                      background:
                        'linear-gradient(90deg, #9333ea 0%, #3b82f6 100%)',
                      color: 'white',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background:
                          'linear-gradient(90deg, #a855f7 0%, #60a5fa 100%)',
                        boxShadow: '0 0 40px rgba(147, 51, 234, 0.6)',
                        transform: 'translateY(-2px)',
                      },
                      '&:active': {
                        transform: 'translateY(0)',
                      },
                    }}
                  >
                    Save my preferences
                  </Button>

                  {/* Footer Microcopy */}
                  <Typography
                    variant='caption'
                    sx={{
                      display: 'block',
                      textAlign: 'center',
                      color: colors.text.muted,
                      fontSize: '0.75rem',
                      mt: 2.5,
                      lineHeight: 1.5,
                    }}
                  >
                    We'll email you when early access is ready.
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;

  return createPortal(modalContent, document.body);
}
