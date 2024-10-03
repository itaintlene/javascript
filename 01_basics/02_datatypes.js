// alert(3+3) // wont do shit bc we are using node js not browser, this will run on inspect bars in browser

let name = "Harleen"
let age = 21
let IsEmployed = true

// different datatypes in JS:
// String -> ""
// Number -> 2^53
// BigInt 
// Boolean -> true/false
// Null -> standalone value, represents “nothing”, “empty” or “value unknown”
// Undefined -> unassigned values wale variables
// Symbol -> unique (used in react, figma etc)

// arrays, functions and objects (it is non primitive/reference datatype! and all come under object datatype)

// typeof is used to check the datatype of a var/const

console.log(typeof "lene") // string
console.log(typeof null) // null falls under object datatype

// also javascript is DYNAMICALLY typed aka you dont have to declared datatype of variables on creation, its 
// determined at the runtime :))

// and and primitive datatypes' memory is in stored in stack and non primitive in heap
// so basically when you make changes in a variable that refers to another variable, original variable doesnt face
// changes. because its just a copy to the reference.

let userOne = "harleenbest.13"
let userTwo = userOne
userTwo = "xharleeneydx"

console.log(userTwo) // xharleeneydx
console.log(userOne) // harleenbest.13 aka no change

// on the other hand, in reference/non-primitive data types like object- if you make changes after connecting two
// objects? changes will be reflected in both!

let firstYt = {
    name: "tam kaur",
    age: 24
}

let secondYt = firstYt

secondYt.age = 25

console.log(secondYt.age); // 25
console.log(firstYt.age); // 25 SEE IT CHANGES IN ORIGINAL TOO!

