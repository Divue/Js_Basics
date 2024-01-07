//array  in js is resizable    
// arrays make shallow copy when copied means it copy share same reference point means if something is changed in its copy then the real array is also changed

 const myArr= [0,2,4,1,6, "hitesh", true]
 const arr = new Array(1,2,3,4)
 console.log(myArr[0]);

 // Array methods

 myArr.push(6)   // adds a element at last
 myArr.pop()     // removes last element
 myArr.unshift(9) // add element at first
 myArr.shift()    // removes first element

 console.log(myArr);

 console.log(myArr.includes(9));   // checks whether 9 is in the array or not gives True/False
 console.log(myArr.indexOf(9));  // if not exist then gives -1 if exist then gives the index num

 const newar=myArr.join()  // adds adds all element of array into a string
 console.log(myArr);
 console.log(newar);
 console.log(typeof newar)  


 // slice
 console.log("A", myArr)
 const mya1= myArr.slice(1,3)   //returns a copy of section of array
 console.log(mya1); 
 console.log("B", myArr);

 // splice
 const mya2 = myArr.splice(1,3)  // changes the original array as well 
 console.log(mya2)
 console.log("C", myArr);
