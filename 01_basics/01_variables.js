const accountId = 12314
let accountEmail = "payal@gmail.com"
var accountPassword = "20605"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // Not Allowed

accountEmail = "pn@pn.com"
accountPassword = "31345"
accountCity = "Odisha"

console.log(accountId);


/*
    Prefer not to use var
    because of issue in block scope and functional scope.
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])