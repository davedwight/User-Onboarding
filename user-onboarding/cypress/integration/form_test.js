describe('Users App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    const nameInput = () => cy.get('input[name=name]')

    it('sanity check', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are showing', () => {
        nameInput().should('exist')
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
        })

    })
})