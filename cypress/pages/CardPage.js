class CartPage {
    verifyProduct(productName) {
        cy.url().should('include', '/cart')
        cy.contains('[data-test="inventory-item"]', productName, { timeout: 10000 }).should('be.visible')
    }

    goToCheckout() {
        cy.get('[data-test="checkout"]').click()
    }
}

export default new CartPage()
