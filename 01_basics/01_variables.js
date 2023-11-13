const accountId = 144553;
let accountEmail = "priyanshu@gmail.com";
var accountPassword = "9455priyanshu";

accountCity = "Delhi"; // -> this would work but not preffered
let accountState; // declared but not defined variables are considered as undefined in js

// accountId = 2   // not allowed since accountId is declared const above

accountEmail = "ayushjimmy@gmail.com";
accountPassword = "21312";
accountCity = "Mumbai";

console.log(accountId);

/*
    preffered no to use var because of issue in block scope and functional scope 
 */

console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState,
]);
