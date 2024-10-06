// immediately invoked function expression

// ()() : basically in first parenthesis you declare a function and adding second one immediately invoke it
// you dont have to call it manually

(function user(){
    console.log("DB Connected");
})(); // oh and always add a semi colon at end of an iife 

// global scope ke pollution se problem hoti hai kayi baar, toh woh (variable ke) pollution ko hataane ke liye we use iife

( ()=> {
    console.log("DB 2 CONNECTED");
})(); // unnamed arrow functions work as iife too

( (name)=> {
    console.log(`DB 2 CONNECTED ${name}`);
})("lene"); // treat it as a normal function and you can pass variables too, use string interpolation whtvr