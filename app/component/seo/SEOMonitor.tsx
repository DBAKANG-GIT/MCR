'use client';

import { useEffect } from 'react';

export default function SEOMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Core Web Vitals monitoring
      const measureCoreWebVitals = () => {
        // Largest Contentful Paint (LCP)
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          // Track LCP with analytics
          if (window.gtag) {
            window.gtag('event', 'LCP', {
              event_category: 'Core Web Vitals',
              value: Math.round(lastEntry.startTime),
              custom_parameter_1: lastEntry.startTime > 2500 ? 'poor' : lastEntry.startTime > 1200 ? 'needs-improvement' : 'good'
            });
          }
        }).observe({ type: 'largest-contentful-paint', buffered: true });

        // First Input Delay (FID)
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            if (window.gtag && 'processingStart' in entry) {
              const fidEntry = entry as PerformanceEventTiming;
              const delay = fidEntry.processingStart - fidEntry.startTime;
              window.gtag('event', 'FID', {
                event_category: 'Core Web Vitals',
                value: Math.round(delay),
                custom_parameter_1: delay > 100 ? 'poor' : delay > 25 ? 'needs-improvement' : 'good'
              });
            }
          });
        }).observe({ type: 'first-input', buffered: true });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            if ('hadRecentInput' in entry && 'value' in entry) {
              const clsEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
              if (!clsEntry.hadRecentInput) {
                clsValue += clsEntry.value;
              }
            }
          });
          
          if (window.gtag) {
            window.gtag('event', 'CLS', {
              event_category: 'Core Web Vitals',
              value: Math.round(clsValue * 1000),
              custom_parameter_1: clsValue > 0.25 ? 'poor' : clsValue > 0.1 ? 'needs-improvement' : 'good'
            });
          }
        }).observe({ type: 'layout-shift', buffered: true });
      };

      // Page load performance
      const measurePageLoad = () => {
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          const metrics = {
            dns_lookup: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp_connection: navigation.connectEnd - navigation.connectStart,
            server_response: navigation.responseStart - navigation.requestStart,
            page_download: navigation.responseEnd - navigation.responseStart,
            dom_processing: navigation.domContentLoadedEventStart - navigation.responseEnd,
            total_load_time: navigation.loadEventEnd - navigation.fetchStart,
          };
          
          // Track with analytics
          Object.entries(metrics).forEach(([key, value]) => {
            if (window.gtag) {
              window.gtag('event', 'page_timing', {
                event_category: 'Performance',
                event_label: key,
                value: Math.round(value),
              });
            }
          });
        });
      };

      // SEO meta validation
      const validateSEO = () => {
        const seoChecks = {
          has_title: !!document.title && document.title.length > 0 && document.title.length <= 60,
          has_description: !!document.querySelector('meta[name="description"]'),
          has_canonical: !!document.querySelector('link[rel="canonical"]'),
          has_og_image: !!document.querySelector('meta[property="og:image"]'),
          has_schema: !!document.querySelector('script[type="application/ld+json"]'),
          has_h1: !!document.querySelector('h1'),
          images_have_alt: Array.from(document.querySelectorAll('img')).every(img => img.getAttribute('alt')),
        };
        
        const seoScore = Object.values(seoChecks).filter(Boolean).length / Object.values(seoChecks).length;
        
        if (window.gtag) {
          window.gtag('event', 'seo_audit', {
            event_category: 'SEO',
            value: Math.round(seoScore * 100),
            custom_parameter_1: JSON.stringify(seoChecks),
          });
        }
      };

      // Mobile friendliness check
      const checkMobileFriendliness = () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        const isMobileFriendly = !!viewport && viewport.getAttribute('content')?.includes('width=device-width');
        
        if (window.gtag) {
          window.gtag('event', 'mobile_friendly', {
            event_category: 'SEO',
            value: isMobileFriendly ? 1 : 0,
          });
        }
      };

      // Run all monitoring
      setTimeout(() => {
        measureCoreWebVitals();
        measurePageLoad();
        validateSEO();
        checkMobileFriendliness();
      }, 1000);

      // Monitor 404 errors
      const original404Handler = window.onerror;
      window.onerror = (message, source, lineno, colno, error) => {
        if (message.toString().includes('404') || source?.includes('404')) {
          if (window.gtag) {
            window.gtag('event', '404_error', {
              event_category: 'Error',
              event_label: window.location.pathname,
            });
          }
        }
        
        if (original404Handler) {
          return original404Handler(message, source, lineno, colno, error);
        }
        return false;
      };

      // Track scroll depth for engagement
      let maxScroll = 0;
      const trackScrollDepth = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          // Track milestones
          if ([25, 50, 75, 90, 100].includes(scrollPercent)) {
            if (window.gtag) {
              window.gtag('event', 'scroll_depth', {
                event_category: 'Engagement',
                value: scrollPercent,
              });
            }
          }
        }
      };
      
      window.addEventListener('scroll', trackScrollDepth, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
      };
    }
  }, []);

  return null; // This component doesn't render anything
}