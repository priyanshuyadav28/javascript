// array declaration
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "nagraaj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);
// console.log(myArr[1]);

// array methods
// myArr.push(6)
// myArr.push(9)

// myArr.pop() // removes the last value from the array

myArr.unshift(0) // pushes an element at the very begining
myArr.shift() // removes the element at the very begining

// console.log(myArr.includes(9)); // false as 9 is not in the array 

// console.log(myArr.indexOf(2)); // -1 as 9 is not present in array

// const newArr = myArr.join() // converts the array into string

// console.log(myArr); 
// console.log(newArr); 

// slice and splice methods

console.log("A -> ", myArr);

const myn1 = myArr.slice(1, 3) //Returns a copy of a section of an array 3 is exclusive

console.log(myn1);
console.log("B -> ", myArr);

const myn2 = myArr.splice(1, 3)  //Removes a section of elements from an array 3 is inclusive

console.log("C -> ",myArr);
console.log(myn2);
