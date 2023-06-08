describe("3.  Single Sign-On (SSO) User in different platform", () => {
  it('3.  Single Sign-On (SSO) User in different platform"', () => {
    cy.visit('/'); // Replace '/' with the URL of the page you want to visit
    cy.wait(5000); // Wait for 5 seconds (adjust the time as needed) for the page to load or any specific element to appear
    cy.get('[data-testid="email-input"]').type('example@email.com'); // Replace '[data-testid="email-input"]' with the appropriate selector for the email input field
    cy.get('[data-testid="password-input"]').type('password123'); // Replace '[data-testid="password-input"]' with the appropriate selector for the password input field
    cy.get('[data-testid="submit-button"]').click(); // Replace '[data-testid="submit-button"]' with the appropriate selector for the submit button
    cy.visit("https://app2.abtasty.com/login");
    cy.get('#email', { timeout: 10000 }).should('not.be.visible'); // Now we could see that user is no longer need to login
  });

});
