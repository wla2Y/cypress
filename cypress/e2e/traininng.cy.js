
//  <reference types="cypress" /

it("traininng",()=>{
    cy.visit("/");

// get the selector for "shop tees" link 

cy.get(".home-t-shirts .action");

})



it("traininng",()=>{
    cy.visit("/radiant-tee.html");

// get the selector for "shop tees" link // get the wishlist
cy.get(".towishlist") // add to wishlist
cy.get("#product-addtocart-button")// add to cart button
cy.get(".add")
cy.get(".breadcrumbs .product ")
cy.get("[option-label=Purple]");
cy.get("[type=submit].submit"); 

cy.get("#Rating_5_label");
// or 
cy.get(".review-control-vote label:last-child");



})

