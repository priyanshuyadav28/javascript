// let myName = "hitesh"
// let myChannel = "   chai   "

// console.log(myName.length);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer", 
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function() {
    console.log("Hitesh is Present in all Objects");
}

// heroPower.hitesh()

Array.prototype.heyHitesh = function () {
    console.log("Hey Hitesh in Array");
}
// heroPower.hitesh()

myHeroes.heyHitesh()
myHeroes.hitesh()
// heroPower.heyHitesh()


// inheritance 
const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssingment: 'js assingment', 
    fullTime: true,

    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

// modern syntax for inheritance 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode    "


String.prototype.truelength = function() {
    console.log(this);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUserName.truelength()