interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  noindex?: boolean;
}

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: 'MCR Getaways | Manchester\'s Premier Property & Rental Platform',
    description: 'Find your dream home, invest in property, or enjoy a short-term stay in Manchester. MCR Getaways offers tailored solutions for renters, landlords, and investors with expert property management and seamless booking experiences.',
    keywords: [
      'Manchester property rental',
      'property management Manchester',
      'short term stays Manchester',
      'landlord services',
      'real estate investment',
      'holiday lets Manchester',
      'MCR Getaways',
      'Manchester accommodation',
      'property investment UK',
      'Manchester city center rentals',
    ],
    canonical: 'https://www.mcrgetawaysltd.com',
    ogImage: '/header-1.png',
  },
  
  about: {
    title: 'About Us - Your Trusted Manchester Property Experts',
    description: 'Learn about MCR Getaways\' mission to transform Manchester\'s property market. Discover our expert team, values, and commitment to exceptional service for landlords, tenants, and investors.',
    keywords: [
      'MCR Getaways about',
      'Manchester property experts',
      'property management team',
      'real estate professionals',
      'Manchester property services',
      'trusted property agents',
      'property investment advisors',
    ],
    canonical: 'https://www.mcrgetawaysltd.com/about',
    ogImage: '/about-hero.png',
  },
  
  contact: {
    title: 'Contact Us - Get Expert Property Advice in Manchester',
    description: 'Get in touch with MCR Getaways for personalized property solutions in Manchester. Contact our expert team for rentals, property management, or investment opportunities. Call +44 7999 737846.',
    keywords: [
      'contact MCR Getaways',
      'Manchester property contact',
      'property advice Manchester',
      'real estate consultation',
      'property management contact',
      'Manchester property services',
      'get property quote',
      'property inquiry Manchester',
    ],
    canonical: 'https://www.mcrgetawaysltd.com/contact',
    ogImage: '/contact-hero.png',
  },
  
  landlords: {
    title: 'Landlords & Investors - Maximize Your Property Returns in Manchester',
    description: 'Comprehensive property management services for Manchester landlords and investors. Maximize rental income, minimize void periods, and enjoy hassle-free property investment with MCR Getaways.',
    keywords: [
      'Manchester landlord services',
      'property management Manchester',
      'rental property investment',
      'landlord support services',
      'property portfolio management',
      'Manchester buy-to-let',
      'property investment returns',
      'rental income optimization',
      'landlord property services',
    ],
    canonical: 'https://www.mcrgetawaysltd.com/landlords',
    ogImage: '/landlords-hero.png',
  },
  
  terms: {
    title: 'Terms & Conditions - MCR Getaways Service Agreement',
    description: 'Read MCR Getaways\' terms and conditions for property rental, management, and accommodation services in Manchester. Understand your rights and obligations as our valued client.',
    keywords: [
      'MCR Getaways terms',
      'property rental terms',
      'service conditions',
      'rental agreement terms',
      'property management conditions',
    ],
    canonical: 'https://www.mcrgetawaysltd.com/terms',
    noindex: true,
  },
  
  policy: {
    title: 'Privacy Policy - How We Protect Your Personal Information',
    description: 'Learn how MCR Getaways collects, uses, and protects your personal information. Our comprehensive privacy policy ensures GDPR compliance and data security for all clients.',
    keywords: [
      'MCR Getaways privacy policy',
      'data protection',
      'GDPR compliance',
      'personal information security',
      'privacy rights',
    ],
    canonical: 'https://www.mcrgetawaysltd.com/policy',
    noindex: true,
  },
};

export function getSEOConfig(page: string): SEOConfig {
  return seoConfig[page] || seoConfig.home;
}

// Local business structured data
export const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://www.mcrgetawaysltd.com/#organization',
  name: 'MCR Getaways',
  alternateName: 'MCR Getaways Ltd',
  url: 'https://www.mcrgetawaysltd.com',
  logo: 'https://www.mcrgetawaysltd.com/logo.png',
  image: 'https://www.mcrgetawaysltd.com/header-1.png',
  description: 'Manchester\'s premier property rental and management platform offering tailored solutions for renters, landlords, and investors.',
  
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Manchester',
    addressLocality: 'Manchester',
    addressRegion: 'Greater Manchester',
    postalCode: 'M1',
    addressCountry: 'GB',
  },
  
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.4808,
    longitude: -2.2426,
  },
  
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-7999-737846',
    email: 'info@mcrgetawaysltd.com',
    contactType: 'customer service',
    availableLanguage: ['English'],
    areaServed: 'Manchester, UK',
  },
  
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '16:00',
    },
  ],
  
  sameAs: [
    'https://www.instagram.com/mcr.getaways.ltd',
    'https://www.tiktok.com/@mcr.getaways.ltd',
  ],
  
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 53.4808,
      longitude: -2.2426,
    },
    geoRadius: '50000',
  },
  
  knowsAbout: [
    'Property Management',
    'Real Estate Investment',
    'Rental Properties',
    'Short Term Accommodation',
    'Holiday Lets',
    'Buy to Let',
    'Property Portfolio Management',
  ],
  
  areaServed: [
    {
      '@type': 'City',
      name: 'Manchester',
      sameAs: 'https://en.wikipedia.org/wiki/Manchester',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Greater Manchester',
      sameAs: 'https://en.wikipedia.org/wiki/Greater_Manchester',
    },
  ],
  
  priceRange: '££',
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'Online Payment'],
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Property Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Property Management',
          description: 'Comprehensive property management services for landlords in Manchester',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Short Term Rentals',
          description: 'Quality short-term accommodation for visitors to Manchester',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Property Investment Advice',
          description: 'Expert guidance on property investment opportunities in Manchester',
        },
      },
    ],
  },
  
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
};