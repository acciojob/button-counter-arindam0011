const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000', // Change this to your app's URL
    setupNodeEvents(on, config) {
      // setup node event listeners if needed
    },
    specPattern: '**/*.spec.js', // Specify your test file pattern
  },
};
