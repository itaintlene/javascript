// remember new keyword from date and promise chapters? 'new Promise', ' new Date'
// this new keyword is actually constructor function
// it is used to create a new executional context so that it doesnt interfere with the other contexts 

function User(username, isloggedin, logincount){
    // username = username;     // it is a common practice to use same variable and parameter names but its messy
    this.username = username;  // therefore we use this keyword to stay in current context// variable = to be passed
    this.logincount = logincount;
    this.isloggedin = isloggedin

    return this;
}

const userOne = User('lene.archive', false, 10)
console.log(userOne); //

// buuut if we decalre another const as user again, it'll rewrite the values of userOne
const userTwo = User('btsxbiebs', false, 129);
console.log(userOne); // now userOne has also become same as userTwo (wtf?)

// to avoid this overwriting we just have to use 'new' keyword. it gives a new context to each variable!

const userThree = new User("kunal", 12, true) // now the unnecessary mess from 'return this' wont be there either
const userFour = new User("michelle", 11, false) // wont overwrite anything either yayayya

// internal process:
// step 1: we created a new object
// step 2: constructor function is called due to new keyword (packs up all arguments)
// step 3: all arguments etc into this keyword
// step 4: you get everything in the function tada!

console.log(userFour.constructor); // [Function: User] //constructor is basically a refernec about the object itself

// READ ABOUT INSTANCEOF METHOD
// used to check whether an object is an instance of a particular constructor or class. It returns true if the 
// object is an instance of the specified constructor, otherwise, it returns false.