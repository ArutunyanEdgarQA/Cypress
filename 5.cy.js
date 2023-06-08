describe("5. Password Reset - negative", () => {
  it('Password reset"', () => {
    cy.visit("https://app2.abtasty.com/login");
    cy.get('#email', { timeout: 10000 }).should('be.visible');
    cy.get('.LoginForm__link___qoxwy').click();
    cy.get('._commonInput_1h7ag_184', { timeout: 10000 }).should('be.visible');
    cy.get('._commonInput_1h7ag_184').type('test22@test22.test22'); // Email shouldn't exist in DB
    cy.get('._button_1qtjo_184').click();
    cy.contains('There is no such user').should('be.visible'); // Replace this message to valuable
  });
  });
