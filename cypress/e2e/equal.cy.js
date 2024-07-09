// <reference type="cypress" />

describe('equal',()=>{
 
  it('equal-eql data type',()=>{
    const message1 = "1";
    const message2 =  1 ; 

    if(message1===message2 )     // eql stric , deep equal  (compare the value and the type )
    {console.log("stric or deep equal .") } 

   if(message1 == message2 ) // equal ( compare the value )
    {console.log(" yes equal ")}
       
    else 
    console.log("not equal");


   expect(message1).to.equal("1") // will compare vaule with value > true 
   expect(message2).to.eql(1)    // will compare the value and data type  > true 
   expect(message2).to.equal(1) // value with value > true 

   // expect(message1).to.eql(message2) // no not equal (not the same data type ) string and number 
   // expect(message1).to.deep.eql(message2) // no  > deep eql === eql 
   //expect(message1).to.equal(message2) // the same vaule but not the same referance
  })



  it.only(('equal with object'),()=>{
      
    const object1 = {name:"test"};
    const object2 = {name:"test"};
        
    if(object1 === object2) {console.log("stric or deep equal")} else {console.log("not deep equal")}
    if(object1 == object1)  {console.log("equal")} else {console.log("not equal")}
       
    // equal > compare the referance and keys and value 
    //  eql   > compare the content equal keys ans equal values 

    // expect({name:"test"}).to.equal({name:"test"}) //  not the same referance  . fail 
    expect({name:"test"}).to.eql({name:"test"})     // compare the value not the referance  . pass 


    // expect(object1).to.be.equal(object2) // different objects not the same referancs .fail 
    expect(object1).to.be.eql(object2)     // compare just the value . pass 

    expect(object1).to.equal(object1)     // the same referance . pass 
    expect(object2).to.be.equal(object2) // the same referance  . pass 

    expect(object1.name).to.be.equal(object2.name)    // .name so will compere the test name with test name  .pass 
    expect(object1.name).to.be.eql(object2.name)   //  the same value . pass 


    var akey=Object.keys(object1) // a key for object1 [name]
    var bkey=Object.keys(object2) // [name]

    console.log(akey) // print an array 

    expect(akey).to.be.eql(bkey) // the samr vaule .pass 

    const array1=[1,2]
    const array2=[1,2]

    //expect(array1).to.be.equal(array2) //not the same ref .fail 
    expect(array1).to.be.eql(array2)   // the same value .pass
  })

})