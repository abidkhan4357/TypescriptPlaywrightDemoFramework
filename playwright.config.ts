import { defineConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  globalSetup: "./global.setup",
   /* Run tests in files in parallel */
   fullyParallel: true,
   /* Fail the build on CI if you accidentally left test.only in the source code. */
   forbidOnly: !!process.env.CI,
   /* Retry on CI only */
   retries: process.env.CI ? 1 : 1,
   /* Opt out of parallel tests on CI. */
   workers: process.env.CI ? 3 : undefined,
   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
   reporter: 'html',
   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */ 

  projects: [
    {
      name: 'UI tests',
      testDir: 'ui-tests',
      use: {
      browserName: 'chromium',
      trace: 'on-first-retry',
      headless: true,
      storageState: "./loginAuth.json",
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      viewport: { width: 1920, height: 1080 }
      },
    },
    {
        name: 'API tests',
        testDir: 'api-tests',
        use: {
          baseURL: 'https://automationexercise.com/api/'
        },
    },
  ],
});
