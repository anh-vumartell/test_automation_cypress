//This test suite includes test that verify the functionality of search function in a bank manager's page
describe("Verify search function feature used by a bank manager", ()=>{
    //Pre-condition
  beforeEach(() => {
    //visit the bank website
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    //click the btn "Manager Login"
    cy.get("button:contains(Manager Login)").click();
  });

 
})