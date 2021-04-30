const Page = require('./page')
const helper = require("./helper.page")

class SubscribePage extends Page {

    get subscribeNewsletterF1MainPageInput() { return $("//input[@id='subscribeNewsletter']") }
    get joinButton() { return $("//button[@class='_3jOKJ']") }

    get remindMeOffSalePageInput() { return $("//input[@id='newsletterSubscription']") }
    get submitButton() { return $("//button[@class='_1fjFA']") }

    get signUpOurNewslatterInput() { return $("//input[@class='_2Zoy_']") }
    get submitNewslatterButton() { return $("//button[.='Submit']") }
    get finishNewslatterButton() { return $("//button[@class='_2qV38']") }

    get userInTopMenuLink() { return $("//div[@class='_2WNQx']") }
    get communicationPreferencesLink() { return $("//div[@class='hBaC0']/a[.='Communication Preferences']") }
    get editLink() { return $("//a[.='Click here to view and edit your communication preferences']") }
    get savePreferencesButton() { return $("//button[@class='_2bJNS']") }
    get finishPreferencesButton() { return $("//button[@class='_2qV38']") }

    f1MainPageSubscribe() {
        this.open('en-gb/f1')
        this.subscribeNewsletterF1MainPageInput.setValue(helper.randomUserEmail())
        browser.pause(1000)
        this.joinButton.click()
        browser.pause(2000)
    }

    corporatePageSubscribe() {
        this.open('en-gb/corporate')
        browser.pause(1000)
        this.signUpOurNewslatterInput.setValue(helper.randomUserEmail())
        this.submitNewslatterButton.click()
        browser.pause(1000)
        this.finishNewslatterButton.click()
        browser.pause(1000)
    }

    subscribeUser() {
        this.userInTopMenuLink.click()
        this.communicationPreferencesLink.click()
        this.editLink.click()
        browser.pause(1000)
        this.savePreferencesButton.click()
        browser.pause(2000)
        this.finishPreferencesButton.click()
        browser.pause(2000)
    }

    offSalePageSubscribe() {
        this.open('en-gb/f1/australia/tickets')
        this.remindMeOffSalePageInput.waitForDisplayed()
        this.remindMeOffSalePageInput.setValue(helper.randomUserEmail())
        this.submitButton.click()
        browser.pause(2000)
    }
}

module.exports = new SubscribePage()