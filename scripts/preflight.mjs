#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const errors = [];
const warnings = [];

const exists = (filePath) => fs.existsSync(path.join(root, filePath));

function requireAny(paths, label) {
  if (!paths.some(exists)) {
    errors.push(`${label} is missing (${paths.join(' or ')})`);
  }
}

function checkPackageJson() {
  if (!exists('package.json')) {
    errors.push('package.json is missing');
    return;
  }

  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  const scripts = pkg.scripts || {};

  for (const scriptName of ['dev', 'build', 'start']) {
    if (!scripts[scriptName]) {
      errors.push(`missing npm script: ${scriptName}`);
    }
  }

  if (!pkg.dependencies?.next) {
    errors.push('next dependency is missing from package.json');
  }
}

function checkNextRoutes() {
  const hasAppDir = exists('app');
  const hasPagesDir = exists('pages');

  if (!hasAppDir && !hasPagesDir) {
    errors.push('Neither app/ nor pages/ exists. Next.js will not have any routes to serve.');
    return;
  }

  if (hasAppDir) {
    requireAny(['app/layout.tsx', 'app/layout.jsx'], 'Root layout');
    requireAny(['app/page.tsx', 'app/page.jsx'], 'Home page');
  }
}

function checkEnvFiles() {
  if (!exists('.env.local') && exists('.env.local.example')) {
    warnings.push('No .env.local found; using .env.local.example as a template may be required for some features.');
  }
}

checkPackageJson();
checkNextRoutes();
checkEnvFiles();

if (warnings.length > 0) {
  console.warn('Preflight warnings:');
  for (const warning of warnings) {
    console.warn(`- ${warning}`);
  }
}

if (errors.length > 0) {
  console.error('Preflight FAILED:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('Preflight PASSED');
