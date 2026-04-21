class CartPage {
    verifyProduct(productName) {
        cy.url().should('include', '/cart')
        cy.contains('[data-test="inventory-item"]', productName).should('be.visible')
    }

    goToCheckout() {
        cy.get('[data-test="checkout"]').click()
    }
}

export default new CartPage()
