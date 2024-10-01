"use-script";

const accountID = '43287'
let accountName = "LeenQueen"
var accountEmail = 'yourstruly@mail.com' // prefer not to use var, its from before ES5- doesnt knows 'scope' smh
accountLocation = "Patiala" // js is safe enough like python to not have to declare var or const if u dont use 
// use-script :)) not recommended
let accountPosition; // console.log will print it as undefined as no value was declared

// accountID = '53735' // not allowed
accountName = "itaintlene"
accountEmail = 'lene@mail.com' // values shall be redefinedddd

//to print on console we use console.log but to print multiple key-values pairs we can use console-table!

console.log(accountID);
console.table([accountID, accountName, accountEmail, accountLocation, accountPosition]);