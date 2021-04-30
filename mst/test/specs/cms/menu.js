const menuPage = require("../../pageobjects/cms/menu.page")
const loginPage = require("../../pageobjects/cms/login.page")

describe('Menu and search panel tests in CMS', () => {
    beforeEach(function () {
        loginPage.auth()
        loginPage.loginWithPassword()
    })

    it('check items in menu', () => {
        menuPage.checkItemInMenu()
    })

    it('check search panel for each items in menu', () => {
        menuPage.checkSearchFields()
    })

})