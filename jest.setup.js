import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      prefetch: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock Vercel Analytics
jest.mock('@vercel/analytics', () => ({
  track: jest.fn(),
}));

// Mock environment variables
process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'GA_TEST_ID';
process.env.MAILCHIMP_API_KEY = 'test-api-key';
process.env.MAILCHIMP_AUDIENCE_ID = 'test-audience-id';

// Global mocks
global.gtag = jest.fn();

// Mock PerformanceObserver for SEO monitoring tests
global.PerformanceObserver = jest.fn().mockImplementation((callback) => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  takeRecords: jest.fn(),
}));

// Mock performance.getEntriesByType
Object.defineProperty(global.performance, 'getEntriesByType', {
  writable: true,
  value: jest.fn(() => [
    {
      domainLookupEnd: 100,
      domainLookupStart: 50,
      connectEnd: 200,
      connectStart: 150,
      responseStart: 300,
      requestStart: 250,
      responseEnd: 400,
      domContentLoadedEventStart: 500,
      loadEventEnd: 600,
      navigationStart: 0,
    },
  ])
});

// Suppress console warnings for tests
global.console.warn = jest.fn();