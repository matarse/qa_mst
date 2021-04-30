const PageMain = require('./page')

class LoginPage extends PageMain {

    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $(".btn") }

    login(username, password) {
        this.inputUsername.setValue(username)
        this.inputPassword.setValue(password)
        this.btnSubmit.click()
    }

    loginWithPassword() {
        this.login('admin@motorsportexperiences.com', 'Adm1nPassw0rd')
        browser.pause(500)
    }

    logout() {
        this.logoutButton.waitForDisplayed()
        this.logoutButton.click()
        browser.pause(500)
    }

    open() {
        return super.open('login')
    }

    auth() {
        return super.auth('auth')
    }

    clearSession() {
        browser.execute(() => {
            window.localStorage.clear();
        })
    }

}

module.exports = new LoginPage()