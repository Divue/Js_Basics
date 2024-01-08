function sayMyName() {
    console.log("D");
    console.log("i");
    console.log("v");
}
// sayMyName()

function add2No(num1, num2) {    //num1 num2 are parameters  
    console.log(num1+num2);
}
add2No(3,"4")   //print 34 beause it will take both as a string
add2No(3,"a")  // print 3a   // 3 and a are arguments
const result = add2No(3,5)
console.log(result)     // undefined


function add2N(num1, num2) { 
    let res = num1+num2
    return res
    console.log("hitesh")  //will not print because it is after return
}
const re=add2N(3,4)
console.log(re)


function loginUserMsg(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
} 
loginUserMsg("hitesh")  // nothing will happen
console.log(loginUserMsg("hitesh")) //will print jitesh just logged in
console.log(loginUserMsg())   //prints undefined just logged in 
console.log();



function calculateCartPrice(...num1) {  //rest and spred operator here it is used as rest operator and will return array [ 2, 200, 400, 500 ]
    return num1
}
console.log(calculateCartPrice(2, 200, 400, 500))


function calculateCaret( val1,val2, ...num1){
    return num1
}
console.log(calculateCaret(200, 400, 500, 20000));   // will return this coz 200 and 400 are taken as val1 and val2 and the rest are taken as num1 through rest operator[ 500, 20000 ]

const user={
    username:"hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({
    username:"sam",
    price: 300
})

const myNerArray = [200, 500, 100 ,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNerArray));  //print 500