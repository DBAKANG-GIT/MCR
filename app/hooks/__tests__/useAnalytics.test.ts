import { renderHook, act } from '@testing-library/react';
import { useAnalytics } from '../useAnalytics';

// Mock gtag function
const mockGtag = jest.fn();
global.gtag = mockGtag;

// Mock track from Vercel Analytics
const mockTrack = jest.fn();
jest.mock('@vercel/analytics', () => ({
  track: mockTrack,
}));

describe('useAnalytics Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset window.gtag
    Object.defineProperty(window, 'gtag', {
      value: mockGtag,
      writable: true,
    });
  });

  it('should initialize without errors', () => {
    const { result } = renderHook(() => useAnalytics());
    expect(result.current).toBeDefined();
  });

  describe('trackContactFormSubmission', () => {
    it('should track contact form submission', () => {
      const { result } = renderHook(() => useAnalytics());
      
      act(() => {
        result.current.trackContactFormSubmission();
      });

      expect(mockTrack).toHaveBeenCalledWith('Contact Form Submitted', {
        category: 'Engagement',
        label: 'Contact Page'
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'Contact Form Submitted', 'Engagement', 'Contact Page', undefined);
    });

    it('should handle missing gtag gracefully', () => {
      // Remove gtag from window
      delete (window as any).gtag;
      
      const { result } = renderHook(() => useAnalytics());
      
      expect(() => {
        result.current.trackContactFormSubmission();
      }).not.toThrow();
    });
  });

  describe('trackNewsletterSignup', () => {
    it('should track newsletter signup with desktop source', () => {
      const { result } = renderHook(() => useAnalytics());
      
      act(() => {
        result.current.trackNewsletterSignup('desktop');
      });

      expect(mockTrack).toHaveBeenCalledWith('Newsletter Signup', {
        category: 'Lead Generation',
        label: 'desktop'
      });
    });

    it('should track newsletter signup with mobile source', () => {
      const { result } = renderHook(() => useAnalytics());
      
      act(() => {
        result.current.trackNewsletterSignup('mobile');
      });

      expect(mockTrack).toHaveBeenCalledWith('Newsletter Signup', {
        category: 'Lead Generation',
        label: 'mobile'
      });
    });
  });

  describe('trackWhatsAppClick', () => {
    it('should track WhatsApp button click', () => {
      const { result } = renderHook(() => useAnalytics());
      
      act(() => {
        result.current.trackWhatsAppClick();
      });

      expect(mockTrack).toHaveBeenCalledWith('WhatsApp Clicked', {
        category: 'Communication',
        label: 'Floating Button'
      });
    });
  });

  describe('trackSocialClick', () => {
    it('should track Instagram social click', () => {
      const { result } = renderHook(() => useAnalytics());
      
      act(() => {
        result.current.trackSocialClick('Instagram');
      });

      expect(mockTrack).toHaveBeenCalledWith('Social Media Click', {
        category: 'Social Engagement',
        label: 'Instagram'
      });
    });

    it('should track TikTok social click', () => {
      const { result } = renderHook(() => useAnalytics());
      
      act(() => {
        result.current.trackSocialClick('TikTok');
      });

      expect(mockTrack).toHaveBeenCalledWith('Social Media Click', {
        category: 'Social Engagement',
        label: 'TikTok'
      });
    });
  });

  describe('trackPrivacyPolicyDownload', () => {
    it('should track privacy policy PDF download', () => {
      const { result } = renderHook(() => useAnalytics());
      
      act(() => {
        result.current.trackPrivacyPolicyDownload();
      });

      expect(mockTrack).toHaveBeenCalledWith('Privacy Policy Downloaded', {
        category: 'Document',
        label: 'PDF Download'
      });
    });
  });

  describe('trackPageView', () => {
    it('should track custom page view', () => {
      const { result } = renderHook(() => useAnalytics());
      
      act(() => {
        result.current.trackPageView('/properties/manchester');
      });

      expect(mockTrack).toHaveBeenCalledWith('Page View', {
        category: 'Navigation',
        label: '/properties/manchester'
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'Page View', 'Navigation', '/properties/manchester', undefined);
    });
  });

  describe('trackEvent', () => {
    it('should track custom events with properties', () => {
      const { result } = renderHook(() => useAnalytics());
      
      act(() => {
        result.current.trackEvent('Custom Event', {
          category: 'Test',
          label: 'Custom Label',
          value: 100
        });
      });

      expect(mockTrack).toHaveBeenCalledWith('Custom Event', {
        category: 'Test',
        label: 'Custom Label',
        value: 100
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'Custom Event', 'Test', 'Custom Label', 100);
    });

    it('should track events without category', () => {
      const { result } = renderHook(() => useAnalytics());
      
      act(() => {
        result.current.trackEvent('Simple Event');
      });

      expect(mockTrack).toHaveBeenCalledWith('Simple Event', undefined);
      expect(mockGtag).not.toHaveBeenCalled();
    });
  });

  describe('error handling', () => {
    it('should handle gtag errors gracefully', () => {
      const mockGtagError = jest.fn().mockImplementation(() => {
        throw new Error('Analytics error');
      });
      
      // Mock the GoogleAnalytics trackGAEvent to throw error
      jest.doMock('../component/analytics/GoogleAnalytics', () => ({
        trackGAEvent: mockGtagError
      }));
      
      const { result } = renderHook(() => useAnalytics());
      
      // Should not throw error even if gtag throws
      expect(() => {
        result.current.trackContactFormSubmission();
      }).not.toThrow();
    });

    it('should handle track function errors gracefully', () => {
      mockTrack.mockImplementation(() => {
        throw new Error('Vercel Analytics error');
      });
      
      const { result } = renderHook(() => useAnalytics());
      
      expect(() => {
        result.current.trackContactFormSubmission();
      }).not.toThrow();
    });
  });
});