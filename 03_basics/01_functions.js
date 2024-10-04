// three ways to create a func: declaration, expression, arrow function

// function declaration

function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("L");
    console.log("E");
    console.log("E");
    console.log("N");
}

sayMyName // function reference
sayMyName() // to execute the function

// function addTwoNums(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNums(num1, num2){
    let result=num1 + num2;
    return result;
    // console.log(result); // nothing gets printed after result
}

const result = addTwoNums(4, 5)
console.log("result: ", result); // result: 9

// string interpolation in function declaration

// function userLoggedIn(username){
//     return `${username} just logged in`;
// }

// console.log(userLoggedIn("itaintlene")); // itaintlene just logged in
// console.log(userLoggedIn()); // undefined just logged in

// to avoid getting undefined we can give default values

function userLoggedIn(username="sam"){
    return `${username} just logged in`;
}


function calculateCartPrice(val1, val2, ...num1){ // this ... is called spread/rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // [500, 2000] // bc val1=200, val2=400

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}

handleObject(user); // passing object as parameter

handleObject({
    username: "sam",
    price: 399
}) // to directly pass an object into a function 
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // to pass an array 
console.log(returnSecondValue([200, 400, 500, 1000])); // to directly pass array 