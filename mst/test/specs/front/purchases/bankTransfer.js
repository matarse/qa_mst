const basketPage = require("../../../pageobjects/front/basket.page")
const billingDeliveryPage = require("../../../pageobjects/front/billing.page")
const cookiesPage = require("../../../pageobjects/front/cookies.page")
const signInPage = require("../../../pageobjects/front/signin.page")
const ticketsPage = require("../../../pageobjects/front/tickets.page")

describe('Purchases tests bank transfer method', () => {

    beforeEach(() => {
        cookiesPage.passCookies()
        signInPage.signInTopMenu()
        ticketsPage.chooseTickets()
        basketPage.pressShoppingBasketContinue()
        browser.pause(2000)
        browser.refresh()
        browser.pause(3000)
    })

    afterEach(function () {
        browser.deleteAllCookies()
    })

    it('checkout using a bank transfer', () => {
        billingDeliveryPage.billingDeliveryBankTransfer()
        billingDeliveryPage.iAgreeBillingDelivery()
        billingDeliveryPage.billingDeliveryCompleted()
        expect(browser).toHaveUrlContaining('finish')
    })

})