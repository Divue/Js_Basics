// Immediately Invoked Function Expressions (IIFE)
// used to get rid of global scope pollution

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();      // will work     in IIFE ; is needed to end

( (name) =>{
    //unnamed IIFE
    console.log(`db conneced ${name} `);
})('Divue');     // ; is needed to end 
