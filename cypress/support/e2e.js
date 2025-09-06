// Import Cypress commands
import './commands';

// Import code coverage support
import '@cypress/code-coverage/support';

// Global before hook
beforeEach(() => {
  // Mock gtag function to track analytics calls
  cy.window().then((win) => {
    // Create gtag mock that stores calls
    win.gtagCalls = [];
    win.gtag = function(...args) {
      win.gtagCalls.push(args);
    };
    
    // Mock GA Measurement ID
    win.GA_MEASUREMENT_ID = 'GA_TEST_ID';
  });
  
  // Intercept external requests to prevent actual API calls during testing
  cy.intercept('POST', 'https://formspree.io/**', {
    statusCode: 200,
    body: { success: true }
  }).as('formSubmission');
  
  cy.intercept('POST', '**/mailchimp/**', {
    statusCode: 200,
    body: { success: true }
  }).as('newsletterSubmission');
  
  // Mock Google Analytics script loading
  cy.intercept('GET', '**/gtag/js**', {
    statusCode: 200,
    body: ''
  }).as('gtagScript');
});

// Global after hook for cleanup
afterEach(() => {
  // Clear any stored gtag calls
  cy.window().then((win) => {
    if (win.gtagCalls) {
      win.gtagCalls.length = 0;
    }
  });
});

// Custom command to check gtag calls
Cypress.Commands.add('checkGtagCall', (eventName, expectedParams) => {
  cy.window().then((win) => {
    const gtagCalls = win.gtagCalls || [];
    const eventCall = gtagCalls.find(call => 
      call[0] === 'event' && call[1] === eventName
    );
    
    expect(eventCall).to.exist;
    
    if (expectedParams) {
      Object.keys(expectedParams).forEach(key => {
        expect(eventCall[2]).to.have.property(key, expectedParams[key]);
      });
    }
  });
});

// Custom command to wait for analytics to load
Cypress.Commands.add('waitForAnalytics', () => {
  cy.window().should('have.property', 'gtag');
});

// Custom command to check SEO elements
Cypress.Commands.add('checkSEOElements', () => {
  // Check title
  cy.title().should('not.be.empty');
  cy.title().should('have.length.lessThan', 61);
  
  // Check meta description
  cy.get('meta[name="description"]')
    .should('exist')
    .and('have.attr', 'content')
    .and('not.be.empty');
  
  // Check canonical URL
  cy.get('link[rel="canonical"]')
    .should('exist')
    .and('have.attr', 'href');
  
  // Check Open Graph image
  cy.get('meta[property="og:image"]')
    .should('exist')
    .and('have.attr', 'content');
  
  // Check structured data
  cy.get('script[type="application/ld+json"]')
    .should('exist')
    .and('not.be.empty');
  
  // Check H1 exists
  cy.get('h1').should('exist');
  
  // Check images have alt text
  cy.get('img').each(($img) => {
    cy.wrap($img).should('have.attr', 'alt');
  });
  
  // Check viewport meta tag
  cy.get('meta[name="viewport"]')
    .should('exist')
    .and('have.attr', 'content')
    .and('contain', 'width=device-width');
});

// Custom command for accessibility testing
Cypress.Commands.add('checkAccessibility', () => {
  // Check for proper heading hierarchy
  cy.get('h1, h2, h3, h4, h5, h6').then(($headings) => {
    expect($headings).to.have.length.greaterThan(0);
  });
  
  // Check for alt text on images
  cy.get('img').each(($img) => {
    cy.wrap($img).should('have.attr', 'alt');
  });
  
  // Check for form labels
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

// Handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  // Don't fail tests on expected errors like network timeouts
  if (err.message.includes('Network Error') || 
      err.message.includes('Failed to fetch') ||
      err.message.includes('gtag is not defined')) {
    return false;
  }
  return true;
});