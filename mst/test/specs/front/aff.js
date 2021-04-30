const cookiesPage = require("../../pageobjects/front/cookies.page")
const affPage = require("../../pageobjects/front/aff.page")

describe('Affiliate fill form tests', () => {

    beforeEach(function () {
        cookiesPage.passCookies()
    })

    afterEach(function () {
        browser.deleteAllCookies()
    })

    it('affiliate form fill and save', () => {
        affPage.openAffiliatePage()
        affPage.fillingAffiliateForm()
    })

})