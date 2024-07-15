// <reference type="cypress" />


describe('mocha hooks',()=>{

  before(()=>{  //  befor all
     cy.log("before")


   }); // one argument ( arrow function )


 beforeEach(()=>{    // befor all   
  cy.visit('/');

  });


 after(()=>{    // after all
    cy.log("after all test case ")
 

 });


 afterEach(()=>{
  cy.log("after each test case ")

 })
 

  it('test case 1',()=>{    // 2 argument ( test case name , arrow function)
   //cy.get(".showcart").click();

   const productName = "Radiant Tee"
     cy.clickLink(productName)
     cy.get(".page-title").should("contain",productName)
     

   
   const email = "walaanazza@gmail.com"
   const password="123444"
   cy.clickLink("Sign In ") // log in by using custom command from commang.js wrote by the programmer
   cy.login(email,password)
     


    




      



   })


 it('test case 2',()=>{
   
    cy.get(".logo").should('be.visible')




   })
 
   it('test case 3',()=>{
     cy.get("#search").type("bag")






 })



})