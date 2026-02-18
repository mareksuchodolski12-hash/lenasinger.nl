// tests/e2e/home.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load and display hero section', async ({ page }) => {
    await page.goto('/');

    // Check hero section exists
    const hero = page.locator('h1');
    await expect(hero).toBeVisible();
    await expect(hero).toContainText('Premium');
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    // Check navbar exists
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();

    // Check navigation links
    const servicesLink = page.locator('a:has-text("Services")');
    await expect(servicesLink).toBeVisible();
  });

  test('should display services section', async ({ page }) => {
    await page.goto('/');

    // Scroll to services section
    await page.locator('text=Our Services').scrollIntoViewIfNeeded();

    // Check services are displayed
    const services = page.locator('[role="region"]').filter({ hasText: 'Our Services' });
    await expect(services).toBeVisible();
  });

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/');

    // Find CTA button
    const ctaButton = page.locator('a:has-text("Book Now")').first();
    await expect(ctaButton).toBeVisible();

    // Check it's clickable
    await expect(ctaButton).toBeEnabled();
  });

  test('should load footer with contact info', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check footer exists
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});
