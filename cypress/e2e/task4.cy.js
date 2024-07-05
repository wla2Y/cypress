

describe('task4',()=>{

    it('test case ', ()=>{
        cy.visit('https://magento.softwaretestingboard.com/')

       //cy.get("#search").type("shirt")
        cy.get("#search").type("shirt"+"{enter}")
        cy.get(".product-items li:first-child img ").click()
        cy.get("#option-label-size-143-item-168").click()
        cy.get(".swatch-attribute-options .color:last-child").click()
        cy.get("#qty").clear().type("3")
        cy.contains("Add to Cart").click()

        










    })







})