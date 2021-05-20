describe('Users App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email')
    const passwordInput = () => cy.get('input[name=password')

    it('sanity check', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
    })

    describe('Filling out the inputs', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost')
        })

        it('can type in the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Hello hello')
                .should('have.value', 'Hello hello')
            emailInput()
                .should('have.value', '')
                .type('hello@test.com')
                .should('have.value', 'hello@test.com')
            passwordInput()
                .should('have.value', '')
                .type('asdfASDF123')
                .should('have.value', 'asdfASDF123')

        })

    })
})