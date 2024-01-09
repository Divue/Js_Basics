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