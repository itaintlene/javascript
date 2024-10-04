// this keyword: this. refers to the current context!

const currentContext = {
    user: "harleen",
    age: 21,
    welcomeMessage: function(){
        console.log(`${this.user}, welcome to our page!`); // here this refers to the user in the current context
    }
}
currentContext.welcomeMessage() // harleen, welcome to our page!
currentContext.user = "goldilocks"
currentContext.welcomeMessage() // goldilocks, welcome to our page! // we changed the 'current context'
 
// console.log(this); // {} // but in inspect/browser it'll return window object. which is why we can access at window objects

// if you try accessing this with a variable inside a function it'll return undefined.

// function cafe(){
//     let username = "harleen"
//     console.log(this.username); 
// }

// cafe() // undefined

// const cafe = function () {
//     let username = "harleen"
//     console.log(this.username); // this was function expression remember?
// }

// arrow function: basically just remove function keyword and add an arrow after parenthesis

const cafe = () => {
    let user = "lene"
}

// basic/explicit arrow function: ()=>{}
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));

//implicit return: ()=>(): basically you dont put curly braces and write evrrything in one line yuh
const addTwoo = (num1, num2) => num1 + num2
// const addTwoo = (num1, num2) => (num1 + num2) // it can also be wrapped in parenthesis, just not curly braces
// curly braces ke sath function mein return use hota hai in js !!
console.log(addTwo(3,4));

const abObject = () => ({username:"itaintlene"}) // always wrap object in parenthesis for implicit arrow func
console.log(abObject());
// only use this in arrow functions when you need global context not local, otherwise use function declaration