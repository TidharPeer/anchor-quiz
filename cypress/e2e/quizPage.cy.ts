import { quiz } from "./../../src/assets/questions";

describe('Quiz Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('1. Should load page', () => {
    cy.get("h1").should("have.text", "Anchor Quiz - page 1");
  });
  it('2. Should save results', () => {
    cy.get('[type="radio"]').first().check();
    cy.get('[type="radio"]').first().should("be.checked");
    cy.get('button').contains("Next").click();
    cy.get('[type="radio"]').first().should("not.be.checked");
    cy.get('[type="radio"]').last().check();
    cy.get('button').contains("Previous").click();
    cy.get('[type="radio"]').first().should("be.checked");
    cy.get('[type="radio"]').last().should("not.be.checked");
    cy.get('button').contains("Next").click();
    cy.get('[type="radio"]').last().should("be.checked");
  });
  it('3. Should see submit button', () => {
    const len = quiz.questions.length;
    for (let i = 0; i < len - 1; ++i) {
      cy.get('[type="radio"]').first().check();
      cy.get('button').contains("Next").click();
    }
    cy.get('button').contains("Submit").should("exist");
  });
  it('4. Should have score of 20', () => {
    const len = quiz.questions.length;
    for (let i = 0; i < len - 1; ++i) {
      cy.get('[type="radio"]').first().check();
      cy.get('button').contains("Next").click();
    }
    cy.get('[type="radio"]').first().check();
    cy.get('button').contains("Submit").click();
    cy.get('h2').should('contain', 'Your score is 20');
  });
  it('5. Should have score of 100', () => {
    cy.get('[type="radio"]').check("3");
    cy.get('button').contains("Next").click();

    cy.get('[type="radio"]').check("1");
    cy.get('button').contains("Next").click();

    cy.get('[type="radio"]').check("1");
    cy.get('button').contains("Next").click();

    cy.get('[type="radio"]').check("1");
    cy.get('button').contains("Next").click();

    cy.get('[type="radio"]').first().check();
    cy.get('button').contains("Submit").click();
    cy.get('h2').should('contain', 'Your score is 100');
  });

});
