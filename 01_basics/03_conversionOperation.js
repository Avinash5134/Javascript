//(1)Conerting into Number:
/*
let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//It has Nan that is not a number for value 33abc
//"33"=>33
//"33abc"=>Nan
//true=>1; false=>0
//NULL=>0
*/


//(2)Converting into boolean: 
/*
let isLoggedIn = "";

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

//1=>true, 0=>false(for boolean values)
//""(empty string)=> false
//"hitesh"=>true
*/


//(3)Converting into string:
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);