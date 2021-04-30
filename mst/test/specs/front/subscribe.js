const cookiesPage = require("../../pageobjects/front/cookies.page")
const subscribePage = require("../../pageobjects/front/subscribe.page")
const signInPage = require("../../pageobjects/front/signin.page")

describe('Subscribe tests', () => {

    before(function () {
        cookiesPage.passCookies()
    })   

    it('corporate page subscribe', () => {
        subscribePage.corporatePageSubscribe()
    })

    it('off sale page subscribe', () => {
        subscribePage.offSalePageSubscribe()
    })

    it('user page subscribe', () => {
        signInPage.signInTopMenu()
        subscribePage.subscribeUser()
    })

})