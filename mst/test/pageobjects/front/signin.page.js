const ticketsPage = require("./tickets.page")
const basketPage = require("./basket.page")
const helper = require("./helper.page")
const data = require("../../data/data")

class SignInPage {
        get loginButtonInTopMenu() { return $("//button[@id='login-button']") }
        get signupLinkInFooter() { return $("//a[.='Sign Up']") }
        get clickHereLink() { return $("button[data-asset='signUp.content.signInButton']") }
        get signinButtonBillingPage() { return $("//button[.='sign in']") }
        get signUpLink() { return $("//a[.='Sign up.']") }
        get signinButtonBurgerMenuPage() { return $("//button[.='sign in']") }
        get newUserButton() { return $("//div[@class='_2WNQx']") }
        get logOutLink() { return $("//div[@class='hBaC0']/a[.='Log out']") }

        get userNameInput() { return $("#username") }
        get firstNameInput() { return $("#first_name") }
        get lastNameInput() { return $("#last_name") }
        get emailInput() { return $("#email") }
        get passwordInput() { return $("#password") }
        get submitButton() { return $('//*[@id="submitbutton"]') }

        pressLoginButton() {
                this.loginButtonInTopMenu.click()
                browser.pause(2000)
        }

        signInPopUp() {
                let frameXpath = $("iframe[title='login']")
                browser.switchToFrame(frameXpath)
                browser.pause(1000)
                let email = $('#email')
                email.addValue(data.email)
                browser.pause(1000)
                let password = $('#password')
                password.addValue(data.password)
                browser.pause(1000)
                let submitButton = $('#submitbutton')
                submitButton.click()
                browser.pause(1000)
                let continueButton = $('#continue_with_this_account')
                continueButton.click()
                browser.pause(3000)
        }

        signInTopMenu() {
                this.loginButtonInTopMenu.click()
                browser.pause(2000)
                this.signInPopUp()
        }

        signInPageSignup() {
                this.signupLinkInFooter.click()
                browser.pause(2000)
                this.clickHereLink.click()
                browser.pause(1000)
                this.signInPopUp()
        }

        signInBillingDeliveryPage() {
                ticketsPage.chooseTickets()
                basketPage.pressShoppingBasketContinue()
                this.signinButtonBillingPage.click()
                browser.pause(2000)
                this.signInPopUp()
        }

        signInBurgerMenuPage() {
                browser.pause(2000)
                this.signinButtonBurgerMenuPage.click()
                browser.pause(2000)
                this.signInPopUp()
        }

        registration() {
                let frameXpath = $("iframe[title='login']")
                browser.switchToFrame(frameXpath)
                this.signUpLink.waitForDisplayed()
                this.signUpLink.click()
                this.userNameInput.addValue(helper.randomUserName())
                this.firstNameInput.addValue(helper.randomUserName())
                this.lastNameInput.addValue(helper.randomUserName())
                this.emailInput.addValue(helper.randomUserEmail())
                this.passwordInput.addValue(data.password)
                this.submitButton.click()
                browser.pause(3000)
        }

        pressNewUser() {
                this.newUserButton.waitForDisplayed()
                this.newUserButton.click()
        }

        logOutInProfilePage() {
                this.logOutLink.waitForDisplayed()
                this.logOutLink.click()
                browser.pause(3000)
        }

        clearSession() {
                browser.execute(() => {
                        window.localStorage.clear()
                })
        }

}

module.exports = new SignInPage()