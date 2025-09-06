import { test, expect } from '@playwright/test';

test.describe('Contact Form - Comprehensive Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form with all required fields', async ({ page }) => {
    // Check page title and content
    await expect(page.locator('h1')).toContainText('Contact Us');
    await expect(page.locator('text=Ready To Talk?')).toBeVisible();
    await expect(page.locator('text=We are Here To Help You')).toBeVisible();
    
    // Check all form fields are present
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    
    // Check contact form submit button specifically
    await expect(page.locator('form button[type="submit"]:has-text("Send Message")')).toContainText('Send Message');
  });

  test('should validate required fields', async ({ page }) => {
    // Try to submit empty form - use contact form submit button specifically
    await page.locator('form button[type="submit"]:has-text("Send Message")').click();
    
    // Check HTML5 validation appears
    const nameField = page.locator('input[name="name"]');
    await expect(nameField).toHaveAttribute('required');
    
    const emailField = page.locator('input[name="email"]');
    await expect(emailField).toHaveAttribute('required');
    
    const phoneField = page.locator('input[name="phone"]');
    await expect(phoneField).toHaveAttribute('required');
    
    const messageField = page.locator('textarea[name="message"]');
    await expect(messageField).toHaveAttribute('required');
  });

  test('should have working country code dropdown', async ({ page }) => {
    // Click country code dropdown
    const countryButton = page.locator('button').filter({ hasText: '+44' });
    await countryButton.click();
    
    // Check dropdown appears with options
    await expect(page.locator('text=+44 UK')).toBeVisible();
    await expect(page.locator('text=+1 US')).toBeVisible();
    await expect(page.locator('text=+33 FR')).toBeVisible();
    
    // Select a different country code
    await page.locator('text=+1 US').click();
    
    // Verify selection changed
    await expect(page.locator('button').filter({ hasText: '+1' })).toBeVisible();
  });

  test('should have working cancellation policy dropdown on desktop', async ({ page }, testInfo) => {
    // Skip on mobile where dropdown is hidden
    if (testInfo.project.name.includes('Mobile')) {
      test.skip('Cancellation policy dropdown is hidden on mobile');
    }
    
    // Click cancellation policy dropdown - use more specific selector
    const policyButton = page.locator('form button:has-text("Cancellation Policy")').first();
    await policyButton.click();
    
    // Check dropdown appears with options
    await expect(page.locator('text=Flexible - Free cancellation')).toBeVisible();
    await expect(page.locator('text=Moderate - Partial refund')).toBeVisible();
    await expect(page.locator('text=Strict - No refund')).toBeVisible();
    
    // Select an option
    await page.locator('text=Flexible - Free cancellation').click();
    
    // Verify selection changed
    await expect(page.locator('button').filter({ hasText: 'Flexible - Free cancellation' })).toBeVisible();
  });

  test('should submit form successfully with all fields filled', async ({ page }) => {
    // Fill in all form fields
    await page.locator('input[name="name"]').fill('John Doe');
    await page.locator('input[name="email"]').fill('john.doe@test.com');
    await page.locator('input[name="phone"]').fill('1234567890');
    await page.locator('textarea[name="message"]').fill('This is a test message for the contact form.');
    
    // Select cancellation policy if visible (desktop only)
    const policyButton = page.locator('form button:has-text("Cancellation Policy")').first();
    if (await policyButton.isVisible()) {
      await policyButton.click();
      await page.locator('text=Flexible - Free cancellation').click();
    }
    
    // Mock the Formspree request to avoid sending real emails during testing
    await page.route('https://formspree.io/f/xovnadej', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Success' })
      });
    });
    
    // Submit form - use contact form submit button specifically
    await page.locator('form button[type="submit"]:has-text("Send Message")').click();
    
    // Wait for and check success toast message
    await expect(page.locator('text=Message sent successfully!')).toBeVisible({ timeout: 10000 });
    
    // Verify form fields are cleared after successful submission
    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
    await expect(page.locator('input[name="phone"]')).toHaveValue('');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('');
  });

  test('should handle form submission errors gracefully', async ({ page }) => {
    // Fill in form fields
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('input[name="phone"]').fill('1234567890');
    await page.locator('textarea[name="message"]').fill('Test message');
    
    // Mock a failed Formspree request
    await page.route('https://formspree.io/f/xovnadej', async route => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Bad Request' })
      });
    });
    
    // Submit form - use contact form submit button specifically
    await page.locator('form button[type="submit"]:has-text("Send Message")').click();
    
    // Check error toast appears
    await expect(page.locator('text=Something went wrong, please try again.')).toBeVisible({ timeout: 10000 });
  });

  test('should validate email format', async ({ page }) => {
    // Fill in invalid email
    await page.locator('input[name="email"]').fill('invalid-email');
    await page.locator('input[name="name"]').fill('Test User');
    
    // Try to submit - use contact form submit button specifically
    await page.locator('form button[type="submit"]:has-text("Send Message")').click();
    
    // Check HTML5 email validation
    const emailField = page.locator('input[name="email"]');
    await expect(emailField).toHaveAttribute('type', 'email');
  });

  test('should have FAQ section below the contact form', async ({ page }) => {
    // Check that FAQ component is rendered - use more specific selector
    const faqSection = page.locator('h2:has-text("FAQ")');
    await expect(faqSection).toBeVisible();
  });

  test('should be responsive on mobile devices', async ({ page }, testInfo) => {
    if (!testInfo.project.name.includes('Mobile')) {
      test.skip('This test is specific to mobile devices');
    }
    
    // Check mobile-specific layout
    await expect(page.locator('.ml-3.lg\\:ml-0')).toBeVisible(); // Mobile margin class
    
    // Verify form takes full width on mobile
    const form = page.locator('form');
    await expect(form).toBeVisible();
    
    // Check that cancellation policy dropdown is hidden on mobile
    const policyButton = page.locator('button').filter({ hasText: 'Cancellation Policy' });
    await expect(policyButton).toBeHidden();
  });
});