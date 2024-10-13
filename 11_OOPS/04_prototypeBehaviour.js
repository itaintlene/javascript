// by default, when you access a property or method on an object, javaScript first looks for it in the object 
// itself. if it's not found, it traverses up the prototype chain to the object's prototype and continues searching
// until it reaches the top (null).
// this is called prototypal chaining. this gives access to this, new, classes, constructor everything basically.

const grandparent = { hasHouse: true };
const parent = { hasCar: true };
const child = { hasBike: true };

parent.__proto__ = grandparent;  // parent inherits from grandparent
child.__proto__ = parent;        // child inherits from parent

console.log(child.hasBike);      // true (own property)
console.log(child.hasCar);       // true (inherited from parent)
console.log(child.hasHouse);     // true (inherited from grandparent)

// also everything in javascript is an object from arrays to strings to even functions. look:
function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power); // we can use . methods w functions too? woah
console.log(multipleBy5.prototype); // returns an empty object, {}, jo by default context set hot hai, uss method ka this prototype hai