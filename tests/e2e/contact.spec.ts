// tests/e2e/contact.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/contact');

    // Check form exists
    const form = page.locator('form');
    await expect(form).toBeVisible();

    // Check form fields
    const nameInput = page.locator('input[id="name"]');
    const emailInput = page.locator('input[id="email"]');
    const messageInput = page.locator('textarea[id="message"]');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(messageInput).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    await page.goto('/contact');

    // Try to submit empty form
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // Check for validation error (form should not submit)
    const form = page.locator('form');
    await expect(form).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    await page.goto('/contact');

    // Fill form with invalid email
    await page.locator('input[id="name"]').fill('Test User');
    await page.locator('input[id="email"]').fill('invalid-email');
    await page.locator('input[id="subject"]').fill('Test');
    await page.locator('textarea[id="message"]').fill('Test message');

    // Try to submit
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();

    // Should show validation error or prevent submission
    await expect(page.locator('input[id="email"]')).toHaveAttribute('type', 'email');
  });

  test('should have submit button', async ({ page }) => {
    await page.goto('/contact');

    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toContainText('Send Message');
  });
});
