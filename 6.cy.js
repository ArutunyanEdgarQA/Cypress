describe("6. Verify Captcha activation after 3 failed login attempts", () => {
  it('1. Verify error message for invalid email/password"', () => {
    cy.visit("https://app2.abtasty.com/login");
    cy.get('#email', { timeout: 10000 }).should('be.visible');
    cy.get('#email').type('Test@test.test').should('have.value', 'Test@test.test');
    cy.get('#password').type('password1234');
    cy.get('.FormButtonRow__buttonRow___vri7h > ._button_1qtjo_184').click();
    cy.get('.LoginForm__commonError___DSL1P').should('be.visible');
    cy.get('.FormButtonRow__buttonRow___vri7h > ._button_1qtjo_184').click();
    cy.get('.LoginForm__commonError___DSL1P').should('be.visible');
    cy.get('.FormButtonRow__buttonRow___vri7h > ._button_1qtjo_184').click();
    cy.get('.LoginForm__commonError___DSL1P').should('be.visible');
  });

});
