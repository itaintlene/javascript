// for each loop!

const coding = ["js", "ruby", "java", "python", "cpp"]

// for each is a built in method with arrays.
// it asks for a callback function as parameter 
// call back functions dont have a name instead they need name for values inside the array, eg. val, item, etc

coding.forEach( function (val){
    // console.log(val);
} )

coding.forEach( (item) => {
    // console.log(item); // same happens using arrow function, no name, only name for parameters
} )


// using reference of a function

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe) // here we didnt execute the function, look there is no () after name of func

coding.forEach( (item, index, arr)=> { // for each has access to various params: ((item), index, array)
    // console.log(item, index, arr);
} )


// it is very common that you have to iterate over objects inside an array where foreach helps a lot:

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item.languageName); // you are accessing each object (all are called item) and inside that object 
    // using the .langaugeName hehe
} )

