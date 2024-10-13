const user = {
    username:"itaintlene",      // all these are properties // properties in array could be .length, .map etc
    loginCount:8,
    isLoggedIn:true,

    getUserDetails: function(){
        // console.log("got user deets.");
    }
}

// console.log(user["username"]);
// console.log(user.getUserDetails);

// this keyword is used for current context. in execution context of function scopes, it gets confusing for node to tell
// what variable we are referring to, therefore we have to use this keyword to tell compiler what are we talking ab

const userTwo = {
    username: "omgharleen",
    loginCount: 16,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username: ${this.username}`); // if we dont put this here, itll throw an undefined error
        console.log(this);      // this on node will just output the whole object userTwo aka the current context
    }
}

console.log(this); // {} // 
// this on browser will give access to many many methods under window
