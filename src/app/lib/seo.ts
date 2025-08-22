export const siteConfig = {
  name: "AEGONTECH LLC",
  description: "Leading software development agency specializing in custom web applications, mobile apps, and enterprise solutions. Transform your business with cutting-edge technology.",
  url: "https://aegontech.dev",
  ogImage: "https://aegontech.dev/og-image.jpg",
  links: {
    twitter: "https://twitter.com/aegontech",
    github: "https://github.com/aegontech",
    linkedin: "https://linkedin.com/company/aegontech",
  },
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "enterprise solutions",
    "custom software",
    "technology consulting",
    "full-stack development",
    "React development",
    "Node.js development",
    "cloud solutions",
    "DevOps services",
    "UI/UX design",
    "digital transformation",
    "business automation",
    "API development"
  ],
  author: "AEGONTECH LLC Team",
  creator: "AEGONTECH LLC",
};

export const pageMetadata = {
  home: {
    title: "AEGONTECH LLC - Leading Software Development Agency",
    description: "Transform your business with cutting-edge software solutions. We specialize in custom web applications, mobile apps, and enterprise solutions.",
  },
  services: {
    title: "Services - AEGONTECH LLC",
    description: "Comprehensive software development services including web applications, mobile apps, cloud solutions, and enterprise software. Tailored to your business needs.",
  },
  contact: {
    title: "Contact Us - AEGONTECH LLC",
    description: "Get in touch with our expert team for your software development needs. Free consultation available for new projects.",
  },
  privacy: {
    title: "Privacy Policy - AEGONTECH LLC",
    description: "Learn how we protect your data and ensure your privacy. Our comprehensive privacy policy outlines our commitment to data security.",
  },
  terms: {
    title: "Terms of Service - AEGONTECH LLC",
    description: "Read our terms of service to understand the agreement between you and AegonTech when using our services.",
  },
  support: {
    title: "Support - AEGONTECH LLC",
    description: "Get help with our comprehensive support resources including FAQs, documentation, and 24/7 technical support.",
  },
};

export function generateMetadata(page: keyof typeof pageMetadata) {
  const pageData = pageMetadata[page];
  
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${siteConfig.url}/${page === 'home' ? '' : page}`,
      title: pageData.title,
      description: pageData.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      images: [siteConfig.ogImage],
      creator: "@aegontech",
    },
    alternates: {
      canonical: `${siteConfig.url}/${page === 'home' ? '' : page}`,
    },
  };
}