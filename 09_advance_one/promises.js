const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // db calls, cryptography, network calls
    
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

// consuming promise
// then => resolve
promiseOne.then(() => {
    console.log("Promise Consumed");
}) 


// another way to create and consume promise
new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Async Task 2");
        res() // mandatory to resolve and use .then()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "chai", email:"chai@example.com"})
    }, 1000);
})
promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout( () => {
        let error = true
        
        if (!error) {
            resolve({username: "hitesh", password:"123"})
        } else {
            reject('Error: Something went wrong')
        }
    } , 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Finally The Promise is either resolved or rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true

        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('Error: Js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}   

// consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()

        console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))