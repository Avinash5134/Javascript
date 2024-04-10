// const score = 400
// console.log(score)

// const balance = new Number(100)//by this new Number, the datatype of the passed number in the bracket becomes number for whatever could be the value.
// console.log(balance);

// console.log(balance.toString().length);//this .toString method changes the typeof value to String
// console.log(balance.toFixed(2));//this method is used to put decimal(.0) at the end of the value, the no. we pass in the bracket of .toFixed upto that many decimal places will be added to the value.

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));//This method returns the value very precisely upto the passed no. in the bracket.

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//This method makes the representation of 0's easy.By passing 'en-IN' in bracket it changes the representation according to Indian number system.


//******************MATHS*******************************

console.log(Math);
console.log(Math.abs(-4))//This returns the absolute value of the passed number.
console.log(Math.round(4.6));//This method rounds off the passed no.
console.log(Math.ceil(4.2))//This method returns the value by one more if the passed no. has even 0.1 more to it.
console.log(Math.floor(4.9));//This method returns the value by decreasing one even if the passed no. has even 0.1 left to become a new no.
console.log(Math.min(4,3,6,8));//This method returns the minimum value from the array.
console.log(Math.max(4,3,6,8));//This method returns the maximum value from the array.
console.log(Math.random());//This method always returns the value from between 0 to 1.
console.log((Math.random()*10) + 1)//This returns value from 1 to 10.
console.log(Math.floor(Math.random()*10)+ 1);//This returns value without any decimal places.

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)