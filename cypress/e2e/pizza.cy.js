describe("Pizza Sipariş Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Order");
  });

  it("inputa bir metin girer", () => {
    cy.get('textarea') 
      .type("Bol peynir lütfen")
      .should("have.value", "Bol peynir lütfen");
  });

  it("birden fazla malzeme seçer", () => {
    cy.get('input[type="checkbox"]').eq(0).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(1).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(2).check().should('be.checked');
    cy.get('input[type="checkbox"]').eq(3).check().should('be.checked');
  });

  it("formu gönderir", () => {

    cy.get('input[type="radio"][value="Orta"]').check();

    cy.get('select').select("Normal");

    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();
    cy.get('input[type="checkbox"]').eq(3).check();

    cy.get('textarea').type("Bol malzeme");

    cy.get('.order-buton').should('not.be.disabled');

    cy.get('.order-buton').click();

    cy.url().should('include', '/success');
  });
});