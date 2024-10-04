// so as yk "var" method was not working as local scope unfortunately, therefore always use let or const

{} // is basically a local scope, whether its in obj, func, if-else, loop whATVER

let a = 33

if (true){
    let a =3
    const b = 8
    // var c = 6 // dont use mf
    // c = 6 // again dont use
    console.log("Inner: ", a);   // Inner: 3
}

console.log(a); // 33

// scope in coding terminal v/s in websites/inspect is totally different

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error
}

// console.log(username); // error

// ******************************************

// function hoisting, you can call declarations before they are defined in the code

console.log(addone(5))

function addone(num){
    return num + 1
}


// function expression: they can't be called before definition. not hoisted.
addTwo(5)

const addTwo = function(num){
    return num + 2
}
