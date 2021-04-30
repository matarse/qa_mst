const PageMain = require('../page')
const helper = require('../helper.page')
const path = require('path')

class SeriesLandings extends PageMain {

    get addSeriesLandingsButton() { return $("//a[contains(.,'Add series_landing')]") }
    get titleSeriesLandingsInput() { return $("//input[@id='series_landing_title']") }
    get bodySeriesLandingsInput() { return $("//textarea[@id='series_landing_body']") }
    get saveChangesSeriesLandingsButton() { return $("//span[@class='btn-label']") }

    pressAddSeriesLandings() {
        this.addSeriesLandingsButton.click()
    }

    fillFormSeriesLanding() {
        this.titleSeriesLandingsInput.setValue(helper.randomAddress())
        this.bodySeriesLandingsInput.setValue(helper.randomAddress())
        browser.pause(1000)
        // let inputDiv = $("//div[@class='btn btn-secondary input-file-container']/input")
        // let filePath = path.join(__dirname, 'car.jpg')
        // console.log(filePath)
        // let remoteFilePath = browser.uploadFile(filePath)
        // browser.execute(function () { document.querySelector("//div[@class='btn btn-secondary input-file-container']/input").style.display = 'block' })
        // inputDiv.waitForDisplayed()
        // inputDiv.setValue(remoteFilePath)
        // browser.pause(2000)

        let uploadF = $(".fa fa-fw fa-upload")
        let submit = $("//div[@class='btn btn-secondary input-file-container']/input")
        let filePath = path.join(__dirname, 'car.jpg')
        console.log(filePath)
        browser.pause(2000)
        let remoteFilePath = browser.uploadFile(filePath)     
        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')  
        browser.pause(5000)
        uploadF.setValue(remoteFilePath)
        browser.pause(2000)
        //submit.click()

    }

    pressSaveChangesSeriesLandings() {
        this.saveChangesSeriesLandingsButton.click()
    }

}

module.exports = new SeriesLandings()