// singleton: when created using constructor ex. Object.create()

// object literal

const mySym = Symbol("key1")

const JsUser = { // creating object
    name: "Priyanshu",
    "full name": "Priyanshu Yadav",
    [mySym]: "mykey1",
    age: 22, 
    location: "Bengaluru",
    email: "priyanshuyadav@tellius.com",
    profile: "Quality Assurance Engineer",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"] // can take object as value
}

// accessing objects 
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// changing the value of an object
JsUser.email = "priyanshuyadav1@tellius.in"

// Object.freeze(JsUser) // restrics to make changes in object
JsUser.email = "yadavpriyanshu@tellius.in"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Good Morning`);
}
JsUser.greetingTwo = function() {
    console.log(`Good Morning ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());