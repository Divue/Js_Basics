// if

if(2=="2")
    console.log("Executerd")
if(2==="2")
    console.log("ecedcut3")  // nothing will print because === checks the data type as well the the numerical

//   <   >   <=   >=   ==   !=   ===  !==

// var keyword scope is global which causes an error well not technical error but some problems like it can be accessed outside the scope of a function or a block as well 

// const keyword has a scope block means it cannot be accessed outside its block 


const balance = 1000
if(balance >500) 
console.log("test") , 
console.log("we can write also in this way");    // this way is not recommended because it makes the code difficult to read              and here ; is needed to end the code

// nested if else 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}