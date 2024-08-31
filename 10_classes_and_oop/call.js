function setUserName(username) {
    // complex DB call
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    // setUserName(username) // gets called but do not performs the task only gets reference when doing inside a function becuase when the function is called and completes the task it gets removed from the stack so its context is removed and when the call return again to this (createuser) function call there is no context of setUserName

    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmial.com", "123") // this wont set the username as chai

console.log(chai);