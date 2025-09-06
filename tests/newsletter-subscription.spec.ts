import { test, expect } from '@playwright/test';

test.describe('Newsletter Subscription - Comprehensive Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display newsletter subscription form in desktop footer', async ({ page }, testInfo) => {
    if (testInfo.project.name.includes('Mobile')) {
      test.skip('This test is for desktop newsletter form');
    }
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check newsletter form elements
    await expect(page.locator('footer input[type="email"]')).toBeVisible();
    await expect(page.locator('footer button[type="submit"]').filter({ hasText: 'Subscribe Now' })).toBeVisible();
    
    // Check placeholder text
    await expect(page.locator('footer input[type="email"]')).toHaveAttribute('placeholder', 'Email Address');
  });

  test('should display newsletter subscription form in mobile footer', async ({ page }, testInfo) => {
    if (!testInfo.project.name.includes('Mobile')) {
      test.skip('This test is for mobile newsletter form');
    }
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check mobile newsletter form
    await expect(page.locator('footer input[type="email"]')).toBeVisible();
    await expect(page.locator('footer button[type="submit"]').filter({ hasText: 'Subscribe Now' })).toBeVisible();
    
    // Check for mobile-specific text
    await expect(page.locator('text=Subscribe now to the newsletter')).toBeVisible();
  });

  test('should validate email field in newsletter form', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Try to submit empty email
    const subscribeButton = page.locator('footer button[type="submit"]').filter({ hasText: 'Subscribe Now' }).first();
    await subscribeButton.click();
    
    // Check HTML5 validation
    const emailField = page.locator('footer input[type="email"]').first();
    await expect(emailField).toHaveAttribute('required');
  });

  test('should handle successful newsletter subscription', async ({ page }) => {
    // Mock successful Mailchimp response
    await page.route('/api/subscribe', async route => {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Awesome! You have successfully subscribed!' })
      });
    });
    
    // Scroll to footer and fill email
    await page.locator('footer').scrollIntoViewIfNeeded();
    const emailField = page.locator('footer input[type="email"]').first();
    await emailField.fill('test@example.com');
    
    // Submit subscription
    const subscribeButton = page.locator('footer button[type="submit"]').filter({ hasText: 'Subscribe Now' }).first();
    await subscribeButton.click();
    
    // Check for success toast
    await expect(page.locator('text=Awesome! You have successfully subscribed!')).toBeVisible({ timeout: 10000 });
    
    // Verify email field is cleared
    await expect(emailField).toHaveValue('');
  });

  test('should handle newsletter subscription errors', async ({ page }) => {
    // Mock failed Mailchimp response
    await page.route('/api/subscribe', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Oops! There was an error subscribing you to the newsletter.' })
      });
    });
    
    // Scroll to footer and fill email
    await page.locator('footer').scrollIntoViewIfNeeded();
    const emailField = page.locator('footer input[type="email"]').first();
    await emailField.fill('test@example.com');
    
    // Submit subscription
    const subscribeButton = page.locator('footer button[type="submit"]').filter({ hasText: 'Subscribe Now' }).first();
    await subscribeButton.click();
    
    // Check for error toast
    await expect(page.locator('text=Subscription failed. Please try again.')).toBeVisible({ timeout: 10000 });
  });

  test('should handle duplicate email subscription', async ({ page }) => {
    // Mock duplicate email response from Mailchimp
    await page.route('/api/subscribe', async route => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ error: "Uh oh, it looks like this email's already subscribed🧐" })
      });
    });
    
    // Scroll to footer and fill email
    await page.locator('footer').scrollIntoViewIfNeeded();
    const emailField = page.locator('footer input[type="email"]').first();
    await emailField.fill('existing@example.com');
    
    // Submit subscription
    const subscribeButton = page.locator('footer button[type="submit"]').filter({ hasText: 'Subscribe Now' }).first();
    await subscribeButton.click();
    
    // Check for duplicate email message
    await expect(page.locator('text=Uh oh, it looks like this email\'s already subscribed🧐')).toBeVisible({ timeout: 10000 });
  });

  test('should show loading state during subscription', async ({ page }) => {
    // Mock slow response to test loading state
    await page.route('/api/subscribe', async route => {
      // Wait 2 seconds to simulate slow response
      await new Promise(resolve => setTimeout(resolve, 2000));
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Success!' })
      });
    });
    
    // Scroll to footer and fill email
    await page.locator('footer').scrollIntoViewIfNeeded();
    const emailField = page.locator('footer input[type="email"]').first();
    await emailField.fill('test@example.com');
    
    // Submit subscription
    const subscribeButton = page.locator('footer button[type="submit"]').filter({ hasText: 'Subscribe Now' }).first();
    await subscribeButton.click();
    
    // Check loading state text appears
    await expect(page.locator('text=Subscribing...')).toBeVisible({ timeout: 5000 });
    
    // Wait for completion
    await expect(page.locator('text=Success!')).toBeVisible({ timeout: 10000 });
  });

  test('should validate email format in newsletter form', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Fill invalid email format
    const emailField = page.locator('footer input[type="email"]').first();
    await emailField.fill('invalid-email-format');
    
    // Try to submit
    const subscribeButton = page.locator('footer button[type="submit"]').filter({ hasText: 'Subscribe Now' }).first();
    await subscribeButton.click();
    
    // Check HTML5 validation (browser will prevent submission)
    await expect(emailField).toHaveAttribute('type', 'email');
  });

  test('should have newsletter form on all pages', async ({ page }) => {
    const pages = ['/', '/about', '/contact', '/terms', '/policy'];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      await page.locator('footer').scrollIntoViewIfNeeded();
      
      // Check newsletter form exists on each page
      await expect(page.locator('footer input[type="email"]')).toBeVisible();
      await expect(page.locator('footer button[type="submit"]').filter({ hasText: 'Subscribe Now' })).toBeVisible();
    }
  });

  test('should handle network errors gracefully', async ({ page }) => {
    // Mock network error
    await page.route('/api/subscribe', async route => {
      await route.abort('failed');
    });
    
    // Scroll to footer and fill email
    await page.locator('footer').scrollIntoViewIfNeeded();
    const emailField = page.locator('footer input[type="email"]').first();
    await emailField.fill('test@example.com');
    
    // Submit subscription
    const subscribeButton = page.locator('footer button[type="submit"]').filter({ hasText: 'Subscribe Now' }).first();
    await subscribeButton.click();
    
    // Check for generic error message
    await expect(page.locator('text=Subscription failed. Please try again.')).toBeVisible({ timeout: 10000 });
  });
});