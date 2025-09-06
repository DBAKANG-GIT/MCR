import { render } from '@testing-library/react';
import StructuredData from '../StructuredData';

describe('StructuredData Component', () => {
  beforeEach(() => {
    // Clear any existing script tags
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
  });

  describe('Organization Schema', () => {
    it('should render organization structured data', () => {
      render(<StructuredData type="organization" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeTruthy();
      
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      expect(jsonData['@type']).toBe('Organization');
      expect(jsonData.name).toBe('MCR Getaways');
      expect(jsonData.url).toBe('https://www.mcrgetawaysltd.com');
      expect(jsonData.logo).toBe('https://www.mcrgetawaysltd.com/logo.png');
    });

    it('should include contact information', () => {
      render(<StructuredData type="organization" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      
      expect(jsonData.contactPoint).toEqual([{
        '@type': 'ContactPoint',
        telephone: '+44-7999-737846',
        email: 'info@mcrgetawaysltd.com',
        contactType: 'Customer Service',
        availableLanguage: 'English',
      }]);
    });

    it('should include social media links', () => {
      render(<StructuredData type="organization" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      
      expect(jsonData.sameAs).toEqual([
        'https://www.instagram.com/mcr.getaways.ltd',
        'https://www.tiktok.com/@mcr.getaways.ltd',
      ]);
    });
  });

  describe('Website Schema', () => {
    it('should render website structured data', () => {
      render(<StructuredData type="website" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeTruthy();
      
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      expect(jsonData['@type']).toBe('WebSite');
      expect(jsonData.name).toBe('MCR Getaways');
      expect(jsonData.url).toBe('https://www.mcrgetawaysltd.com');
    });

    it('should include search action', () => {
      render(<StructuredData type="website" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      
      expect(jsonData.potentialAction).toEqual({
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.mcrgetawaysltd.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      });
    });
  });

  describe('Local Business Schema', () => {
    it('should render local business structured data', () => {
      render(<StructuredData type="localBusiness" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      expect(scriptTag).toBeTruthy();
      
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      expect(jsonData['@type']).toBe('RealEstateAgent');
      expect(jsonData.name).toBe('MCR Getaways');
    });

    it('should include address information', () => {
      render(<StructuredData type="localBusiness" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      
      expect(jsonData.address).toEqual({
        '@type': 'PostalAddress',
        streetAddress: 'Manchester',
        addressLocality: 'Manchester',
        addressRegion: 'Greater Manchester',
        postalCode: 'M1',
        addressCountry: 'GB',
      });
    });

    it('should include geo coordinates', () => {
      render(<StructuredData type="localBusiness" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      
      expect(jsonData.geo).toEqual({
        '@type': 'GeoCoordinates',
        latitude: 53.4808,
        longitude: -2.2426,
      });
    });

    it('should include opening hours', () => {
      render(<StructuredData type="localBusiness" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      
      expect(jsonData.openingHoursSpecification).toEqual({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      });
    });

    it('should include service offerings', () => {
      render(<StructuredData type="localBusiness" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      
      expect(jsonData.hasOfferCatalog.itemListElement).toHaveLength(2);
      expect(jsonData.hasOfferCatalog.itemListElement[0].itemOffered.name).toBe('Property Rental Services');
      expect(jsonData.hasOfferCatalog.itemListElement[1].itemOffered.name).toBe('Short Term Stays');
    });

    it('should include service types', () => {
      render(<StructuredData type="localBusiness" />);
      
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      const jsonData = JSON.parse(scriptTag?.textContent || '{}');
      
      expect(jsonData.serviceType).toEqual([
        'Property Rental',
        'Property Management',
        'Real Estate Investment',
        'Short Term Accommodation',
        'Holiday Lets',
      ]);
    });
  });

  describe('Error Handling', () => {
    it('should handle invalid type gracefully', () => {
      expect(() => {
        render(<StructuredData type={'invalid' as any} />);
      }).not.toThrow();
    });
  });

  describe('Multiple Instances', () => {
    it('should handle multiple structured data components', () => {
      render(
        <>
          <StructuredData type="organization" />
          <StructuredData type="website" />
          <StructuredData type="localBusiness" />
        </>
      );
      
      const scriptTags = document.querySelectorAll('script[type="application/ld+json"]');
      expect(scriptTags).toHaveLength(3);
      
      const types = Array.from(scriptTags).map(script => {
        const jsonData = JSON.parse(script.textContent || '{}');
        return jsonData['@type'];
      });
      
      expect(types).toContain('Organization');
      expect(types).toContain('WebSite');
      expect(types).toContain('RealEstateAgent');
    });
  });
});