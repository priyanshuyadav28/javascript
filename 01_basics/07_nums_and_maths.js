// Numbers in js
const score = 400 // js automatically detecting score shoulud be a number type

// console.log(score);

const balance = new Number(100) // explicit declaration

// console.log(balance);

// console.log(balance.toString); // converts the number into string
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

let otherNumber = 23.89732
// console.log(otherNumber.toPrecision());

otherNumber = 123.89732
// console.log(otherNumber.toPrecision(4));

const hundreads = 1000000
// console.log(hundreads.toLocaleString('en-IN'));

// ++++++++++++++++ Maths ++++++++++++++++++++++++++++
// console.log(Math); // object

// console.log(Math.abs(-4)); // changes the negative value in positive

// console.log(Math.round(4.6)) // rounds of 4.3 to 4 and 4.5 to 5 etc. 

// to choose the upper value or the lower value in round we have ceil and floor
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.9));

// console.log(Math.min(4, 3, 7, 1, 2, -1, 3, 8));
// console.log(Math.max(4, 3, 7, 1, 2, -1, 3, 8));

// ---------> Math.random() 
// console.log(Math.random()); // generates random number between 0 and 1

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10)) + 1);

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

function randNumGenerator() {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumber
}
