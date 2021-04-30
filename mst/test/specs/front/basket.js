// const cookiesPage = require("../../pageobjects/front/cookies.page")
// const signInPage = require("../../pageobjects/front/signin.page")
// const ticketsPage = require("../../pageobjects/front/tickets.page")
// const basketPage = require("../../pageobjects/front/basket.page")

// describe('Basket page checkout tests', () => {

//     beforeEach(function () {
//         cookiesPage.passCookies()
//         signInPage.signInTopMenu()
//         ticketsPage.chooseRandomeTickets()
//     })

//     afterEach(function () {
//         browser.deleteAllCookies()        
//     })

//     it('basket page full check', () => {
//         basketPage.basketPageFullCheckout()
//         basketPage.pressShoppingBasketContinue()
//         expect(browser).toHaveUrlContaining('billing-delivery')
//     })

//     it('basket page check continue button', () => {
//         basketPage.shoppingBasketContinue()
//     })

// })