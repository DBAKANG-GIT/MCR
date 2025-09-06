'use client';

import Head from 'next/head';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  noindex?: boolean;
  structuredData?: any;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function SEOMeta({
  title = 'MCR Getaways | Manchester\'s Premier Property & Rental Platform',
  description = 'Find your dream home, invest in property, or enjoy a short-term stay in Manchester. MCR Getaways offers tailored solutions for renters, landlords, and investors.',
  keywords = [
    'Manchester property',
    'property rental',
    'landlord services',
    'real estate investment',
    'short-term stays',
    'property management',
    'MCR Getaways',
    'apartments Manchester',
    'UK real estate',
    'holiday lets',
  ],
  canonical,
  ogImage = '/header-1.png',
  ogType = 'website',
  noindex = false,
  structuredData,
}: SEOMetaProps) {
  const fullTitle = title.includes('MCR Getaways') ? title : `${title} | MCR Getaways`;
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="MCR Getaways Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`https://www.mcrgetawaysltd.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="MCR Getaways - Manchester Property Services" />
      <meta property="og:site_name" content="MCR Getaways" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://www.mcrgetawaysltd.com${ogImage}`} />
      <meta name="twitter:image:alt" content="MCR Getaways - Manchester Property Services" />
      
      {/* Business Specific */}
      <meta property="business:contact_data:street_address" content="Manchester" />
      <meta property="business:contact_data:locality" content="Manchester" />
      <meta property="business:contact_data:region" content="Greater Manchester" />
      <meta property="business:contact_data:postal_code" content="M1" />
      <meta property="business:contact_data:country_name" content="United Kingdom" />
      <meta property="business:contact_data:email" content="info@mcrgetawaysltd.com" />
      <meta property="business:contact_data:phone_number" content="+44-7999-737846" />
      <meta property="business:contact_data:website" content="https://www.mcrgetawaysltd.com" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="GB-MAN" />
      <meta name="geo.placename" content="Manchester" />
      <meta name="geo.position" content="53.4808;-2.2426" />
      <meta name="ICBM" content="53.4808, -2.2426" />
      
      {/* Additional SEO */}
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="copyright" content="© 2025 MCR Getaways Ltd. All rights reserved." />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/header-1.png" as="image" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//vitals.vercel-analytics.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}