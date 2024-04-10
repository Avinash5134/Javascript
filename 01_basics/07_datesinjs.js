// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//HOW TO CREATE DATE:
//FORMAT 1:
// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

//FORMAT 2:
// let myCreatedDate2 = new Date(2023,0,23,5,3);
// console.log(myCreatedDate2.toLocaleString());

//FORMAT 3:
// let myCreatedDate3 = new Date("01-14-2023");
// console.log(myCreatedDate3.toLocaleString());


//#TIME STAMP:
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);//This returns time in miliseconds.
// let myCreatedDate3 = new Date("01-14-2023");
// console.log(myCreatedDate3.getTime());
// console.log(Math.floor(Date.now()/1000));//This converts miliseconds to seconds.

//#SOME MORE METHODS:
let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})