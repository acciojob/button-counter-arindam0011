import { defineConfig } from "cypress";

export const e2e = {
  supportFile: false, // Disable the support file requirement
  baseUrl: 'http://localhost:3000',
  setupNodeEvents(on, config) {
    // setup node event listeners if needed
  },
  specPattern: '**/*.spec.js',
};