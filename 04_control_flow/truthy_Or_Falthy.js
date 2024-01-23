const userEmail = []

if(userEmail)   // checks if value is there or not
    console.log("got user email")
else
    console.log("dont have user email");

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NAN

// truthy values 
// "0", 'false', " ", [], {}, function(){}, 

if(userEmail.length ===0)
    console.log('Array is empty');


const emptyObj ={}
if(Object.keys(emptyObj).length === 0)
console.log("object is empty");


// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5??10
val2 = null ??10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 15
console.log(val1);
console.log(val2);
console.log(val3)
console.log(val4);


// Terniary Operator

// condition ? true : false 
const ice =100
ice>=50 ? console.log("less than 50") : console.log("more than 50");
