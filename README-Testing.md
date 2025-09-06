# Testing Documentation

This document outlines the comprehensive testing strategy for the MCR Getaways project, including unit tests, E2E tests, and coverage reporting.

## Testing Stack

- **Unit Testing**: Jest with React Testing Library
- **E2E Testing**: Cypress
- **Coverage**: Jest Coverage + NYC + Cypress Code Coverage
- **CI/CD**: GitHub Actions

## Available Scripts

```bash
# Unit Tests
npm run test              # Run all unit tests
npm run test:watch        # Run tests in watch mode
npm run test:coverage     # Run tests with coverage report
npm run test:ci           # Run tests in CI mode (no watch)

# E2E Tests
npm run cypress           # Open Cypress test runner
npm run cypress:run       # Run Cypress tests headlessly
npm run cypress:headless  # Run Cypress tests in headless mode
npm run test:e2e          # Run E2E tests with dev server

# All Tests
npm run test:all          # Run both unit and E2E tests
```

## Test Structure

### Unit Tests

```
app/
├── hooks/
│   └── __tests__/
│       └── useAnalytics.test.ts
├── component/
│   └── seo/
│       └── __tests__/
│           ├── StructuredData.test.tsx
│           └── SEOMonitor.test.tsx
└── lib/
    └── __tests__/
        └── seo-config.test.ts
```

### E2E Tests

```
cypress/
├── e2e/
│   ├── analytics-tracking.cy.js
│   └── seo-validation.cy.js
├── support/
│   ├── commands.js
│   └── e2e.js
└── fixtures/
    └── test-data.json
```

## Test Coverage

The project aims for:
- **Unit Tests**: 90%+ code coverage
- **E2E Tests**: Critical user journeys coverage
- **Integration**: Analytics and SEO functionality

### Coverage Reports

Coverage reports are generated in multiple formats:
- `coverage/lcov-report/index.html` - HTML report
- `coverage/lcov.info` - LCOV format for CI
- `coverage/coverage-final.json` - JSON format

## Testing Features

### Analytics Testing

Unit tests cover:
- ✅ Contact form submission tracking
- ✅ Newsletter subscription tracking
- ✅ WhatsApp click tracking
- ✅ Social media click tracking
- ✅ Property view tracking
- ✅ Search query tracking
- ✅ Page view tracking
- ✅ Conversion tracking

E2E tests cover:
- ✅ Real user interaction tracking
- ✅ Form submission analytics
- ✅ Social media link analytics
- ✅ Scroll depth tracking
- ✅ Performance metrics
- ✅ Error tracking

### SEO Testing

Unit tests cover:
- ✅ Structured data generation
- ✅ SEO monitoring functionality
- ✅ Core Web Vitals tracking
- ✅ Performance metrics

E2E tests cover:
- ✅ Meta tags validation
- ✅ Open Graph tags
- ✅ Structured data validation
- ✅ Image alt text checking
- ✅ Mobile friendliness
- ✅ URL structure validation
- ✅ Sitemap accessibility
- ✅ Internal/external linking

## Custom Cypress Commands

```javascript
// Form testing
cy.fillContactForm(formData)
cy.submitNewsletter(email)

// Analytics testing
cy.checkGtagCall(eventName, expectedParams)
cy.waitForAnalytics()

// SEO testing
cy.checkSEOElements()
cy.checkAccessibility()

// Responsive testing
cy.checkResponsive()

// Performance testing
cy.checkPagePerformance()
```

## Mocking Strategy

### Unit Tests
- Mock Next.js router and Image components
- Mock external APIs (Formspree, Mailchimp)
- Mock analytics (gtag) function
- Mock PerformanceObserver API

### E2E Tests
- Intercept external API calls
- Mock analytics tracking
- Stub network requests
- Use test data fixtures

## CI/CD Integration

GitHub Actions workflow runs:
1. **Linting** - Code style checks
2. **Unit Tests** - Jest with coverage
3. **E2E Tests** - Cypress with video/screenshot capture
4. **Coverage Upload** - Codecov integration

## Best Practices

### Unit Testing
1. Test behavior, not implementation
2. Use descriptive test names
3. Group related tests with `describe` blocks
4. Mock external dependencies
5. Test error scenarios

### E2E Testing
1. Test critical user journeys
2. Use data attributes for element selection
3. Keep tests independent and isolated
4. Use custom commands for reusable actions
5. Test across different viewports

### Coverage Goals
- Aim for high coverage but focus on quality
- Test critical paths thoroughly
- Don't test implementation details
- Focus on user-facing functionality

## Debugging Tests

### Unit Tests
```bash
npm run test:watch                    # Interactive mode
npm run test -- --verbose            # Detailed output
npm run test -- --testNamePattern="Analytics"  # Run specific tests
```

### E2E Tests
```bash
npx cypress open                      # Interactive mode
npx cypress run --headed              # Show browser
npx cypress run --spec="cypress/e2e/analytics-tracking.cy.js"  # Run specific test
```

## Performance Testing

The testing setup includes:
- Core Web Vitals monitoring
- Page load performance checks
- Image optimization validation
- Bundle size awareness
- Network request optimization

## Accessibility Testing

Automated accessibility checks include:
- ARIA attributes validation
- Form label associations
- Heading hierarchy checking
- Image alt text validation
- Keyboard navigation support

## Security Testing

Basic security checks include:
- External link security attributes
- Form input sanitization
- XSS prevention validation
- HTTPS enforcement

## Maintenance

Regular maintenance tasks:
1. Update test dependencies monthly
2. Review and update test data
3. Monitor test performance
4. Update browser targets
5. Review coverage reports

## Troubleshooting

Common issues and solutions:

### Jest Issues
- **Module resolution**: Check `jest.config.js` paths
- **Async tests**: Use proper `await` or `done` callbacks
- **Mock issues**: Clear mocks between tests

### Cypress Issues
- **Timeouts**: Increase command timeout values
- **Flaky tests**: Add proper waits and assertions
- **Element not found**: Use data attributes consistently

### Coverage Issues
- **Low coverage**: Focus on critical code paths
- **Excluded files**: Update coverage configuration
- **False positives**: Review test quality over quantity