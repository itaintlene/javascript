// dates: to store creation/modification times, to measure time, or just to print out the current date.

let todaysDate = new Date()
// console.log(todaysDate); //lowkey unreadable
// console.log(todaysDate.toString()); // converts to normal date and time
// console.log(todaysDate.toDateString()); // only date
// console.log(todaysDate.toLocaleString()); // 

// *************

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})