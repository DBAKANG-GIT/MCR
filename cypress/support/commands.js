// Custom Cypress commands for MCR Getaways testing

// Command to fill and submit contact form
Cypress.Commands.add('fillContactForm', (formData) => {
  cy.get('#name').type(formData.name);
  cy.get('#email').type(formData.email);
  cy.get('#phone').type(formData.phone);
  cy.get('#subject').select(formData.subject);
  cy.get('#message').type(formData.message);
  
  if (formData.consent) {
    cy.get('#consent').check();
  }
});

// Command to submit newsletter form
Cypress.Commands.add('submitNewsletter', (email) => {
  cy.get('[data-testid="newsletter-input"]', { timeout: 10000 })
    .should('be.visible')
    .type(email);
  
  cy.get('[data-testid="newsletter-submit"]')
    .should('be.visible')
    .click();
});

// Command to check if element is in viewport
Cypress.Commands.add('isInViewport', (element) => {
  cy.get(element).then(($el) => {
    const rect = $el[0].getBoundingClientRect();
    expect(rect.top).to.be.at.least(0);
    expect(rect.left).to.be.at.least(0);
    expect(rect.bottom).to.be.at.most(Cypress.config('viewportHeight'));
    expect(rect.right).to.be.at.most(Cypress.config('viewportWidth'));
  });
});

// Command to simulate scroll to element
Cypress.Commands.add('scrollToElement', (element) => {
  cy.get(element).scrollIntoView({ duration: 1000 });
  cy.wait(500); // Wait for scroll to complete
});

// Command to check responsive design
Cypress.Commands.add('checkResponsive', () => {
  const viewports = [
    { width: 375, height: 667, name: 'iPhone SE' },
    { width: 768, height: 1024, name: 'iPad' },
    { width: 1280, height: 720, name: 'Desktop' },
    { width: 1920, height: 1080, name: 'Large Desktop' }
  ];
  
  viewports.forEach((viewport) => {
    cy.viewport(viewport.width, viewport.height);
    cy.wait(500);
    
    // Check that main content is visible
    cy.get('main, [role="main"], .main-content').should('be.visible');
    
    // Check navigation is accessible
    cy.get('nav, [role="navigation"], .navbar').should('be.visible');
    
    // Check footer is present
    cy.get('footer, [role="contentinfo"], .footer').should('exist');
  });
  
  // Reset to default viewport
  cy.viewport(1280, 720);
});

// Command to test loading performance
Cypress.Commands.add('checkPagePerformance', () => {
  cy.window().then((win) => {
    return new Promise((resolve) => {
      win.addEventListener('load', () => {
        const navigation = win.performance.getEntriesByType('navigation')[0];
        const loadTime = navigation.loadEventEnd - navigation.navigationStart;
        
        // Assert page loads within reasonable time (5 seconds)
        expect(loadTime).to.be.lessThan(5000);
        resolve();
      });
    });
  });
});

// Command to check for broken images
Cypress.Commands.add('checkImages', () => {
  cy.get('img').each(($img) => {
    cy.wrap($img)
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
        expect($img[0].naturalHeight).to.be.greaterThan(0);
      });
  });
});

// Command to check external links
Cypress.Commands.add('checkExternalLinks', () => {
  cy.get('a[href^="http"], a[href^="https"]')
    .should('have.attr', 'target', '_blank')
    .and('have.attr', 'rel')
    .and('contain', 'noopener');
});

// Command to simulate user interaction patterns
Cypress.Commands.add('simulateUserJourney', () => {
  // Scroll through the page to trigger analytics events
  cy.scrollTo(0, '25%', { duration: 1000 });
  cy.wait(500);
  cy.scrollTo(0, '50%', { duration: 1000 });
  cy.wait(500);
  cy.scrollTo(0, '75%', { duration: 1000 });
  cy.wait(500);
  cy.scrollTo(0, '100%', { duration: 1000 });
  cy.wait(500);
  
  // Scroll back to top
  cy.scrollTo('top', { duration: 1000 });
});

// Command to check form validation
Cypress.Commands.add('testFormValidation', (formSelector) => {
  // Try to submit empty form
  cy.get(formSelector).within(() => {
    cy.get('button[type="submit"], input[type="submit"]').click();
  });
  
  // Check that validation messages appear
  cy.get('.error, [role="alert"], .invalid-feedback')
    .should('exist')
    .and('be.visible');
});

// Command to check ARIA attributes
Cypress.Commands.add('checkARIA', () => {
  // Check buttons have accessible names
  cy.get('button').each(($btn) => {
    const hasAriaLabel = $btn.attr('aria-label');
    const hasText = $btn.text().trim();
    const hasAriaLabelledBy = $btn.attr('aria-labelledby');
    
    expect(hasAriaLabel || hasText || hasAriaLabelledBy).to.exist;
  });
  
  // Check inputs have labels
  cy.get('input, textarea, select').each(($input) => {
    const id = $input.attr('id');
    const ariaLabel = $input.attr('aria-label');
    const ariaLabelledBy = $input.attr('aria-labelledby');
    
    if (id) {
      cy.get(`label[for="${id}"]`).should('exist');
    } else {
      expect(ariaLabel || ariaLabelledBy).to.exist;
    }
  });
});

// TypeScript declarations for custom commands
declare global {
  namespace Cypress {
    interface Chainable {
      fillContactForm(formData: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
        consent?: boolean;
      }): Chainable<Element>;
      
      submitNewsletter(email: string): Chainable<Element>;
      
      isInViewport(element: string): Chainable<Element>;
      
      scrollToElement(element: string): Chainable<Element>;
      
      checkResponsive(): Chainable<Element>;
      
      checkPagePerformance(): Chainable<Element>;
      
      checkImages(): Chainable<Element>;
      
      checkExternalLinks(): Chainable<Element>;
      
      simulateUserJourney(): Chainable<Element>;
      
      testFormValidation(formSelector: string): Chainable<Element>;
      
      checkARIA(): Chainable<Element>;
      
      checkGtagCall(eventName: string, expectedParams?: Record<string, any>): Chainable<Element>;
      
      waitForAnalytics(): Chainable<Element>;
      
      checkSEOElements(): Chainable<Element>;
      
      checkAccessibility(): Chainable<Element>;
    }
  }
}