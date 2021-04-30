const basketPage = require("../../../pageobjects/front/basket.page")
const billingDeliveryPage = require("../../../pageobjects/front/billing.page")
const cookiesPage = require("../../../pageobjects/front/cookies.page")
const signInPage = require("../../../pageobjects/front/signin.page")
const ticketsPage = require("../../../pageobjects/front/tickets.page")
const data = require('../../../data/data')

describe('Purchases tests credit card method', () => {

    before(() => {
        cookiesPage.passCookies()
        signInPage.signInTopMenu()
    })

    beforeEach(() => {
        ticketsPage.chooseTickets()
        basketPage.pressShoppingBasketContinue()
        browser.refresh()
        browser.pause(3000)
    })

    afterEach(() => {
        billingDeliveryPage.iAgreeBillingDelivery()
        billingDeliveryPage.billingDeliveryCompleted()
        billingDeliveryPage.threeDSecureForm()
        expect(browser).toHaveUrlContaining('finish')
    })

    it('checkout using visa credit card', () => {
        const visa = data.creditCardNumberVisa
        browser.pause(500)
        billingDeliveryPage.billingDeliveryCreditCard(visa)
        browser.pause(500)

    })

    it('checkout using master card credit card', () => {
        const masterCard = data.creditCardNumberMasterCard
        browser.pause(500)
        billingDeliveryPage.billingDeliveryCreditCard(masterCard)
        browser.pause(500)
    })

})