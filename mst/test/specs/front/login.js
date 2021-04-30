const cookiesPage = require("../../pageobjects/front/cookies.page")
const signInPage = require("../../pageobjects/front/signin.page")
const menuPage = require("../../pageobjects/front/menu.page")

describe('Login tests', () => {

    beforeEach(function () {
        cookiesPage.passCookies()
    })

    afterEach(function () {
        signInPage.clearSession()
        browser.pause(2000)
        browser.closeWindow()
    })

    it('sign in the top menu', () => {
        signInPage.signInTopMenu()
    })

    it('sign in the page signup', () => {
        signInPage.signInPageSignup()
    })

    it('sign in the delivery page', () => {
        signInPage.signInBillingDeliveryPage()
    })

    it('sign in the burger menu', () => {
        menuPage.clickBurgerMenu()
        signInPage.signInBurgerMenuPage()
    })

    it('sign up - registration', () => {
        signInPage.pressLoginButton()
        signInPage.registration()
    })

    it.only('sign up - registration and log out', () => {
        signInPage.pressLoginButton()
        signInPage.registration()
        signInPage.pressNewUser()
        browser.pause(3000)
        signInPage.logOutInProfilePage()
    })

})