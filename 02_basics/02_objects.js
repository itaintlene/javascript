// objects can be declared as literals and constructors
// singleton: literals ki tarah declare krne pe nhi banta hai.

// object literals:

const mySym = Symbol("Key") // accessing symbol thru objects can be an important interview question

const JsUser = {
    name:"Harleen", // the compiler detects the datatype of keys on its own, here itll know that "name" is a string
    "full name": "Harleen Kaur",
    [mySym] : myKey, // for accessing declared symbols, use square brackets :)
    age: 21,
    location: "Bangalore",
    email: "lene@mail.com",
    isLoggedIn: false,
    lastLoggedin: ["monday", "thursday"], // leaving a comm at end of last pair is called trailing
}

// console.log(JsUser.email) // you can access like this but it wont work on quoted keys
// console.log(JsUser["email"]); // can also be accessed like this
// console.log(JsUser["full name"]); // quoted keys can ONLY be accessed this way
// console.log(JsUser[mySym]); // no need to use quotes when accessing symbol

JsUser.email = "itslene@mail.com" // to change the value of a single key in an object
// Object.freeze(JsUser) // to freeze an object so nobody can change its values anymore
// JsUser.email = "itslene@gmail.com" // now it wont change anything in output bc object is frozen
// console.log(JsUser.email); // itslene@mail.com
// delete JsUser.age; // to delete a key value pair

JsUser.greeting = function(){
    console.log("hi pookies");
} //declaring a function in object

JsUser.greetingTwo = function(){
    console.log(`hi pookies, i'm ${this.name}`); // 'this' method is used to access the object :)
}

// console.log(JsUser.greeting); // it'll return anonymous function
// console.log(JsUser.greeting()); // hi pookies /n undefined
// console.log(JsUser.greetingTwo()); // hi pookies, i'm harleen /n undefined 



// ***** prooperty value shorthand *****

function makeUser(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
}
let user = makeUser("Harleen", 21);
console.log(user.name);



// ***** in operator using for loop *****

for (let key in user) {
    // keys
    console.log( key );  // name, age
    // values for the keys
    console.log( user[key] ); // Harleen, 21
  }