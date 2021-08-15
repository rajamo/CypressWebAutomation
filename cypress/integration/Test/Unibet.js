describe('My First Cypress Test', function() {
    it('Visits the Unitbet Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    cy.visit("https://www.unibet.co.uk/betting/sports/home");
    cy.wait(40000)
    cy.get('[href="/betting/sports/filter/all/all/all/all/in-play"]').click();
  
   // Clicking on Widget Menu Item
   // cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
   
    //Verify number of items present under the Widget Tab
   // cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);
   
  })
  })