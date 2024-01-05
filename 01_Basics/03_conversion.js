let score = "33"

console.log(typeof score)

let valueInNumber = Number(score)  // typecasted string to number(int)
console.log(typeof valueInNumber);

let sc = "33qw"
let valInNum=Number(sc)
console.log(typeof valInNum)
console.log(valInNum);    //will print NaN(Not a Number) 

let c=null   // will print 0
let s=undefined  //print NaN
let scoj=true    // print 1 

let nam="hitesh"
let na=Number(nam)   //will print NaN coz string cannot be converted into number
console.log(typeof na)
console.log(na);   

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)  //converts isLoggedIn to bool
console.log(booleanIsLoggedIn);
//""->false
// "hitesh"->true