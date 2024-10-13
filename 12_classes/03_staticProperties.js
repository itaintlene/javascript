// a static method means you can call the method directly on the class, but not on an object created from the class

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const lene = new User("lene")
// console.log(lene.createId()) // wont recognise createId as a function anymore as lene is an instance of User

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); // another error
console.log(Teacher.createId()); // inheritance allows Teacher to call User's static method as if it were its own
