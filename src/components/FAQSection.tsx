import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Box, 
  Container, 
  Typography, 
  Link as MuiLink
} from '@mui/material';
import { ExpandMore, QuestionAnswer } from '@mui/icons-material';
import { useThemeColors } from '../hooks/useThemeColors';
import { useNavigation } from '../contexts/NavigationContext';

export function FAQSection() {
  const colors = useThemeColors();
  const { navigateTo } = useNavigation();
  const [expanded, setExpanded] = useState<string | false>(false);

  const faqs = [
    {
      id: 'faq1',
      question: 'What is Workblox?',
      answer: 'Workblox is one intelligent workspace that brings tasks, recurring processes, docs, calendars, and team communication into one place. It helps teams plan, prioritize, and execute without jumping between tools.'
    },
    {
      id: 'faq2',
      question: 'Who is Workblox for?',
      answer: 'Workblox is built for teams that run real operations, not just one-off projects, including founders, operators, project and program leaders, and functional teams like finance, ops, customer success, and product.'
    },
    {
      id: 'faq3',
      question: 'How is Workblox different from Asana, ClickUp, or Jira?',
      answer: 'Most tools track tasks inside their own walls. Workblox connects the work you already do across tools and turns it into an organized, execution-ready workspace, including recurring processes, reminders, and context.'
    },
    {
      id: 'faq4',
      question: 'Can I manage recurring processes like month-end close or weekly operations?',
      answer: 'Yes. Workblox supports recurring work like month-end close, weekly planning, onboarding, and operational routines using checklists, reminders, owners, and visibility.'
    },
    {
      id: 'faq5',
      question: 'What tools does Workblox integrate with?',
      answer: 'Workblox is being built to connect with email, calendars, docs, chat, file storage, CRM, and project tools. The goal is your work lands in one place with the context attached, so you can act without hunting.'
    },
    {
      id: 'faq6',
      question: 'When can I get access?',
      answer: 'We\'re onboarding early users in waves to keep quality high. Join the waitlist and you\'ll get an invite as spots open.'
    }
  ];

  const toggleFaq = (faqId: string) => {
    setExpanded(expanded === faqId ? false : faqId);
  };

  return (
    <Box 
      component="section" 
      id="faq" 
      sx={{ 
        position: 'relative', 
        py: { xs: 10, md: 14 }, 
        overflow: 'hidden',
        bgcolor: colors.bg.primary,
      }}
    >
      {/* Background */}
      <Box sx={{ position: 'absolute', inset: 0, background: colors.gradient.background }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10, px: { xs: 2.5, sm: 3 } }}>
        {/* Section Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}
        >
          {/* Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: '50px',
              bgcolor: colors.badge.bg,
              border: `1px solid ${colors.border.accent}`,
              backdropFilter: 'blur(8px)',
              mb: 2,
            }}
          >
            <QuestionAnswer sx={{ fontSize: '0.875rem', color: colors.badge.text }} />
            <Typography variant="caption" sx={{ color: colors.badge.text, fontSize: '0.75rem', fontWeight: 600 }}>
              FAQ
            </Typography>
          </Box>

          {/* Title */}
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
              color: colors.text.primary, 
              mb: 2, 
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Frequently Asked{' '}
            <Box component="span" sx={{ background: 'linear-gradient(90deg, #c084fc 0%, #60a5fa 50%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Questions
            </Box>
          </Typography>

          {/* Subheader */}
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' }, 
              color: colors.text.secondary, 
              maxWidth: '42rem', 
              mx: 'auto',
              lineHeight: 1.7,
              px: { xs: 1, sm: 0 },
            }}
          >
            Quick answers to the most common questions before you join early access.
          </Typography>
        </Box>

        {/* FAQ Items */}
        <Box sx={{ mb: 4 }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  mb: 2,
                  borderRadius: '12px',
                  bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(248, 250, 252, 0.8)',
                  border: expanded === faq.id
                    ? colors.isDark ? '1px solid rgba(139, 92, 246, 0.4)' : '1px solid rgba(139, 92, 246, 0.35)'
                    : colors.isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(15, 23, 42, 0.1)',
                  backdropFilter: 'blur(10px)',
                  overflow: 'hidden',
                  boxShadow: expanded === faq.id 
                    ? '0 4px 16px rgba(139, 92, 246, 0.15)' 
                    : 'none',
                  transition: 'all 0.25s ease-out',
                  '&:hover': {
                    bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(139, 92, 246, 0.04)',
                    border: colors.isDark ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(139, 92, 246, 0.25)',
                  },
                }}
              >
                {/* Question */}
                <Box
                  onClick={() => toggleFaq(faq.id)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: { xs: '56px', md: '64px' },
                    py: { xs: 2.5, md: 3 },
                    px: { xs: 2.5, md: 3 },
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'all 0.25s ease-out',
                  }}
                >
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' },
                      fontWeight: 600,
                      color: colors.text.primary,
                      letterSpacing: '-0.01em',
                      pr: 2,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </Typography>
                  <ExpandMore 
                    sx={{ 
                      color: colors.text.secondary,
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      transform: expanded === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease-out',
                      flexShrink: 0,
                    }} 
                  />
                </Box>

                {/* Answer */}
                {expanded === faq.id && (
                  <Box
                    sx={{
                      px: { xs: 2.5, md: 3 },
                      pb: { xs: 2.5, md: 3 },
                      pt: 0,
                      animation: 'fadeIn 0.25s ease-out',
                      '@keyframes fadeIn': {
                        from: { opacity: 0, transform: 'translateY(-8px)' },
                        to: { opacity: 1, transform: 'translateY(0)' },
                      },
                    }}
                  >
                    <Typography 
                      sx={{ 
                        color: colors.text.secondary,
                        lineHeight: 1.7,
                        fontSize: { xs: '0.875rem', md: '0.9375rem' },
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </Box>
                )}
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* View All FAQs Link */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{ textAlign: 'center', mt: 4 }}
        >
          <MuiLink
            component="button"
            onClick={() => navigateTo('faq')}
            sx={{
              color: colors.isDark ? '#a78bfa' : '#7c3aed',
              fontSize: '0.9375rem',
              fontWeight: 500,
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              '&:hover': {
                color: colors.isDark ? '#c4b5fd' : '#9333ea',
                textDecoration: 'underline',
              },
            }}
          >
            View all FAQs →
          </MuiLink>
        </Box>
      </Container>
    </Box>
  );
}