context('Unibet', () => {
    beforeEach(() => {
        cy.visit('https://www.unibet.com/betting/sports/home')
    })

    describe('Test Suits', () => {
        it('successfully loads', () => {
            cy.contains('In-Play').click({ force: true })
            cy.wait(8000)

            cy.get('.KambiBC-betty-outcome').last().click()
            //cy.get("[class$='event-item--type-match']:nth-child(1) button[class$='betty-outcome']:nth-child(1)").click()
           //cy.get('li').should('have.class','event-item--type-match').children(1).should('have.class','betty-outcome').children(1).click()
           // cy.get('.$="event-item--type-match"]
            cy.wait(4000)
            cy.get('.mod-KambiBC-stake-input__container').type(5)
            cy.get('.mod-KambiBC-betslip__header-tab-title').should('have.text', 'Singles')
            cy.get('.mod-KambiBC-betslip__place-bet-btn').click({ force: true })
        })


        //it('slecting euro',() => {
        //cy.contains('Home').click({force: true})
        //})


    })
})