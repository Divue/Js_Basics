// for 
for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

let myarr = ["flash",'batman','superman']
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
}

// break
for (let index = 0; index < 21; index++) {
    if(index == 5){
        console.log(`dectected 5`);
        break
    }
    console.log(`Value of i is ${index}`)
}

// continue
for (let index = 0; index < 21; index++) {
    if(index == 5){
        console.log(`dectected 5`);
        continue
    }
    console.log(`Value of i is ${index}`)
}