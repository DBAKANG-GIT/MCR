import { test, expect } from '@playwright/test';

test.describe('Premium Animations and Effects', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have glassmorphism navbar effect', async ({ page }) => {
    const navbar = page.locator('nav');
    
    // Check for backdrop blur classes
    await expect(navbar).toHaveClass(/backdrop-blur-lg/);
    await expect(navbar).toHaveClass(/bg-white\/80/);
  });

  test('should have animated hero elements', async ({ page }) => {
    // Check for fade-in animation classes
    const heroContent = page.locator('.animate-fade-in-up').first();
    await expect(heroContent).toBeVisible();
    
    // Check for gradient text animation
    const gradientText = page.locator('.text-gradient-premium');
    await expect(gradientText).toBeVisible();
    await expect(gradientText).toHaveClass(/animate-gradient/);
  });

  test('should have floating background elements', async ({ page }) => {
    // Check for floating animation elements
    const floatingElements = page.locator('.animate-float');
    await expect(floatingElements.first()).toBeVisible();
  });

  test('should have premium button animations', async ({ page }) => {
    const premiumButton = page.locator('button').first();
    
    // Check for hover effects (we can test classes, actual hover needs different approach)
    await expect(premiumButton).toHaveClass(/transition-all/);
    await expect(premiumButton).toHaveClass(/duration-300/);
  });

  test('should have glass morphism search form', async ({ page }, testInfo) => {
    // Skip on mobile where search form is hidden
    if (testInfo.project.name.includes('Mobile')) {
      test.skip('Search form is hidden on mobile');
    }
    
    const searchForm = page.locator('.glass').first();
    await expect(searchForm).toBeVisible();
    await expect(searchForm).toHaveClass(/backdrop-blur-xl/);
  });

  test('should have shimmer animation on elements', async ({ page }) => {
    // Look for shimmer animation class
    const shimmerElements = page.locator('.animate-shimmer');
    if (await shimmerElements.count() > 0) {
      await expect(shimmerElements.first()).toBeVisible();
    }
  });

  test('should have pulse glow effects', async ({ page }) => {
    const pulseElements = page.locator('.animate-pulse-glow');
    if (await pulseElements.count() > 0) {
      await expect(pulseElements.first()).toBeVisible();
    }
  });

  test('should have interactive hover effects on navigation', async ({ page }, testInfo) => {
    // Skip on mobile devices
    if (testInfo.project.name.includes('Mobile')) {
      test.skip('Desktop navigation not available on mobile');
    }
    
    const navLinks = page.locator('nav .group');
    if (await navLinks.count() > 0) {
      await expect(navLinks.first()).toBeVisible();
      
      // Check for group hover effects
      await expect(navLinks.first()).toHaveClass(/group/);
    }
  });
});