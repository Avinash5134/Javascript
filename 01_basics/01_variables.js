const accountId = 144553
let accountEmail = "avinash@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;//this will give value as undefined

//accountId = 2//not allowed as changes cannot be done in const.
//let and var values can be changed but var is not used now.

/*
Var is not preferable because of issue in block scope and functional scope.
*/

accountEmail = "hc@hc.com"
accoutPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])