const accountId=144553   //const cannot be changed later
let accountEmail="divue@google.com"
var accountPassword="12345"
accountCity="Jaipur"              // can also declare variable like this but is not recommended
let accountState;

// accountId= 2 //not allowed to change const 
accountEmail="hc#hc.com"
accountPassword='23526'
accountCity="Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword,accountCity, accountState])

/*
    let and var -> declare a variabel
    prefer not to use var
    because of issue in block scope and functional scope
*/