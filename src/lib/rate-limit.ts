// src/lib/rate-limit.ts
// Simple in-memory rate limiting using IP address
// For production, consider using Redis

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// Store rate limit data in memory
const rateLimitMap = new Map<string, RateLimitEntry>();

// Cleanup old entries every 5 minutes
setInterval(
  () => {
    const now = Date.now();
    for (const [key, entry] of rateLimitMap.entries()) {
      if (entry.resetTime < now) {
        rateLimitMap.delete(key);
      }
    }
  },
  5 * 60 * 1000
);

/**
 * Rate limit requests by IP address
 *
 * @param ip - Client IP address
 * @param maxRequests - Maximum requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns Object with { allowed: boolean, remaining: number, resetTime: number }
 */
export function rateLimit(
  ip: string,
  maxRequests: number = 5,
  windowMs: number = 60 * 60 * 1000 // 1 hour by default
) {
  const now = Date.now();
  const key = `rate_limit:${ip}`;

  let entry = rateLimitMap.get(key);

  // Initialize or reset if window has expired
  if (!entry || entry.resetTime < now) {
    entry = {
      count: 0,
      resetTime: now + windowMs,
    };
    rateLimitMap.set(key, entry);
  }

  entry.count++;

  const allowed = entry.count <= maxRequests;
  const remaining = Math.max(0, maxRequests - entry.count);
  const resetTime = entry.resetTime;

  return {
    allowed,
    remaining,
    resetTime,
    retryAfter: allowed ? null : Math.ceil((resetTime - now) / 1000), // seconds
  };
}

/**
 * Get client IP from request headers
 */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback - this won't be the real IP in most cases
  return 'unknown';
}

/**
 * Create rate limit response headers
 */
export function createRateLimitHeaders(remaining: number, reset: number): Record<string, string> {
  return {
    'X-RateLimit-Limit': '5',
    'X-RateLimit-Remaining': remaining.toString(),
    'X-RateLimit-Reset': reset.toString(),
  };
}
