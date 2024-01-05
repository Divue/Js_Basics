// console.log(2>1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

console.log("2">1);
console.log("02">1) 

console.log(null>0);    // false
console.log(null==0);   // false
console.log(null>=0);   // truec
// this is because equality and comparission op work differently
// camparision convert null to a num, treating it as 0
// thats why (0)null >= 0 is true    and (1)null>0 is false

console.log(undefined>0);    // false
console.log(undefined==0);   // false
console.log(undefined>=0);   // false

// ===   strict check     also checks data type
console.log("2"===2);