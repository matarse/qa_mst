const Page = require('./page')

class MenuPage extends Page {

    get formula1Button() { return $("//span[.='Formula 1']") }
    get motogpButton() { return $("//span[.='MotoGP']") }
    get nascarButton() { return $("//span[.='NASCAR']") }
    get wrcButton() { return $("//span[.='WRC']") }
    get wecButton() { return $("//span[.='WEC']") }
    get leManButton() { return $("//span[.='LE MANS 24']") }
    get enduranceButton() { return $("//span[.='Endurance']") }
    get festivalsToursButton() { return $("//span[.='Festivals & Tours']") }
    get moreSeriesButton() { return $("//span[.='More Series']") }
    get overEventsButton() { return $("//span[.='Other events']") }
    get toursButton() { return $("//span[.='Tours']") }
    get giftVouchersButton() { return $("//span[.='gift vouchers']") }
    get exclusivesButton() { return $("//span[.='Exclusives']") }
    get faqButton() { return $("//button[@class='o3uPX'] ") }

    // Side menu
    get burgerButton() { return $("//button[@class='BC_ca sPCZB _1mTzE']") }
    get arrowBackButton() { return $("#app > div > div._2z67v > div > button > div._1aLrh") }
    get classicsButton() { return $("//span[.='Classics']") }
    get touristTrophyButton() { return $("//span[.='Tourist Trophy']") }
    get leManSideButton() { return $("//span[.='Le Mans 24']") }
    get dtmButton() { return $("//span[.='DTM']") }
    get langDropDown() { return $("//span[@class='_2c6-B']") }
    get currencyDropDown() { return $("//button[@class='_3z2wn']/div[@class='_1iqiz']") }


    checkFullMenu() {
        this.formula1Button.waitForDisplayed()
        this.formula1Button.click()
        this.motogpButton.click()
        this.nascarButton.click()
        this.wrcButton.click()
        this.wecButton.click()
        this.leManButton.click()
        this.enduranceButton.click()
        this.moreSeriesButton.click()
        this.toursButton.click()
        this.giftVouchersButton.click()
        browser.pause(1000)
    }

    checkLeftMenu() {
        this.formula1Button.click()
        this.arrowBackButton.click()
        browser.pause(500)
        this.motogpButton.click()
        this.arrowBackButton.click()
        browser.pause(500)
        this.nascarButton.click()
        this.arrowBackButton.click()
        browser.pause(500)
        this.wecButton.click()
        this.arrowBackButton.click()
        browser.pause(500)
        this.enduranceButton.click()
        this.arrowBackButton.click()
        browser.pause(500)
        this.classicsButton.click()
        this.arrowBackButton.click()
        browser.pause(500)
        this.touristTrophyButton.click()
        this.arrowBackButton.click()
        browser.pause(500)
        this.toursButton.click()
        this.arrowBackButton.click()
        browser.pause(500)
        this.langDropDown.click()
        this.langDropDown.click()
        browser.pause(1000)
        this.currencyDropDown.click()
        browser.pause(2000)

    }
    clickBurgerMenu() {
        this.burgerButton.click()
        browser.pause(2000)
    }

}

module.exports = new MenuPage()