// so to understand the use of call method, lets go back to concept of global excution call
// basically when we call a function inside a function, the this keyword doesnt understand the last context
// instead it goes onto the globacl excecution context


function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)                // here we had to use .call method to explicitly call SetUsername
    // and hold the reference of the function 
    // and using this keyword will make sure that the 'username' refers to the current context of right function.
    // SetUsername(username) // this only gave reference to javascript
   
    this.email = email
    this.password = password
}

const hola = new createUser("espanol", "espanol@fb.com", "123")
console.log(hola);