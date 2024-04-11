//DECLARING OBJECTS WITH THE HELP OF CONSTRUCTOR:
//const tinderUser = new Object()//This is a singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullName: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstname);


//COMBINING OBJECTS:
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}//This is wrong way of combining objects.
// const obj3 = Object.assign({},obj1, obj2, obj4)//This is the other way of combining objects using assign operator
const obj3 = {...obj1, ...obj2}//This is more eaiser way to combine objects by using the spread way just like in arrays.

// console.log(obj3);


//SYNTAX WE WILL USE MORE WHEN VALUES COMES FROM DATABASE.
const users = [
    {
        id: 1,
        email: "h@gamil.com",
    },
    {
        id: 1,
        email: "h@gamil.com",
    },
    {
        id: 1,
        email: "h@gamil.com",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

