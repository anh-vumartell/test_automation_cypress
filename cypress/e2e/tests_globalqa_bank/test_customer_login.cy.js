//The test suite
describe("Verify login functionality", () => {
  //Pre-condition
  beforeEach(() => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
  });
  //Test no.1
  it("Verify customer login", () => {
    //get an element which contains text "Customer Login" & click it
    cy.get("button:contains(Customer Login)").click();
    //check the url if it's redirected to customer login age
    cy.url().should("include", "customer");
    //get the login input, select a customer and click on it
    cy.get("#userSelect").should("be.visible").click();
  });
});
