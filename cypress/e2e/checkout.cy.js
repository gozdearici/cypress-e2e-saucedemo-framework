import CardPage from "../pages/CardPage"
import CheckoutPage from "../pages/CheckoutPage"
import LoginPage from "../pages/LoginPage"
import ProductPage from "../pages/ProductPage"

describe('E2E Checkout Test', () => {
    let product, user

    beforeEach('stub external tracking requests', () => {
        cy.stubExternalServices()
        cy.loginAsValidUser()

        cy.fixture('products').then(data => {
            product = data.product
        })

        cy.fixture('checkoutUser').then(data => {
            user = data.user
        })
    })

    it('should complete purchase successfully', () => {
        ProductPage.addToCart(product.backpack)
        ProductPage.visibilityCartBadge()
        ProductPage.getProductCount()
        ProductPage.openCart()

        CardPage.verifyProduct(product.backpack)
        CardPage.goToCheckout()

        CheckoutPage.fillInformation(
            user.firstName,
            user.lastName,
            user.postalCode
        )
        CheckoutPage.continue()
        CheckoutPage.finish()
        CheckoutPage.verifySuccess()
    })
})
