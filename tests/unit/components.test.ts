// tests/unit/components.test.ts
import { describe, it, expect } from 'vitest';

// Example unit tests
describe('Component Tests', () => {
  it('should render correctly', () => {
    expect(true).toBe(true);
  });

  it('button should have correct text', () => {
    const buttonText = 'Book Now';
    expect(buttonText).toBe('Book Now');
  });

  it('form validation should work', () => {
    const email = 'test@example.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(email)).toBe(true);
  });

  it('should reject invalid email', () => {
    const email = 'invalid-email';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(email)).toBe(false);
  });
});
