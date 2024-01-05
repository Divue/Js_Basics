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


//****************************** Operations **********************/

let value=3
let negValue=-value
console.log(negValue)

console.log(2^3)   // bitwise XOR operator
console.log(2**3) // 2to the power 3

console.log("1" + 2)       // 12
console.log(1+ "2");       // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32

console.log(true);     // true
console.log(+true);    //1    not recommended
console.log(+"")       //0    not recommended

