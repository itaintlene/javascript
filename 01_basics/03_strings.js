const user = "itaintlene";
const score = 80;

// console.log(user + score + "(ay!)"); (NOT RECOMMENDED, VERY OUTDATED WAY)

// use string interpolation instead:
console.log(`hellooo! my github username is ${user} and my leetcode score is ${score}`);


//to use methods on strings, declare string as an object like:
const instagramId = new String('omgharleen') //run this on inspect<console, it lets you access letters as key-values
console.log(instagramId[3]); // h

// you can add methods to print different things :)

console.log(instagramId.toUpperCase) // converts to uppercase
console.log(instagramId.length); // prints length of the value
console.log(instagramId.charAt(2)); // checks what character lies at what position
console.log(instagramId.indexOf('e')); // checks what index a character lies on

//substring, slicing, trim, replace

const newString = instagramId.substring(0, 4) 
console.log(newString); // omg

const anotherString = instagramId.slice(0,-1) // it takes negative values as wellll
console.log(anotherString); // no

const StringOne = "   lene  "; 
console.log(StringOne);
console.log(StringOne.trim()); // trims down space

const url = "https://w3schools/javascript/string%20methods" // space gets converted to %20 in urls to replace it:
console.log(url.replace("%20", "-")); // https://w3schools/javascript/string-methods

// to ckeck if a keyword exists in a string
console.log(url.includes("javascript")); // returns true

