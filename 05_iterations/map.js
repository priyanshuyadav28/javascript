// map method

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const addTen = myNums.map( (num) => num + 10)

// console.log(addTen);
// console.log(myNums); // do not changes the originar array

const newNums = myNums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 40)

console.log(newNums);


