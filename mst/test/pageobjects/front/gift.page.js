const Page = require('./page')

class GiftVoucherPage extends Page {

    get plus50VoucherButton() { return $("//div[@class='_3_IHs']/div[1]//button[@class='cv55w']") }
    get plus100VoucherButton() { return $("//div[@class='_3_IHs']/div[2]//button[@class='cv55w']") }
    get plus200VoucherButton() { return $("//div[@class='_3_IHs']/div[3]//button[@class='cv55w']") }
    get plus500VoucherButton() { return $("//div[@class='_3_IHs']/div[4]//button[@class='cv55w']") }
    get buyGiftVoucherButton() { return $("//button[@class='_21ksH']") }

    shoppingGiftVoucher() {
        this.open('en-gb/gift-vouchers')
        browser.pause(1000)
        this.plus200VoucherButton.click()
        browser.pause(1000)
        this.plus100VoucherButton.click()
        browser.pause(1000)
        this.buyGiftVoucherButton.click()
        browser.pause(3000)
    }
}

module.exports = new GiftVoucherPage()