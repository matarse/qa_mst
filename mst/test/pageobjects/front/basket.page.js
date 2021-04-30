const Page = require('./page')

class BasketPage extends Page {

    get continueButton() { return $("//button[@class='_1D3h4']") }
    get plusItemButton() { return $("//div[@class='_1Rebv _3S9b3']/button[@class='cv55w']") }
    get minusItemButton() { return $("//div[@class='_1Rebv _3S9b3']/button[@class='_3Vnxv']") }
    get europeCourierRadioButton() { return $("[for='Europe/USA/Canada Courier']") }
    get restWorldCourierRadioButton() { return $("[for='Rest of World Courier']") }
    get yesBookingProtectionRadioButton() { return $("[for='cart:additionalServices.protectTitle']") }
    get noBookingProtectionRadioButton() { return $("//label[.='No, Do Not Protect My BookingNo refund coverage if you cannot attend']") }
    get packFreeCheckbox() { return $("//label[@class='_1jl70']") }
    get usePointsButton() { return $("//button[.='use points']") }
    get keepFightingRadioButton() { return $("div.slick-current [for='5-charityAmount']") }
    get select2SlickDots() { return $("//button[.='2']") }
    get raceAgainstDementiaRadioButton() { return $("div.slick-current [for='10-charityAmount']") }
    get select3SlickDots() { return $("//button[.='3']") }
    get missionMotorsportRadioButton() { return $("div.slick-current [for='20-charityAmount']") }
    get select4SlickDots() { return $("//button[.='4']") }
    get halowProjectRadioButton() { return $("div.slick-current [for='50-charityAmount']") }

    pressShoppingBasketContinue() {
        this.continueButton.click()
        browser.pause(2000)
    }

    checkCharityCarousel() {
        this.keepFightingRadioButton.click()
        this.select2SlickDots.click()
        this.raceAgainstDementiaRadioButton.click()
        browser.pause(500)
        this.select3SlickDots.click()
        browser.pause(500)
        this.missionMotorsportRadioButton.click()
        browser.pause(500)
        this.select4SlickDots.click()
        browser.pause(500)
        this.halowProjectRadioButton.click()
        browser.pause(500)
    }

    plusMinusItemInBasketClick() {
        this.plusItemButton.click()
        this.minusItemButton.click()
        browser.pause(1000)
    }

    deliveryOptionSelect() {
        this.restWorldCourierRadioButton.click()
        browser.pause(1000)
    }

    bookingProtectionSelect() {
        this.yesBookingProtectionRadioButton.click()
        browser.pause(1000)
    }

    packFreeSelect() {
        this.packFreeCheckbox.click()
        browser.pause(1000)
    }

    basketPageFullCheckout() {
        this.plusMinusItemInBasketClick()
        this.deliveryOptionSelect()
        this.bookingProtectionSelect()
        this.packFreeSelect()
        this.checkCharityCarousel()
    }

}

module.exports = new BasketPage()