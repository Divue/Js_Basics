const name ="hitesh"  // string declaration
const gameName = new String('hitesh-hc')  // string declaration
const repo =40

// console.log(name + repo + "value");   //old method

console.log(`hello my teacher name is ${name} and my repo count is ${repo}`)  // new method and more reliable

console.log(name[2])
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)    // 4 is not included in range      does not work with -ve value in substring 
console.log(newString)

const anotherString=gameName.slice(-8,4)  //works with -ve value
console.log(anotherString)

const newStringOne="     hitesh      "
console.log(newString);
console.log(newStringOne.trim())  //trim removes start and end white space and \n 

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

const gam=new String('hitesh-hc-com')
console.log(gam.split('-')) // splits into ['hitesh','hc','com']
