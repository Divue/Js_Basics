// this refer to the current context
const user={
    username:"hitesh",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMsg()
user.username="Sam"
user.welcomeMsg()

console.log(this);  


// ************************** arrow function ****************
function chai(){
    console.log(this);
}
// chai()

// const cahi = function(){
//     let username="hitesh"
//     console.log(this.username);
// }
// cahi()


const chi = () => {
    let username="hitesh"
    console.log(this.username);
}
chi()


// const add2 = (num1, num2) =>{  //explicit return
//     return num1 +num2
// } 
const add2 = (num1,num2) => (num1+num2)  //implicit return
//if {} is used then we need to write return else not when () is used
console.log(add2(3,4))

const addTwo = (num1, num2) => ({username:"hitesh"})   //for obj
console.log(addTwo(3,4));

// const myArray = [2,5,3,6,7]
// myArray.forEach()