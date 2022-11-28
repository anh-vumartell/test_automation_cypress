describe("Verify features used by a bank manager", ()=>{
    //Pre-condition
  beforeEach(() => {
    //visit the bank website
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    //click the btn "Bank Manager Login"
    cy.get("button:contains(Bank Manager Login)").click(); 
  });

  //Test no.1: Verify that a bank manager can add a customer
  //Test no.2: Verify that a bank manager can open a new account for a customer
  //Test no.3: Verify search functionality
  //Test no.4: Verify that a bank manager can delete a customer 
})