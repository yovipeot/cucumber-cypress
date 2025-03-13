const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      
    },
    baseUrl: 'https://aixp.digitallab.id/',
    testIsolation: false,
    specPattern: '**/*.feature',
    watchForFileChanges: false,
  },
});
