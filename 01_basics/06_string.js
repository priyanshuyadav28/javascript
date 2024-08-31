const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`My name is ${name}, my repo count is ${repoCount}`);

const gameName = new String('hiteshhc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('c'));

const newGameName = new String('hitesh-hc')

const newString = newGameName.substring(0, 9) // returns the character of string starting from 0 to less than 9 (exclusive) cannot take negative value if given will not obey it and start automatically from 0

// console.log(newString);

const anotherString = newGameName.slice(-8, 4) // takes out the 0 to 3 (exclusive) elements from the original string & do not modifies the original string only cuts it and stores in another variable. can take the negative values as the starting index

// console.log(anotherString);

const newStringOne = "  hitesh    "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('priyanshu'));

console.log(newGameName.split('-'));