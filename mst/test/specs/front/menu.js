const cookiesPage = require("../../pageobjects/front/cookies.page")
const menuPage = require("../../pageobjects/front/menu.page")

describe('Menu tests', () => {

    beforeEach(function () {
        cookiesPage.passCookies()
    })

    it('the top menu full screen window check', () => {
        menuPage.checkFullMenu()
    })

    it.skip('the side menu check width<1200px', () => {
        menuPage.clickBurgerMenu()
        menuPage.checkLeftMenu()
    })

})
