// object singleton/constuctor

const tinderUser = new Object(); // singleton object
//const tinderUser = {}; // non-singleton object

tinderUser.username = "itaintlene";
tinderUser.age = 21;
tinderUser.email = "lene@mail.com";

console.log(tinderUser);

const regLiteral = {
    email:"gugugaga@gmail.com",
    fullName:{                          // object inside object :)
        firstName:"Harleen",
        lastName:"Kaur"
    }
}

console.log(regLiteral.fullName.lastName);

// merging two objects

const obj1 = {
    "1":"a",
    "2":"b",
}
const obj2 = {
    "3":"a",
    "4":"b",
}

// const obj3 = {obj1, obj2} // this won't merge bc it'll be like objects inside an object
// const obj3 = Object.assign({}, obj1, obj2) // also not commonly used

const obj3 = {...obj1, ...obj2} // these dots are spread operators
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// when there's data from backend it comes as array of objects

const userss = [
    {
        id : "a",
        email : "a@mail.com"
    },
    {
        id : "b",
        email : "b@mail.com"        
    },
    {
        id : "c",
        email : "c@mail.com"        
    },
    {
        id : "d",
        email : "d@mail.com"        
    }
]

// console.log(typeof userss[0].id); // a


// to access all keys or values of an object (to apply loops etc.)

// console.log(tinderUser); // { username: 'itaintlene', age: 21, email: 'lene@mail.com' }
// console.log(Object.keys(tinderUser)); // [ 'username', 'age', 'email' ]
// console.log(Object.values(tinderUser)); // [ 'itaintlene', 21, 'lene@mail.com' ]

// before using loop, somer\times we need to check if a property even exists or not
// console.log(tinderUser.hasOwnProperty('username')); // true

// also also also  Objects if copied into another object, they leave reference. aka they point to same variable
// so if you make changes in copy of object's key/value whtv, it'll reflected in original object as well :)


// ******** object destructuring ! ********

const course = {
    courseInstuctor: "hitesh",
    coursename: "js in hindi",
    price: "free",
}

const {courseInstuctor} = course // which lets you access a key without using . method
const {coursename: name} = course // aka now to access the key coursename, you can just use name 
console.log(courseInstuctor); // hitesh
console.log(name); // js in hindi

// this same concept is used in react when you use props, to destructure methods to not write long prop. method
// so curly braces stucture ==== destructuring !!