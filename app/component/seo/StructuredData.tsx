'use client';

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'realEstateAgent' | 'website' | 'breadcrumb';
  data?: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: Record<string, unknown> = {};

  switch (type) {
    case 'organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'MCR Getaways',
        legalName: 'MCR Getaways Ltd',
        url: 'https://www.mcrgetawaysltd.com',
        logo: 'https://www.mcrgetawaysltd.com/logo.png',
        foundingDate: '2024',
        founders: [
          {
            '@type': 'Person',
            name: 'MCR Getaways Team',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Manchester',
          addressLocality: 'Manchester',
          addressRegion: 'Greater Manchester',
          postalCode: 'M1',
          addressCountry: 'GB',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+44-7999-737846',
            contactType: 'Customer Service',
            email: 'info@mcrgetawaysltd.com',
            availableLanguage: 'English',
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
          geoRadius: '50000', // 50km radius
        },
      };
      break;

    case 'localBusiness':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: 'MCR Getaways',
        image: 'https://www.mcrgetawaysltd.com/header-1.png',
        '@id': 'https://www.mcrgetawaysltd.com',
        url: 'https://www.mcrgetawaysltd.com',
        telephone: '+44-7999-737846',
        email: 'info@mcrgetawaysltd.com',
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
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        priceRange: '£',
        areaServed: [
          {
            '@type': 'City',
            name: 'Manchester',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Greater Manchester',
          },
        ],
        serviceType: [
          'Property Rental',
          'Property Management',
          'Real Estate Investment',
          'Short Term Accommodation',
          'Holiday Lets',
        ],
        paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Property Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Property Rental Services',
                description: 'Professional property rental and management services in Manchester',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Short Term Stays',
                description: 'Comfortable short-term accommodation for visitors to Manchester',
              },
            },
          ],
        },
      };
      break;

    case 'website':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'MCR Getaways',
        url: 'https://www.mcrgetawaysltd.com',
        description: 'Manchester\'s premier property rental and management platform',
        publisher: {
          '@type': 'Organization',
          name: 'MCR Getaways',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.mcrgetawaysltd.com/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      };
      break;

    case 'breadcrumb':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: (data?.breadcrumbs as Array<{name: string, url: string}>)?.map((item, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })) || [],
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}