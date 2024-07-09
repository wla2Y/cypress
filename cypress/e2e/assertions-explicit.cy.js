// <reference type="cypress" />

describe('commands',()=>{

  it('wrap-command',()=>{

   const person={   // create object js with 5 proparity 

    name:"walaa",
    lastName:"nazzal",
    spa:"computer eng",
    isQA:true,
   isPlayedFootball(){
   console.log("no");
   return this.name + " not play football"}   }; //  if there was no 'this'  name will be not decleared 
            


    const massage ="Login successfully";  
    const object1={name:"test"}
    const object2={name:"test"}


    // start assertions
   cy.wrap(person).its("name").should('eql','walaa') // 'its' for  get just one proparity
                                                       // 'eql' for comparing 2 properity

     
   cy.wrap(massage).should('eql',"Login successfully");
   cy.wrap(person).invoke("isPlayedFootball") // invoke is command use for the function inside object 
      
    expect(true).to.be.equal(true)
    expect(person).to.be.equal(person)
    expect(person).to.be.eql(person)
    expect(object1).to.be.eql({name:"test"})
      // expect(object1).to.be.equal({name:"test"}) will not work , just for referances
 })


  it('explicit',()=>{
    cy.visit('/') 

    /*  cy.get(".logo").should("be.visible");  >> implicit 
    using .then */    
    cy.get(".logo").then((element)=>{     //explicit which use object 
    expect(element).to.be .visible
    })

     
    /*  cy.get("#search").should("be.visible") 
    using .then */ 
    cy.get("#search").then((element)=>{
    expect(element).to.be.visible; })


    /* cy.get(".copyright").should("have.css","text-align","center")
    using .then */   
    cy.get(".copyright").then((element)=>{
    cy.wrap(element).its("length").should("eql",1)
    cy.wrap(element).its('0.className').should("eql","copyright") // click on consol >> property must be 0.class name and the  Yielded is copy right 
    cy.wrap(element).invoke('text')// return the text inside  >> console > function :.text  Yielded:We know you have an assignment to complete. If ... 
    /* or */  cy.wrap(element).invoke('text').should('contain',"Copyright © 2013-present Magento, Inc")
    expect(element).to.have.css("text-align","center")})
   
            
    /*cy.get(".showcart").should("have.attr","href")
    using then */ 
    cy.get(".showcart").then((element)=>{
    expect(element).to.have.attr("href") })
   
           
   
    /*  cy.contains("span","Shop New Yoga").should("have.class","more")  
    using then */ 
    cy.contains("span","Shop New Yoga").then((element)=>{
    expect(element).to.have.class})
   
   
    /* cy.get(".counter").first().should("exist")
    using then */ 
    cy.get(".counter").first().then((element)=>{
    expect(element).to.be.exist 
    /* or */ expect(element).to.exist})
   
   
    cy.wait(1000); // must be time for button to change to disable 
    /* cy.get("[title=Search]").should("be.disabled")
    using then */ 
    cy.get("[title=Search]").then((element)=>{
    expect(element).to.be.disabled;})



    // cy.get("#search").should("not.be.visible") //  not true so will get error check if search attribute exist 
     
  })
    
})
