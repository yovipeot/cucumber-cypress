import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const selectors = require('../../selectors.json');
const data = require('../../data.json');

Given('I open the login page', () => {
  cy.clearLocalStorage() 
  cy.visit(Cypress.config().baseUrl)
});

When('I enter valid credentials', () => {
  cy.get("body").then($body => {
    if ($body.find(selectors.dashboard.craeteProject).length > 0) {
      cy.log('Login Already')
    } else {
      cy.get(selectors.login.email).type(data.login.valid.email);
      cy.get(selectors.login.password).type(data.login.valid.password);
      cy.get(selectors.login.submit).click();

    }
  })
});
Then('I should be logged in successfully', () => {
  cy.url().should('include', data.dashboard.url);
});

When('I click on the eye button', () => {
  cy.get(selectors.login.showPassword).click();
});
Then('I should see the password', () => {
  cy.get(selectors.login.password).should('be.visible');
})

When('I enter invalid credentials', () => {
  cy.get(selectors.login.email).type(data.login.invalid.email);
  cy.get(selectors.login.password).type(data.login.invalid.password);
  cy.get(selectors.login.submit).click();
});
Then('I should not be logged in', () => {
  cy.get(selectors.login.email).should('be.visible');
  cy.get(selectors.login.password).should('be.visible');
  cy.contains(data.login.errorMessage.incorrect).should('be.visible');
});

When('I click on the logout button', () => {  
  cy.get(selectors.header.iconDown).click();
  cy.get(selectors.header.logoutButton).click();
});
Then('I should be logged out', () => {
  cy.get(selectors.login.email).should('be.visible');
})