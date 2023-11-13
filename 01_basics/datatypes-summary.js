// Two types of Data types in js

//      1. Primitive / Value Types
//          String, Number, Boolean, null, undefined, Symbol, BigInt

// javascript is a dynamic language that means we don't need to specify the type of variable while createing the variable because it is automatically determined by the value assigned to it. example 

// let name = "Priyanshu Yadav"
// naam = "Rao Priyanshu Yadav"

// console.log(name);
// console.log(typeof name);
// console.log(naam);
// console.log(typeof naam);

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false because every symbol is unique and it is used to create unique identifiers 


//      2. Reference Types (Non Primitive)
//          Objects, Array, Functions

// referece types: Array
const heroes = ["shaktiman", "naagraj", "doga"];

// objects 
let myObj = {
    naam: "Priyanshu Yadav",
    age: 22, 
    isMarried: false,
    salary: 3600000, 
    role: "Software Engineer"
}

console.log(myObj);
console.log(typeof myObj);
console.log(myObj.naam);


// functions 
const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Types of Memory in JS
    // 1. Stack Memory : (Primitive Types)
    // 2. Heap Memory : (Reference Types / Non Primitive Types)

let myYoutubeName = "priyanshuyadavdotcom";

let anotherName = myYoutubeName;
anotherName = "yadavpriyanshu";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@paloalto.com", 
    upi: "priyanshu@ybl",

}

let userTwo = userOne;

userTwo.email = "changedViaUserTwo"

console.log(userOne.email);
console.log(userTwo.email);

