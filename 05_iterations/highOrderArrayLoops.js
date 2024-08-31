// for of loop 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);    
// }

const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(greet);
// }

// Maps -> object, stores data in key value pair 
// remembers the order of the values which is not remembered in object
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India") // will remember one key only if it is declared earlier will overwrite it

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, " : ", value);
// }

const myObj = {
    'game1': "NFS",
    'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, value);
// } // will not be able to iterate on object in this way

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// for in loop

const myObject = {
    js: "javascript", 
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     console.log(key, "-> ", myObject[key]);
// }

const programming = ["js", "ruby", "python", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

const mp = new Map()

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in mp) {
//     console.log(key);
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languagFileName: "js"
    },
    {
        languageName: "java",
        languagFileName: "java"
    },
    {
        languageName: "python",
        languagFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})