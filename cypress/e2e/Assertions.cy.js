// <reference type="cypress" />

describe('assertions',()=>{


 it('should be',()=>{
     cy.visit('/') // given
     // action - when
     // assertion - then

     cy.get(".logo").should("be.visible"); // test if the lowrgo is exit and can be seen >> visible assertions 
     cy.get("#search").should("be.visible") // check if search attribute exist 
     // cy.get("#search").should("not.be.visible") //  not true so will get error check if search attribute exist 
      
     cy.get(".showcart").should("be.visible")
    })


    it('should have',()=>{
        cy.visit('/')

        cy.get(".copyright").should("have.css","background-color",'rgb(110, 113, 110)') // red , green ,blue 
        cy.get(".copyright").should("have.css","text-align","center")
         // or 
        cy.get(".copyright").should("have.css","background-color",'rgb(110, 113, 110)').and("have.css","text-align","center") 



        cy.get(".showcart").should("have.attr","href")
        cy.get(".showcart").should("have.attr" , "data-bind")
        cy.contains("Sign In").should("have.attr", "href")
        cy.contains("Sign In").parent().should("have.attr","data-label","or") // sign in parent should have atttribte data label called or 
           
        cy.contains("span","Shop New Yoga").should("have.class","more") //  if the item have class called more 
        
        cy.get(".control").first().find("input").should("have.id","search") // if the item havr id called search 
        
        cy.get(".info").first().should("have.text","New Luma Yoga Collection") // check if the text exist 
         // or  ( the different btw have.text  , contain  >> contain can get part of the txet but have.text will get error)
         cy.get(".info").first().should("contain","Collection" ) 


      //cy.get(".product-image-photo").first().click()
      // cy.get("#qty").should("have.value","1")


      // cy.visit('/')
       cy.get(".counter").first().should("exist")
       cy.get("#search").should("be.empty")
       cy.get("#search").should("not.have.value") 
       cy.get("[title=Search]").should("be.disabled") // the button will be disabled but after typing will be able

    })


    it.only('focus',()=>{
        cy.visit('http://127.0.0.1:5500/cypress/index.html')

        cy.get("#myTextField").focus().should("have.focus") // check if the elemnt is focus 
        cy.get("#Banana").should("be.enabled") // like check box to check if enable or dis 

        cy.get("#country").select(1)
        cy.get("[value=jordan_country]").should("be.selected")
    })
 
    
})