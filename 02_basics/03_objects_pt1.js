//singleton:apne tarah ka ek hi object jab contructor se banega

//Object literals:Object ko declare krne ka tarika

const mySym = Symbol("Key1");

const JsUser = {
    name: "hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "myKey1",//This is how we add a key from outside of the object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
//Ways to call object keys:
console.log(JsUser.email)
console.log(JsUser["email"])//This way of calling is more desirerable since sometimes the key name are written like strings(inside the inverted commas),EX:
//console.log(JsUser.full name)It shows error so we have to use other way:
console.log(JsUser["full name"]);
console.log(JsUser[mySym])//This will return the type of mySym as string but we wanted symbol so we put mySym in square brackets.

//How to change values:
JsUser.email = "hitesh@chatgpt.com"

//How to lock a object so its values does not changes:
// Object.freeze(JsUser)
JsUser.email = "Hitesh@microsoft.com"
console.log(JsUser);

//How to add function to a object:
JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());

//How to reference a key of a object using a function:
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);//With the help of this.name we were able to access the value of the name key of the object.Similar can be done for other keys using this.keyname.
}
console.log(JsUser.greetingTwo())