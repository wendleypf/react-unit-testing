describe('Counter Component e2e', () => {

    it('should initialize title with the value 0.', () => {
        cy.visit('/')
        cy.get('.counter__title').should('have.text', '0')
    })

    it('should increment.', () => {
        cy.visit('/')
        cy.get('.button--increment').click()
        cy.get('.counter__title').should('have.text', '1')
    });

    it('should decrement.', () => {
        cy.visit('/')
        cy.get('.button--decrement').click()
        cy.get('.counter__title').should('have.text', '-1')
    });
})