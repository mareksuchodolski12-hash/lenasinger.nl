// tests/e2e/services.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Services Pages', () => {
  test('should load services overview page', async ({ page }) => {
    await page.goto('/services');

    // Check page title
    const heading = page.locator('h1');
    await expect(heading).toContainText('Services');

    // Check service cards are visible
    const cards = page.locator('[class*="grid"]');
    await expect(cards).toBeVisible();
  });

  test('should have clickable service links', async ({ page }) => {
    await page.goto('/services');

    // Find first service link
    const serviceLink = page.locator('a:has-text("Learn More")').first();
    await expect(serviceLink).toBeVisible();

    // Click and verify navigation
    await serviceLink.click();
    await expect(page).toHaveURL(/\/services\/\w+/);
  });

  test('should load individual service page', async ({ page }) => {
    await page.goto('/services/weddings');

    // Check page loads
    await expect(page.locator('h1')).toBeVisible();

    // Check content
    await expect(page.locator('text=Wedding')).toBeVisible();

    // Check CTA button
    const ctaButton = page.locator('a:has-text("Book")');
    await expect(ctaButton).toBeVisible();
  });

  test('should have working navigation back', async ({ page }) => {
    await page.goto('/services/weddings');

    // Should be able to navigate back to services
    const backLink = page.locator('a:has-text("Services")');
    if (await backLink.isVisible()) {
      await backLink.click();
      await expect(page).toHaveURL('/services');
    }
  });
});
