class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // this super keyword is same was call keyword + this keyword from before
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const school = new Teacher("anand", "anand@teacher.com", "123")  // use new keyword to avoid error in context
school.logMe()

const university = new User("rajan")
university.logMe()

console.log(school instanceof User);