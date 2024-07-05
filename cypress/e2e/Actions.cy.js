describe('Actions', ()=>{
  
    it('click',()=>{
     y.visit('http://127.0.0.1:5500/cypress/index.html');
     
     cy.get("#btn1").click(); // this is the deult click the center 
     //cy.get("#btn2").click("topRight");

       cy.get("#btn0").click({force:true});

      //cy.get(".btn ").click(); // error >>  can only be called on a single element. Your subject contained 6 elements.
      cy.get(".btn ").click({force:true , multiple:true}); // to allow to click all buttons     2 option (force , multiple)

    })
    


    it('type' ,()=>{
     cy.visit('http://127.0.0.1:5500/cypress/index.html');

     cy.get("[placeholder='Type your name']").type("walaa" , {delay:1000}); // string

     cy.get("[type=number]").type(26); 
     cy.get("[type=number]").type("26");  // can be string or  number its ok but text no 
     //cy.get("[type=number]").type("walaa");  // error

     cy.get("[name=input_0]").type("testing" , {force:true});

     cy.get("[placeholder='Type your name']").clear().type("walaa" , {delay:1000}); // clear : clear the box

    })


    it('type.seq', ()=>{
     cy.visit("/");

     cy.get("#search").type("bag"+"{enter}") // search for item 
     cy.get("#search").type("bag{leftarrow}{leftarrow}",{deay:500}); // move the cursor for left twice 
     cy.get("#search").type("bag{home}") // move the cursor to begin
     cy.get("#search").type("bag{DownArrow}") // choose an item from search 
     cy.get("#search").type("bag{leftarrow}{del}",{delay:500}) // move cursor to left and delet digit 
    })


   it('select', ()=>{
      cy.visit('http://127.0.0.1:5500/cypress/index.html')
      
      cy.get("#country").select("Jordan") // use text element
       cy.get("#country").select("jordan_country")  // or use the value
       cy.get("country").select(1); // select by index 
    })

    it('check-uncheck',()=>{
        cy.visit('http://127.0.0.1:5500/cypress/index.html')

     // check box  : more than one element can check 
        cy.get("#Banana").check() // must reach in input element
        cy.get(".checkboxes input ").check("Banana") 
        // cy.get(".checkboxes input ").check() // check to all elements 

     // radio   just one element can check and there is no uncheck option ( the unchick by using other item)
        cy.get("[type=radio]").check(),{delay:800};

       // for hidden check 
       cy.get("#checkMe").check({force:true})
    })


   
    it('dclick',()=>{
        cy.visit('http://127.0.0.1:5500/cypress/index.html')
        cy.get("#dbClick").dblclick();
    })


 
    it('focus-blur',()=>{
        cy.visit('http://127.0.0.1:5500/cypress/index.html')

        cy.get("#myTextField").focus(); // when i click on the element the color will change 
        cy.get("#myTextField").blur();  // opposite of focus  ' whill return to orginal color so blur cant be use if there is no focus befor

    })


    it.only('trigger',()=>{
        cy.visit('http://127.0.0.1:5500/cypress/index.html')
        cy.get("#trigger_btn").trigger("mouseover");// when the mouse over the button the color will change 


    })

})  