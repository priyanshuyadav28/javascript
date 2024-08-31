// singleton object
// const tinderUser = new Object() // created using constructor = singleton object

const tinderUser = {} // non-singleton object

tinderUser.id = "abc123"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    } 
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {...obj1, ...obj2}
const obj3 = Object.assign({}, obj1, obj2) // if not used {} all the values will be copied in obj1 or the first object and it will be reaturned

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // returns an array of all the keys of the object tinderUser

// console.log(Object.values(tinderUser)); // returns an array of all the values of the object tinderUser

// console.log(Object.entries(tinderUser));

// ++++++++++ Object destructring and JSON API +++++++

const course = {
    coursename: "Js in hindi", 
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // general way to acces obj elements


// another ways to access obj elements/properties
const {courseInstructor} = course // destructuring
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);


// JSON 

// {
//     "name": "hitesh", 
//     "coursename": "js in hindi", 
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]




