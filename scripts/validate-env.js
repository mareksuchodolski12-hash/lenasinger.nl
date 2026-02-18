/**
 * Environment Variable Validation Script
 *
 * Validates that all required environment variables are set correctly.
 * Run this at development startup or as part of deployment process.
 *
 * Usage:
 * - Dev: node scripts/validate-env.js
 * - Build: node scripts/validate-env.js && npm run build
 * - CI/CD: Add to GitHub Actions or deployment pipeline
 */

const path = require('path');
const fs = require('fs');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// Environment variable requirements
const REQUIRED_VARS = [
  {
    name: 'NEXT_PUBLIC_SITE_URL',
    description: 'Website base URL',
    example: 'https://yoursite.com',
    priority: 'critical',
  },
  {
    name: 'NEXT_PUBLIC_SINGER_NAME',
    description: 'Singer name/professional name',
    example: 'Jane Smith',
    priority: 'critical',
  },
  {
    name: 'NEXT_PUBLIC_SINGER_CITY',
    description: 'Primary service city',
    example: 'Nashville',
    priority: 'critical',
  },
  {
    name: 'NEXT_PUBLIC_CONTACT_EMAIL',
    description: 'Email address for contact form submissions',
    example: 'contact@yoursite.com',
    priority: 'critical',
  },
  {
    name: 'NEXT_PUBLIC_CONTACT_PHONE',
    description: 'Phone number for contact',
    example: '+1-615-555-0100',
    priority: 'critical',
  },
];

const RECOMMENDED_VARS = [
  {
    name: 'NEXT_PUBLIC_SINGER_TITLE',
    description: 'Professional title',
    example: 'Professional Singer | Event Entertainment',
    priority: 'high',
  },
  {
    name: 'NEXT_PUBLIC_SINGER_STATE',
    description: 'State/province',
    example: 'Tennessee',
    priority: 'high',
  },
  {
    name: 'NEXT_PUBLIC_YEARS_EXPERIENCE',
    description: 'Years of professional experience',
    example: '10',
    priority: 'high',
  },
  {
    name: 'NEXT_PUBLIC_EVENTS_PERFORMED',
    description: 'Total events performed',
    example: '250',
    priority: 'high',
  },
  {
    name: 'NEXT_PUBLIC_CLIENT_REVIEWS',
    description: 'Total client reviews/testimonials',
    example: '125',
    priority: 'high',
  },
  {
    name: 'NEXT_PUBLIC_AVERAGE_RATING',
    description: 'Average review rating (e.g., 4.9)',
    example: '4.9',
    priority: 'high',
  },
];

const OPTIONAL_VARS = [
  {
    name: 'NEXT_PUBLIC_SINGER_BIO',
    description: 'Short bio (2-3 sentences)',
    example: 'Experienced vocalist specializing in...',
  },
  {
    name: 'NEXT_PUBLIC_SINGER_REGION',
    description: 'Region/county',
    example: 'Middle Tennessee',
  },
  {
    name: 'NEXT_PUBLIC_SERVICE_RADIUS',
    description: 'Service radius in miles',
    example: '50',
  },
  {
    name: 'NEXT_PUBLIC_INSTAGRAM_URL',
    description: 'Instagram profile URL',
    example: 'https://instagram.com/yourprofile',
  },
  {
    name: 'NEXT_PUBLIC_FACEBOOK_URL',
    description: 'Facebook profile/page URL',
    example: 'https://facebook.com/yourpage',
  },
  {
    name: 'NEXT_PUBLIC_YOUTUBE_URL',
    description: 'YouTube channel URL',
    example: 'https://youtube.com/c/yourhandle',
  },
  {
    name: 'NEXT_PUBLIC_TIKTOK_URL',
    description: 'TikTok profile URL',
    example: 'https://tiktok.com/@yourhandle',
  },
  {
    name: 'CONTACT_EMAIL_FROM',
    description: 'Email sender address (for outbound)',
    example: 'noreply@yoursite.com',
  },
  {
    name: 'CONTACT_EMAIL_TO',
    description: 'Where contact form submissions go',
    example: 'you@yoursite.com',
  },
  {
    name: 'SMTP_HOST',
    description: 'SMTP server host',
    example: 'smtp.gmail.com',
  },
  {
    name: 'SMTP_PORT',
    description: 'SMTP server port',
    example: '587',
  },
  {
    name: 'SMTP_USER',
    description: 'SMTP username/email',
    example: 'you@gmail.com',
  },
  {
    name: 'SMTP_PASSWORD',
    description: 'SMTP password (use app-specific password)',
    example: '••••••••',
  },
  {
    name: 'RATE_LIMIT_REQUESTS',
    description: 'Max contact form requests per hour',
    example: '5',
  },
  {
    name: 'RATE_LIMIT_WINDOW_MS',
    description: 'Rate limit window in milliseconds',
    example: '3600000 (1 hour)',
  },
  {
    name: 'GA_MEASUREMENT_ID',
    description: 'Google Analytics measurement ID',
    example: 'G-XXXXXXXXXX',
  },
  {
    name: 'FACEBOOK_PIXEL_ID',
    description: 'Facebook Pixel ID',
    example: '123456789012345',
  },
  {
    name: 'NODE_ENV',
    description: 'Environment (development|production)',
    example: 'production',
  },
];

/**
 * Validate a single environment variable
 */
function validateVariable(varConfig, isRequired = true) {
  const value = process.env[varConfig.name];
  const exists = value !== undefined && value !== '';

  if (!exists && isRequired) {
    return {
      status: 'error',
      message: `${colors.red}✗${colors.reset} MISSING: ${varConfig.name}`,
      details: `Expected: ${varConfig.description}\nExample: ${varConfig.example}`,
    };
  }

  if (!exists) {
    return {
      status: 'warning',
      message: `${colors.yellow}⚠${colors.reset} UNSET: ${varConfig.name}`,
      details: `Optional: ${varConfig.description}`,
    };
  }

  // Additional validation for specific variables
  if (varConfig.name === 'NEXT_PUBLIC_SITE_URL') {
    if (!value.startsWith('http://') && !value.startsWith('https://')) {
      return {
        status: 'error',
        message: `${colors.red}✗${colors.reset} INVALID: ${varConfig.name} must be full URL`,
        details: `Got: ${value}\nExpected format: https://yourdomain.com`,
      };
    }
  }

  if (varConfig.name === 'NEXT_PUBLIC_CONTACT_EMAIL') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return {
        status: 'error',
        message: `${colors.red}✗${colors.reset} INVALID EMAIL: ${varConfig.name}`,
        details: `Got: ${value}\nExpected format: user@domain.com`,
      };
    }
  }

  if (varConfig.name.includes('RATING') || varConfig.name.includes('RATING')) {
    const num = parseFloat(value);
    if (isNaN(num) || num < 0 || num > 5) {
      return {
        status: 'warning',
        message: `${colors.yellow}⚠${colors.reset} INVALID RATING: ${varConfig.name}`,
        details: `Got: ${value}\nExpected: Number between 0-5`,
      };
    }
  }

  return {
    status: 'success',
    message: `${colors.green}✓${colors.reset} SET: ${varConfig.name}`,
  };
}

/**
 * Main validation function
 */
function validateEnvironment() {
  console.log(`\n${colors.bright}${colors.blue}Environment Variable Validation${colors.reset}\n`);

  let errors = [];
  let warnings = [];
  let successes = [];

  // Validate required variables
  console.log(`${colors.bright}CRITICAL VARIABLES${colors.reset}`);
  REQUIRED_VARS.forEach((varConfig) => {
    const result = validateVariable(varConfig, true);
    console.log(result.message);
    if (result.details && result.status !== 'success') {
      console.log(`  ${colors.dim}${result.details}${colors.reset}`);
    }

    if (result.status === 'error') errors.push(varConfig.name);
    if (result.status === 'success') successes.push(varConfig.name);
  });

  // Validate recommended variables
  console.log(`\n${colors.bright}RECOMMENDED VARIABLES${colors.reset}`);
  RECOMMENDED_VARS.forEach((varConfig) => {
    const result = validateVariable(varConfig, false);
    console.log(result.message);
    if (result.details && result.status !== 'success') {
      console.log(`  ${colors.dim}${result.details}${colors.reset}`);
    }

    if (result.status === 'warning') warnings.push(varConfig.name);
    if (result.status === 'success') successes.push(varConfig.name);
  });

  // Validate optional variables (just show which are set)
  const optionalSet = OPTIONAL_VARS.filter((v) => process.env[v.name]).map((v) => v.name);
  if (optionalSet.length > 0) {
    console.log(`\n${colors.bright}OPTIONAL VARIABLES SET${colors.reset}`);
    optionalSet.forEach((name) => {
      console.log(`${colors.green}✓${colors.reset} SET: ${name}`);
    });
  }

  // Summary
  console.log(`\n${colors.bright}SUMMARY${colors.reset}`);
  console.log(`${colors.green}✓ Valid:${colors.reset} ${successes.length}`);
  console.log(`${colors.yellow}⚠ Warnings:${colors.reset} ${warnings.length}`);
  console.log(`${colors.red}✗ Errors:${colors.reset} ${errors.length}`);

  if (errors.length > 0) {
    console.log(`\n${colors.bright}${colors.red}VALIDATION FAILED${colors.reset}`);
    console.log(
      `${colors.red}Please set the following required environment variables:${colors.reset}`
    );
    errors.forEach((name) => {
      const varConfig = REQUIRED_VARS.find((v) => v.name === name);
      console.log(`\n${name}`);
      console.log(`  Description: ${varConfig.description}`);
      console.log(`  Example: ${varConfig.example}`);
    });

    console.log(`\n${colors.dim}See .env.example for complete list of variables${colors.reset}\n`);
    return false;
  }

  if (warnings.length > 0) {
    console.log(
      `\n${colors.yellow}${colors.bright}Note: Some recommended variables are not set${colors.reset}`
    );
    console.log(`${colors.yellow}While not required, they improve functionality${colors.reset}\n`);
  } else {
    console.log(
      `\n${colors.green}${colors.bright}✓ All recommended variables are set${colors.reset}\n`
    );
  }

  return true;
}

/**
 * Run validation
 */
const isValid = validateEnvironment();

// Exit with appropriate code
process.exit(isValid ? 0 : 1);

module.exports = { validateEnvironment, validateVariable };
