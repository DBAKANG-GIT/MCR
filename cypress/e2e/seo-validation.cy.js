describe('SEO Validation', () => {
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/landlords', name: 'Landlords' },
    { path: '/terms', name: 'Terms' },
    { path: '/policy', name: 'Policy' }
  ];

  describe('Basic SEO Elements', () => {
    pages.forEach((page) => {
      it(`should have proper SEO elements on ${page.name} page`, () => {
        cy.visit(page.path, { failOnStatusCode: false });
        cy.checkSEOElements();
      });
    });
  });

  describe('Title Tags', () => {
    it('should have unique and descriptive titles for each page', () => {
      const pageTitles = {};
      
      pages.forEach((page) => {
        cy.visit(page.path, { failOnStatusCode: false });
        cy.title().then((title) => {
          // Title should not be empty
          expect(title).to.not.be.empty;
          
          // Title should be under 60 characters for good SEO
          expect(title.length).to.be.lessThan(61);
          
          // Title should be unique
          expect(pageTitles[title]).to.be.undefined;
          pageTitles[title] = page.path;
          
          // Title should contain brand name
          expect(title).to.contain('MCR');
        });
      });
    });

    it('should have descriptive titles that match page content', () => {
      cy.visit('/');
      cy.title().should('contain', 'MCR Getaways');
      cy.title().should('contain', 'Manchester');
      
      cy.visit('/contact');
      cy.title().should('contain', 'Contact');
      
      cy.visit('/about');
      cy.title().should('contain', 'About');
      
      cy.visit('/landlords');
      cy.title().should('contain', 'Landlord');
    });
  });

  describe('Meta Descriptions', () => {
    it('should have unique and compelling meta descriptions', () => {
      const descriptions = {};
      
      pages.forEach((page) => {
        cy.visit(page.path, { failOnStatusCode: false });
        cy.get('meta[name="description"]')
          .should('exist')
          .invoke('attr', 'content')
          .then((description) => {
            // Description should not be empty
            expect(description).to.not.be.empty;
            
            // Description should be between 120-160 characters for optimal SEO
            expect(description.length).to.be.greaterThan(120);
            expect(description.length).to.be.lessThan(161);
            
            // Description should be unique
            expect(descriptions[description]).to.be.undefined;
            descriptions[description] = page.path;
            
            // Description should contain relevant keywords
            expect(description).to.contain('Manchester');
          });
      });
    });
  });

  describe('Heading Structure', () => {
    pages.forEach((page) => {
      it(`should have proper heading hierarchy on ${page.name} page`, () => {
        cy.visit(page.path, { failOnStatusCode: false });
        
        // Should have exactly one H1
        cy.get('h1').should('have.length', 1);
        
        // H1 should not be empty
        cy.get('h1').should('not.be.empty');
        
        // H1 should contain relevant keywords
        cy.get('h1').then(($h1) => {
          const h1Text = $h1.text();
          if (page.path === '/') {
            expect(h1Text).to.match(/dream|home|manchester|property/i);
          } else if (page.path === '/contact') {
            expect(h1Text).to.match(/contact|get in touch|reach out/i);
          }
        });
        
        // Check heading hierarchy (H2s should come after H1, etc.)
        cy.get('h1, h2, h3, h4, h5, h6').then(($headings) => {
          let currentLevel = 0;
          $headings.each((index, heading) => {
            const level = parseInt(heading.tagName.substring(1));
            if (index === 0) {
              expect(level).to.equal(1); // First heading should be H1
            } else {
              expect(level).to.be.at.most(currentLevel + 1); // No skipping levels
            }
            currentLevel = level;
          });
        });
      });
    });
  });

  describe('Canonical URLs', () => {
    pages.forEach((page) => {
      it(`should have proper canonical URL on ${page.name} page`, () => {
        cy.visit(page.path, { failOnStatusCode: false });
        
        cy.get('link[rel="canonical"]')
          .should('exist')
          .invoke('attr', 'href')
          .then((href) => {
            expect(href).to.contain('mcrgetawaysltd.com');
            expect(href).to.match(/^https?:\/\//);
            
            if (page.path === '/') {
              expect(href).to.equal('https://www.mcrgetawaysltd.com');
            } else {
              expect(href).to.contain(page.path);
            }
          });
      });
    });
  });

  describe('Open Graph Tags', () => {
    pages.forEach((page) => {
      it(`should have proper Open Graph tags on ${page.name} page`, () => {
        cy.visit(page.path, { failOnStatusCode: false });
        
        // Check required OG tags
        cy.get('meta[property="og:title"]')
          .should('exist')
          .invoke('attr', 'content')
          .should('not.be.empty');
        
        cy.get('meta[property="og:description"]')
          .should('exist')
          .invoke('attr', 'content')
          .should('not.be.empty');
        
        cy.get('meta[property="og:image"]')
          .should('exist')
          .invoke('attr', 'content')
          .should('match', /\.(jpg|jpeg|png|webp)$/i);
        
        cy.get('meta[property="og:url"]')
          .should('exist')
          .invoke('attr', 'content')
          .should('contain', 'mcrgetawaysltd.com');
        
        cy.get('meta[property="og:type"]')
          .should('exist')
          .invoke('attr', 'content')
          .should('be.oneOf', ['website', 'article', 'business.business']);
      });
    });
  });

  describe('Twitter Card Tags', () => {
    it('should have proper Twitter Card meta tags', () => {
      cy.visit('/');
      
      cy.get('meta[name="twitter:card"]')
        .should('exist')
        .invoke('attr', 'content')
        .should('equal', 'summary_large_image');
      
      cy.get('meta[name="twitter:title"]')
        .should('exist')
        .invoke('attr', 'content')
        .should('not.be.empty');
      
      cy.get('meta[name="twitter:description"]')
        .should('exist')
        .invoke('attr', 'content')
        .should('not.be.empty');
      
      cy.get('meta[name="twitter:image"]')
        .should('exist')
        .invoke('attr', 'content')
        .should('match', /\.(jpg|jpeg|png|webp)$/i);
    });
  });

  describe('Structured Data', () => {
    it('should have valid JSON-LD structured data', () => {
      cy.visit('/');
      
      cy.get('script[type="application/ld+json"]').each(($script) => {
        const jsonText = $script.text();
        
        // Should be valid JSON
        expect(() => JSON.parse(jsonText)).to.not.throw();
        
        const jsonData = JSON.parse(jsonText);
        
        // Should have required schema.org properties
        expect(jsonData).to.have.property('@context', 'https://schema.org');
        expect(jsonData).to.have.property('@type');
        expect(jsonData).to.have.property('name');
        
        // Validate based on schema type
        if (jsonData['@type'] === 'Organization') {
          expect(jsonData).to.have.property('url');
          expect(jsonData).to.have.property('contactPoint');
          expect(jsonData.contactPoint).to.have.property('telephone');
          expect(jsonData.contactPoint).to.have.property('email');
        } else if (jsonData['@type'] === 'WebSite') {
          expect(jsonData).to.have.property('url');
          expect(jsonData).to.have.property('potentialAction');
        } else if (jsonData['@type'] === 'RealEstateAgent') {
          expect(jsonData).to.have.property('address');
          expect(jsonData).to.have.property('geo');
          expect(jsonData).to.have.property('openingHoursSpecification');
        }
      });
    });

    it('should have organization structured data with complete information', () => {
      cy.visit('/');
      
      cy.get('script[type="application/ld+json"]').then(($scripts) => {
        const orgScript = Array.from($scripts).find(script => {
          const data = JSON.parse(script.textContent);
          return data['@type'] === 'Organization';
        });
        
        expect(orgScript).to.exist;
        
        const orgData = JSON.parse(orgScript.textContent);
        expect(orgData.name).to.equal('MCR Getaways');
        expect(orgData.url).to.equal('https://www.mcrgetawaysltd.com');
        expect(orgData.contactPoint.telephone).to.equal('+44-7999-737846');
        expect(orgData.contactPoint.email).to.equal('info@mcrgetawaysltd.com');
        expect(orgData.sameAs).to.be.an('array').that.includes.members([
          'https://www.instagram.com/mcr.getaways.ltd',
          'https://www.tiktok.com/@mcr.getaways.ltd'
        ]);
      });
    });

    it('should have local business structured data for location-based SEO', () => {
      cy.visit('/');
      
      cy.get('script[type="application/ld+json"]').then(($scripts) => {
        const businessScript = Array.from($scripts).find(script => {
          const data = JSON.parse(script.textContent);
          return data['@type'] === 'RealEstateAgent';
        });
        
        expect(businessScript).to.exist;
        
        const businessData = JSON.parse(businessScript.textContent);
        expect(businessData.address.addressLocality).to.equal('Manchester');
        expect(businessData.address.addressCountry).to.equal('GB');
        expect(businessData.geo.latitude).to.equal(53.4808);
        expect(businessData.geo.longitude).to.equal(-2.2426);
        expect(businessData.priceRange).to.equal('££');
        expect(businessData.aggregateRating.ratingValue).to.equal('4.8');
      });
    });
  });

  describe('Image SEO', () => {
    pages.forEach((page) => {
      it(`should have proper image optimization on ${page.name} page`, () => {
        cy.visit(page.path, { failOnStatusCode: false });
        
        // All images should have alt text
        cy.get('img').each(($img) => {
          cy.wrap($img).should('have.attr', 'alt');
          cy.wrap($img).invoke('attr', 'alt').should('not.be.empty');
        });
        
        // Images should have proper dimensions
        cy.get('img').each(($img) => {
          cy.wrap($img).should('have.attr', 'width');
          cy.wrap($img).should('have.attr', 'height');
        });
        
        // Hero images should have descriptive alt text
        cy.get('img[alt*="Manchester"], img[alt*="property"], img[alt*="home"]')
          .should('exist');
      });
    });
  });

  describe('Mobile SEO', () => {
    it('should be mobile-friendly', () => {
      cy.visit('/');
      
      // Should have viewport meta tag
      cy.get('meta[name="viewport"]')
        .should('exist')
        .invoke('attr', 'content')
        .should('contain', 'width=device-width')
        .and('contain', 'initial-scale=1');
      
      // Test mobile responsiveness
      cy.checkResponsive();
    });

    it('should have mobile-specific structured data if needed', () => {
      cy.viewport('iphone-6');
      cy.visit('/');
      
      // Check that structured data is still present on mobile
      cy.get('script[type="application/ld+json"]').should('exist');
    });
  });

  describe('Performance SEO', () => {
    pages.forEach((page) => {
      it(`should load quickly for SEO on ${page.name} page`, () => {
        cy.visit(page.path, { failOnStatusCode: false });
        cy.checkPagePerformance();
      });
    });

    it('should have optimized images', () => {
      cy.visit('/');
      cy.checkImages();
      
      // Check for WebP or other modern formats
      cy.get('img').then(($images) => {
        const modernFormats = Array.from($images).some(img => 
          img.src.includes('.webp') || img.src.includes('.avif')
        );
        // Should have at least some modern format images
        expect(modernFormats).to.be.true;
      });
    });
  });

  describe('Internal Linking', () => {
    it('should have proper internal linking structure', () => {
      cy.visit('/');
      
      // Should have navigation links
      cy.get('nav a').should('have.length.greaterThan', 2);
      
      // Internal links should not have target="_blank"
      cy.get('a[href^="/"]').should('not.have.attr', 'target', '_blank');
      
      // Should have breadcrumbs on deeper pages
      cy.visit('/landlords');
      cy.get('[data-testid="breadcrumbs"], .breadcrumb, nav[aria-label="breadcrumb"]')
        .should('exist');
    });
  });

  describe('External Links', () => {
    it('should have proper external link attributes', () => {
      cy.visit('/');
      cy.checkExternalLinks();
      
      // Social media links should be external
      cy.get('a[href*="instagram.com"], a[href*="tiktok.com"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'rel')
        .and('contain', 'noopener');
    });
  });

  describe('URL Structure', () => {
    it('should have SEO-friendly URLs', () => {
      const seoFriendlyPages = [
        '/about',
        '/contact',
        '/landlords',
        '/terms',
        '/policy'
      ];
      
      seoFriendlyPages.forEach((path) => {
        cy.visit(path, { failOnStatusCode: false });
        cy.url().should('include', path);
        
        // URLs should be lowercase and use hyphens
        expect(path).to.match(/^[a-z0-9\-\/]+$/);
      });
    });
  });

  describe('Sitemap and Robots', () => {
    it('should have accessible robots.txt', () => {
      cy.request('/robots.txt').then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.contain('User-agent');
        expect(response.body).to.contain('Sitemap:');
      });
    });

    it('should have accessible XML sitemap', () => {
      cy.request('/sitemap.xml').then((response) => {
        expect(response.status).to.equal(200);
        expect(response.headers['content-type']).to.contain('xml');
        expect(response.body).to.contain('<urlset');
        expect(response.body).to.contain('https://www.mcrgetawaysltd.com');
      });
    });

    it('should have proper sitemap structure', () => {
      cy.request('/sitemap.xml').then((response) => {
        // Should contain main pages
        expect(response.body).to.contain('<loc>https://www.mcrgetawaysltd.com</loc>');
        expect(response.body).to.contain('<loc>https://www.mcrgetawaysltd.com/about</loc>');
        expect(response.body).to.contain('<loc>https://www.mcrgetawaysltd.com/contact</loc>');
        
        // Should have lastmod dates
        expect(response.body).to.contain('<lastmod>');
        
        // Should have priority values
        expect(response.body).to.contain('<priority>');
      });
    });
  });

  describe('Accessibility SEO', () => {
    pages.forEach((page) => {
      it(`should have proper accessibility attributes on ${page.name} page`, () => {
        cy.visit(page.path, { failOnStatusCode: false });
        cy.checkAccessibility();
        cy.checkARIA();
      });
    });
  });

  describe('SEO Monitoring Integration', () => {
    it('should track SEO metrics with analytics', () => {
      cy.visit('/');
      
      // Wait for SEO monitoring to run
      cy.wait(3000);
      
      // Check that SEO audit was tracked
      cy.window().then((win) => {
        const seoEvents = win.gtagCalls.filter(call => 
          call[0] === 'event' && call[1] === 'seo_audit'
        );
        
        if (seoEvents.length > 0) {
          expect(seoEvents[0][2]).to.have.property('event_category', 'SEO');
          expect(seoEvents[0][2].value).to.be.a('number');
        }
      });
    });

    it('should track mobile friendliness', () => {
      cy.visit('/');
      
      // Wait for mobile friendliness check
      cy.wait(3000);
      
      cy.window().then((win) => {
        const mobileEvents = win.gtagCalls.filter(call => 
          call[0] === 'event' && call[1] === 'mobile_friendly'
        );
        
        if (mobileEvents.length > 0) {
          expect(mobileEvents[0][2]).to.have.property('event_category', 'SEO');
          expect(mobileEvents[0][2].value).to.be.oneOf([0, 1]);
        }
      });
    });
  });
});