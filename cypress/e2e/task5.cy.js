// <reference type="cypress" />


describe('task5',()=>{
   
    it('test case 1',()=>{

        cy.visit('/')
        cy.contains("Create an Account").click()

        cy.get("#search").should("be.visible");
        cy.get("#firstname").should("be.visible");
        cy.get("#lastname").should("be.visible");
        cy.get("[type=email]").should("be.visible");
        cy.get("#password").should("be.visible");
        cy.get("#password-confirmation").should("be.visible");
        cy.contains("span" ,"Create an Account").should("be.visible")

    })


    it.only('test case 2 ',()=>{
        cy.visit('/')

        cy.contains("Create an Account").click()
        
        cy.get("#firstname").type("walaa");
        cy.get("#lastname").type("nazzal")
        cy.get("#email_address").type("walaanazzal@gmail.com")
        cy.get("#password").type("w123456789W")
        cy.get("#password-confirmation").type("w123456789W")
        cy.contains("span" ,"Create an Account").click()



        











    })








})