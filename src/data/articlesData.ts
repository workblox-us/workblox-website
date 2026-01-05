export interface Article {
  id: string;
  title: string;
  type: 'Product Update' | 'Article' | 'Guide' | 'Release Notes';
  status: 'Published' | 'Scheduled' | 'Draft';
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedDate: string;
  readTime: number; // in minutes
  views: number;
  reactions: number;
  badge?: 'New' | 'Improved' | 'Breaking' | 'Popular';
  excerpt: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
  category: string;
  featured: boolean;
  imageUrl?: string;
}

export const articlesData: Article[] = [
  {
    id: '1',
    title: 'Introducing AI-Powered Workflow Automation',
    type: 'Product Update',
    status: 'Published',
    author: {
      name: 'Sarah Chen',
      avatar: 'SC',
      role: 'Product Lead',
    },
    publishedDate: '2025-01-15T10:00:00Z',
    readTime: 8,
    views: 3847,
    reactions: 234,
    badge: 'New',
    excerpt: 'Create complex automations using natural language. Simply describe what you want, and Workblox AI builds it for you.',
    content: {
      introduction: 'We\'re excited to announce a major update to Workblox: AI-powered workflow automation that helps teams work smarter, not harder. This release transforms how you build and manage workflows, making automation accessible to everyone on your team.',
      sections: [
        {
          title: 'Natural Language Workflows',
          content: 'Instead of learning complex automation syntax, you can now describe workflows in plain English. For example, type "When a new lead is created, assign it to the sales team and send a Slack notification" and watch as Workblox builds the automation for you. The AI understands context, handles edge cases, and suggests improvements.',
        },
        {
          title: 'Smart Suggestions',
          content: 'As you work, Workblox AI analyzes your team\'s patterns and suggests automations you might not have considered. These suggestions are based on successful workflows from similar teams, helping you discover optimization opportunities you might miss.',
        },
        {
          title: 'One-Click Templates',
          content: 'We\'ve created 50+ pre-built automation templates for common workflows. Each template is fully customizable and can be deployed with a single click. From lead qualification to sprint planning, we\'ve got you covered.',
        },
        {
          title: 'Advanced Error Handling',
          content: 'The AI automatically adds error handling, retry logic, and fallback mechanisms to your workflows. You don\'t need to think about what could go wrong – the system handles it intelligently.',
        },
      ],
      conclusion: 'This is just the beginning. We\'re continuously training our AI on real-world workflows to make it even more powerful. Start using AI automation today and see how much time your team can save.',
    },
    tags: ['AI', 'Automation', 'Workflows', 'Productivity'],
    category: 'Features',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    id: '2',
    title: 'How to Build Better Product Roadmaps',
    type: 'Guide',
    status: 'Published',
    author: {
      name: 'Mike Rodriguez',
      avatar: 'MR',
      role: 'Senior PM',
    },
    publishedDate: '2025-01-14T14:30:00Z',
    readTime: 12,
    views: 5623,
    reactions: 412,
    badge: 'Popular',
    excerpt: 'A comprehensive guide to creating product roadmaps that align stakeholders, inspire teams, and deliver results.',
    content: {
      introduction: 'Product roadmaps are one of the most important artifacts in product management, yet they\'re often misunderstood or poorly executed. This guide will help you create roadmaps that actually work.',
      sections: [
        {
          title: 'Start with Strategy',
          content: 'Your roadmap should be a direct reflection of your product strategy. Before opening your roadmapping tool, ensure you have clarity on your vision, target customers, and key metrics. A roadmap without strategy is just a list of features.',
        },
        {
          title: 'Think in Outcomes, Not Features',
          content: 'The best roadmaps focus on outcomes rather than outputs. Instead of "Build user dashboard," try "Help users understand their progress at a glance." This shifts the conversation from how to why, enabling better solutions.',
        },
        {
          title: 'Embrace Flexibility',
          content: 'Rigid roadmaps fail. Build in flexibility by using themes or time horizons instead of fixed dates. Use "Now, Next, Later" frameworks to communicate priorities without over-committing to distant deadlines.',
        },
        {
          title: 'Communicate Continuously',
          content: 'A roadmap is a living document. Share updates regularly, celebrate completed milestones, and be transparent about changes. Use Workblox\'s roadmap sharing features to keep everyone aligned.',
        },
        {
          title: 'Measure and Iterate',
          content: 'Track how well your roadmap performs. Are you delivering on time? Are the outcomes being achieved? Use data to refine your roadmapping process continuously.',
        },
      ],
      conclusion: 'Great roadmaps take practice. Start with these principles, iterate based on feedback, and remember that the goal is alignment and clarity, not perfection.',
    },
    tags: ['Product Management', 'Roadmaps', 'Strategy', 'Planning'],
    category: 'Best Practices',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: '3',
    title: 'Q1 2025 Platform Performance Updates',
    type: 'Product Update',
    status: 'Published',
    author: {
      name: 'Emily Watson',
      avatar: 'EW',
      role: 'Engineering Lead',
    },
    publishedDate: '2025-01-12T09:00:00Z',
    readTime: 5,
    views: 2134,
    reactions: 156,
    badge: 'Improved',
    excerpt: 'Major performance improvements across the platform. Pages load 3x faster, and real-time sync is now instant.',
    content: {
      introduction: 'We\'ve been working hard on making Workblox faster, more reliable, and more responsive. Here\'s what we\'ve shipped in Q1 2025.',
      sections: [
        {
          title: '3x Faster Page Loads',
          content: 'We\'ve optimized our frontend architecture, implementing code splitting, lazy loading, and aggressive caching. The result? Pages that used to take 2-3 seconds now load in under 1 second.',
        },
        {
          title: 'Instant Real-Time Sync',
          content: 'Our new WebSocket infrastructure ensures that changes appear instantly across all connected clients. No more refresh required – collaboration is now truly real-time.',
        },
        {
          title: 'Database Query Optimization',
          content: 'We\'ve rewritten our most common database queries, reducing average query time by 65%. This means faster searches, quicker filters, and more responsive dashboards.',
        },
        {
          title: 'Reduced Bundle Size',
          content: 'By removing unused dependencies and optimizing our build process, we\'ve reduced the initial bundle size by 40%. This means faster initial loads, especially on slower connections.',
        },
      ],
      conclusion: 'Performance is a feature, and we\'re committed to making Workblox the fastest work management platform available. More improvements coming soon!',
    },
    tags: ['Performance', 'Engineering', 'Infrastructure'],
    category: 'Technical',
    featured: false,
  },
  {
    id: '4',
    title: 'Team Collaboration Best Practices for Remote Teams',
    type: 'Article',
    status: 'Published',
    author: {
      name: 'Alex Rivera',
      avatar: 'AR',
      role: 'Content Lead',
    },
    publishedDate: '2025-01-10T11:00:00Z',
    readTime: 10,
    views: 4521,
    reactions: 298,
    excerpt: 'Learn how high-performing remote teams use Workblox to stay connected, aligned, and productive.',
    content: {
      introduction: 'Remote work is here to stay, but it comes with unique challenges. Based on insights from 500+ remote teams using Workblox, here are the collaboration practices that work.',
      sections: [
        {
          title: 'Over-Communicate by Default',
          content: 'In remote settings, context is easily lost. Successful teams document decisions, share progress updates proactively, and default to transparency. Use Workblox\'s activity feeds to keep everyone in the loop.',
        },
        {
          title: 'Establish Clear Norms',
          content: 'When will you be available? How quickly should people respond to messages? What warrants a meeting vs. an async update? Define these norms early and revisit them regularly.',
        },
        {
          title: 'Use Async Communication Effectively',
          content: 'Not everything needs a meeting. Use Workblox\'s commenting, @mentions, and status updates to communicate asynchronously. This respects people\'s time and creates a searchable record.',
        },
        {
          title: 'Create Opportunities for Connection',
          content: 'Remote work can feel isolating. Schedule virtual coffee chats, celebrate wins publicly, and use Workblox\'s team spaces to maintain social connections.',
        },
        {
          title: 'Measure What Matters',
          content: 'Focus on outcomes, not activity. Use Workblox\'s analytics to track progress on goals rather than monitoring online status. Trust your team to manage their time.',
        },
      ],
      conclusion: 'Remote collaboration is a skill that improves with practice. Use these best practices as a starting point, and adapt them to your team\'s unique needs.',
    },
    tags: ['Remote Work', 'Collaboration', 'Team Culture', 'Productivity'],
    category: 'Best Practices',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    id: '5',
    title: 'Introducing Workblox Mobile Apps',
    type: 'Product Update',
    status: 'Published',
    author: {
      name: 'Jordan Lee',
      avatar: 'JL',
      role: 'Mobile Lead',
    },
    publishedDate: '2025-01-08T10:00:00Z',
    readTime: 6,
    views: 6892,
    reactions: 521,
    badge: 'New',
    excerpt: 'Workblox is now available on iOS and Android. Manage your work from anywhere with our beautiful native apps.',
    content: {
      introduction: 'Today, we\'re excited to launch Workblox mobile apps for iOS and Android. Now you can stay productive wherever work takes you.',
      sections: [
        {
          title: 'Native Performance',
          content: 'Built with native technologies (Swift for iOS, Kotlin for Android), our apps are incredibly fast and responsive. Enjoy smooth animations, instant navigation, and offline support.',
        },
        {
          title: 'Mobile-Optimized Interface',
          content: 'We\'ve redesigned the experience from the ground up for mobile. Every tap, swipe, and gesture feels natural and efficient. Key actions are always one tap away.',
        },
        {
          title: 'Offline Mode',
          content: 'Work on planes, trains, and in remote locations. All your tasks, notes, and files are available offline. Changes sync automatically when you\'re back online.',
        },
        {
          title: 'Smart Notifications',
          content: 'Get notified about what matters. Our AI learns your preferences and only sends notifications for truly important updates. Never miss a deadline or mention.',
        },
      ],
      conclusion: 'Download Workblox today on the App Store and Google Play. Your entire workspace, now in your pocket.',
    },
    tags: ['Mobile', 'iOS', 'Android', 'Apps'],
    category: 'Features',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
  {
    id: '6',
    title: 'Security & Privacy in Workblox',
    type: 'Article',
    status: 'Published',
    author: {
      name: 'David Kim',
      avatar: 'DK',
      role: 'Security Lead',
    },
    publishedDate: '2025-01-05T13:00:00Z',
    readTime: 9,
    views: 2987,
    reactions: 187,
    excerpt: 'A deep dive into how we protect your data with enterprise-grade security and privacy controls.',
    content: {
      introduction: 'Security and privacy are not features – they\'re foundational to everything we build. Here\'s how Workblox keeps your data safe.',
      sections: [
        {
          title: 'End-to-End Encryption',
          content: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Only you can decrypt your sensitive information. We never have access to your unencrypted data.',
        },
        {
          title: 'SOC 2 Type II Certified',
          content: 'We\'ve completed SOC 2 Type II certification, demonstrating our commitment to security, availability, and confidentiality. We undergo regular third-party audits.',
        },
        {
          title: 'Granular Access Controls',
          content: 'Control who can see what with role-based access controls, team permissions, and guest access. Audit logs track every action for complete visibility.',
        },
        {
          title: 'Data Residency Options',
          content: 'Choose where your data is stored with regional data centers in the US, EU, and Asia. We comply with GDPR, CCPA, and other privacy regulations.',
        },
        {
          title: 'Regular Security Testing',
          content: 'We conduct penetration testing quarterly and have a bug bounty program with HackerOne. Security researchers help us stay ahead of threats.',
        },
      ],
      conclusion: 'Your trust is our most valuable asset. We\'re committed to maintaining the highest security and privacy standards. Questions? Contact our security team anytime.',
    },
    tags: ['Security', 'Privacy', 'Compliance', 'Enterprise'],
    category: 'Technical',
    featured: false,
  },
];

export function getArticleById(id: string): Article | undefined {
  return articlesData.find(article => article.id === id);
}

export function getArticlesByType(type: Article['type']): Article[] {
  return articlesData.filter(article => article.type === type);
}

export function getFeaturedArticles(): Article[] {
  return articlesData.filter(article => article.featured);
}

export function getRelatedArticles(currentArticleId: string, limit: number = 3): Article[] {
  const currentArticle = getArticleById(currentArticleId);
  if (!currentArticle) return [];

  // Find articles with matching tags or category
  const related = articlesData
    .filter(article => article.id !== currentArticleId)
    .map(article => {
      let score = 0;
      
      // Same category
      if (article.category === currentArticle.category) score += 3;
      
      // Same type
      if (article.type === currentArticle.type) score += 2;
      
      // Matching tags
      const matchingTags = article.tags.filter(tag => currentArticle.tags.includes(tag));
      score += matchingTags.length;
      
      return { article, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.article);

  return related;
}
