// for in loop! (this one can be used on objects too)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`); // myObject[key] is for values okk
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key); // 0 1 2 3 4 // because array's keys are always fixed nums from 0
    //console.log(programming[key]); // js rb py java cpp
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);  // THIS IS NOT ITERABLE USING FOR IN, LOOPING IT WONT WORK LIKE THAT
// }