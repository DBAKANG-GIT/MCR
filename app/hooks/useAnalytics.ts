'use client';

import { track } from '@vercel/analytics';
import { trackGAEvent } from '../component/analytics/GoogleAnalytics';

export const useAnalytics = () => {
  const trackEvent = (eventName: string, properties?: Record<string, string | number | boolean>) => {
    // Track with Vercel Analytics (free tier - basic events only)
    track(eventName, properties);
    
    // Track with Google Analytics 4
    if (properties?.category) {
      trackGAEvent(
        eventName,
        String(properties.category),
        properties.label ? String(properties.label) : undefined,
        typeof properties.value === 'number' ? properties.value : undefined
      );
    }
  };

  // Predefined business events
  const trackContactFormSubmission = () => {
    trackEvent('Contact Form Submitted', {
      category: 'Engagement',
      label: 'Contact Page'
    });
  };

  const trackNewsletterSignup = (source: 'desktop' | 'mobile') => {
    trackEvent('Newsletter Signup', {
      category: 'Lead Generation',
      label: source
    });
  };

  const trackWhatsAppClick = () => {
    trackEvent('WhatsApp Clicked', {
      category: 'Communication',
      label: 'Floating Button'
    });
  };

  const trackSocialClick = (platform: string) => {
    trackEvent('Social Media Click', {
      category: 'Social Engagement',
      label: platform
    });
  };

  const trackPrivacyPolicyDownload = () => {
    trackEvent('Privacy Policy Downloaded', {
      category: 'Document',
      label: 'PDF Download'
    });
  };

  const trackPageView = (pageName: string) => {
    trackEvent('Page View', {
      category: 'Navigation',
      label: pageName
    });
  };

  return {
    trackEvent,
    trackContactFormSubmission,
    trackNewsletterSignup,
    trackWhatsAppClick,
    trackSocialClick,
    trackPrivacyPolicyDownload,
    trackPageView,
  };
};