// singleton 
// Object.create    //constructor method known as singleton 





// object literals 
const mySym = Symbol("key1")

const JsUser={
    name:"hitesh",      //name age location is taken as string 
    "full_name": "Hitesh Choudhary",  //full name cannot be accessed using .
    [mySym]: "mykey1",    //to use symbol [] is needed  to show it is a symbol key
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDaya:["monday", "tues"]
}

console.log((JsUser.email));
console.log(JsUser["email"]);
console.log(JsUser.full_name);
console.log(JsUser[mySym]);

JsUser.email="hitchat@gpt.com"
// Object.freeze(JsUser)  //it will freeze the value and will not let it change in future
// JsUser.email="hit@dsg.com"  
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.gree2= function(){
    console.log(`heelo js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.gree2());