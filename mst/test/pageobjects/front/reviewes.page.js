const Page = require('./page')
const helper = require("./helper.page")

class ReviewsPage extends Page {

    get writeAReviewButton() { return $("//button[@class='dzHn_ _2gVQk']") }
    get overallRating() { return $("//div[@class='_1eAJc _3-VmY']") }
    get reviewTitle() { return $("//input[@id='raceWeekendTitle']") }
    get yourReviewTextarea() { return $("//textarea[@id='raceWeekendReview']") }
    get yourNameInput() { return $("//input[@id='raceWeekendName']") }
    get continue1Button() { return $("//button[@class='_2hq8m']") }
    get continue2Button() { return $("//button[@class='_2LgCI']") }
    get submitReviewButton() { return $("//button[@class='_19W_z']") }
    get finishButton() { return $("//button[@class='_2qV38']") }

    submittedReviewForm() {
        this.open('en-gb/f1/monaco/tickets/general-admission-z1-23875')
        this.writeAReviewButton.waitForDisplayed()
        this.writeAReviewButton.click()
        browser.pause(1000)
        let a = $$("._3-VmY label")
        browser.pause(1000)
        a[3].click()
        browser.pause(1000)
        this.reviewTitle.setValue(helper.randomUserName())
        this.yourReviewTextarea.setValue(helper.randomUserName())
        this.yourNameInput.setValue(helper.randomUserName())
        browser.pause(1000)
        this.continue1Button.click()
        browser.pause(1000)
        this.continue2Button.click()
        browser.pause(1000)
        this.submitReviewButton.click()
        browser.pause(2000)
        this.finishButton.click()
        browser.pause(2000)
    }

}

module.exports = new ReviewsPage()