

// <reference types="cypress"/>


    
  it('(filter and find )', ()=>{
    cy.visit("/");

     cy.get("li").filter(".authorization-link"); // get all li elements that have authoriz class
 
     // cy.get("li").filter("[role=menuitem]"); error bc menu item is an a tag not li
     cy.get("li a ").filter("[role=menuitem]");
     cy.get("li a").filter(":contains(Reviews)") // all a tags contain text 
     cy.get("li a").filter(":eq(3)") // get just index number 3 in a tag at li
     cy.get("li a").filter(":even")// elements with even index (0 2 4 6 )
     cy.get("li a").filter(":odd")// elements with odd index
     cy.get("li a").filter(":first")// elements with first index
     cy.get("li a").filter(":last")// elements with last index



     // opposite of filter 
     cy.get("li a ").not(".authorization-link"); // all li element without li with authoriz class
     
     cy.get("li").find("a") // get the child  tag a whos at li 
     cy.get(".content-heading").find(".info") // serch inside the content to fing info child
     cy.get(".content-heading").find("p") 
     cy.get(".content-heading").find("h2")
     cy.get(".page-footer").find("li")
     cy.get(".page-footer").find("li").last() // get the last child
     cy.get(".info").parent() // the parent of info class 

     /// after downloading the blugin we can use xpath 
     // cy.xpath("/html")      instide                                cy.root()                 // will give all the decument 
     //  cy.xpath('//*[text()[contains(.,"my boards")]]')             cy.contains('my boards)
   
    })

  
  


   




  











