const score = 400;
console.log(score); // 400

const balance = new Number(100)
console.log(balance) // [Number:400]

console.log(balance.toString); // 100 of type string
console.log(balance.toFixed(2)); // 100.00

const Num = 123.243
console.log(Num.toPrecision(4)) // 123.2

// .MAX_VALUE, .MIN_VALUE etc

// **************MATH*****************

console.log(Math); // check out all methods available in inspect
console.log(Math.abs(-1)); // absolute value aka negative turns positive
console.log(Math.round(8.99)); // rounds of to closest value 9
console.log(Math.ceil(9.77)); // ceiling aka rounds to next big value 10
console.log(Math.floor(8.71)); // floor aka rounds to last value 8


// random numbers for games and tricks: Math.random()

console.log(Math.random()); // gives numbers between 0 and 1
console.log((Math.random()*10) + 1); // now it'll give random numbers bigger than 1
console.log(Math.floor(Math.random()*10)+1); // yay now no decimals either, just integers from 1 to 9

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(min-max+1)) + min); // now it'll generate number between min and max values