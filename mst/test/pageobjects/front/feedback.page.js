const Page = require('./page')

class FeedbackPage extends Page {

    get nameField() { return $("//input[@id='feedbackName']") }
    get emailAdressField() { return $("//input[@id='feedbackEmail']") }
    get telephoneNumberField() { return $("//input[@id='feedbackPhone']") }
    get subjectField() { return $("//input[@id='feedbackSubject']") }
    get commentsField() { return $("//textarea[@id='feedbackComments']") }
    get submitButton() { return $("//button[@class='BpECZ']") }


    get leaveFeedbackFormButton() { return $("//a[.='leave feedback']"); }
    get leaveFeedbackHere() { return $("//div[@class='l_-B9']//div[4]//button[.='hier']"); }
    get finishButton() { return $("//button[@class='_2qV38']"); }

    openFeedbackForm() {
        this.open('nl-nl/contact-us')
        browser.pause(2000)
        this.leaveFeedbackHere.click()
        browser.pause(2000)
    }

    fillingFeedbackForm(name, email, phone, subject, comments) {
        if (name) {
            this.nameField.setValue(name)
        }
        if (email) {
            this.emailAdressField.setValue(email)
        }
        if (phone) {
            this.telephoneNumberField.setValue(phone)
        }
        if (subject) {
            this.subjectField.setValue(subject)
        }
        if (comments) {
            this.commentsField.setValue(comments)
        }
        browser.pause(2000)
        this.submitButton.click()
    }

    fillingFeedbackForm3() {
        browser.execute(function () {
            document.querySelector("#feedbackName")['value'] = 'Test'
            document.querySelector("#feedbackEmail")['value'] = 'balakaeva@gmail.com '
            document.querySelector("#feedbackPhone")['value'] = '9128889098'
            document.querySelector("#feedbackSubject")['value'] = 'Test'
            document.querySelector("#feedbackComments")['value'] = 'Test'
            document.querySelector(".BpECZ")['click']()
        })
        browser.pause(200)
    }

}

module.exports = new FeedbackPage()