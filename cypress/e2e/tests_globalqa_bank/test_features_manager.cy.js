describe("Verify features used by a bank manager", ()=>{
    //Pre-condition: set up the state of the application
  beforeEach(() => {
    //visit the bank website
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    //click the btn "Bank Manager Login"
    cy.get("button:contains(Bank Manager Login)").click(); 
  });
  //after creating records in the db, cleanup test data
  /*after(()=>{
    resetDb(); 
  }); */

  //Test no.1: Verify that a bank manager can add a customer
  it("Verify that a bank manager can add a customer", ()=>{
    //Click button "Add Customer"
    cy.get("button:contains(Add Customer)").click(); 
    //Input first name
    cy.get('input[ng-model="fName"]').should('be.visible').type("Elvis");
    //Input last name
    cy.get('input[ng-model="lName"]').should('be.visible').type("Presley");
    //Input post code
    cy.get('input[ng-model="postCd"]').should('be.visible').type("00100");
    //Click btn "Add Customer"
    cy.get('button[type="submit"]').click(); 
    //Verify successful customer creation from pop-up alert
    cy.on('window:alert', (t)=>{
      expect(t).to.contains("Customer added successfully with customer id")

    })
  })
  //Test no.2: Verify that a bank manager can open a new account for a customer
  it("Verify that a bank manager can open an account for a new customer", ()=>{
    //Click btn "Open Account"
    cy.get("button:contains(Open Account)").click(); 
    //Select Customer Name
    cy.get("#userSelect").select("Ron Weasly");
    //Select Currency
    cy.get("#currency").select("Dollar");
    //Click btn "Process"
    cy.get("button[type='submit']").click(); 
    //Verify successful account creation from pop-up alert
    cy.on('window:alert', (t)=>{
      expect(t).to.contains("Account created successfully with account Number")
    })
  })
  //Test no.4: Verify that a bank manager can delete a customer 
  it.only("Verify that a bank manager can delete a customer from list of customers", ()=>{
    //Click btn "Customers"
    cy.get("button:contains(Customers)").click(); 
    // Search for the customer
    cy.get('input[ng-model="searchCustomer"]').type("Harry")
    //Click btn "Delete"
    cy.get('tbody td:nth-child(5)').should('have.text', 'Delete').click(); 
    //Clear the input
    cy.get('input[ng-model="searchCustomer"]').clear();
  })
})