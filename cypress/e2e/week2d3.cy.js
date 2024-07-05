// <reference types="cypress"/>

describe('"', ()=>{


  it("test case 1" , ()=>{
       
    cy.visit("/");
    cy.contains("Sign In");
    cy.contains ( "a","sign in",{matchCase:false}); // ignore to be a sinsitive case 
   //cy.contains("a", "sign in ", {timeout :6000}) // the defult time if 4000  ,   we change it to 6000 to find the element

   // using chain 
   // cy.get(" .showcart .counter .counter=number").contains("1") 
   // or
   // cy.contains(" .showcart .counter .counter=number" , "1").click();


    //cy.get(" .showcart .counter .counter=number").contains("1").click().contains("proceed to check").click(); // this will not work and give error "proceed to check" not found 
    /*  to remove the error wr split the chain into two chain */  // cy.get(" .showcart .counter .counter=number").contains("1").click();
                                                                   // cy.contains("proceed to check").click(); 
    
      
      
   cy.get(".swatch-attribute.size").contains("XS").next()
   cy.get(".swatch-attribute.size").contains("XS").next().next()
    })

});