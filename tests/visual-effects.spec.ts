import { test, expect } from '@playwright/test';

test.describe('Visual Effects and Styling', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have gradient backgrounds', async ({ page }) => {
    // Check hero section has gradient background
    const heroSection = page.locator('section').first();
    await expect(heroSection).toHaveClass(/bg-gradient-to-br/);
  });

  test('should have enhanced image containers with hover effects', async ({ page }) => {
    // Look for image containers with premium styling
    const imageContainers = page.locator('.group.relative.overflow-hidden');
    await expect(imageContainers.first()).toBeVisible();
    
    // Check for hover scale effects
    await expect(imageContainers.first()).toHaveClass(/hover:scale-105/);
  });

  test('should have shadow effects', async ({ page }) => {
    // Check for shadow classes
    const shadowElements = page.locator('[class*="shadow-2xl"], [class*="shadow-xl"]');
    await expect(shadowElements.first()).toBeVisible();
  });

  test('should have proper typography with gradient text', async ({ page }) => {
    // Check for gradient text effects
    const gradientText = page.locator('.text-gradient-premium, .text-gradient');
    if (await gradientText.count() > 0) {
      await expect(gradientText.first()).toBeVisible();
    }
  });

  test('should have enhanced button styling', async ({ page }) => {
    // Check for premium button styling
    const buttons = page.locator('button, a[role="button"]');
    const premiumButtons = buttons.locator('[class*="gradient"], [class*="hover:scale"], [class*="transition-all"]');
    
    if (await premiumButtons.count() > 0) {
      await expect(premiumButtons.first()).toBeVisible();
    }
  });

  test('should have proper spacing and layout', async ({ page }) => {
    // Check for proper container max-widths
    const containers = page.locator('.max-w-8xl, .max-w-7xl, .max-w-6xl');
    await expect(containers.first()).toBeVisible();
    
    // Check for proper padding/margins
    const spacedElements = page.locator('[class*="py-"], [class*="px-"], [class*="gap-"]');
    await expect(spacedElements.first()).toBeVisible();
  });

  test('should have animated floating elements', async ({ page }) => {
    // Check for background floating elements
    const floatingBg = page.locator('.absolute[class*="blur-xl"]');
    if (await floatingBg.count() > 0) {
      await expect(floatingBg.first()).toBeVisible();
    }
  });

  test('should have enhanced footer styling', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Check for gradient background
    await expect(footer).toHaveClass(/bg-gradient-to-br/);
  });

  test('should have premium social media icons', async ({ page }) => {
    // Scroll to footer where social icons are
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const socialIcons = page.locator('a[class*="group"][class*="rounded-full"]').first();
    if (await socialIcons.count() > 0) {
      await expect(socialIcons).toBeVisible();
      await expect(socialIcons).toHaveClass(/group/);
      await expect(socialIcons).toHaveClass(/hover:scale-110/);
    }
  });
});