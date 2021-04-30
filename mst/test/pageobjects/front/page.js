module.exports = class Page {
    open(path) {
        browser.setWindowSize(1600, 900)
        return browser.url(`https://staging.motorsporttickets.com/${path}`)
    }
}
