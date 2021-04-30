const Page = require('./page')
const data = require('../../data/data')

class BillingDeliveryPage extends Page {

    get bankTransferRadioButton() { return $("[for='bankTransfer']") }
    get creditCardRadioButton() { return $("[for='creditDebitCardOnline']") }
    get creditCardByTelephoneRadioButton() { return $("//label[.='Credit/Debit Card by Telephone']") }
    get payPalRadioButton() { return $("[for='paypal']") }

    get creditCardNumberField() { return $("//input[@id='credit-card-number']") }
    get creditCardCvvField() { return $("//input[@id='cvv']") }
    get creditCardDataField() { return $('//*[@id="expiration"]') }

    get checkoutUl() { return $(".zwlG7") }
    get idPassword() { return $("#password") }
    get iAgreeButton() { return $("[for='readAndAgree']") }
    get compliteBookingButton() { return $("//button[@class='_1b0GU']") }
    get checkoutBlockSelector() { return $$("//ul[@class='zwlG7']") }
    get btnLogin() { return $("//button[@id='btnLogin']") }
    get password() { return $("//input[@id='password']") }
    get clickSubmit() { return $("//input[@name='UsernamePasswordEntry']") }
    get nextButton() { return $("#btnNext") }
    get loginButton() { return $('//*[@id="btnLogin"]') }
    get emailInput() { return $("//input[@id='email']") }
    get emailPassword() { return $('//*[@id="password"]') }
    get confirmButtonTop() { return $("//button[@id='payment-submit-btn']") }

    get threeDSecure() { return $("//div[@class='_2mA6W']") }
    get threeDsecureIframe() { return $("//iframe") }
    get securetyText() { return $("//*[@data-asset=\"billingDelivery.confirm.threeDSecureModalHeader\"]") }

    billingDeliveryBefore() {
        this.checkoutUl.scrollIntoView()
        browser.pause(1000)
    }

    hideDixaWidget() {
        let isDixa = $("#minimized-button")
        browser.pause(1000)
        if (isDixa) {
            browser.pause(1000)
            browser.execute(function () { document.querySelector("#minimized-button").style.display = 'none' })
        } else console.log('Not dixa-widget')
    }

    iAgreeBillingDelivery() {
        browser.pause(2000)
        let iAgreeButton = $("#readAndAgree")
        browser.pause(1000)
        iAgreeButton.click({ button: "left" })
        browser.pause(1000)
    }

    billingDeliveryCompleted() {
        this.compliteBookingButton.click()
        browser.pause(3000)
    }

    billingDeliveryBankTransfer() {
        this.bankTransferRadioButton.click()
        browser.pause(1000)
    }

    billingDeliveryCreditCardByTelephone() {
        this.creditCardByTelephoneRadioButton.click()
        browser.pause(1000)
    }

    billingDeliveryCreditCard(card) {
        browser.pause(500)
        let frameXpathBraintreeNumber = $("//iframe[@id='braintree-hosted-field-number']")
        browser.switchToFrame(frameXpathBraintreeNumber)
        browser.pause(500)
        this.creditCardNumberField.setValue(`${card}`)
        browser.pause(500)
        browser.switchToFrame(null)
        browser.pause(500)
        let frameXpathBraintreeData = $("//iframe[@id='braintree-hosted-field-expirationDate']")
        browser.pause(500)
        browser.switchToFrame(frameXpathBraintreeData)
        browser.pause(500)
        this.creditCardDataField.setValue(data.creditCardData)
        browser.pause(500)
        browser.switchToFrame(null)
        browser.pause(500)
        let frameXpathBraintreeCvv = $("//iframe[@id='braintree-hosted-field-cvv']")
        browser.pause(500)
        browser.switchToFrame(frameXpathBraintreeCvv)
        browser.pause(500)
        this.creditCardCvvField.setValue(data.creditCardCvv)
        browser.switchToFrame(null)
        browser.pause(2000)
    }

    threeDSecureForm() {
        this.threeDSecure.isDisplayed()
        this.securetyText.isDisplayed()
        this.threeDsecureIframe.isDisplayed()
        browser.pause(1000)
        browser.keys(['Tab'])
        browser.pause(1000)
        browser.keys(['Enter'])
        browser.pause(7000)
    }

    fillPayPalForm() {
        this.emailInput.setValue(data.email)
        browser.pause(2000)
        this.nextButton.click()
        browser.pause(2000)
        this.emailPassword.setValue(data.passwordPayPal)
        browser.pause(1000)
        this.loginButton.click()
        browser.pause(7000)
        this.confirmButtonTop.click()
        browser.pause(10000)
    }

    billingDeliveryPayPal() {
        this.payPalRadioButton.click()
        browser.pause(1000)
    }
}

module.exports = new BillingDeliveryPage()