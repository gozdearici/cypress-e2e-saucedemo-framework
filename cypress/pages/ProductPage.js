class ProductPage {
    addToCart(productName) {
        cy.contains('[data-test="inventory-item"]', productName, { timeout: 10000 })
        .contains('Add to cart')
        .click()
    }

    visibilityCartBadge() {
        cy.get('[data-test="shopping-cart-badge"]', { timeout: 10000 }).should('be.visible')
    }

    getProductCount() {
        cy.get('[data-test="shopping-cart-badge"]').should('have.been', 1)
    }

    openCart() {
        cy.get('[data-test="shopping-cart-link"]').click()
    }
}

export default new ProductPage()
