const Page = require('./page')
const helper = require("./helper.page")

class AffiliatePage extends Page {

    get affiliateProgramLink() { return $("//a[.='Affiliate Program']") }
    get companyInput() { return $("//input[@id='company']") }
    get firstNameInput() { return $("//input[@id='firstName']") }
    get lastNameInput() { return $("//input[@id='lastName']") }
    get emailInput() { return $("//input[@id='email']") }
    get websiteInput() { return $("//input[@id='website']") }
    get address1Input() { return $("//form[@class='mUnBQ']/div[6]//input[@class='_2Zoy_']") }
    get townInput() { return $("//input[@id='town']") }
    get postCodeInput() { return $("//input[@id='postCode']") }
    get trafficVolumeInput() { return $("//input[@id='trafficVolume']") }
    get affiliateYearsInput() { return $("//input[@id='affiliateYears']") }
    get lastYearRevenueInput() { return $("//input[@id='lastYearRevenue']") }
    get keyMarketsInput() { return $("//input[@id='keyMarkets']") }
    get iHaveReadAndAgreeCheckbox() { return $("//label[@class='_1jl70']") }
    get submitButton() { return $("//button[@class='_1oWRn']") }
    get finishButton() { return $("//button[@class='_2qV38']") }


    openAffiliatePage() {
        this.open('en-gb/help/affiliate-program')
        browser.pause(1000)
    }

    fillingAffiliateForm() {
        this.companyInput.setValue(helper.randomUserName())
        this.firstNameInput.setValue(helper.randomUserName())
        this.lastNameInput.setValue(helper.randomUserName())
        this.emailInput.setValue(helper.randomUserEmail())
        this.websiteInput.setValue(helper.randomWebsiteUrl())
        this.address1Input.setValue(helper.randomAddress())
        this.townInput.setValue(helper.randomCity())
        this.postCodeInput.setValue(helper.randomNumber())
        this.trafficVolumeInput.setValue(helper.randomNumber())
        this.affiliateYearsInput.setValue(helper.randomNumber())
        this.lastYearRevenueInput.setValue(helper.randomNumber())
        this.keyMarketsInput.setValue(helper.randomNumber())
        this.iHaveReadAndAgreeCheckbox.waitForDisplayed()
        this.iHaveReadAndAgreeCheckbox.click()
        this.submitButton.click()
        this.finishButton.waitForDisplayed()
        this.finishButton.click()
        browser.pause(2000)
    }
}

module.exports = new AffiliatePage()