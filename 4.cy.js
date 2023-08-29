describe("4. Password Reset - positive", () => {
  it('Password reset"', () => {
    cy.visit("https://app2.abtasty.com/login");
    cy.get('#email', { timeout: 10000 }).should('be.visible');
    cy.get('.LoginForm-module__link___oH9Ss').click();
    cy.get('._commonInput_11efi_184', { timeout: 10000 }).should('be.visible');
    cy.get('._commonInput_11efi_184').type('test@test.test');
    cy.get('._button_qzvqq_184').click();
  });
  it('Checking email"', () => {
    cy.mailhog()
    .search({ sender: 'abtasty' }) // Replace 'abtasty' with the appropriate sender email address or part of it
    .then((emails) => {
      expect(emails).to.have.lengthOf.at.least(1);

      // Access the first email received
      const email = emails[0];

      // Assert on the email content
      expect(email.subject).to.contain('Reset Password');
      expect(email.text).to.contain('Click the link below to reset your password:');
      expect(email.html).to.contain('<a href="https://example.com/reset">Reset Password</a>');
    });
});
});
