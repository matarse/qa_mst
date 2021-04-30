const cookiesPage = require("../../pageobjects/front/cookies.page")
const feedbackPage = require("../../pageobjects/front/feedback.page")

describe('Feedback form tests', () => {
    beforeEach(function () {
        cookiesPage.passCookies()
    })

    afterEach(function () {
        browser.deleteCookies()
    })

    it('fill out a customer feedback form', () => {
        feedbackPage.openFeedbackForm()
        feedbackPage.fillingFeedbackForm('alla', 'mail@mail.com', '9129008989', 'alla', 'alla')
        feedbackPage.finishButton.click()
    })

})
