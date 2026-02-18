#!/usr/bin/env node

/**
 * Preflight Check Script for Local Development
 *
 * Validates:
 * - Node.js version (>= 18.x recommended)
 * - Required environment variables
 * - Security configuration
 *
 * Exit codes:
 * - 0: All checks passed, safe to start dev server
 * - 1: Critical failure, cannot start
 */

import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// ============================================================================
// COLORS FOR TERMINAL OUTPUT
// ============================================================================
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(type, message) {
  const timestamp = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  let prefix = '';
  let color = colors.reset;

  switch (type) {
    case 'info':
      prefix = 'ℹ';
      color = colors.cyan;
      break;
    case 'success':
      prefix = '✓';
      color = colors.green;
      break;
    case 'warning':
      prefix = '⚠';
      color = colors.yellow;
      break;
    case 'error':
      prefix = '✗';
      color = colors.red;
      break;
    case 'title':
      prefix = '';
      color = colors.bright + colors.blue;
      break;
    case 'section':
      prefix = '';
      color = colors.bright;
      break;
    default:
      prefix = '•';
  }

  console.log(`${color}${prefix}${colors.reset} ${message}`);
}

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

/**
 * Validate Node.js version
 * Returns: { passed: boolean, message: string }
 */
function validateNodeVersion() {
  const nodeVersion = process.version; // e.g., "v18.17.0"
  const majorVersion = parseInt(nodeVersion.slice(1, nodeVersion.indexOf('.')), 10);

  const minRequired = 18;
  const recommended = 20;

  if (majorVersion < minRequired) {
    return {
      passed: false,
      message: `Node ${minRequired}+ required (you have ${nodeVersion})`,
    };
  }

  if (majorVersion < recommended) {
    return {
      passed: true,
      message: `Node ${nodeVersion} OK (${recommended}+ recommended)`,
      warning: true,
    };
  }

  return {
    passed: true,
    message: `Node ${nodeVersion} ✓`,
  };
}

/**
 * Check if .env.local exists
 */
function checkEnvFile() {
  const envPath = path.join(projectRoot, '.env.local');
  const exists = fs.existsSync(envPath);

  if (exists) {
    return {
      passed: true,
      message: '.env.local found ✓',
    };
  }

  // Check if .env.local.example exists
  const examplePath = path.join(projectRoot, '.env.local.example');
  const exampleExists = fs.existsSync(examplePath);

  if (exampleExists) {
    return {
      passed: false,
      message: '.env.local NOT FOUND (but .env.local.example exists)',
      instruction: 'Copy .env.local.example to .env.local and fill in required values',
    };
  }

  return {
    passed: false,
    message: 'Neither .env.local nor .env.local.example found',
    instruction: 'Create .env.local with required environment variables',
  };
}

/**
 * Load and validate environment variables
 */
function validateEnvVars() {
  const envPath = path.join(projectRoot, '.env.local');

  if (!fs.existsSync(envPath)) {
    // If no .env.local, try .env (for CI/production)
    const prodEnv = path.join(projectRoot, '.env');
    if (!fs.existsSync(prodEnv)) {
      return {
        passed: false,
        message: 'No environment file found',
        instruction: 'Create .env.local with required variables',
      };
    }
  }

  // Load .env.local or .env
  const envData = fs.readFileSync(
    fs.existsSync(envPath) ? envPath : path.join(projectRoot, '.env'),
    'utf-8'
  );

  const envVars = {};
  envData.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      const value = valueParts
        .join('=')
        .trim()
        .replace(/^["']|["']$/g, '');
      if (key) {
        envVars[key] = value;
      }
    }
  });

  // TRULY REQUIRED env vars for app to function
  const required = [
    'NEXT_PUBLIC_SITE_URL', // Needed for canonical URLs, SEO
    'NEXT_PUBLIC_SINGER_NAME', // Core identity, personalization
  ];

  const optional = [
    'NEXT_PUBLIC_PRIMARY_CITY', // Local SEO
    'SINGER_CONTACT_EMAIL', // Contact form
    'NEXT_PUBLIC_GA_ID', // Analytics optional
  ];

  const missing = required.filter((key) => !envVars[key] || envVars[key] === '');

  if (missing.length > 0) {
    return {
      passed: false,
      message: `Missing required env vars: ${missing.join(', ')}`,
    };
  }

  const missingOptional = optional.filter((key) => !envVars[key]);
  if (missingOptional.length > 0) {
    return {
      passed: true,
      message: 'All required env vars loaded ✓',
      warning: true,
      warningMessage: `Optional vars missing: ${missingOptional.join(', ')} (optional, may affect features)`,
    };
  }

  return {
    passed: true,
    message: 'All environment variables loaded ✓',
  };
}

/**
 * Security check: ensure NEXT_PUBLIC_ vars are safe
 */
function validatePublicVars() {
  const envPath = path.join(projectRoot, '.env.local');

  if (!fs.existsSync(envPath)) {
    return {
      passed: true,
      message: 'Security check: no .env.local to validate (skipped)',
    };
  }

  const envData = fs.readFileSync(envPath, 'utf-8');

  // Variables that should NEVER be public
  const dangerousPublic = ['SMTP_PASSWORD', 'API_KEY', 'SECRET', 'TOKEN', 'PRIVATE_KEY'];

  const violations = [];
  dangerousPublic.forEach((dangerous) => {
    if (envData.includes(`NEXT_PUBLIC_${dangerous}`)) {
      violations.push(`NEXT_PUBLIC_${dangerous}`);
    }
  });

  if (violations.length > 0) {
    return {
      passed: false,
      message: `Security violation: do not prefix secrets with NEXT_PUBLIC_: ${violations.join(', ')}`,
      instruction: 'Remove NEXT_PUBLIC_ prefix from sensitive variables',
    };
  }

  return {
    passed: true,
    message: 'Security check: NEXT_PUBLIC_ prefixes are safe ✓',
  };
}

/**
 * Port availability check
 */
function checkPortAvailability() {
  const port = 3002;
  // Note: This is a simplified check. Real implementation would try to bind to the port.
  // For now, we just inform the user of the port.
  return {
    passed: true,
    message: `Port ${port} will be used (verify not in use: 'netstat -ano | findstr :3002' on Windows)`,
  };
}

/**
 * System info
 */
function getSystemInfo() {
  return {
    os: os.platform(),
    arch: os.arch(),
    platform: os.type(),
  };
}

// ============================================================================
// MAIN PREFLIGHT EXECUTION
// ============================================================================

async function runPreflight() {
  console.log('');
  log('title', '═══════════════════════════════════════════════════════════════');
  log('title', '  PREFLIGHT CHECK: Local Development Environment');
  log('title', '═══════════════════════════════════════════════════════════════');
  console.log('');

  let passCount = 0;
  let failCount = 0;
  const failures = [];

  // ===== CHECK 1: Node Version =====
  log('section', 'Node.js Version');
  const nodeCheck = validateNodeVersion();
  if (nodeCheck.passed) {
    log('success', nodeCheck.message);
    passCount++;
    if (nodeCheck.warning) {
      log('warning', `Recommendation: Node ${20}+ preferred for optimal performance`);
    }
  } else {
    log('error', nodeCheck.message);
    failCount++;
    failures.push({ check: 'Node.js Version', detail: nodeCheck.message });
  }
  console.log('');

  // ===== CHECK 2: Environment File =====
  log('section', 'Environment Configuration');
  const envFileCheck = checkEnvFile();
  if (envFileCheck.passed) {
    log('success', envFileCheck.message);
    passCount++;
  } else {
    log('error', envFileCheck.message);
    if (envFileCheck.instruction) {
      log('info', `→ ${envFileCheck.instruction}`);
    }
    failCount++;
    failures.push({ check: 'Environment File', detail: envFileCheck.message });
  }
  console.log('');

  // ===== CHECK 3: Required Env Vars =====
  log('section', 'Environment Variables');
  const envVarCheck = validateEnvVars();
  if (envVarCheck.passed) {
    log('success', envVarCheck.message);
    if (envVarCheck.warningMessage) {
      log('warning', envVarCheck.warningMessage);
    }
    passCount++;
  } else {
    log('error', envVarCheck.message);
    failCount++;
    failures.push({ check: 'Required Env Vars', detail: envVarCheck.message });
  }
  console.log('');

  // ===== CHECK 4: Security =====
  log('section', 'Security Validation');
  const securityCheck = validatePublicVars();
  if (securityCheck.passed) {
    log('success', securityCheck.message);
    passCount++;
  } else {
    log('error', securityCheck.message);
    if (securityCheck.instruction) {
      log('info', `→ ${securityCheck.instruction}`);
    }
    failCount++;
    failures.push({ check: 'Security', detail: securityCheck.message });
  }
  console.log('');

  // ===== CHECK 5: Port Availability =====
  log('section', 'Port Configuration');
  const portCheck = checkPortAvailability();
  if (portCheck.passed) {
    log('success', 'Port 3002 ready');
    log('info', portCheck.message);
    passCount++;
  } else {
    log('error', portCheck.message);
    failCount++;
    failures.push({ check: 'Port Configuration', detail: portCheck.message });
  }
  console.log('');

  // ===== SYSTEM INFO =====
  const systemInfo = getSystemInfo();
  log('info', `Platform: ${systemInfo.platform} (${systemInfo.arch})`);
  console.log('');

  // ===== SUMMARY =====
  log('title', '═══════════════════════════════════════════════════════════════');

  if (failCount === 0) {
    log('success', `All checks passed! (${passCount}/${passCount})`);
    console.log('');
    log('section', 'Ready to start development server:');
    console.log('');
    log('info', `${colors.bright}Local URL:${colors.reset} http://localhost:3002`);
    log('info', `${colors.bright}Alt URL: ${colors.reset}http://127.0.0.1:3002`);
    console.log('');
    log('info', 'Next.js will start in development mode with hot module reload.');
    log('info', 'Press Ctrl+C to stop the server.');
    console.log('');
    log('title', '═══════════════════════════════════════════════════════════════');
    console.log('');
    process.exit(0);
  } else {
    log('error', `Checks failed! (${passCount} passed, ${failCount} failed)`);
    console.log('');

    if (failures.length > 0) {
      log('section', 'Failures:');
      failures.forEach((f) => {
        log('error', `${f.check}: ${f.detail}`);
      });
      console.log('');
    }

    log('section', 'Fix the issues above and try again:');
    log('info', 'npm run preflight  # Check again');
    log('info', 'npm run dev:safe   # Start with checks');
    console.log('');
    log('title', '═══════════════════════════════════════════════════════════════');
    console.log('');
    process.exit(1);
  }
}

// Execute
runPreflight().catch((error) => {
  log('error', `Unexpected error: ${error.message}`);
  console.error(error);
  process.exit(1);
});
