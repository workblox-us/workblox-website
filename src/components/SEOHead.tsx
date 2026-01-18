import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  page?: string;
}

export function SEOHead({
  title = 'Workblox | Work Finally Under Control',
  description = 'Workblox unifies tasks, recurring processes, docs, calendars, and conversations into one intelligent workspace. Get early access to the beta.',
  keywords = 'AI work management, project management software, team collaboration, workspace automation, AI productivity tools, unified workspace, remote team management, task management AI, smart calendar, AI assistant, project planning software, startup tools, agile project management',
  image = 'https://workblox.ai/og-image.jpg',
  url = 'https://workblox.ai',
  type = 'website',
  author = 'Workblox Team',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update or create meta tags
    const metaTags = [
      // Basic Meta Tags
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: author },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      
      // Open Graph / Facebook
      { property: 'og:type', content: type },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Workblox - AI-Powered Work Management Platform' },
      { property: 'og:site_name', content: 'Workblox' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:site', content: '@workblox' },
      { name: 'twitter:creator', content: '@workblox' },
      
      // Additional SEO
      { name: 'application-name', content: 'Workblox' },
      { name: 'apple-mobile-web-app-title', content: 'Workblox' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'theme-color', content: '#000000' },
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'msapplication-navbutton-color', content: '#000000' },
      
      // Verification tags (add your actual verification codes)
      { name: 'google-site-verification', content: 'YOUR_GOOGLE_VERIFICATION_CODE' },
      { name: 'msvalidate.01', content: 'YOUR_BING_VERIFICATION_CODE' },
      
      // Geographic targeting
      { name: 'geo.region', content: 'US' },
      { name: 'geo.placename', content: 'United States' },
      
      // Content rating
      { name: 'rating', content: 'general' },
      { name: 'distribution', content: 'global' },
    ];
    
    // Add article-specific tags if provided
    if (publishedTime) {
      metaTags.push({ property: 'article:published_time', content: publishedTime });
    }
    if (modifiedTime) {
      metaTags.push({ property: 'article:modified_time', content: modifiedTime });
    }
    if (section) {
      metaTags.push({ property: 'article:section', content: section });
    }
    if (tags.length > 0) {
      tags.forEach(tag => {
        metaTags.push({ property: 'article:tag', content: tag });
      });
    }
    
    // Update or create each meta tag
    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value!);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
    // Add structured data (JSON-LD)
    updateStructuredData(title, description, image, url);
    
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, section, tags]);
  
  return null;
}

function updateStructuredData(title: string, description: string, image: string, url: string) {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Create structured data for Organization and Website
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://workblox.ai/#organization',
        name: 'Workblox',
        url: 'https://workblox.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://workblox.ai/logo.png',
          width: 512,
          height: 512,
        },
        description: 'AI-powered work management platform that unifies planning, communication, automation, and execution into a single intelligent workspace.',
        sameAs: [
          'https://twitter.com/workblox',
          'https://www.linkedin.com/company/workblox',
          'https://github.com/workblox',
          'https://www.youtube.com/@workblox',
        ],
        foundingDate: '2025',
        founders: [
          {
            '@type': 'Person',
            name: 'Workblox Team',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://workblox.ai/#website',
        url: 'https://workblox.ai',
        name: 'Workblox',
        description: description,
        publisher: {
          '@id': 'https://workblox.ai/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://workblox.ai/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url: url,
        name: title,
        description: description,
        isPartOf: {
          '@id': 'https://workblox.ai/#website',
        },
        about: {
          '@id': 'https://workblox.ai/#organization',
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: image,
          width: 1200,
          height: 630,
        },
        datePublished: '2025-01-05T00:00:00+00:00',
        dateModified: new Date().toISOString(),
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Workblox',
        operatingSystem: 'Web, iOS, Android, macOS, Windows',
        applicationCategory: 'BusinessApplication',
        description: 'AI-powered work management platform that unifies planning, communication, automation, and execution.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/PreOrder',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          ratingCount: '100',
          bestRating: '5',
          worstRating: '1',
        },
        screenshot: image,
        featureList: [
          'AI-powered task management',
          'Smart calendar and scheduling',
          'Real-time collaboration',
          'Workspace automation',
          'Third-party integrations',
          'Advanced analytics',
          'Mobile and desktop apps',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': 'https://workblox.ai',
              name: 'Home',
            },
          },
        ],
      },
    ],
  };
  
  // Add the structured data script
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
}