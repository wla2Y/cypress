

describe('task3 ', () => {
    it('test case 1  (sign in page)', () => {
      cy.visit('https://demo.productionready.io/#/login')
       
      cy.contains("h1","Sign in");
      cy.contains(" Need an account?");
      cy.get("[type=email]");
      cy.get("[type=password]");
      cy.contains("button","Sign in");
   })
  
  
  
  
     it('test case 2 (home page) ', ()=>{
      cy.visit("https://demo.productionready.io/#/");
      cy.get(".container .navbar-brand");
      cy.contains("Home");
      cy.contains("Sign up")
      cy.get(".container > h1");
      cy.get(".container > p");
      cy.contains("a","Global Feed");
      cy.get("article-list article-preview:first-child favorite-btn");
      cy.contains("p","Popular Tags");
      cy.get(".sidebar .tag-list a:nth-child(4)");
      cy.get(".sidebar .tag-list a:last-child")
      cy.contains("span","Read more...")
    })
  
  
    it('test case 3 (an artical)', ()=>{
      cy.visit("https://demo.productionready.io/#/article/Ill-quantify-the-redundant-TCP-bus-that-should-hard-drive-the-ADP-bandwidth!-553");
      cy.get(".container h1");
      cy.get(".container:first-child  .article-meta img ")
      cy.contains("a","Maksim Esteban")
      cy.get(".banner .info span");
      cy.get(".banner .action-btn")
      cy.get(".banner .btn-outline-primary");
      cy.get(".article-content p");
      cy.get(".tag-list li:first-child");
      cy.get(".tag-list li:last-child");
    })
  })