// so basically javascript is inherently a prototype-based language.
// classes were introduced to js in ES6 for the sake of programmers who came from class-based lang backgrounds
// but under-the-hood it is actually more of object oriented programming

// oop- object oriented programming
// object is just built-in methods and properties(vars, consts etc) // like to toLowerCase, Date, Math etc

// why oops: so basically before javscript introduced objects, the codes we really messy and confusing (speghetti)
// it was hard to reuse and maintain them, therefore object oriented programming was introduced to js

// parts of OOPs: object literals, constructor function, prototype, classes, new keyword, this keyword

// four pillars of OOPs: abstraction, inheritance, encapsulation, polymorphism:

// ABSTRACTION: grouping related data (properties) and behaviors (methods) together in objects. this bundling helps 
// in hiding implementation details and exposing only necessary functionalities through public methods.
// focuses on what an object does, rather than how it does it.
// fetch()

// ENCAPSULATION: bundling of data (properties) & methods (functions) that operate on the data into a single class.
// restricts direct access to some of object’s components, to protect the integrity of the object’s internal state.
// reduces the chance of unintended interference in your code.
// achieved by using private variables and getter/setter methods.
// putting a wrapper around object 

// INHERITANCE: allows one class (child) to inherit the properties and methods of another class (parent).
// promotes code reuse and hierarchical class relationships.
// reduce redundancy by reusing existing code. to establish a relationship between classes in a hierarchical manner.

// POLYMORPHISM: allows objects of different types to be treated as objects of a common base type.
// enables one interface to be used for different underlying data types, allowing functions or methods to operate 
// on different types of objects without knowing their specific types in advance.
// enables flexibility and reuse of code by allowing the same operation to behave differently.
// one method does multiple tasks