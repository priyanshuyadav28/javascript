// object literal
const user = {
    "username": "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log(this.username);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date() // new is a constructor function which allows us to create multiple instances from a single object literal (object)

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

// const userOne = User("hitesh", 12, true)
// console.log(userOne);
// console.log(userOne.username);

// const userTwo = User("chaiaurcode", 11, false)
// console.log(userOne); // user two will override the values of userOne as we have not used new and the userTwo created do not has its own context

const userOne = new User("hitesh", 12, true)
const userTwo = new User("chaiAurCode", 11, true)

console.log(userOne);
console.log(userTwo);

