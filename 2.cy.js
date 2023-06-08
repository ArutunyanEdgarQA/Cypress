describe("2.  Single Sign-On (SSO) User Redirect", () => {
  it('2.  Single Sign-On (SSO) User Redirect"', () => {
    cy.visit("https://app2.abtasty.com/login");
    cy.get('#email', { timeout: 10000 }).should('be.visible');
    cy.get('#email').type('Test@test.test').should('have.value', 'Test@test.test'); // Here you should type email for the SSO user
    cy.get('[data-testid="redirect-link"]').as('redirectLink'); // Here you should type an actual redirect element instead data-testid="redirect-link
    cy.get('@redirectLink').should('be.visible');
  });

});
