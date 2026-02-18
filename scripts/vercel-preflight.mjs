#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const errors = [];
const root = process.cwd();

const exists = (p) => fs.existsSync(path.join(root, p));

function fail(msg) {
  errors.push(msg);
}

function checkPackageJson() {
  if (!exists('package.json')) {
    fail('package.json is missing');
    return;
  }

  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  const deps = pkg.dependencies || {};
  const scripts = pkg.scripts || {};

  for (const dep of ['next', 'react', 'react-dom']) {
    if (!deps[dep]) fail(`missing dependency: ${dep}`);
  }

  if (scripts.build !== 'next build') {
    fail(`scripts.build must equal "next build" (got: ${scripts.build ?? 'undefined'})`);
  }

  if (!scripts.start || !scripts.start.includes('next start')) {
    fail(`scripts.start must include "next start" (got: ${scripts.start ?? 'undefined'})`);
  }
}

function checkRoutes() {
  const hasApp = exists('app');
  const hasPages = exists('pages');
  if (!hasApp && !hasPages) {
    fail('missing app/ and pages/ directories (no Next.js routes to serve)');
  }

  if (hasApp && !exists('app/layout.tsx') && !exists('app/layout.jsx')) {
    fail('app/ exists but app/layout.tsx|jsx is missing');
  }

  if (hasApp && !exists('app/page.tsx') && !exists('app/page.jsx')) {
    fail('app/ exists but app/page.tsx|jsx is missing');
  }
}

function checkVercelJson() {
  if (!exists('vercel.json')) {
    fail('vercel.json is missing');
    return;
  }
  const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  const allowed = new Set([
    'framework',
    'installCommand',
    'buildCommand',
    'devCommand',
    'outputDirectory',
    'functions',
    'rewrites',
    'redirects',
    'headers',
    'cleanUrls',
    'trailingSlash',
  ]);

  for (const key of Object.keys(vercel)) {
    if (!allowed.has(key)) fail(`vercel.json contains unsupported key for this repo policy: ${key}`);
  }

  if (vercel.framework !== 'nextjs') {
    fail(`vercel.json.framework must be "nextjs" (got: ${vercel.framework ?? 'undefined'})`);
  }

  if (vercel.installCommand !== 'npm ci') {
    fail(`vercel.json.installCommand must be "npm ci" (got: ${vercel.installCommand ?? 'undefined'})`);
  }

  if (vercel.buildCommand !== 'npm run build') {
    fail(`vercel.json.buildCommand must be "npm run build" (got: ${vercel.buildCommand ?? 'undefined'})`);
  }
}

function checkLockfileConsistency() {
  const hasNpmLock = exists('package-lock.json');
  const hasPnpmLock = exists('pnpm-lock.yaml');
  if (!hasNpmLock) fail('package-lock.json missing (required because installCommand uses npm ci)');
  if (hasPnpmLock) fail('pnpm-lock.yaml present but this repo deploy path is npm ci; remove or switch strategy');
}

checkPackageJson();
checkRoutes();
checkVercelJson();
checkLockfileConsistency();

if (errors.length > 0) {
  console.error('Vercel preflight FAILED:');
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}

console.log('Vercel preflight PASSED');
