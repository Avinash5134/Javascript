const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + " Value")//This is an old way of writing so it is not recommended.

//#String interpolation:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//In the dollar bracket name of the variable is written and its value is printed.

//Another way of declaring Strings:
const gameName = new String('hitesh-hc')

console.log(gameName[0]);//0 key has been accessed here
console.log(gameName.__proto__);//Prototype has been accessed here with the help of .__proto__

//Some of the following prototypes(methods) are:
console.log(gameName.length);//This returns the length of the string.
console.log(gameName.toUpperCase());//This prototype changes the entire value of string in uppercase.
console.log(gameName.charAt(2))//This tells the position of the character at the specific position(index) passed inside the bracket.
console.log(gameName.indexOf('t'))//This tells the position(index) of the character passed inside the bracket.
console.log(gameName.split('-'));//Split method is used to split the string values into arrays.First a separator value is passed and then a limiter value is passed inside the split bracket.

const newString = gameName.substring(0,4)//Here 0 is the starting index value and 4 is the ending index value also starting value is included and ending value is not included.
console.log(newString);

const anotherString = gameName.slice(-8,4)//This is similar to substring method the only difference is we can also give negative indexes in slice to it starts from the end of the string.
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());//This method removes the starting and ending spaces from the string.

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));//Replace method is used to replace the current value to some new value.First the part we want to replace is written in single inverted commas inside the bracket and then after a comma the new part to which we want to replace the previous part is also written inside the inverted commas inside the bracket.
console.log(url.includes('sundar'))//Include method is used to check whether the passes value is present inside the string value or not.
console.log(gameName.split('-'));//Split method is used to split the string values into arrays.First a separator value is passed and then a limiter value is passed inside the split bracket.