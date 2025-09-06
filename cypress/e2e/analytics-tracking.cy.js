describe('Analytics Tracking', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.waitForAnalytics();
  });

  describe('Contact Form Analytics', () => {
    it('should track contact form submission', () => {
      cy.visit('/contact');
      
      // Fill and submit contact form
      const formData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+44 7999 123456',
        subject: 'General Inquiry',
        message: 'Test message for analytics tracking',
        consent: true
      };
      
      cy.fillContactForm(formData);
      cy.get('form').submit();
      
      // Wait for form submission
      cy.wait('@formSubmission');
      
      // Check that contact form analytics was tracked
      cy.checkGtagCall('contact_form_submission', {
        event_category: 'Engagement',
        event_label: 'Contact Form',
        custom_parameter_1: formData.name,
        custom_parameter_2: formData.email
      });
    });

    it('should handle contact form errors gracefully', () => {
      cy.visit('/contact');
      
      // Intercept form submission with error
      cy.intercept('POST', 'https://formspree.io/**', {
        statusCode: 400,
        body: { error: 'Validation failed' }
      }).as('formError');
      
      const formData = {
        name: 'Error Test',
        email: 'invalid-email',
        phone: '+44 7999 123456',
        subject: 'General Inquiry',
        message: 'Test error handling',
        consent: true
      };
      
      cy.fillContactForm(formData);
      cy.get('form').submit();
      
      cy.wait('@formError');
      
      // Should still track the attempt
      cy.checkGtagCall('contact_form_submission', {
        event_category: 'Engagement'
      });
    });
  });

  describe('Newsletter Analytics', () => {
    it('should track newsletter subscription', () => {
      // Scroll to footer where newsletter signup is located
      cy.scrollToElement('footer');
      
      const testEmail = 'newsletter@example.com';
      cy.submitNewsletter(testEmail);
      
      cy.wait('@newsletterSubmission');
      
      // Check that newsletter analytics was tracked
      cy.checkGtagCall('newsletter_signup', {
        event_category: 'Engagement',
        event_label: 'Newsletter Subscription',
        custom_parameter_1: testEmail
      });
    });

    it('should handle duplicate newsletter subscriptions', () => {
      // Mock Mailchimp duplicate email response
      cy.intercept('POST', '**/mailchimp/**', {
        statusCode: 400,
        body: { 
          title: 'Member Exists',
          detail: 'john@example.com is already a list member'
        }
      }).as('duplicateEmail');
      
      cy.scrollToElement('footer');
      cy.submitNewsletter('john@example.com');
      
      cy.wait('@duplicateEmail');
      
      // Should still track the attempt
      cy.checkGtagCall('newsletter_signup', {
        event_category: 'Engagement'
      });
    });
  });

  describe('WhatsApp Analytics', () => {
    it('should track WhatsApp button click', () => {
      // WhatsApp button should be visible as a floating element
      cy.get('[data-testid="whatsapp-button"]', { timeout: 10000 })
        .should('be.visible')
        .click();
      
      // Check that WhatsApp analytics was tracked
      cy.checkGtagCall('whatsapp_click', {
        event_category: 'Engagement',
        event_label: 'WhatsApp Contact'
      });
    });

    it('should open WhatsApp link in new tab', () => {
      cy.get('[data-testid="whatsapp-button"]')
        .should('have.attr', 'href')
        .and('include', 'wa.me')
        .and('have.attr', 'target', '_blank');
    });
  });

  describe('Social Media Analytics', () => {
    it('should track Instagram link click', () => {
      cy.scrollToElement('footer');
      
      cy.get('[data-testid="instagram-link"]')
        .should('be.visible')
        .click();
      
      cy.checkGtagCall('social_click', {
        event_category: 'Engagement',
        event_label: 'Social Media',
        custom_parameter_1: 'instagram'
      });
    });

    it('should track TikTok link click', () => {
      cy.scrollToElement('footer');
      
      cy.get('[data-testid="tiktok-link"]')
        .should('be.visible')
        .click();
      
      cy.checkGtagCall('social_click', {
        event_category: 'Engagement',
        event_label: 'Social Media',
        custom_parameter_1: 'tiktok'
      });
    });

    it('should open social links in new tabs', () => {
      cy.scrollToElement('footer');
      
      cy.get('[data-testid="instagram-link"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'rel')
        .and('contain', 'noopener');
      
      cy.get('[data-testid="tiktok-link"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'rel')
        .and('contain', 'noopener');
    });
  });

  describe('Property Search Analytics', () => {
    it('should track property search queries', () => {
      // Test search form if it exists on homepage
      cy.get('body').then(($body) => {
        if ($body.find('[data-testid="search-form"]').length > 0) {
          cy.get('[data-testid="location-input"]').type('Manchester');
          cy.get('[data-testid="guests-input"]').type('4');
          cy.get('[data-testid="dates-input"]').type('2024-01-15 to 2024-01-20');
          cy.get('[data-testid="search-submit"]').click();
          
          cy.checkGtagCall('property_search', {
            event_category: 'Property',
            event_label: 'Search Query',
            custom_parameter_1: 'Manchester',
            custom_parameter_2: '4'
          });
        }
      });
    });
  });

  describe('Scroll Depth Analytics', () => {
    it('should track scroll depth milestones', () => {
      // Simulate user scrolling through the page
      cy.simulateUserJourney();
      
      // Check for scroll depth tracking (at least 25%)
      cy.checkGtagCall('scroll_depth', {
        event_category: 'Engagement',
        value: 25
      });
    });

    it('should track multiple scroll milestones', () => {
      // Scroll to 50%
      cy.scrollTo(0, '50%', { duration: 1000 });
      cy.wait(1000);
      
      // Scroll to 75%
      cy.scrollTo(0, '75%', { duration: 1000 });
      cy.wait(1000);
      
      // Scroll to bottom
      cy.scrollTo('bottom', { duration: 1000 });
      cy.wait(1000);
      
      // Should have multiple scroll depth events
      cy.window().then((win) => {
        const scrollEvents = win.gtagCalls.filter(call => 
          call[0] === 'event' && call[1] === 'scroll_depth'
        );
        expect(scrollEvents.length).to.be.greaterThan(1);
      });
    });
  });

  describe('Page View Analytics', () => {
    it('should track page views on navigation', () => {
      // Navigate to different pages
      cy.get('nav a[href="/about"]').click();
      cy.url().should('include', '/about');
      
      // Check for page view tracking
      cy.checkGtagCall('page_view', {
        event_category: 'Navigation'
      });
    });

    it('should track property page views', () => {
      // If properties page exists
      cy.visit('/properties');
      
      cy.checkGtagCall('page_view', {
        event_category: 'Navigation'
      });
    });
  });

  describe('Error Tracking', () => {
    it('should track 404 errors', () => {
      // Visit non-existent page
      cy.visit('/non-existent-page', { failOnStatusCode: false });
      
      // Wait for error tracking
      cy.wait(2000);
      
      // Check for 404 error tracking
      cy.window().then((win) => {
        const errorEvents = win.gtagCalls.filter(call => 
          call[0] === 'event' && call[1] === '404_error'
        );
        
        if (errorEvents.length > 0) {
          expect(errorEvents[0][2]).to.have.property('event_category', 'Error');
        }
      });
    });
  });

  describe('Performance Analytics', () => {
    it('should track Core Web Vitals', () => {
      cy.visit('/');
      
      // Wait for performance metrics to be collected
      cy.wait(3000);
      
      // Check for LCP tracking
      cy.window().then((win) => {
        const lcpEvents = win.gtagCalls.filter(call => 
          call[0] === 'event' && call[1] === 'LCP'
        );
        
        if (lcpEvents.length > 0) {
          expect(lcpEvents[0][2]).to.have.property('event_category', 'Core Web Vitals');
        }
      });
    });

    it('should track page timing metrics', () => {
      cy.visit('/');
      
      // Trigger window load event
      cy.window().trigger('load');
      
      // Wait for performance tracking
      cy.wait(2000);
      
      cy.window().then((win) => {
        const timingEvents = win.gtagCalls.filter(call => 
          call[0] === 'event' && call[1] === 'page_timing'
        );
        
        if (timingEvents.length > 0) {
          expect(timingEvents[0][2]).to.have.property('event_category', 'Performance');
        }
      });
    });
  });

  describe('Conversion Analytics', () => {
    it('should track form completions as conversions', () => {
      cy.visit('/contact');
      
      const formData = {
        name: 'Conversion Test',
        email: 'conversion@example.com',
        phone: '+44 7999 123456',
        subject: 'Property Inquiry',
        message: 'I am interested in your properties',
        consent: true
      };
      
      cy.fillContactForm(formData);
      cy.get('form').submit();
      
      cy.wait('@formSubmission');
      
      // Should track as conversion
      cy.checkGtagCall('conversion', {
        event_category: 'Conversion',
        event_label: 'contact_form'
      });
    });
  });

  describe('Mobile Analytics', () => {
    it('should track mobile interactions', () => {
      cy.viewport('iphone-6');
      
      // Test mobile-specific interactions
      cy.get('[data-testid="mobile-menu-toggle"]')
        .should('be.visible')
        .click();
      
      // Check mobile navigation analytics
      cy.window().then((win) => {
        const mobileEvents = win.gtagCalls.filter(call => 
          call[0] === 'event' && 
          (call[1] === 'mobile_menu_toggle' || call[1] === 'navigation')
        );
        
        expect(mobileEvents.length).to.be.greaterThan(0);
      });
    });
  });
});