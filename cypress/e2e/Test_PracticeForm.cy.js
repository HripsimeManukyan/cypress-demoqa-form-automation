describe("Test DemoQA Practice Form", () => {

    it("Test practice form with valid credentials", () => {
        cy.visit("https://demoqa.com/automation-practice-form" )
        cy.url().should("include", "demoqa")

        cy.get("#firstName").type("Alice")
        cy.get("#lastName").type("Cooper")
        cy.get("#userEmail").type("testuser@gmail.com")


        cy.get('label[for="gender-radio-2"]').click();

        cy.get("#userNumber").type('1234567890')

        cy.get('label[for="hobbies-checkbox-2"]').click()

        cy.get("#currentAddress").type("22 Test Street, Test City")

        cy.get("#submit").click({ force: true })

        cy.get("#example-modal-sizes-title-lg")
            .should("have.text", "Thanks for submitting the form")

        cy.get("#closeLargeModal").click({ force: true })
    })
})

