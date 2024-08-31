// Immediately invoked function expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB Connected`);
})(); // ; is required to execute multiple iife

((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})('hitesh')