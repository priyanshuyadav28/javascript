// variables in javascript

const accountId = 144553
let accountEmail = "hitesh295@gmail.com"
var accoutPassword = "12345pyq"

accountCity = "Jaipur"

let accountState; // declaration not initialized: value will be "undefined"

// try to change all the decalred variables
// accountId = 99832 // cannot be changed as it is declared as const

accountEmail = "hc@hc.com"
accoutPassword = "py"
accountCity = "Bengaluru" // will work but not prefered

/* 
Prefer not to use var 
because of issue in block scope and functional scope
 */

console.log("Account city is: ", accountCity);
console.table([accountEmail, accoutPassword, accountCity, accountState])

