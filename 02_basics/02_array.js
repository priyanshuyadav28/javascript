const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// console.log(marvel_heroes);
// console.log(dc_heroes);

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]); // not a good way

const allHeroes = marvel_heroes.concat(dc_heroes) // concat: returns a new array without modifying any existing arrays and merges the two array

// console.log(allHeroes);

// spread operator to concat two or more array 
const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// console.log(anotherArray);

const real_another_array = anotherArray.flat(Infinity)

// console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

console.log(Array.from({name: "hitesh"})) // interesting: will print empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



