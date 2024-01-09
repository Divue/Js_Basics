// global and local scope
// {} -> scope
if (true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);  // show error because it is declared within scope and will not work outside
// console.log(b);  // error for same reason

console.log(c);    //will print 30  var works outside scope as well

let a =300
if (true){
    let a =10
    const b=20
    console.log("INNER: " , a)
}
console.log(a)    // prints INNER:  10  300


// Nested scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); 
    }
    // console.log(website);  // show error because website cannot be accessed outside its scope
    two()
}
one()
//child scope can access all variable its parent scope but parent scope cannot acces its child scope variable

if(true){
    const username= "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //error because website is in child scope of if
}
// console.log(username); //error coz username is with the scope of if
console.log()


// +++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++

// Function Type 1
console.log(addone(5))    // this will work even if we print function before its declaration
function addone(num){   //here addone can be accessed before its intialization or declaration
    return num+1
}
// console.log(addone(5))


// Function Type 2
// console.log(addtwo(5))    // this will show an error because here the function isn declared and stored in a      const  so in this case the const function should be printed only after its declaration  
const addtwo = function(num){    //addtwo cannot be accessed before its initialization or declaration
    return num +2
}
console.log(addtwo(5))