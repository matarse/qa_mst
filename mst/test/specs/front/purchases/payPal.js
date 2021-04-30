const basketPage = require("../../../pageobjects/front/basket.page")
const billingDeliveryPage = require("../../../pageobjects/front/billing.page")
const cookiesPage = require("../../../pageobjects/front/cookies.page")
const signInPage = require("../../../pageobjects/front/signin.page")
const ticketsPage = require("../../../pageobjects/front/tickets.page")

describe('Purchases tests pay pal method', () => {

    beforeEach(() => {
        cookiesPage.passCookies()
        signInPage.signInTopMenu()
        ticketsPage.chooseRandomeTickets()
        basketPage.basketPageFullCheckout()
        basketPage.pressShoppingBasketContinue()
        browser.pause(2000)
        browser.refresh()
        browser.pause(3000)
    })

    afterEach(function () {
        browser.deleteAllCookies()
    })

    it('checkout using a pay pal', () => {
        billingDeliveryPage.billingDeliveryPayPal()
        billingDeliveryPage.iAgreeBillingDelivery()
        billingDeliveryPage.billingDeliveryCompleted()
        billingDeliveryPage.fillPayPalForm()
        expect(browser).toHaveUrlContaining('finish')
    })

})