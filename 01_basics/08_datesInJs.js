// Dates in js

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString()); //Sat Aug 24 2024 15:51:57 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sat Aug 24 2024
// console.log(myDate.toLocaleString());//23/1/2023, 12:00:00 am
// console.log(myDate.toLocaleDateString()); // 24/8/2024

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // month starting from 0

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate2 = new Date(2024, 7, 24, 15, 59)
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 = new Date("2024-01-24") // YY-MM-DD month starts from 1
// console.log(myCreatedDate3);

let myCreatedDate3 = new Date("01-14-2024") // DD-MM-YY month starts from 1
// console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());

// converting into seconds
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`);

const customizedNewDate = newDate.toLocaleString('defalut', {
    weekday: "long",
})