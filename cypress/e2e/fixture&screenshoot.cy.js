
// describe('category Area ',() => {
   
  //  it('verify that the user can add a new category',()=>{
   /* login the web  */ 
   // cy.visit('https://admin-demo.nopcommerce.com/admin/')
    //  cy.get("#Email").clear().type("admin@yourstore.com")
    //  cy.get("#Password").clear().type("admin")
    //  cy.get(".login-button").click() 
             
    //use fixture to get the data 
    //  cy.visit("https://admin-demo.nopcommerce.com/");
    //  cy.fixture("./example.json").then((data)=>{      // (data is object) the path of the file thar contain email and password 
    //  cy.get("#Email").clear().type(data.email);  
    //  cy.get("#Password").clear().type(data.password);  
    //  cy.get(".login-button").click();  })
 
    // cy.get("#nopSideBarPusher").click();  
    // cy.get(".nav-sidebar > li:nth-child(2) > a ").click();
    //cy.contains("Categories").click();
      
//});   });

describe('Category Area', () => {
  it('Verify that the user can add a new category', () => {
      cy.visit("https://admin-demo.nopcommerce.com/");
      cy.fixture("./example.json").then((data)=>{
          cy.get("#Email").clear().type(data.email);
          cy.get("#Password").clear().type(data.password);
          cy.get(".login-button").click();
      })
      cy.wait(1500)
      cy.screenshot({capture:"fullPage"})
      cy.pause()
      cy.get("#nopSideBarPusher").click();
      cy.get(".nav-sidebar > li:nth-child(2) > a").click();
      cy.contains("Categories").click()
      cy.screenshot({capture:"runner"})// with the runner page 
      cy.contains("Add new").click();
      cy.get("#Name").clear().type("laptop");
      cy.get("#ParentCategoryId").select("Computers");
 
      cy.fixture("./files/qa.png").then((image)=>{
       cy.get("input[type=file]").attachFile("./files/qa.png",image) // to upload an image from the file 
      })
      cy.get("input[type=file]").attachFile("./files/qa.png");
      cy.get("[name=save]").click();
      cy.get(".alert-success").should("contain","The new category has been added successfully.")
      cy.screenshot({capture:"viewport"});

  });
}); 


