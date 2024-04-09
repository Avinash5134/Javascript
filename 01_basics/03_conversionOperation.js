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
/*
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
*/


//********************OPERATIONS************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)//{Addition}
// console.log(2-2)//{Substraction}
// console.log(2*2)//{Multiplication}
// console.log(2**3)//{2 raised to the power 3}
// console.log(2/3)//{2 divided by 3}
// console.log(2%3)//{to find remainder when 2 is divided by 3}

let str1 = "Hello"
let str2 = "Hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);//IF sring is written first then the complete value will become a string
console.log(1 + 2 + "2");//IF string is last, then first the operations will occur and then string part will be added to it in the end.

console.log( (3 + 4) * 5 % 3);//Use parenthesis to solve these type of questions.

/*The following below is wrong way of writing code:
console.log(+true)
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2+2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter)
*/