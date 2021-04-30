const PageMain = require('./page')

class MenuPage extends PageMain {

    get menuItems() { return $$(".sidebar-menu li") }
    menuItem(num) { return $(`li:nth-of-type(${num}) span`) }
    get inputSearch() { return $(".form-control") }
    get highlightClass() { return $(".highlight") }

    checkItemInMenu() {
        for (let i = 0; i < 67; i++) {
            this.menuItems[i].click()
            browser.getUrl()
            expect(browser).toHaveUrlContaining('menuIndex=')
            browser.pause(100)
        }
    }

    checkSearchFields() {
        for (let i = 0; i < 67; i++) {
            this.menuItems[i].click()
            browser.pause(50)
            if (this.inputSearch.isDisplayed()) {
                this.inputSearch.setValue('ma')
                browser.keys(['Enter'])
                browser.pause(100)
            }
        }
    }

}

module.exports = new MenuPage()