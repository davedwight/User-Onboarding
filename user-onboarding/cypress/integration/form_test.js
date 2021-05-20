describe('Users App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email')
    const passwordInput = () => cy.get('input[name=password')
    const termsCheckbox = () => cy.get('input[type=checkbox')
    const submitBtn = () => cy.get('button')

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
        termsCheckbox().should('exist')
        submitBtn().should('exist')
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

        it('can check the checkbox', () => {
            termsCheckbox()
                .should('not.be.checked')
                .check({ force: true })
                .should('be.checked')
        })

        it('the submit button starts out disabled', () => {
            submitBtn().should('be.disabled')
        })

        it('the submit button enables when inputs are filled out and checkbox is checked', () => {
            nameInput().type('hello hello')
            emailInput().type('hello@test.com')
            passwordInput().type('asdfASDF123')
            termsCheckbox().check({ force: true })
            submitBtn().should('not.be.disabled')
        })

    })
})