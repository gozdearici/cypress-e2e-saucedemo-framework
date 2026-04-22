import LoginPage from "../pages/LoginPage"

describe('Login Test', () => {
    it('should login successfully with invalid credentials', () => {
        cy.fixture('users').then(({ valid }) => {
            LoginPage.login(valid.username, valid.password)
        })

        LoginPage.errorMessage()
            .should('be.visible')
            .and('contain.text', 'Username and password do not match')
    })

    it('should login successfully with valid credentials', () => {
        cy.fixture('users').then(({ invalid }) => {
            LoginPage.login(invalid.username, invalid.password)
        })

        cy.url().should('include', '/inventory')
    })
})
