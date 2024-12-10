let score = 33
score = "33"
score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

// converting from one datatype to other
let valueInNumber = Number(score) // conversion of string datatype to number

// score with value 33abc will not be converted into number and it's value will be NaN (Not a Number)

// console.log(typeof valueInNumber);
// console.log("value of score in number: ", valueInNumber);

let valueOfNumberInString = String(valueInNumber) // converting number into string

// console.log(typeof valueOfNumberInString);

score = null
let scoreToNumber = Number(score)

//console.log(typeof scoreToNumber); // will be converted into number

// console.log("value of scoretoNumber: ", scoreToNumber); // value is 0

score = undefined
scoreToNumber = Number(score)

// console.log(typeof scoreToNumber);
// console.log("Value of scoreToNumber when score is undefined: ", scoreToNumber);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let isLoggedInBool = Boolean(isLoggedIn)

// console.log(typeof isLoggedInBool);
// console.log(isLoggedInBool);

// 1 => true; 0 => false
// "" => false; "ladfda" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//************ Operations ************************/

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // power
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2; 

//console.log(str3);

// if string is first all the values will be converted into string if number is first they will be added and the string value will be appended in it.
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true);

let x = 3
let y = x++

console.log(`x: ${x}, y:${y}`);

