class ProductPage {
    addToCart(productName) {
        cy.contains('[data-test="inventory-item"]', productName)
        .contains('Add to cart')
        .click()
    }

    visiblityCartBadge() {
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
    }

    getProductCount() {
        cy.get('[data-test="shopping-cart-badge"]').should('have.been', 1)
    }

    openCart() {
        cy.get('[data-test="shopping-cart-link"]').click()
    }
}

export default new ProductPage()
