// Stack (Primitive),  Heap (Non-Primitive)
//   stack gets a copy of variable      
//   heap gets reference of the varialbe

let myYoutuveName="hiteshchou.com"
let anotherName= myYoutuveName
anotherName="chaiaurcode"

console.log(myYoutuveName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email= "hitesh@goog.e.com"

console.log(userOne.email)
console.log(userTwo.email)