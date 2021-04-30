module.exports = class PageMain {

    open(path) {
        browser.setWindowSize(1200, 800)
        return browser.url(`https://testing.cms.motorsportlive.com/${path}`)
    }

    auth() {
        browser.setWindowSize(1200, 800)
        return browser.url(`https://testing.cms.motorsportlive.com/login`)
    }

}
