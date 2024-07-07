// <reference type="cypress" />

// given when then
// pre-condition -- actions -- assertions 

describe('test cases ',()=>{

   beforeEach(()=>{

     cy.visit('/')
    
     cy.get(".product-image-photo").first().click()
     cy.contains("Add to Cart")
     cy.get("[aria-label=M]").click()
   
     cy.get("[aria-label=Blue]").click()
     cy.get("#qty").clear().type(4)
     cy.contains("Add to Cart").click()

    })



  it('Verify that the search button is disabled by default' , ()=>{
     cy.visit('/')
     cy.get("[type=submit]").first().should("be.disabled")
    
    })

   it('Verify that the search button when the user types in the search bar it will be enabled' , ()=>{
     cy.visit('/')
    
     cy.get("#search").first().type("shart");
     cy.get("[type=submit]").first().should("be.enabled")

    })



   it('Verify that the user can add products to the shopping cart',()=>{
     // pre-condition -- actions -- assertions 
     cy.visit('/')
    
     cy.get(".product-image-photo").first().click()
     cy.contains("Add to Cart")
     cy.get("[aria-label=M]").click()
   
     cy.get("[aria-label=Blue]").click()
     cy.get("#qty").clear().type(4)
     cy.contains("Add to Cart").click()
     cy.get("[role=alert]").should("contain","You added Radiant Tee to your shopping cart.")
     cy.get(".counter-number").should("have.text","8")
    })



    it('Verify that the user can delete products from the shopping cart', ()=>{

        cy.get(".counter-number").click()
        cy.get(".delete").click()
        cy.contains("span","OK").click()
        cy.contains("You have no items in your shopping cart.").should("be.visible")
        cy.get(".counter-number").should("be.hidden")
    })



    it.only('Verify that the user can update products from the shopping cart' , ()=>{

        cy.get(".counter-number").click()
        cy.get(".edit").click()
        cy.get("[aria-label=Orange]").click()
        cy.contains("Update Cart").click()
        //cy.contains("Radiant Tee was updated in your shopping cart.").should("be.visible")
        cy.get("[role=alert]").should("contain","Radiant Tee was updated in your shopping cart.")
        cy.get(".product-item-details .item-options").should("contain","Orange")


    })

})
