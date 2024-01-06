const score=400
console.log(score)

const balance = new Number(100)  //[Number: 100]
console.log(balance);

console.log(balance.toString()) //becomes 100
console.log(balance.toString().length)
console.log(balance.toFixed(2))   //presicion value i.e. decimal value

const num=23.8944
console.log(num.toPrecision(3));    //rounds off only till the number assigned     output->23.9
const nu=123.8944
console.log(nu.toPrecision(3));  // 124
const n=1523.8944
console.log(n.toPrecision(3));  //1.52e+3

const hun=1000000
console.log(hun.toLocaleString('en-IN'));    //10,00,000

Number
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);




//+++++++++++++++++++++++++++++ Maths +++++++++++++++++

console.log(Math)
console.log(Math.abs(-5));   //absolute value change +ve     5
console.log(Math.round(4.6));   //5
console.log(Math.ceil(4.2))     //5
console.log(Math.floor(4.9))    //5
console.log(Math.min(4,2))      //4

console.log(Math.random())   //generates value between 0 and 1
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)  //gives a single value

const min=10
const max=20
console.log(Math.random()*(max-min + 1))
console.log(Math.floor(Math.random()*(max-min + 1))+min)   // this will print only the values which is >= min i.e. 10
