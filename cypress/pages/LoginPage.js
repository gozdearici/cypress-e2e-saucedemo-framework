class LoginPage {
    visit() {
        cy.visit('/')
    }

    enterUsername(username) {
        cy.get('[data-test="username"]').type(username)
    }

    enterPassword(password) {
        cy.get('[data-test="password"]').type(password)
    }

    clickLogin() {
        cy.get('[data-test="login-button"]').click()
    }

    login(username, password) {
        this.visit()
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogin()
    }

    errorMessage() {
        return cy.get('[data-test="error"]')
    }
}

export default new LoginPage()