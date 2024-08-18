const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:8080',
    supportFile: 'cypress/support/e2e.js', // Adjust this if you don't have an e2e.js file
    specPattern: '**/*.spec.js',
  },
});
