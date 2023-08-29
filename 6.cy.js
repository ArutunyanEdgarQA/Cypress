describe("6. Verify Captcha activation after 3 failed login attempts", () => {
  it('1. Verify error message for invalid email/password"', () => {
    cy.visit("https://app2.abtasty.com/login");
    cy.get('#email', { timeout: 10000 }).should('be.visible');
    cy.get('#email').type('Test@test.test').should('have.value', 'Test@test.test');
    cy.get('#password').type('password1234');
    cy.get('.FormButtonRow-module__buttonRow___GE1td > ._button_qzvqq_184').click();
    cy.get('.FormButtonRow-module__buttonRow___GE1td > ._button_qzvqq_184').click();
    cy.get('.FormButtonRow-module__buttonRow___GE1td > ._button_qzvqq_184').click();
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').should('be.visible');
  });

});
