import { defineConfig } from '@playwright/test';

const clientPort = 4971;
const serverPort = 4970;

export default defineConfig({
  testDir: 'tests',
  timeout: 60_000,
  outputDir: 'tests/artifacts/playwright',
  use: {
    baseURL: `http://127.0.0.1:${clientPort}`,
    video: 'on',
    viewport: { width: 1280, height: 800 },
  },
  webServer: [
    {
      command: 'npm run dev -w server',
      env: { ...process.env, PORT: String(serverPort), HOST: '127.0.0.1' },
      url: `http://127.0.0.1:${serverPort}/health`,
      reuseExistingServer: false,
      timeout: 60_000,
    },
    {
      command: 'npm exec -w client -- vite --host 127.0.0.1 --port 4971 --strictPort',
      env: { ...process.env, MULTIGO_SERVER_URL: `http://127.0.0.1:${serverPort}` },
      url: `http://127.0.0.1:${clientPort}`,
      reuseExistingServer: false,
      timeout: 60_000,
    },
  ],
});
