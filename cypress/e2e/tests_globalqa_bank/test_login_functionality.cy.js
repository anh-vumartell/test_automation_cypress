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
    //check the url if it's redirected to customer login page
    cy.url().should("include", "customer");
    //get the login input, select a customer and click on it
    cy.get("#userSelect").should("be.visible").select("Harry Potter");
    //Log in selected user by clicking button "Login"
    cy.get("button:contains(Login)").should("be.visible").click(); 
    //Verify that page should be of this selected customer
    cy.get("span:contains(Harry Potter)").should("be.visible");
  });

  //Test no.2
  it("Verify manager login",()=>{
    //get button element "Manager Login" & click it
    cy.get("button:contains(Bank Manager Login)").click(); 
    //check the url if it's for manager login 
    cy.url().should("include", "manager");
  
    
  })
});
