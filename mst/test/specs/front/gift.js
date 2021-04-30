const cookiesPage = require("../../pageobjects/front/cookies.page")
const giftPage = require("../../pageobjects/front/gift.page")
const signInPage = require("../../pageobjects/front/signin.page")
const billingDeliveryPage = require("../../pageobjects/front/billing.page")
const data = require("../../data/data")

describe('Buying a gift voucher tests', () => {

    before(function () {
        cookiesPage.passCookies()
        signInPage.signInTopMenu()
    })

    it('buying a gift voucher by telephone card', () => {
        giftPage.shoppingGiftVoucher()
        billingDeliveryPage.billingDeliveryCreditCardByTelephone()
        billingDeliveryPage.iAgreeBillingDelivery()
        billingDeliveryPage.billingDeliveryCompleted()
        expect(browser).toHaveUrlContaining('finish/GV')
    })

    it.only('buying a gift voucher by credit card', () => {
        giftPage.shoppingGiftVoucher()
        let visa = data.creditCardNumberVisa
        browser.pause(1000)
        billingDeliveryPage.billingDeliveryCreditCard(visa)
        billingDeliveryPage.iAgreeBillingDelivery()
        billingDeliveryPage.billingDeliveryCompleted()
        billingDeliveryPage.threeDSecureForm()
        expect(browser).toHaveUrlContaining('finish/GV')
        browser.pause(7000)
    })

    it('buying a gift voucher by bank transfer', () => {
        giftPage.shoppingGiftVoucher()
        billingDeliveryPage.billingDeliveryBankTransfer()
        billingDeliveryPage.iAgreeBillingDelivery()
        billingDeliveryPage.billingDeliveryCompleted()
        expect(browser).toHaveUrlContaining('finish/GV')
        browser.pause(7000)
    })

    it('buying a gift voucher by pay pal', () => {
        giftPage.shoppingGiftVoucher()
        billingDeliveryPage.billingDeliveryPayPal()
        billingDeliveryPage.iAgreeBillingDelivery()
        billingDeliveryPage.billingDeliveryCompleted()
        billingDeliveryPage.fillPayPalForm()
        expect(browser).toHaveUrlContaining('finish/GV')
        browser.pause(7000)
    })

})