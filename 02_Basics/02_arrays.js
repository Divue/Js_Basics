const marvel_heros = ["thor", "Itonman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros);  //becomes nested array     [ 'thor', 'Itonman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


const heros = marvel_heros.concat(dc)   // concat returns a new array which merges all the array
console.log(heros);

 const allN=[...marvel_heros, ...dc]   // does the same as concat and is recommended
 console.log(allN);


 const anA= [1,2,4,[5,6,7],7,[4,[6,2]]]
 const realAnother = anA.flat(Infinity)   // flat spreads all the nested array
 console.log(realAnother)



 console.log(Array.isArray("hitesh"))   //returns false coz hitesh is not an array 
 console.log(Array.from("hitesh"));

 console.log(Array.from({name:"hitesh"}));   //will return []  because we are not specific whether the key or the value is needed to convert into array

 let score1= 100
 let score2=200
 let scroe3=300
 console.log(Array.of(score1,score2,score3))  //convets them into array
  