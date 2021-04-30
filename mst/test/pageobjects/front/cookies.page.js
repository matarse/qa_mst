const Page = require('./page')

class CookiesPage extends Page {

    get cookiesIAgreeButton() { return $("#onetrust-accept-btn-handler") }
    get cookiesTestingIAgreeButton() { return $("//button[@class='_1I2lL']") }

    passCookies() {
        this.open('en-gb')
        browser.pause(1000)
        if (this.cookiesIAgreeButton.isDisplayed()) { this.cookiesIAgreeButton.click() }
        if (this.cookiesTestingIAgreeButton.isDisplayed()) { this.cookiesTestingIAgreeButton.click() }
        browser.pause(1000)
    }
}

module.exports = new CookiesPage()
