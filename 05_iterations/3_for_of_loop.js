// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {    // print value 1 to 5   same as for in python
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {   
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()      // map -> unique value and is in order wise
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);    // to print map

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  //myobject is not itterable
//     console.log(key, ':-', value);
    
// }