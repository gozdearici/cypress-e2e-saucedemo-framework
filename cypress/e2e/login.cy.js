import LoginPage from "../pages/LoginPage"

describe('Login Test', () => {
    it('should login successfully with valid credentials', () => {
        cy.fixture('users').then(({ users }) => {
            const { username, password } = users.find(u => u.type === 'invalid')

            LoginPage.login(username, password)
        })

        LoginPage.errorMessage()
            .should('be.visible')
            .and('contain.text', 'Username and password do not match')
    })

    it('should login successfully with valid credentials', () => {
        cy.fixture('users').then(({ users }) => {
            const { username, password } = users.find(u => u.type === 'valid')

            LoginPage.login(username, password)
        })

        cy.url().should('include', '/inventory')
    })
})
