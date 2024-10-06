// for of loop!
// used to mostly iterate over the arrays

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num); // it'll iterat eover the whole array 
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps: unique key-value pairs, unlike object, keys of any datatype are allowed
// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map); // won't print the second set of in, india

for (const [key, value] of map) { // destructuring using []
    // console.log(key, 'is for', value); 
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);  // throws error because objects are not iterable using forOf
}