const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "hitesh"
//     console.log(this.username); // cannot use this in function
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username)
// }

const chai = () => {
    let username = "hitesh"
    console.log(this.username)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})

// console.log(addTwo(2, 3));

const myArray = [2, 5, 3, 7, 8]

myArray.forEach(function() {})

// myArray.forEach(() => {}) // {} needs to return

// myArray.forEach(() => ()) no need to put return keyword

