// ES6
// class -> syntactical sugar

class User {
    constructor(username, email, password) {
        this.username = username, 
        this.email = email, 
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc@29`
    }
}

const chai = new User("pria", "pri@gmail.com", "134")

console.log(chai);
console.log(chai.encryptPassword());

// Behind the scene