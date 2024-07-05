

//  <reference types="cypress" /
it("lesson1",()=>{
    cy.visit("/");  // visit command used to visit any url you want
    
    
   
    /* cy.get('.showcart'); // get element using css-selector (.class)
     
    cy.get('*') // get all elements unsing css selector (*)
     
    cy.get('.more.button'); // get all elements unsing css selector(.class1.class2)
    
  
    cy.get('#search') // get an element using css selector (#id)

    cy.get('input') // get all element using css selector ( tag name)


    cy.get(".home-main >.content ").click();
    //cy.get(' :nth-child(4) > .product-item > .photo > .product-image-container ')*/



cy.get(".links .widget ul li:first-child a"); // for write for us tag

cy.get(".logo"); // a selector for he logo and there is a class uniqe for the logo called logo


//cy.get(".navigation > ul > li:last-child > a[role=menuitem]"); // athe selector to get "sale" item , this item is in class called navigation but this class have many other tags and many lu li ( its the last tag ) in the  direct and last child in li
                                                                // we pointed in sale item whitout any action 

cy.get(".navigation > ul > li:last-child > a[role=menuitem]").click(); // with an action to click on item 

cy.get('.copyright'); // athe copy right paragraph have a uniqe class called copyright 



//cy.contains("Sign In").click(); // go to other tab called sign in
//cy.get('#email');

cy.contains("Create an Account").click();
cy.get('#firstname');



cy.get(" .logo").click();

cy.get('.minicart-wrapper a ' ).click();



});

