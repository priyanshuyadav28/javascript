// const coding = ["js", "ruby", "python", "cpp"]

// demerit of forEach loop 

// coding.forEach((item) => {
//     console.log(item);
// }) // this would work fine while only iterating on the array 

// if we try to store the value returned by for each loop it will not be possible as forEach loop do not returns anything

// const value = coding.forEach((item) => {
//     console.log(item + "s"); // would work fine
// })

// console.log(value); // will return undefined
// that means we cannot store items from the array in another variable using forEach loop 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => num > 5)

const newNums2 = myNums.filter( (num) => { // when using {curly} bracket always use return keyword 
    return num > 5 
})

// console.log(newNums);
// console.log(myNums); // do not modifies the orignal array, filters and stores the value in the new array (newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((book) => book.genre === "History")

const userBooks2 = books.filter( (book) => book.publish >= 2000)

const userBooks3 = books.filter((book) => { return book.publish >= 1995  && book.genre === "History"})

console.log(userBooks3);