'use client';
import {
  Article,
  ExpandMore,
  IntegrationInstructions,
  Rocket,
  Security,
} from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';
import { useState } from 'react';

import { useThemeColors } from '@/hooks/useThemeColors';

import { BetaModal } from '@/components/BetaModal';

import { useNavigation } from '@/contexts/NavigationContext';

interface FAQItem {
  question: string;
  answer: string;
  category: 'product' | 'features' | 'business' | 'technical';
}

export default function FAQPage() {
  const colors = useThemeColors();
  const { navigateTo } = useNavigation();
  const [expanded, setExpanded] = useState<number | false>(0);
  const [betaModalOpen, setBetaModalOpen] = useState(false);

  const faqs: FAQItem[] = [
    {
      question: 'What is Workblox?',
      answer:
        'Workblox is one intelligent workspace that brings tasks, recurring processes, docs, calendars, and team communication into one place. It helps teams plan, prioritize, and execute without jumping between tools. Join the waitlist to get early access as we roll out invites in waves.',
      category: 'product',
    },
    {
      question: 'Who is Workblox for?',
      answer:
        "Workblox is built for teams that run real operations, not just one-off projects, including founders, operators, project and program leaders, and functional teams like finance, ops, customer success, and product. If you manage ongoing work like checklists, reviews, approvals, and deadlines, you'll feel the difference immediately.",
      category: 'product',
    },
    {
      question: 'How is Workblox different from Asana, ClickUp, or Jira?',
      answer:
        'Most tools are great at tracking tasks inside their own walls. Workblox is built to connect the work you already do across tools and turn it into an organized, execution-ready workspace, including recurring processes, reminders, and context. You get a system that supports projects and BAU in one place, with less overhead.',
      category: 'product',
    },
    {
      question:
        'Can I manage recurring processes like month-end close, weekly ops, or onboarding checklists?',
      answer:
        'Yes. Workblox lets you run recurring work like month-end close, weekly planning, client onboarding, and standard operating routines using checklists, reminders, owners, and visibility. Think "project management," but designed for repeatable operational workflows, not just one-time initiatives.',
      category: 'features',
    },
    {
      question: 'What tools does Workblox integrate with?',
      answer:
        'Workblox is being built to connect with the tools teams already rely on, including email, calendars, docs, chat, file storage, CRM, and project systems. The goal is simple, your work lands in one place with the context attached, so you can act without hunting. Join the waitlist to see the first integration set as it launches.',
      category: 'features',
    },
    {
      question: 'How does the AI help without getting in the way?',
      answer:
        'Workblox uses AI to reduce busywork, not add complexity. It can help summarize, organize, and turn plain-language requests into actions like tasks, reminders, checklists, and updates. You stay in control, nothing runs automatically without your review.',
      category: 'features',
    },
    {
      question: 'Is this replacing all of my tools?',
      answer:
        "Not on day one, and it doesn't have to. Workblox is designed to work alongside your existing stack, then reduce tool sprawl over time by centralizing the workflows that matter most. You can start small, one team, one workflow, and expand as it proves value.",
      category: 'product',
    },
    {
      question: 'How does security and access control work?',
      answer:
        "Workblox is designed with enterprise-grade access control in mind, including workspace-level permissions and role-based access patterns. The product roadmap prioritizes secure architecture, auditability, and least-privilege access, because trust is non-negotiable. If you have specific security requirements, join the waitlist and we'll capture them during onboarding.",
      category: 'technical',
    },
    {
      question: 'When will Workblox be available?',
      answer:
        "We're onboarding early users in waves to make sure the experience is tight and the integrations work as expected. Join the waitlist to get access as spots open and to help shape what ships first.",
      category: 'business',
    },
    {
      question: 'Will there be pricing?',
      answer:
        'Yes, pricing will be announced closer to launch once early access validates the packaging. Early users will get priority access and founder-friendly pricing when plans go live. Join the waitlist to be first in line.',
      category: 'business',
    },
    {
      question: 'What problem are you solving, in one sentence?',
      answer:
        'Workblox reduces work chaos by turning fragmented tools and scattered updates into one organized system for projects and recurring operations.',
      category: 'product',
    },
    {
      question: 'How can I support or partner with Workblox?',
      answer:
        'If you\'re interested in piloting Workblox with your team or exploring partnerships, join the waitlist and select "Team pilot" so we can route you to the right onboarding path.',
      category: 'business',
    },
  ];

  const toggleFaq = (index: number) => {
    setExpanded(expanded === index ? false : index);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: colors.isDark ? '#000000' : '#ffffff',
        pt: { xs: 12, md: 14 },
        pb: 10,
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          background: colors.isDark
            ? 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1), transparent 50%)'
            : 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.05), transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth='md' sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2.5,
              py: 1,
              borderRadius: '50px',
              bgcolor: colors.isDark
                ? 'rgba(139, 92, 246, 0.1)'
                : 'rgba(139, 92, 246, 0.08)',
              border: colors.isDark
                ? '1px solid rgba(139, 92, 246, 0.2)'
                : '1px solid rgba(139, 92, 246, 0.3)',
              backdropFilter: 'blur(8px)',
              mb: 3,
            }}
          >
            <Article
              sx={{
                fontSize: '1rem',
                color: colors.isDark ? '#a78bfa' : '#8b5cf6',
              }}
            />
            <Typography
              variant='caption'
              sx={{
                color: colors.isDark ? '#a78bfa' : '#8b5cf6',
                fontWeight: 600,
              }}
            >
              FAQ
            </Typography>
          </Box>

          <Typography
            variant='h1'
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: colors.text.primary,
              mb: 2,
              fontWeight: 700,
              background: colors.isDark
                ? 'linear-gradient(135deg, #ffffff, #a78bfa)'
                : 'linear-gradient(135deg, #000000, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            variant='h6'
            sx={{
              color: colors.text.secondary,
              maxWidth: '42rem',
              mx: 'auto',
              lineHeight: 1.7,
              mb: 2,
            }}
          >
            Everything you need to know about Workblox, from product
            capabilities to pricing and partnerships
          </Typography>

          <Typography
            sx={{
              color: colors.text.secondary,
              maxWidth: '42rem',
              mx: 'auto',
              fontSize: '0.9375rem',
            }}
          >
            Still have a question? Email{' '}
            <Typography
              component='a'
              href='mailto:hello@workblox.ai'
              sx={{
                color: colors.isDark ? '#a78bfa' : '#8b5cf6',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              hello@workblox.ai
            </Typography>
          </Typography>
        </Box>

        {/* FAQ Accordion */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((faq, index) => (
            <Box
              key={index}
              sx={{
                mb: 2,
                bgcolor: colors.isDark
                  ? 'rgba(255, 255, 255, 0.03)'
                  : 'rgba(0, 0, 0, 0.02)',
                border:
                  expanded === index
                    ? '1px solid rgba(139, 92, 246, 0.4)'
                    : colors.isDark
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow:
                  expanded === index
                    ? '0 4px 24px rgba(139, 92, 246, 0.15)'
                    : 'none',
                transition: 'all 0.25s ease-out',
              }}
            >
              {/* Question Header */}
              <Box
                onClick={() => toggleFaq(index)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  height: expanded === index ? 'auto' : '64px',
                  px: 3,
                  py: expanded === index ? 3 : 2,
                  cursor: 'pointer',
                  userSelect: 'none',
                  transition: 'all 0.25s ease-out',
                  '&:hover': {
                    bgcolor: colors.isDark
                      ? 'rgba(255, 255, 255, 0.02)'
                      : 'rgba(0, 0, 0, 0.02)',
                  },
                }}
              >
                <Box
                  sx={{
                    minWidth: 32,
                    height: 32,
                    borderRadius: '8px',
                    bgcolor:
                      expanded === index
                        ? 'rgba(139, 92, 246, 0.15)'
                        : colors.isDark
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(0, 0, 0, 0.05)',
                    border:
                      expanded === index
                        ? '1px solid rgba(139, 92, 246, 0.3)'
                        : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color:
                        expanded === index ? '#a78bfa' : colors.text.secondary,
                    }}
                  >
                    {(index + 1).toString().padStart(2, '0')}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: expanded === index ? '#a78bfa' : colors.text.primary,
                    transition: 'color 0.2s ease',
                    flex: 1,
                  }}
                >
                  {faq.question}
                </Typography>
                <ExpandMore
                  sx={{
                    color:
                      expanded === index ? '#a78bfa' : colors.text.secondary,
                    transition: 'all 0.25s ease-out',
                    transform:
                      expanded === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}
                />
              </Box>

              {/* Answer */}
              {expanded === index && (
                <Box
                  sx={{
                    px: 3,
                    pb: 3,
                    pt: 2,
                    pl: 9,
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
                      lineHeight: 1.8,
                      fontSize: '0.9375rem',
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>

        {/* CTA Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            mt: 10,
            p: { xs: 4, md: 6 },
            borderRadius: '24px',
            bgcolor: colors.isDark
              ? 'rgba(139, 92, 246, 0.05)'
              : 'rgba(139, 92, 246, 0.03)',
            border: colors.isDark
              ? '1px solid rgba(139, 92, 246, 0.2)'
              : '1px solid rgba(139, 92, 246, 0.3)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Gradient Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at center, rgba(139, 92, 246, 0.1), transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Rocket
              sx={{
                fontSize: '3rem',
                color: '#a78bfa',
                mb: 2,
              }}
            />
            <Typography
              variant='h4'
              sx={{
                fontWeight: 700,
                color: colors.text.primary,
                mb: 2,
              }}
            >
              Still have questions?
            </Typography>
            <Typography
              sx={{
                color: colors.text.secondary,
                mb: 4,
                maxWidth: '32rem',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Join the waitlist to connect directly with our team and get
              personalized answers about how Workblox can work for you
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant='contained'
                size='large'
                onClick={() => setBetaModalOpen(true)}
                sx={{
                  bgcolor: '#8b5cf6',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  textTransform: 'none',
                  boxShadow: '0 4px 16px rgba(139, 92, 246, 0.3)',
                  '&:hover': {
                    bgcolor: '#7c3aed',
                    boxShadow: '0 6px 24px rgba(139, 92, 246, 0.4)',
                  },
                }}
              >
                Reserve Your Spot
              </Button>
              <Button
                variant='outlined'
                size='large'
                onClick={() => navigateTo('contact')}
                sx={{
                  color: colors.text.primary,
                  borderColor: colors.isDark
                    ? 'rgba(255, 255, 255, 0.2)'
                    : 'rgba(0, 0, 0, 0.2)',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#a78bfa',
                    bgcolor: 'rgba(139, 92, 246, 0.05)',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Additional Resources */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{ mt: 8 }}
        >
          <Typography
            variant='h5'
            sx={{
              fontWeight: 600,
              color: colors.text.primary,
              mb: 3,
              textAlign: 'center',
            }}
          >
            Explore More Resources
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            <Box
              onClick={() => navigateTo('articles')}
              sx={{
                p: 3,
                borderRadius: '12px',
                bgcolor: colors.isDark
                  ? 'rgba(255, 255, 255, 0.03)'
                  : 'rgba(0, 0, 0, 0.02)',
                border: colors.isDark
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: colors.isDark
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                },
              }}
            >
              <Article sx={{ fontSize: '2rem', color: '#a78bfa', mb: 1 }} />
              <Typography
                sx={{ fontWeight: 600, color: colors.text.primary, mb: 0.5 }}
              >
                Blog
              </Typography>
              <Typography
                variant='caption'
                sx={{ color: colors.text.secondary }}
              >
                Insights, launch updates, and practical workflows.
              </Typography>
            </Box>

            <Box
              onClick={() => navigateTo('integrations')}
              sx={{
                p: 3,
                borderRadius: '12px',
                bgcolor: colors.isDark
                  ? 'rgba(255, 255, 255, 0.03)'
                  : 'rgba(0, 0, 0, 0.02)',
                border: colors.isDark
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: colors.isDark
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                },
              }}
            >
              <IntegrationInstructions
                sx={{ fontSize: '2rem', color: '#a78bfa', mb: 1 }}
              />
              <Typography
                sx={{ fontWeight: 600, color: colors.text.primary, mb: 0.5 }}
              >
                Integrations
              </Typography>
              <Typography
                variant='caption'
                sx={{ color: colors.text.secondary }}
              >
                Connect the tools you already use and keep everything in one
                place.
              </Typography>
            </Box>

            <Box
              onClick={() => navigateTo('security')}
              sx={{
                p: 3,
                borderRadius: '12px',
                bgcolor: colors.isDark
                  ? 'rgba(255, 255, 255, 0.03)'
                  : 'rgba(0, 0, 0, 0.02)',
                border: colors.isDark
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: colors.isDark
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.04)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                },
              }}
            >
              <Security sx={{ fontSize: '2rem', color: '#a78bfa', mb: 1 }} />
              <Typography
                sx={{ fontWeight: 600, color: colors.text.primary, mb: 0.5 }}
              >
                Security
              </Typography>
              <Typography
                variant='caption'
                sx={{ color: colors.text.secondary }}
              >
                Enterprise-grade security principles and our roadmap to
                compliance.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <BetaModal open={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
    </Box>
  );
}
