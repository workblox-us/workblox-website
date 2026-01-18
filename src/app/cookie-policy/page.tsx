'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'motion/react';

import { useThemeColors } from '@/hooks/useThemeColors';

export default function CookiePolicy() {
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
              Cookie Policy
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: colors.text.secondary,
                fontSize: '1rem',
              }}
            >
              Last updated: January 5, 2026
            </Typography>
          </Box>

          {/* Content */}
          <Box sx={{ '& > *': { mb: 4 } }}>
            <Section title='1. What Are Cookies' colors={colors}>
              <Paragraph colors={colors}>
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work more efficiently and provide information to
                website owners.
              </Paragraph>
              <Paragraph colors={colors}>
                Workblox uses cookies and similar tracking technologies to track
                activity on our Service and store certain information. This
                Cookie Policy explains what cookies are, how we use them, and
                your choices regarding cookies.
              </Paragraph>
            </Section>

            <Section title='2. How We Use Cookies' colors={colors}>
              <Paragraph colors={colors}>
                We use cookies for several reasons, including to:
              </Paragraph>
              <List
                items={[
                  'Enable certain functions of the Service',
                  'Provide analytics and track usage',
                  'Store your preferences and settings',
                  'Enable security features and protect against fraud',
                  'Deliver relevant content and advertisements',
                  'Improve overall user experience',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='3. Types of Cookies We Use' colors={colors}>
              <SubSection title='Essential Cookies' colors={colors}>
                <Paragraph colors={colors}>
                  These cookies are necessary for the Service to function
                  properly. They enable core functionality such as security,
                  network management, and accessibility. You cannot opt out of
                  these cookies.
                </Paragraph>
                <List
                  items={[
                    'Authentication cookies (remember your login)',
                    'Security cookies (protect against fraud and abuse)',
                    'Session management cookies (maintain your session)',
                    'Load balancing cookies (distribute requests efficiently)',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection
                title='Analytics and Performance Cookies'
                colors={colors}
              >
                <Paragraph colors={colors}>
                  These cookies help us understand how visitors interact with
                  our Service by collecting and reporting information
                  anonymously. They help us improve the Service's functionality
                  and performance.
                </Paragraph>
                <List
                  items={[
                    'Google Analytics (traffic and usage analysis)',
                    'Custom analytics tools (feature usage tracking)',
                    'Performance monitoring (page load times, errors)',
                    'A/B testing cookies (experiment with new features)',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Functional Cookies' colors={colors}>
                <Paragraph colors={colors}>
                  These cookies enable enhanced functionality and
                  personalization. They may be set by us or by third-party
                  providers whose services we use.
                </Paragraph>
                <List
                  items={[
                    'Preference cookies (remember your settings)',
                    'Language selection cookies',
                    'Theme preferences (dark/light mode)',
                    'Workspace customization settings',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection
                title='Targeting and Advertising Cookies'
                colors={colors}
              >
                <Paragraph colors={colors}>
                  These cookies are used to deliver advertisements more relevant
                  to you and your interests. They also help measure the
                  effectiveness of advertising campaigns.
                </Paragraph>
                <List
                  items={[
                    'Remarketing cookies (show relevant ads)',
                    'Social media cookies (share content)',
                    'Ad network cookies (manage ad campaigns)',
                    'Conversion tracking cookies (measure ad effectiveness)',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section title='4. Third-Party Cookies' colors={colors}>
              <Paragraph colors={colors}>
                In addition to our own cookies, we may also use various
                third-party cookies to report usage statistics of the Service
                and deliver advertisements. These include:
              </Paragraph>
              <List
                items={[
                  'Google Analytics: Website analytics and reporting',
                  'Google Ads: Advertising and remarketing',
                  'Facebook Pixel: Social media advertising',
                  'LinkedIn Insight Tag: Professional network advertising',
                  'Intercom: Customer messaging and support',
                  'Stripe: Payment processing (when applicable)',
                  'Segment: Data integration and analytics',
                ]}
                colors={colors}
              />
              <Paragraph colors={colors}>
                These third-party services have their own privacy policies and
                cookie policies. We recommend reviewing them to understand how
                they use cookies.
              </Paragraph>
            </Section>

            <Section title='5. Cookie Duration' colors={colors}>
              <Paragraph colors={colors}>
                Cookies can be "session" or "persistent" cookies:
              </Paragraph>
              <List
                items={[
                  'Session Cookies: Temporary cookies that expire when you close your browser',
                  'Persistent Cookies: Remain on your device until they expire or you delete them',
                ]}
                colors={colors}
              />
              <Paragraph colors={colors}>
                The duration of our cookies varies depending on their purpose.
                Analytics cookies typically last for up to 2 years, while
                session cookies are deleted when you close your browser.
              </Paragraph>
            </Section>

            <Section
              title='6. Managing Your Cookie Preferences'
              colors={colors}
            >
              <Paragraph colors={colors}>
                You have several options to manage and control cookies:
              </Paragraph>

              <SubSection title='Browser Settings' colors={colors}>
                <Paragraph colors={colors}>
                  Most web browsers allow you to control cookies through their
                  settings. You can:
                </Paragraph>
                <List
                  items={[
                    'Block all cookies',
                    'Block third-party cookies only',
                    'Clear all cookies when you close your browser',
                    'Make exceptions for specific websites',
                  ]}
                  colors={colors}
                />
                <Paragraph colors={colors}>
                  Please note that blocking all cookies may impact your ability
                  to use some features of our Service.
                </Paragraph>
              </SubSection>

              <SubSection title='Cookie Consent Tool' colors={colors}>
                <Paragraph colors={colors}>
                  When you first visit our Service, we display a cookie consent
                  banner. You can:
                </Paragraph>
                <List
                  items={[
                    'Accept all cookies',
                    'Reject optional cookies (keep only essential)',
                    'Customize your preferences by cookie category',
                    'Change your preferences at any time through the "Cookie Settings" link',
                  ]}
                  colors={colors}
                />
              </SubSection>

              <SubSection title='Opt-Out Links' colors={colors}>
                <Paragraph colors={colors}>
                  You can opt out of specific third-party cookies:
                </Paragraph>
                <List
                  items={[
                    'Google Analytics: https://tools.google.com/dlpage/gaoptout',
                    'Google Ads: https://adssettings.google.com',
                    'Facebook: https://www.facebook.com/settings/?tab=ads',
                    'LinkedIn: https://www.linkedin.com/psettings/guest-controls',
                  ]}
                  colors={colors}
                />
              </SubSection>
            </Section>

            <Section title='7. Do Not Track Signals' colors={colors}>
              <Paragraph colors={colors}>
                Some browsers include a "Do Not Track" (DNT) feature that
                signals to websites you visit that you do not want to have your
                online activity tracked. Currently, there is no industry
                standard for how to respond to DNT signals.
              </Paragraph>
              <Paragraph colors={colors}>
                We currently do not respond to DNT signals. However, you can use
                the cookie management options described above to control
                tracking.
              </Paragraph>
            </Section>

            <Section title='8. Mobile Device Identifiers' colors={colors}>
              <Paragraph colors={colors}>
                When you use our mobile applications, we may use mobile device
                identifiers (similar to cookies) to:
              </Paragraph>
              <List
                items={[
                  'Recognize you when you use our mobile apps',
                  'Store your preferences and settings',
                  'Track app usage and performance',
                  'Deliver personalized content',
                ]}
                colors={colors}
              />
              <Paragraph colors={colors}>
                You can manage mobile identifiers through your device settings:
              </Paragraph>
              <List
                items={[
                  'iOS: Settings → Privacy → Advertising → Limit Ad Tracking',
                  'Android: Settings → Google → Ads → Opt out of Ads Personalization',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='9. Consent and Legal Basis' colors={colors}>
              <Paragraph colors={colors}>
                Our legal basis for using cookies depends on the cookie type:
              </Paragraph>
              <List
                items={[
                  'Essential Cookies: Necessary to provide the Service (legitimate interest)',
                  'Analytics/Performance Cookies: Based on your consent',
                  'Functional Cookies: Based on your consent or legitimate interest',
                  'Advertising Cookies: Based on your consent',
                ]}
                colors={colors}
              />
              <Paragraph colors={colors}>
                For cookies that require consent, we obtain your permission
                through our cookie consent banner before placing these cookies
                on your device.
              </Paragraph>
            </Section>

            <Section title='10. Impact of Disabling Cookies' colors={colors}>
              <Paragraph colors={colors}>
                If you choose to disable or decline cookies, some features of
                the Service may not function properly. Specifically:
              </Paragraph>
              <List
                items={[
                  'You may need to log in more frequently',
                  'Your preferences and settings may not be saved',
                  'Some personalization features may not work',
                  'Content recommendations may be less relevant',
                  'You may see less relevant advertisements',
                ]}
                colors={colors}
              />
            </Section>

            <Section title='11. Updates to This Cookie Policy' colors={colors}>
              <Paragraph colors={colors}>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by:
              </Paragraph>
              <List
                items={[
                  'Posting the updated policy on this page',
                  'Updating the "Last updated" date at the top',
                  'Sending you an email notification (for significant changes)',
                  'Displaying a notice on the Service',
                ]}
                colors={colors}
              />
              <Paragraph colors={colors}>
                We encourage you to review this Cookie Policy periodically.
              </Paragraph>
            </Section>

            <Section title='12. More Information' colors={colors}>
              <Paragraph colors={colors}>
                If you have questions about our use of cookies or other
                technologies, please contact us at:
              </Paragraph>
              <Paragraph colors={colors}>
                Email: privacy@workblox.ai
                <br />
                Subject Line: Cookie Policy Inquiry
              </Paragraph>
              <Paragraph colors={colors}>
                For more information about how we handle your personal data,
                please see our Privacy Policy.
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
