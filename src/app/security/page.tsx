'use client';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';

import { useThemeColors } from '@/hooks/useThemeColors';

export default function SecurityPage() {
  const colors = useThemeColors();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: colors.bg.primary,
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth='md'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant='h1'
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: colors.text.primary,
                mb: 2,
              }}
            >
              Security & Compliance
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: colors.text.secondary,
                fontSize: '1rem',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Enterprise-grade security and compliance built into every layer of
              Workblox
            </Typography>
          </Box>

          {/* Content */}
          <Box sx={{ '& > *': { mb: 4 } }}>
            <Section title='Our Commitment to Security' colors={colors}>
              <Paragraph colors={colors}>
                At Workblox, security is a fundamental principle embedded in our
                platform's design. We're building a defense-in-depth strategy to
                protect your data with multiple layers of security controls,
                from infrastructure to application level.
              </Paragraph>
              <Paragraph colors={colors}>
                We understand that you're trusting us with your business
                information. That's why we're implementing security measures
                aligned with industry standards and best practices.
              </Paragraph>
            </Section>

            <Section title='Data Encryption' colors={colors}>
              <SubSection title='Encryption in Transit' colors={colors}>
                <Paragraph colors={colors}>
                  Data transmitted between your devices and Workblox servers is
                  protected using:
                </Paragraph>
                <List
                  items={[
                    'TLS 1.3 encryption for all connections',
                    'Strong cipher suites',
                    'HSTS (HTTP Strict Transport Security) enforcement',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Encryption at Rest' colors={colors}>
                <Paragraph colors={colors}>
                  Your data is encrypted when stored in our databases and file
                  systems using industry-standard encryption protocols.
                </Paragraph>
              </SubSection>

              <SubSection
                title='End-to-End Encryption (Roadmap)'
                colors={colors}
              >
                <Paragraph colors={colors}>
                  Optional end-to-end encryption for certain sensitive content
                  is on our roadmap.
                </Paragraph>
              </SubSection>
            </Section>

            <Section title='Authentication & Access Control' colors={colors}>
              <Paragraph colors={colors}>
                We're implementing multiple layers of authentication and
                granular access controls:
              </Paragraph>

              <SubSection
                title='Multi-Factor Authentication (MFA)'
                colors={colors}
              >
                <List
                  items={[
                    'Support for TOTP authenticator apps',
                    'Hardware security keys (FIDO2/WebAuthn)',
                    'Backup codes for account recovery',
                    'Admin-enforced MFA policies for organizations',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Single Sign-On (SSO)' colors={colors}>
                <List
                  items={[
                    'SAML 2.0 support for enterprise identity providers',
                    'Integration with major identity providers (Okta, Azure AD, Google Workspace)',
                    'User provisioning capabilities',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection
                title='Role-Based Access Control (RBAC)'
                colors={colors}
              >
                <List
                  items={[
                    'Granular permissions at workspace, project, and task levels',
                    'Custom roles with specific permission sets',
                    'Team and group-based access management',
                    'Guest access with limited permissions',
                    'Audit logs for permission changes',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section title='Infrastructure Security' colors={colors}>
              <Paragraph colors={colors}>
                Workblox is built on industry-leading cloud infrastructure with
                security best practices:
              </Paragraph>

              <List
                items={[
                  'Hosted on reputable cloud providers',
                  'Network isolation with firewall rules',
                  'DDoS protection and Web Application Firewall (WAF)',
                  'Regular vulnerability scanning and security testing',
                  'Infrastructure as Code (IaC) with security reviews',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='Application Security' colors={colors}>
              <Paragraph colors={colors}>
                Our development practices prioritize security at every stage:
              </Paragraph>

              <SubSection title='Secure Development Lifecycle' colors={colors}>
                <List
                  items={[
                    'Security training for all engineers',
                    'Threat modeling for new features',
                    'Secure code reviews',
                    'Static and dynamic security testing',
                    'Dependency scanning for vulnerable libraries',
                    'Container image scanning',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Input Validation & Protection' colors={colors}>
                <List
                  items={[
                    'Protection against SQL injection attacks',
                    'Cross-Site Scripting (XSS) prevention',
                    'Cross-Site Request Forgery (CSRF) protection',
                    'Content Security Policy (CSP) implementation',
                    'Rate limiting to prevent abuse',
                    'Input sanitization and validation',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section title='Data Privacy & Compliance' colors={colors}>
              <Paragraph colors={colors}>
                We're designing Workblox to support major data protection
                regulations and working toward industry certifications:
              </Paragraph>

              <SubSection title='Security & Compliance Roadmap' colors={colors}>
                <List
                  items={[
                    'SOC 2 readiness program (in progress)',
                    'Designed to support GDPR requirements (EU General Data Protection Regulation)',
                    'Designed to support CCPA requirements (California Consumer Privacy Act)',
                    'ISO 27001-aligned controls (planned)',
                    'Regular security assessments',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Data Residency Options' colors={colors}>
                <List
                  items={[
                    'Regional hosting options as availability expands',
                    'Compliance with applicable data protection laws',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Privacy by Design' colors={colors}>
                <List
                  items={[
                    "Minimal data collection (only what's necessary)",
                    'User consent for data processing',
                    'Right to access, correct, and delete your data',
                    'Data portability (export your data anytime)',
                    'Transparent privacy practices and policies',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section
              title='Business Continuity & Disaster Recovery'
              colors={colors}
            >
              <Paragraph colors={colors}>
                We're implementing backup and recovery procedures to protect
                your data:
              </Paragraph>

              <List
                items={[
                  'Automated backups with retention policies',
                  'Point-in-time recovery capabilities',
                  'Tested disaster recovery procedures',
                  'Regular backup restoration testing',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='Monitoring & Incident Response' colors={colors}>
              <SubSection title='Security Monitoring' colors={colors}>
                <List
                  items={[
                    'Security event monitoring',
                    'Automated threat detection and alerting',
                    'Regular security metrics and reporting',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Incident Response' colors={colors}>
                <List
                  items={[
                    'Documented incident response procedures',
                    'We follow applicable legal requirements and will notify customers promptly when required',
                    'Post-incident analysis and improvements',
                    'Transparent communication during incidents',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section title='Employee Security' colors={colors}>
              <Paragraph colors={colors}>
                Our team members are trained to protect your data:
              </Paragraph>

              <List
                items={[
                  'Security and privacy training',
                  'Least privilege access controls',
                  'All access is logged and audited',
                  'Confidentiality and non-disclosure agreements',
                  'Secure remote work policies',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='Third-Party Security' colors={colors}>
              <Paragraph colors={colors}>
                We carefully evaluate third-party service providers:
              </Paragraph>

              <List
                items={[
                  'Security assessments for vendors',
                  'Data Processing Agreements (DPA) with processors',
                  'Regular vendor security reviews',
                  'Minimal data sharing (only when necessary)',
                  'Contractual security requirements',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='Audit & Transparency' colors={colors}>
              <Paragraph colors={colors}>
                We believe in transparency and accountability:
              </Paragraph>

              <List
                items={[
                  'Audit logs for user actions',
                  'Security event monitoring capabilities',
                  'Regular security assessments and testing',
                  'Transparent disclosure of security incidents',
                  'Public security documentation',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='Your Responsibilities' colors={colors}>
              <Paragraph colors={colors}>
                Security is a shared responsibility. Here's how you can help
                protect your data:
              </Paragraph>

              <List
                items={[
                  'Use strong, unique passwords',
                  'Enable multi-factor authentication',
                  'Keep your devices and software updated',
                  "Don't share login credentials",
                  'Be cautious of phishing attempts',
                  'Report suspicious activity immediately',
                  'Review user access regularly',
                  "Follow your organization's security policies",
                ]}
                colors={colors}
              />
            </Section>

            <Section title='Vulnerability Disclosure Program' colors={colors}>
              <Paragraph colors={colors}>
                We welcome responsible disclosure of security vulnerabilities.
                If you discover a security issue, please:
              </Paragraph>

              <List
                items={[
                  'Email security@workblox.ai with details',
                  'Allow us reasonable time to address the issue',
                  "Avoid accessing or modifying data that doesn't belong to you",
                  "Don't perform attacks that could harm our service or users",
                ]}
                colors={colors}
              />

              <Paragraph colors={colors}>
                We appreciate security researchers who help keep Workblox
                secure.
              </Paragraph>
            </Section>

            <Section title='Questions & Contact' colors={colors}>
              <Paragraph colors={colors}>
                For security-related questions or concerns, please contact our
                security team:
              </Paragraph>
              <Paragraph colors={colors}>
                Email: security@workblox.ai
                <br />
                For urgent security incidents: security-urgent@workblox.ai
                <br />
                PGP key available upon request
              </Paragraph>
              <Paragraph colors={colors}>
                For general privacy questions, contact: privacy@workblox.ai
              </Paragraph>
            </Section>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

function Section({
  title,
  children,
  colors,
}: {
  title: string;
  children: React.ReactNode;
  colors: any;
}) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant='h2'
        sx={{
          fontSize: '1.5rem',
          fontWeight: 600,
          color: colors.text.primary,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function SubSection({
  title,
  children,
  colors,
}: {
  title: string;
  children: React.ReactNode;
  colors: any;
}) {
  return (
    <Box sx={{ mb: 3, ml: 2 }}>
      <Typography
        variant='h3'
        sx={{
          fontSize: '1.125rem',
          fontWeight: 600,
          color: colors.text.primary,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function Paragraph({
  children,
  colors,
}: {
  children: React.ReactNode;
  colors: any;
}) {
  return (
    <Typography
      variant='body1'
      sx={{
        color: colors.text.secondary,
        lineHeight: 1.8,
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
}

function List({ items, colors }: { items: string[]; colors: any }) {
  return (
    <Box component='ul' sx={{ pl: 3, mb: 2 }}>
      {items.map((item, index) => (
        <Box
          component='li'
          key={index}
          sx={{
            color: colors.text.secondary,
            lineHeight: 1.8,
            mb: 1,
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
}
