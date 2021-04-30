const cookiesPage = require("../../pageobjects/front/cookies.page")
const reviewesPage = require("../../pageobjects/front/reviewes.page")

describe('Review fill form tests', () => {

    beforeEach(function () {
        cookiesPage.passCookies();
        browser.pause(1000)
    })

    afterEach(function () {
        browser.deleteAllCookies()
        browser.pause(1000)
    })

    it('filling out the review form', () => {
        reviewesPage.submittedReviewForm()
    })

})