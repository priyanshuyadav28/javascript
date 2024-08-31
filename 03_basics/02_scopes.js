//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

}

// console.log(a);
// console.log(b);
// console.log(c);

// ++++++++++++++++++++ NESTED FUNCTION ++++++++++++++

function one() {
    const username = "hitesh"
    
    function two() {
        const website = "youtube"
        console.log(username); // can acces the variable of parent function as for two one is global
    }
    console.log(website); // error -> as website has the scope in function two only and cannot be accessed from one

    two()

}

// one()

if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // Throws error
}

// console.log(username); // will throw error


// ++++++++++++++  interesting +++++++++++++++++++

// console.log(addone(5)); // will print 6 even if it is called before the function declaration

function addone(num) {
    return num + 1    
}

// addone(5) // wont print anything

// addTwo(8) // will throw error as the function is stored in a variable here which is addTwo

const addTwo = function(num) {
    return num + 2
}

// addTwo(5) // will throw no error and will print nothing since no console.log() is used