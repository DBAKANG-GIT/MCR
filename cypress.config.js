import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    screenshot: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    setupNodeEvents(on, config) {
      // Enable code coverage
      // require('@cypress/code-coverage/task')(on, config);
      
      // Task to check if gtag was called
      on('task', {
        checkGtagCalls: () => {
          return null; // Will be implemented in tests
        },
        log: (message) => {
          console.log(message);
          return null;
        }
      });
      
      return config;
    },
  },
  
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      // require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
  
  env: {
    coverage: true,
    codeCoverage: {
      exclude: [
        'cypress/**/*',
        '.next/**/*',
        'node_modules/**/*',
        '**/*.config.js',
        '**/*.d.ts',
      ],
    },
  },
});