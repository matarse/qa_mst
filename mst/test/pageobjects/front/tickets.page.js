const Page = require('./page')

class TicketsPage extends Page {

    get ticket1() { return $("div._3rvFO > div:nth-of-type(2) > div:nth-of-type(1) ._2-TUS") }
    get pop() { return $("//div[@class='MFpoN _3TP2z shadow-bottom']") }
    get basket() { return $("//a[.='Check Out']") }

    chooseTickets() {
        this.open('en-gb/f1/monaco/tickets')
        browser.pause(2000)
        this.ticket1.click()
        browser.pause(1000)
        this.basket.click()
        browser.pause(3000)
    }

    chooseRandomeTickets() {
        this.open('en-gb/f1/monaco/tickets')
        let filterButton = $("//button[.='On Sale']")
        let filterButton2 = $("//button[.='Adult']")
        if (filterButton) { filterButton.click() }
        if (filterButton2) { filterButton2.click() }
        browser.pause(500)
        for (let x = 1; x < 7; x++) {
            let num = (x % 3) + 1;
            let ticket = $('div._3rvFO > div:nth-of-type(2) > div:nth-of-type(' + num + ') button:nth-of-type(1)')
            browser.pause(500)
            ticket.click()
        }
        browser.pause(1000)
        this.basket.click()
    }

}

module.exports = new TicketsPage()