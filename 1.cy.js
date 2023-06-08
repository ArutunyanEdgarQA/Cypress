describe("1. Verify error message for invalid email/password", () => {
  it('1. Verify error message for invalid email/password"', () => {
    cy.visit("https://app2.abtasty.com/login");
    cy.get('#email', { timeout: 10000 }).should('be.visible');
    cy.get('#email').type('Test@test.test').should('have.value', 'Test@test.test');
    cy.get('#password').type('password1234');
    cy.get('#password').should('have.attr', 'type', 'password');
    cy.get('[data-testid="showIcon"]').click();
    cy.get('#password').should('have.value', 'password1234');
    cy.get('[data-testid="hideIcon"]').click();
    cy.get('#password').should('have.attr', 'type', 'password');
    cy.get('.FormButtonRow__buttonRow___vri7h > ._button_1qtjo_184').click();
    cy.get('.LoginForm__commonError___DSL1P').should('be.visible');
    cy.get('#email').clear();
    cy.get('#password').clear();
    // Now we are checking with the correct email and password wich exist in DB
    cy.get('#email').type('CORRECTEMAIL').should('have.value', 'CORRECTEMAIL');
    cy.get('#password').type('CORRECTPASSWORD');
  });

});
