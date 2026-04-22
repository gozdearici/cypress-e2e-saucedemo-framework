import LoginPage from "../pages/LoginPage"

describe('Login Test', () => {
    let validUser, invalidUser

    beforeEach('stub external tracking requests', () => {
        cy.stubExternalServices()
        cy.fixture('users').then(data => {
            validUser = data.valid
            invalidUser = data.invalid
        })
    })

    it('should login successfully with invalid credentials', () => {
        LoginPage.login(invalidUser.username, invalidUser.password)

        LoginPage.errorMessage()
            .should('be.visible', { timeout: 10000 })
            .and('contain.text', 'Username and password do not match')
    })

    it('should login successfully with valid credentials', () => {
        LoginPage.login(validUser.username, validUser.password)

        cy.url().should('include', '/inventory')
    })
})
