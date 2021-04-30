class HelperPage {

    randomUserName() {
        return 'User' + Math.floor(Math.random() * 100000)

    }
    randomUserEmail() {
        return 'balakaevatest+' + Math.floor(Math.random() * 100000) + '@gmail.com'
    }

    randomNumber() {
        return Math.floor(Math.random() * 1000000)
    }

    randomCity() {
        return 'Town' + Math.floor(Math.random() * 1000000)
    }

    randomWebsiteUrl() {
        return 'www.website' + Math.floor(Math.random() * 10000) + '.com'
    }

    randomAddress() {
        return 'Address-' + Math.floor(Math.random() * 10000)
    }

}

module.exports = new HelperPage()