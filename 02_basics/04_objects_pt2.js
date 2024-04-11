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
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//hasOwnProperty checks whether the passed key is present in the object or not.


//*****************OBJECTS PART 3***********************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

//Now to access any key from this course object we write it like:
// course.courseInstructor
//But to make our code more clean there is another way:

//SYNTAX:This is called Object destructuring:
// const {jise key ko find krna ha uska naam} = object ka naam

//EXAMPLE:
const {courseInstructor} = course
console.log(courseInstructor);


//#API:
//-->API now comes in JSON type.
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//API looks like the above written code where  both keys and values are written as strings.

//Sometime API is also found in array form rather than object.
//EX:
// [
//     {},
//     {},
//     {}
// ]

