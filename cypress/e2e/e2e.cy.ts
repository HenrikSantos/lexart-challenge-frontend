describe("Chatbot full e2e", () => {
  before(() => {
    cy.clearLocalStorage();
  });

  beforeEach(function () {
    cy.viewport("iphone-xr");
    cy.visit("http://localhost:5173/");
  });

  it("should display login prompt and handle wrong login attempts", () => {
    cy.get("#messageInput").type("hello");
    cy.get("#sendMessageBtn").click();
    cy.get("#requestLogin").should("exist");

    cy.get("#messageInput").should("be.empty");
    cy.get("#messageInput").type("wronglogin");
    cy.get("#sendMessageBtn").click();
    cy.get("#wrongLogin > .mt-3");

    cy.get("#messageInput").type("wrongLogin wrongLogin wrongLogin");
    cy.get("#sendMessageBtn").click();
    cy.get(":nth-child(6) > #wrongLogin > .mt-3");
  });

  it("should successfully log in, handle user messages and check historic data", () => {
    cy.get("#messageInput").type("hello");
    cy.get("#sendMessageBtn").click();
    
    cy.get("#messageInput").type("Bob 123456");
    cy.get("#sendMessageBtn").click();
    cy.get("#helloMessage").should("exist");

    cy.get("#messageInput").type("loan");
    cy.get("#sendMessageBtn").click();
    cy.get("#loanMessage").should("exist");

    cy.get("#loanApply").click();
    cy.get("#loanApplyMessage").should("exist");
    cy.get("#loanApplyLink").should("exist");

    cy.get("#loanConditions").click();
    cy.get("#loanConditionsMessage").should("exist");
    cy.get("#loanConditionsLink").should("exist");

    cy.get("#loanHelp").click();
    cy.get("#loanHelpMessage").should("exist");
    cy.get("#loanHelpLink").should("exist");

    cy.get("#messageInput").type("goodbye");
    cy.get("#sendMessageBtn").click();
    cy.get("#endingMessage").should("exist");

    cy.get("#chatDataLink").click();
    cy.get("#downloadHistoricBtn").should("exist");
    cy.get("#user1").should(($element) => {
      const text = $element.text();
      expect(text).to.include("Conversation Bob #1 - ");
    });
  });
});
