const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'vhppq6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      failSilently: false,
    },
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    experimentalPromptCommand: true,
  },
});
