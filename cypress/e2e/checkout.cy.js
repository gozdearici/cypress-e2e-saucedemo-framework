import CardPage from "../pages/CardPage"
import CheckoutPage from "../pages/CheckoutPage"
import LoginPage from "../pages/LoginPage"
import ProductPage from "../pages/ProductPage"

describe('E2E Checkout Test', () => {
    it('should complete purchase successfully', () => {
        cy.fixture('users').then(({ valid }) => {
            LoginPage.login(valid.username, valid.password)
        })

        cy.fixture('products').then(({ product }) => {
            ProductPage.addToCart(product.backpack)
            ProductPage.visiblityCartBadge()
            ProductPage.getProductCount()
            ProductPage.openCart()

            CardPage.verifyProduct(product.backpack)
            CardPage.goToCheckout()
        })
        
        cy.fixture('checkoutUser').then(({user}) => {
            CheckoutPage.fillInformation(user.firstName, user.lastName, user.postalCode)
        })
        
        CheckoutPage.continue()
        CheckoutPage.finish()
        CheckoutPage.verifySuccess()
    })
})