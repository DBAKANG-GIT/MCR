import { test, expect } from '@playwright/test';

test.describe('Social Links and WhatsApp Button - Comprehensive Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display WhatsApp floating button', async ({ page }) => {
    // Check WhatsApp button is visible and positioned correctly
    const whatsappButton = page.locator('a[href="https://wa.me/qr/JCJCODZXZ2RKN1"]');
    await expect(whatsappButton).toBeVisible();
    
    // Check button styling and positioning
    await expect(whatsappButton).toHaveClass(/fixed/);
    await expect(whatsappButton).toHaveClass(/bottom-4/);
    await expect(whatsappButton).toHaveClass(/left-4/);
    await expect(whatsappButton).toHaveClass(/bg-green-500/);
    
    // Check accessibility attributes
    await expect(whatsappButton).toHaveAttribute('aria-label', 'Send a message on WhatsApp');
    await expect(whatsappButton).toHaveAttribute('title', 'Send a message on WhatsApp');
    await expect(whatsappButton).toHaveAttribute('target', '_blank');
    await expect(whatsappButton).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should show WhatsApp tooltip on hover', async ({ page }, testInfo) => {
    // Skip on mobile devices where hover doesn't work the same way
    if (testInfo.project.name.includes('Mobile')) {
      test.skip('Hover effects not applicable on mobile devices');
    }
    
    const whatsappButton = page.locator('a[href="https://wa.me/qr/JCJCODZXZ2RKN1"]');
    
    // Hover over the button
    await whatsappButton.hover();
    
    // Check tooltip appears
    await expect(page.locator('text=Send a message')).toBeVisible();
  });

  test('should have correct WhatsApp link URL', async ({ page }) => {
    const whatsappButton = page.locator('a[href="https://wa.me/qr/JCJCODZXZ2RKN1"]');
    await expect(whatsappButton).toHaveAttribute('href', 'https://wa.me/qr/JCJCODZXZ2RKN1');
  });

  test('should display social media links in desktop footer', async ({ page }, testInfo) => {
    if (testInfo.project.name.includes('Mobile')) {
      test.skip('This test is for desktop footer social links');
    }
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check all social media links are present
    await expect(page.locator('footer a[href="#"]:has(img[alt="Facebook"])')).toBeVisible();
    await expect(page.locator('footer a[href="#"]:has(img[alt="LinkedIn"])')).toBeVisible();
    await expect(page.locator('footer a[href="https://www.instagram.com/mcr.getaways.ltd?igsh=MTd1YW5ramo2N25qag=="]:has(img[alt="Instagram"])')).toBeVisible();
    await expect(page.locator('footer a[href="#"]:has(img[alt="WhatsApp"])')).toBeVisible();
    await expect(page.locator('footer a[href="https://www.tiktok.com/@mcr.getaways.ltd?_t=ZN-8z9EJWPRa4M&_r=1"]:has(img[alt="TikTok"])')).toBeVisible();
  });

  test('should display social media links in mobile footer', async ({ page }, testInfo) => {
    if (!testInfo.project.name.includes('Mobile')) {
      test.skip('This test is for mobile footer social links');
    }
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check mobile social media links
    await expect(page.locator('footer a:has(img[alt="Facebook"])')).toBeVisible();
    await expect(page.locator('footer a:has(img[alt="LinkedIn"])')).toBeVisible();
    await expect(page.locator('footer a[href="https://www.instagram.com/mcr.getaways.ltd?igsh=MTd1YW5ramo2N25qag=="]:has(img[alt="Instagram"])')).toBeVisible();
    await expect(page.locator('footer a:has(img[alt="WhatsApp"])')).toBeVisible();
    await expect(page.locator('footer a[href="https://www.tiktok.com/@mcr.getaways.ltd?_t=ZN-8z9EJWPRa4M&_r=1"]:has(img[alt="TikTok"])')).toBeVisible();
  });

  test('should have correct Instagram link', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const instagramLink = page.locator('footer a[href="https://www.instagram.com/mcr.getaways.ltd?igsh=MTd1YW5ramo2N25qag=="]').first();
    await expect(instagramLink).toBeVisible();
    await expect(instagramLink).toHaveAttribute('target', '_blank');
    await expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should have correct TikTok link', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    const tiktokLink = page.locator('footer a[href="https://www.tiktok.com/@mcr.getaways.ltd?_t=ZN-8z9EJWPRa4M&_r=1"]').first();
    await expect(tiktokLink).toBeVisible();
    await expect(tiktokLink).toHaveAttribute('target', '_blank');
    await expect(tiktokLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should have proper security attributes on all external links', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Get all external social links
    const externalLinks = page.locator('footer a[target="_blank"]');
    const count = await externalLinks.count();
    
    // Check each external link has proper security attributes
    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  test('should have hover effects on desktop social links', async ({ page }, testInfo) => {
    if (testInfo.project.name.includes('Mobile')) {
      test.skip('Hover effects not applicable on mobile devices');
    }
    
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check for hover transition classes
    const socialLinks = page.locator('footer a:has(img[alt])');
    const firstLink = socialLinks.first();
    
    await expect(firstLink).toHaveClass(/transition-all/);
    await expect(firstLink).toHaveClass(/duration-300/);
  });

  test('should display social icons with correct alt text', async ({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check all social icons have proper alt text
    await expect(page.locator('footer img[alt="Facebook"]')).toBeVisible();
    await expect(page.locator('footer img[alt="LinkedIn"]')).toBeVisible();
    await expect(page.locator('footer img[alt="Instagram"]')).toBeVisible();
    await expect(page.locator('footer img[alt="WhatsApp"]')).toBeVisible();
    await expect(page.locator('footer img[alt="TikTok"]')).toBeVisible();
  });

  test('should have WhatsApp button with proper z-index', async ({ page }) => {
    const whatsappButton = page.locator('a[href="https://wa.me/qr/JCJCODZXZ2RKN1"]');
    
    // Check the parent div has proper z-index class
    const parentDiv = page.locator('div:has(a[href="https://wa.me/qr/JCJCODZXZ2RKN1"])');
    await expect(parentDiv).toHaveClass(/z-50/);
  });

  test('should maintain WhatsApp button visibility on scroll', async ({ page }) => {
    const whatsappButton = page.locator('a[href="https://wa.me/qr/JCJCODZXZ2RKN1"]');
    
    // Button should be visible at top of page
    await expect(whatsappButton).toBeVisible();
    
    // Scroll down
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Button should still be visible (fixed positioning)
    await expect(whatsappButton).toBeVisible();
  });

  test('should have WhatsApp SVG icon displayed', async ({ page }) => {
    const whatsappButton = page.locator('a[href="https://wa.me/qr/JCJCODZXZ2RKN1"]');
    
    // Check SVG icon is present
    const svgIcon = whatsappButton.locator('svg');
    await expect(svgIcon).toBeVisible();
    
    // Check SVG has correct size classes
    await expect(svgIcon).toHaveClass(/h-6/);
    await expect(svgIcon).toHaveClass(/w-6/);
  });

  test('should work on all pages of the site', async ({ page }) => {
    const pages = ['/', '/about', '/contact', '/terms', '/policy'];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      // WhatsApp button should be on every page
      const whatsappButton = page.locator('a[href="https://wa.me/qr/JCJCODZXZ2RKN1"]');
      await expect(whatsappButton).toBeVisible();
      
      // Social links in footer should be on every page
      await page.locator('footer').scrollIntoViewIfNeeded();
      await expect(page.locator('footer a[href="https://www.instagram.com/mcr.getaways.ltd?igsh=MTd1YW5ramo2N25qag=="]').first()).toBeVisible();
      await expect(page.locator('footer a[href="https://www.tiktok.com/@mcr.getaways.ltd?_t=ZN-8z9EJWPRa4M&_r=1"]').first()).toBeVisible();
    }
  });
});