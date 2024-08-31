// function addTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }


function addTwoNum(num1, num2) {
    let result = num1 + num2
    return result
}

const result = addTwoNum(3, 3)

// console.log("Result ", result); // undefined: as nothing is returned in the function so cannot store it into a variable

// console.log("Result: ", result); 

function loginUserMessage(username) {
    return `${username} just logged in`
}

const message = loginUserMessage("Priyanshu")
const message2 = loginUserMessage() 

// console.log(message2) // prints undefined as nothing is passed in the parameter of the function 

function loginUserMessage2(username = "sam") {
    return `${username} just logged in`
}

// console.log(loginUserMessage2("hitesh"));

// REST OPERATOR in js

function calculateCartPrice(...num1) {
    return num1 // returns an array of all the passed argument from the function call
}

function calculateCartPrice2(val1, val2, ...num1) {
    return num1 
}

console.log(calculateCartPrice(200, 400, 2000));
console.log(calculateCartPrice2(200, 400, 2000, 1500, 3600, 1200));

// handling object with function in js
const user = {
    username: "hitesh99", 
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam", 
    price: 299
})

const myNewArr = [200, 400, 100, 600]

function returnSecondValue (getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 400, 100, 600]));