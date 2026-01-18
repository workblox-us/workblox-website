'use client';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';

import { useThemeColors } from '@/hooks/useThemeColors';

export default function CompliancePage() {
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
              Compliance
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
              Meeting the highest standards of data protection and regulatory
              compliance
            </Typography>
          </Box>

          {/* Content */}
          <Box sx={{ '& > *': { mb: 4 } }}>
            <Section title='Our Compliance Commitment' colors={colors}>
              <Paragraph colors={colors}>
                Workblox is building a compliance-first platform designed to
                meet the highest standards of global data protection regulations
                and industry frameworks. As we prepare for launch, we're
                implementing comprehensive compliance measures to ensure your
                data is handled with care and in accordance with applicable
                laws.
              </Paragraph>
              <Paragraph colors={colors}>
                Our compliance program is being built on three pillars:
                transparency, accountability, and continuous improvement.
              </Paragraph>
            </Section>

            <Section
              title='SOC 2 Type II Compliance (In Progress)'
              colors={colors}
            >
              <Paragraph colors={colors}>
                Workblox is actively pursuing SOC 2 Type II certification,
                demonstrating our commitment to the highest standards of
                security, availability, and confidentiality.
              </Paragraph>

              <SubSection title='What is SOC 2?' colors={colors}>
                <Paragraph colors={colors}>
                  SOC 2 (Service Organization Control 2) is an auditing
                  procedure that ensures service providers securely manage data
                  to protect the interests of their clients and the privacy of
                  their clients' customers.
                </Paragraph>
              </SubSection>

              <SubSection title='Our SOC 2 Coverage (Planned)' colors={colors}>
                <List
                  items={[
                    'Security: Protection against unauthorized access',
                    'Availability: Services are available as committed',
                    'Confidentiality: Sensitive information is protected',
                    'Processing Integrity: System processing is complete and accurate',
                    'Privacy: Personal information is properly handled',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection
                title='Continuous Compliance (Planned)'
                colors={colors}
              >
                <List
                  items={[
                    'Annual SOC 2 Type II audits by independent third parties',
                    'Quarterly internal compliance reviews',
                    'Continuous monitoring and improvement of controls',
                    'SOC 2 reports available to Enterprise customers under NDA',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section
              title='GDPR Compliance (Designed to Support)'
              colors={colors}
            >
              <Paragraph colors={colors}>
                The General Data Protection Regulation (GDPR) is the EU's
                comprehensive data protection law. Workblox is designed to
                support GDPR requirements for all users, regardless of location.
              </Paragraph>

              <SubSection title='Your GDPR Rights' colors={colors}>
                <Paragraph colors={colors}>
                  Under GDPR, you have the following rights regarding your
                  personal data:
                </Paragraph>
                <List
                  items={[
                    'Right to Access: Request a copy of your personal data',
                    'Right to Rectification: Correct inaccurate or incomplete data',
                    'Right to Erasure: Request deletion of your personal data',
                    'Right to Restrict Processing: Limit how we use your data',
                    'Right to Data Portability: Receive your data in a portable format',
                    'Right to Object: Object to certain types of processing',
                    'Rights Related to Automated Decision Making: Opt out of automated decisions',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Our GDPR Measures (Planned)' colors={colors}>
                <List
                  items={[
                    'Data Protection Officer (DPO) to be appointed',
                    'Data Processing Agreements (DPA) with all processors',
                    'Privacy by Design and by Default principles',
                    'Data Protection Impact Assessments (DPIA) for high-risk processing',
                    'Standard Contractual Clauses (SCC) for international transfers',
                    'Breach notification procedures (within 72 hours)',
                    'Staff training on GDPR compliance',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section
              title='CCPA/CPRA Compliance (Designed to Support)'
              colors={colors}
            >
              <Paragraph colors={colors}>
                The California Consumer Privacy Act (CCPA) and its amendment,
                the California Privacy Rights Act (CPRA), provide California
                residents with specific rights regarding their personal
                information.
              </Paragraph>

              <SubSection title='Your California Rights' colors={colors}>
                <List
                  items={[
                    "Right to Know: What personal information is collected and how it's used",
                    'Right to Delete: Request deletion of your personal information',
                    'Right to Opt-Out: Opt out of the sale of personal information',
                    'Right to Non-Discrimination: Equal service regardless of privacy choices',
                    'Right to Correct: Correct inaccurate personal information',
                    'Right to Limit: Limit use of sensitive personal information',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection
                title='Our CCPA/CPRA Compliance (Planned)'
                colors={colors}
              >
                <List
                  items={[
                    'We do not sell personal information',
                    'Clear privacy notice and disclosures',
                    'Simple process to exercise your rights',
                    'Verification procedures to protect your information',
                    'Response to requests within 45 days',
                    'Privacy metrics disclosure',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section
              title='HIPAA Compliance (Planned for Enterprise)'
              colors={colors}
            >
              <Paragraph colors={colors}>
                For Enterprise customers in healthcare, Workblox plans to offer
                HIPAA-compliant configurations to protect Protected Health
                Information (PHI).
              </Paragraph>

              <SubSection
                title='HIPAA-Compliant Features (Planned)'
                colors={colors}
              >
                <List
                  items={[
                    'Business Associate Agreement (BAA) to be available',
                    'End-to-end encryption for PHI',
                    'Comprehensive audit logs',
                    'Access controls and authentication',
                    'Automatic session timeouts',
                    'Secure data backup and recovery',
                    'Employee HIPAA training and certification',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <Paragraph colors={colors}>
                Note: HIPAA compliance features will be available only on
                Enterprise plans. Contact sales@workblox.ai for more
                information.
              </Paragraph>
            </Section>

            <Section title='ISO 27001 (In Progress)' colors={colors}>
              <Paragraph colors={colors}>
                Workblox is pursuing ISO 27001 certification, the international
                standard for information security management systems (ISMS).
              </Paragraph>

              <SubSection title='ISO 27001 Preparation' colors={colors}>
                <List
                  items={[
                    'Establishing Information Security Management System',
                    'Comprehensive risk assessment and treatment',
                    'Documented security policies and procedures',
                    'Internal audit processes',
                    'Continuous improvement processes',
                    'Certification timeline to be determined',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section
              title='Data Localization & Sovereignty (Planned)'
              colors={colors}
            >
              <Paragraph colors={colors}>
                We're designing Workblox to respect data sovereignty
                requirements and plan to offer data residency options to comply
                with local regulations.
              </Paragraph>

              <SubSection title='Planned Data Regions' colors={colors}>
                <List
                  items={[
                    'United States (US East, US West)',
                    'European Union (to be determined)',
                    'Additional regions based on customer demand',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection
                title='Data Transfer Safeguards (Planned)'
                colors={colors}
              >
                <List
                  items={[
                    'Standard Contractual Clauses (SCC) for EU transfers',
                    'UK International Data Transfer Agreement (IDTA)',
                    'Data residency options for sensitive workloads',
                    'Transparent disclosure of data transfer practices',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section
              title='Industry-Specific Compliance (Planned)'
              colors={colors}
            >
              <SubSection title='Education' colors={colors}>
                <List
                  items={[
                    'FERPA compliance for educational institutions',
                    'COPPA compliance (no collection from children under 13)',
                    'Student data privacy commitments',
                    'Education-specific access controls',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Additional Industries' colors={colors}>
                <Paragraph colors={colors}>
                  We're evaluating additional industry-specific compliance
                  frameworks based on customer needs. Contact us to discuss your
                  specific requirements.
                </Paragraph>
              </SubSection>
            </Section>

            <Section title='Subprocessors & Third Parties' colors={colors}>
              <Paragraph colors={colors}>
                A current list of subprocessors will be published and maintained
                prior to beta.
              </Paragraph>

              <Paragraph colors={colors}>
                We carefully vet all subprocessors for security and compliance,
                and will maintain Data Processing Agreements (DPAs) with any
                third-party service providers who have access to customer data.
              </Paragraph>
            </Section>

            <Section
              title='Data Retention & Deletion (Planned)'
              colors={colors}
            >
              <Paragraph colors={colors}>
                We're establishing clear data retention policies that balance
                operational needs with privacy requirements.
              </Paragraph>

              <SubSection title='Planned Retention Periods' colors={colors}>
                <List
                  items={[
                    'Active Account Data: Retained while account is active',
                    'Deleted Account Data: Purged within 90 days of account deletion',
                    'Backup Data: Retained for 30 days, then permanently deleted',
                    'Audit Logs: Retained for 1 year (7 years for Enterprise)',
                    'Billing Records: Retained for 7 years (legal requirement)',
                    'Marketing Data: Retained until consent is withdrawn',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Secure Data Deletion' colors={colors}>
                <List
                  items={[
                    'Cryptographic erasure (destroying encryption keys)',
                    'Multi-pass overwriting for physical media',
                    'Certified destruction for decommissioned hardware',
                    'Deletion certificates available upon request (Enterprise)',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section
              title='Security Incident Response (Planned)'
              colors={colors}
            >
              <Paragraph colors={colors}>
                We're developing comprehensive incident response procedures to
                handle security and data breach incidents.
              </Paragraph>

              <SubSection title='Incident Response Process' colors={colors}>
                <List
                  items={[
                    'Detection & Analysis: 24/7 monitoring and threat detection',
                    'Containment: Immediate action to limit impact',
                    'Eradication: Remove the threat from systems',
                    'Recovery: Restore systems and services',
                    'Post-Incident: Analysis and improvement',
                    'Notification: Customer notification within 72 hours if required',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Breach Notification' colors={colors}>
                <Paragraph colors={colors}>
                  In the event of a data breach affecting personal data:
                </Paragraph>
                <List
                  items={[
                    'Affected customers notified within 72 hours',
                    'Regulatory authorities notified as required',
                    'Transparent communication about impact and remediation',
                    'Dedicated support for affected customers',
                    'Post-breach analysis and security improvements',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section
              title='Compliance Documentation (To Be Available)'
              colors={colors}
            >
              <Paragraph colors={colors}>
                We will maintain comprehensive compliance documentation and make
                it available to our customers.
              </Paragraph>

              <SubSection title='Planned Documentation' colors={colors}>
                <List
                  items={[
                    'SOC 2 Type II Report (under NDA) - upon completion',
                    'Data Processing Agreement (DPA)',
                    'Business Associate Agreement (BAA) - Enterprise only',
                    'Standard Contractual Clauses (SCC)',
                    'Security White Paper',
                    'Subprocessor List',
                    'Privacy Policy',
                    'Cookie Policy',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <Paragraph colors={colors}>
                Enterprise customers will be able to request compliance
                documentation through their account manager or by emailing
                compliance@workblox.ai.
              </Paragraph>
            </Section>

            <Section title='Compliance Training & Culture' colors={colors}>
              <Paragraph colors={colors}>
                Compliance is everyone's responsibility at Workblox. We're
                building a compliance-first culture from day one.
              </Paragraph>

              <List
                items={[
                  'Mandatory compliance training for all employees',
                  'Role-specific training (security, privacy, data handling)',
                  'Regular compliance updates and communications',
                  'Compliance considerations in product development',
                  'Incident simulation and tabletop exercises',
                  'Compliance metrics tracking',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='Audits & Assessments (Planned)' colors={colors}>
              <Paragraph colors={colors}>
                We plan to conduct regular audits and assessments to ensure
                ongoing compliance:
              </Paragraph>

              <List
                items={[
                  'Annual SOC 2 Type II audits',
                  'Quarterly internal security audits',
                  'Annual penetration testing by third parties',
                  'Continuous vulnerability scanning',
                  'Vendor security assessments',
                  'Compliance gap analysis',
                  'Customer security questionnaire support',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='Customer Responsibilities' colors={colors}>
              <Paragraph colors={colors}>
                Compliance is a shared responsibility. As a Workblox customer,
                you will be responsible for:
              </Paragraph>

              <List
                items={[
                  'Configuring appropriate access controls for your workspace',
                  'Training your team on security and compliance best practices',
                  'Ensuring your use complies with applicable regulations',
                  'Properly classifying and handling sensitive data',
                  'Reporting security incidents promptly',
                  'Maintaining your own compliance records and policies',
                  'Reviewing our compliance documentation',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='Future Compliance Roadmap' colors={colors}>
              <Paragraph colors={colors}>
                We're committed to expanding our compliance coverage as we grow:
              </Paragraph>

              <List
                items={[
                  'SOC 2 Type II certification (in progress)',
                  'ISO 27001 certification (planned)',
                  'ISO 27018 (Cloud Privacy) (planned)',
                  'Additional regional certifications based on customer needs',
                  'Industry-specific certifications as required',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='Contact Our Compliance Team' colors={colors}>
              <Paragraph colors={colors}>
                For compliance-related questions or to discuss your specific
                compliance needs:
              </Paragraph>
              <Paragraph colors={colors}>
                Email: compliance@workblox.ai
                <br />
                Privacy Questions: privacy@workblox.ai
              </Paragraph>
              <Paragraph colors={colors}>
                We're here to answer questions about our compliance roadmap and
                how Workblox can support your organization's compliance
                requirements.
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
