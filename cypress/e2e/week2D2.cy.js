
//  <reference types="cypress" /


describe('test senario',()=>{    // to write more than one teat case 

  it('test case 1' , ()=>{
        cy.visit("/")
        cy.contains('Sign In');
        
        cy.contains("Sale");  //or
        cy.get(".navigation >ul >li ").contains("Sale");

        cy.get(".navigation >ul >li ").first(); // or cy.get(".navigation >ul >li").eq(0)   //  the first element in li in navigation 
       
        cy.get(".navigation >ul>li").last();
        cy.get(".block-promo-wrapper  a").last() 
    });



  it('test case 2 ' , ()=>{
        cy.visit("/sale.html");
        cy.contains("span","Shop Women’s Deals");  // if the contains was just ne parametter ,cupress will take all the div not just the button ,  so we use 2parameter//or 
        cy.get(".content  > .more.button");
        cy.contains(".categories-menu  .items :first-child " ,"Bras & Tanks") // or
        cy.get(".categories-menu  .items:nth-child(2) li").eq(3);
        cy.contains(".title " ,"Luma Gear Steals");
    })

    it('test case 3', ()=>{
         cy.visit("/elisa-evercool-trade-tee.html");
         cy.get("#tab-label-additional-title").click();
         cy.contains("td","Tee"); //or cy.contains("More Information ").click(); cy.get(".additional-attributes td");
         cy.contains(".action","Be the first to review this product ")

         
        

   
   
    });

}); 







