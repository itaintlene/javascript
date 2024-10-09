// A Promise is an OBJECT that represents the eventual completion (or failure) of an asynchronous operation and 
// its resulting value. It can be in one of three states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise has a value.
// Rejected: The operation failed, and the promise has a reason (error).

// mostly theyre 'consumed' but we should look into 'creation' to understand better

// when there weren't promises and asyn/await, js had libraries for async prog: like bluebird and Q 

const promiseOne = new Promise(function(resolve, reject){ // creating a promise, it will either resolve (fulfill), or reject
    // a promise to do an async task
    // could be DB calls, cryptography, network related
    setTimeout(function(){
        // console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){ // .then is directly related to resolve parameter
    // console.log("Promise consumed");
})

// to do these tasks ^ in one go we can:

new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("promise consumed again");
})

// passing data in form of object/array using resolve function in setTimeOut:

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({username:"itaintlene", email: "lene@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})

// now handling rejection, we use catch()

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "omgharleen", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){ // double then to access the value inside the main object, username in this case
    console.log(username);
}).catch((err)=>{ // now if we get an error when promise is rejected, catch logs error
    console.log(err);
}).finally(()=>{"The promise is either resolved or rejected"}) // finally runs irrespective of then or catch

// now this above code can also be written using async/await:

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromise() {
    try{
        const response=await promiseFive;
        console.log(response);
    } catch(error){
        console.log(error);
    }
}
consumePromise()

// fetch method that runs directly on APIs, it returns promise when response is available

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') 
//         const data = await response.json() // parsing/converting to json ALSO takes lotta time
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()

// only errors that fetch recognises are NETWORK ERRORS. not http or server side ones (like 404, 200)

// now we can also run above program in easier way, without having to use async/await:

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {               // second then to handle data from first then
    console.log(data);
})                              // to handle error cases
.catch((error) => console.log(error))

//  BUUUUUUUUUUUT WHY IS THE FETCH() METHOD RUNNING BEFORE REST OF THE CODE???
// sooooooooo lets go to memory stacks bbg- basicallyyyy, fetch has its own priority queue (OMG)
// therefore every other request runs AFTER fetch.\

// also so like fetch has two features on the inside- one is for memory and another is in web/node
// so first memory one is fired and it empties up data memory for fetch in two funcs: onFulfilled, onRejection
// now depending upon whether the network request was successful (network, not http or server), either response
// is saved in memory which ultimately is transferred to the main response where fetch was working at in global
// memory.
// TADA!