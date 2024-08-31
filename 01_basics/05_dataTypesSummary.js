// categories data types are divided in: 
    // on the basis of how data is stored in memory and how to access it
    // 1. Primitive Data types (Call by value)
        // 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

        // JS is a DYNAMICALLY TYPED LANGUAGE
        const score = 100 // type of variable(bool, num, string) is determined at runtime and can change later

        const socreValue = 100.3
        const isLoggedIn = false
        const outsideTemp = null

        let userEmail; // undefined
        
        const id = Symbol('123')
        const anotherId = Symbol('123')
        // even though the values will be same but they will be unique and not be equal

        // console.log(id ===  anotherId);

        const bigNumber = 34394394343942939n // bigint

    // 2. Reference (Non primitive) -> (call by Reference)
        // Arrays, Object, Functions

    const heroes = ["shaktiman", "naagraj", "doga"]

    let myObj = {
        name: "hitesh",
        age: 22
    }

    const myFunc = function () {
        console.log("Hello i am a function");
    }

    // console.log(typeof bigNumber);

    // console.log(typeof outsideTemp); // object, since null is an object

    // console.log(typeof socreValue); // number 

    // console.log(typeof heroes);
    // console.log(typeof myObj);

    // console.log(typeof myFunc); 
    
    // console.log(typeof anotherId); 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// stack and Heap memory in javascript

// stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anotherName = myYoutubename // copy of myYoutubename line56
anotherName = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
    email: "one@google.com", 
    upi: "upiid@ybl"
}

let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "hitesh@google.com" // changing in userTwo will make changes in userOne as well since it is pass by reference

console.log(userOne.email);
console.log(userTwo.email);




