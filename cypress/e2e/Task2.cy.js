
//  <reference types="cypress" />


// a task for a link  https://magento.softwaretestingboard.com/checkout/#shipping 
// but a jacket in the catr and go to shipping address

// 1. i made account ans i added a shirt 


it("task",()=>{ 
    cy.visit("/checkout/#shipping"); 
    /* ==== Generated with Cypress Studio ==== */ 
    cy.get('#search').clear('s');
    cy.get('#search').type('shirt{enter}');
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click(); 
    cy.get('#option-label-size-143-item-167').click(); 
    cy.get('.swatch-attribute.color > .swatch-attribute-options').click(); 
    cy.get('#option-label-color-93-item-57').click();
    cy.get('#product-addtocart-button > span').click(); 
    cy.wait(3000); 
    cy.get('.showcart').click(); 
    cy.get('#top-cart-btn-checkout').click();
    cy.wait(5000); /* ==== End Cypress Studio ==== */
    

cy.get('[ name = firstname]'); // an ATTRIBUTE  name="firstname" and iths uniqe
cy.get('[name = lastname]');
cy.get('[name = company]');

cy.get("[name=telephone]");

cy.get("[name = street[0] ]");
cy.get("[name = street[2]]");
cy.get("[name = [street[3]]");

cy.get("#region_id");

cy.get("#zip");



})