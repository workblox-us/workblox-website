export type IntegrationCategory = 
  | 'All'
  | 'Communication'
  | 'Project Management'
  | 'Development'
  | 'Storage'
  | 'Productivity'
  | 'Design'
  | 'Analytics'
  | 'CRM'
  | 'Marketing'
  | 'Finance'
  | 'HR'
  | 'E-commerce'
  | 'Automation'
  | 'Communication & Calling';

export interface Integration {
  name: string;
  logo: string;
  category: IntegrationCategory;
  description: string;
}

export const integrationsData: Integration[] = [
  // Communication
  {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg',
    category: 'Communication',
    description: 'Bring team conversations and work updates into one place',
  },
  {
    name: 'Microsoft Teams',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftteams.svg',
    category: 'Communication',
    description: 'Connect meetings, chats, and collaboration workflows',
  },
  {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg',
    category: 'Communication',
    description: 'Sync community discussions and team channels',
  },
  {
    name: 'Zoom',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoom.svg',
    category: 'Communication & Calling',
    description: 'Connect video meetings with actionable tasks',
  },
  
  // Project Management
  {
    name: 'Jira',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jira.svg',
    category: 'Project Management',
    description: 'Sync issues, sprints, and development workflows',
  },
  {
    name: 'Asana',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/asana.svg',
    category: 'Project Management',
    description: 'Unify tasks and project timelines',
  },
  {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/trello.svg',
    category: 'Project Management',
    description: 'Connect boards and cards to your workflow',
  },
  {
    name: 'Monday.com',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/monday.svg',
    category: 'Project Management',
    description: 'Integrate work boards and team workflows',
  },
  {
    name: 'Linear',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linear.svg',
    category: 'Project Management',
    description: 'Sync product issues and development cycles',
  },
  {
    name: 'ClickUp',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/clickup.svg',
    category: 'Project Management',
    description: 'Connect docs, tasks, and goals',
  },
  
  // Development
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg',
    category: 'Development',
    description: 'Track code changes, PRs, and deployments',
  },
  {
    name: 'GitLab',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gitlab.svg',
    category: 'Development',
    description: 'Sync repositories and CI/CD pipelines',
  },
  {
    name: 'Bitbucket',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bitbucket.svg',
    category: 'Development',
    description: 'Connect source code and deployment tracking',
  },
  {
    name: 'Vercel',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg',
    category: 'Development',
    description: 'Monitor deployments and previews',
  },
  {
    name: 'Netlify',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netlify.svg',
    category: 'Development',
    description: 'Track builds and site deployments',
  },
  
  // Storage
  {
    name: 'Google Drive',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googledrive.svg',
    category: 'Storage',
    description: 'Access files, docs, and shared folders',
  },
  {
    name: 'Dropbox',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dropbox.svg',
    category: 'Storage',
    description: 'Sync files and team folders',
  },
  {
    name: 'OneDrive',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftonedrive.svg',
    category: 'Storage',
    description: 'Connect Microsoft files and documents',
  },
  {
    name: 'Box',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/box.svg',
    category: 'Storage',
    description: 'Integrate secure file storage',
  },
  
  // Productivity
  {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg',
    category: 'Productivity',
    description: 'Sync notes, wikis, and databases',
  },
  {
    name: 'Evernote',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/evernote.svg',
    category: 'Productivity',
    description: 'Connect notes and knowledge base',
  },
  {
    name: 'Todoist',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/todoist.svg',
    category: 'Productivity',
    description: 'Sync personal and team tasks',
  },
  {
    name: 'Airtable',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airtable.svg',
    category: 'Productivity',
    description: 'Connect databases and workflows',
  },
  {
    name: 'Google Calendar',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecalendar.svg',
    category: 'Productivity',
    description: 'Sync meetings and schedule',
  },
  
  // Design
  {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg',
    category: 'Design',
    description: 'Track design files and feedback',
  },
  {
    name: 'Adobe Creative Cloud',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobecreativecloud.svg',
    category: 'Design',
    description: 'Connect creative workflows',
  },
  {
    name: 'Sketch',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sketch.svg',
    category: 'Design',
    description: 'Integrate design assets and files',
  },
  {
    name: 'InVision',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/invision.svg',
    category: 'Design',
    description: 'Sync prototypes and design reviews',
  },
  
  // Analytics
  {
    name: 'Google Analytics',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googleanalytics.svg',
    category: 'Analytics',
    description: 'Monitor web traffic and insights',
  },
  {
    name: 'Mixpanel',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mixpanel.svg',
    category: 'Analytics',
    description: 'Track product analytics and events',
  },
  {
    name: 'Amplitude',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amplitude.svg',
    category: 'Analytics',
    description: 'Analyze user behavior and retention',
  },
  {
    name: 'Tableau',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tableau.svg',
    category: 'Analytics',
    description: 'Visualize data and create reports',
  },
  
  // CRM
  {
    name: 'Salesforce',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg',
    category: 'CRM',
    description: 'Sync customer data and pipelines',
  },
  {
    name: 'HubSpot',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg',
    category: 'CRM',
    description: 'Connect contacts and deals',
  },
  {
    name: 'Pipedrive',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pipedrive.svg',
    category: 'CRM',
    description: 'Track sales pipeline and activities',
  },
  {
    name: 'Zoho CRM',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoho.svg',
    category: 'CRM',
    description: 'Manage customer relationships',
  },
  
  // Marketing
  {
    name: 'Mailchimp',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mailchimp.svg',
    category: 'Marketing',
    description: 'Sync email campaigns and audiences',
  },
  {
    name: 'SendGrid',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sendgrid.svg',
    category: 'Marketing',
    description: 'Connect email delivery and analytics',
  },
  {
    name: 'Intercom',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/intercom.svg',
    category: 'Marketing',
    description: 'Integrate customer messaging',
  },
  {
    name: 'Facebook Ads',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg',
    category: 'Marketing',
    description: 'Track ad campaigns and performance',
  },
  
  // Finance
  {
    name: 'QuickBooks',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/quickbooks.svg',
    category: 'Finance',
    description: 'Sync accounting and invoices',
  },
  {
    name: 'Stripe',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg',
    category: 'Finance',
    description: 'Connect payments and subscriptions',
  },
  {
    name: 'Xero',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/xero.svg',
    category: 'Finance',
    description: 'Integrate accounting workflows',
  },
  {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg',
    category: 'Finance',
    description: 'Track payments and transactions',
  },
  
  // HR
  {
    name: 'BambooHR',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bamboo.svg',
    category: 'HR',
    description: 'Manage employee data and onboarding',
  },
  {
    name: 'Workday',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/workday.svg',
    category: 'HR',
    description: 'Connect HR and workforce management',
  },
  {
    name: 'Greenhouse',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/greenhouse.svg',
    category: 'HR',
    description: 'Sync recruiting and hiring workflows',
  },
  {
    name: 'Lever',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/lever.svg',
    category: 'HR',
    description: 'Track applicants and interviews',
  },
  
  // E-commerce
  {
    name: 'Shopify',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg',
    category: 'E-commerce',
    description: 'Connect store data and orders',
  },
  {
    name: 'WooCommerce',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/woo.svg',
    category: 'E-commerce',
    description: 'Sync WordPress store operations',
  },
  {
    name: 'Magento',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/magento.svg',
    category: 'E-commerce',
    description: 'Integrate e-commerce platform',
  },
  {
    name: 'BigCommerce',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bigcommerce.svg',
    category: 'E-commerce',
    description: 'Connect online store operations',
  },
  
  // Automation
  {
    name: 'Zapier',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zapier.svg',
    category: 'Automation',
    description: 'Automate workflows between apps',
  },
  {
    name: 'Make',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/make.svg',
    category: 'Automation',
    description: 'Build complex automation scenarios',
  },
  {
    name: 'IFTTT',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ifttt.svg',
    category: 'Automation',
    description: 'Create simple trigger-based automations',
  },
  {
    name: 'n8n',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/n8n.svg',
    category: 'Automation',
    description: 'Build workflow automations',
  },
];
