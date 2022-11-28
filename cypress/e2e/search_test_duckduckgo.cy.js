describe("verify Duckduckgo searching page is open", () => {
  beforeEach(() => {
    cy.visit("https://duckduckgo.com");
  });
  it("searches for cypress and pressing ENTER", () => {
    cy.get('input[name="q"]').should("be.visible").type("cypress{enter}");

    cy.get(".results--main").should("contain", "cypress");
  });

  it("searches for cypress and clicking the magnifying glass button", () => {
    cy.get('input[name="q"]').should("be.visible").type("cypress");

    cy.get("#search_button_homepage").should("be.visible").click();

    cy.get(".results--main").should("contain", "cypress");
  });
});
