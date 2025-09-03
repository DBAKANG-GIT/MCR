import { test, expect } from '@playwright/test';

test.describe('Responsive Design Tests', () => {
  // Desktop tests
  test.describe('Desktop View (1280x720)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto('/');
    });

    test('should display desktop navigation', async ({ page }) => {
      // Check that desktop navigation is visible
      await expect(page.locator('nav .hidden.lg\\:flex').first()).toBeVisible();
      
      // Check all navigation links are present
      await expect(page.getByRole('link', { name: 'Home' }).first()).toBeVisible();
      await expect(page.getByRole('link', { name: 'About Us' }).first()).toBeVisible();
      await expect(page.getByRole('link', { name: 'Property' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Landlords & Investors' }).first()).toBeVisible();
      await expect(page.getByRole('link', { name: 'Contact Us' }).first()).toBeVisible();
    });

    test('should display search form on desktop', async ({ page }) => {
      // Search form should be visible on desktop
      await expect(page.locator('.hidden.lg\\:block').first()).toBeVisible();
      
      // Check search form elements
      await expect(page.getByPlaceholder('Search For A Destination')).toBeVisible();
      await expect(page.getByPlaceholder('How many Guests?')).toBeVisible();
      await expect(page.getByPlaceholder('Add dates')).toBeVisible();
    });

    test('should have proper hero section layout', async ({ page }) => {
      // Hero section should be properly laid out - target main content section
      const heroSection = page.locator('section').nth(1);
      await expect(heroSection).toBeVisible();
      
      // Main heading should be visible
      await expect(page.getByRole('heading', { name: /Where Your Dreams.*Find a Home/i })).toBeVisible();
      
      // Hero images should be visible
      const heroImages = page.locator('img[alt*="Modern living room"]');
      await expect(heroImages.first()).toBeVisible();
    });
  });

  // Tablet tests
  test.describe('Tablet View (768x1024)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');
    });

    test('should hide search form on tablet', async ({ page }) => {
      // Search form should be hidden on tablet/mobile
      const searchForm = page.locator('.hidden.lg\\:block').first();
      await expect(searchForm).not.toBeVisible();
    });

    test('should show mobile menu button', async ({ page }) => {
      // Mobile menu button should be visible
      await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
    });

    test('should maintain responsive layout', async ({ page }) => {
      // Hero section should still be visible and responsive
      await expect(page.getByRole('heading', { name: /Where Your Dreams.*Find a Home/i })).toBeVisible();
      
      // Content should stack vertically
      const heroContent = page.locator('.flex.flex-col.lg\\:flex-row').first();
      await expect(heroContent).toBeVisible();
    });
  });

  // Mobile tests
  test.describe('Mobile View (375x667)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
    });

    test('should display mobile navigation', async ({ page }) => {
      // Desktop navigation should be hidden
      await expect(page.locator('nav .hidden.lg\\:flex').first()).not.toBeVisible();
      
      // Mobile menu button should be visible
      await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
    });

    test('should open mobile menu when clicked', async ({ page }) => {
      // Click mobile menu button
      await page.getByRole('button', { name: 'Open menu' }).click();
      
      // Mobile menu should appear
      await expect(page.locator('aside[aria-label="Mobile menu"]')).toBeVisible();
      
      // Navigation links should be visible in mobile menu
      await expect(page.getByRole('link', { name: 'Home' }).nth(1)).toBeVisible();
      await expect(page.getByRole('link', { name: 'About Us' }).nth(1)).toBeVisible();
    });

    test('should hide search form on mobile', async ({ page }) => {
      // Search form should be hidden
      const searchForm = page.locator('.hidden.lg\\:block').first();
      await expect(searchForm).not.toBeVisible();
    });

    test('should display mobile-optimized content', async ({ page }) => {
      // Hero heading should be visible but responsive
      await expect(page.getByRole('heading', { name: /Where Your Dreams.*Find a Home/i })).toBeVisible();
      
      // Images should be responsive
      const heroImages = page.locator('img[alt*="Modern living room"]');
      await expect(heroImages.first()).toBeVisible();
    });
  });

  // Large screen tests
  test.describe('Large Desktop View (1920x1080)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('/');
    });

    test('should maintain layout on large screens', async ({ page }) => {
      // All desktop features should be visible
      await expect(page.locator('nav .hidden.lg\\:flex').first()).toBeVisible();
      await expect(page.locator('.hidden.lg\\:block').first()).toBeVisible();
      
      // Content should be properly constrained with max-width
      const mainContent = page.locator('.max-w-8xl');
      await expect(mainContent.first()).toBeVisible();
    });
  });

  // Cross-device navigation test
  test.describe('Cross-Device Navigation', () => {
    const testViewports = [
      { name: 'Mobile', width: 375, height: 667 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Desktop', width: 1280, height: 720 },
    ];

    testViewports.forEach(({ name, width, height }) => {
      test(`should navigate properly on ${name}`, async ({ page }) => {
        await page.setViewportSize({ width, height });
        await page.goto('/');
        
        // Test navigation to different pages
        if (width >= 1024) {
          // Desktop navigation
          await page.getByRole('link', { name: 'About Us' }).first().click();
        } else {
          // Mobile navigation
          await page.getByRole('button', { name: 'Open menu' }).click();
          await page.getByRole('link', { name: 'About Us' }).nth(1).click();
        }
        
        await expect(page).toHaveURL('/about');
      });
    });
  });
});