describe("Verify features used by a bank manager", ()=>{
    //Pre-condition
  beforeEach(() => {
    //visit the bank website
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    //click the btn "Customer Login"
    cy.get("button:contains(Customer Login)").click();
  });

  //Test no.1: Verify that a customer can select different accounts
  //Test no.2: Verify that a customer can see all transactions of an account
  //Test no.3: Verify that a customer can deposit a sum of money to a selected account
  //Test no.4: Verify that a customer can withdraw a sum of money from a selected account
})