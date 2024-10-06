// personal fave till now omg

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}) // same implicit, explicit rules for arrow fns


//chaining: using multiple methods with a const :)
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1) // works for operations
                .filter( (num) => num >= 40) // works for conditionals iykyk

console.log(newNums); // [    41, 51,  61, 71,    81, 91, 101  ]