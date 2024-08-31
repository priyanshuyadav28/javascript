const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI); 
// Math.PI = 5
// console.log(Math.PI); // value of pi wont be changed (in this case) as it is a universal constant 

// const mynewObject = Object.create(null)

const chai = {
    name: "gingerchai", 
    price: 250, 
    isAvailable: true,

    orderChai: function() {
        console.log("chai nahi bani");
    }
}

// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') {
        console.log(`${key}: ${value}`);
    }
    
}
