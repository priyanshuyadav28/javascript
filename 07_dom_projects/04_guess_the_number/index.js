const randomNumber = Math.floor(Math.random() * 100 + 1);
let previousAttemts = []
let attempsRemaining = 10
let lastResult = document.querySelector('.lastResult')

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (attempsRemaining <= 0) {
        alert("Attempt Over")
    }
    else {
        const guessedNumber = parseInt(document.querySelector('#guessField').value)
        console.log(guessedNumber);

        if (guessedNumber != randomNumber) {
            attempsRemaining -= 1
            lastResult.innerHTML = attempsRemaining
        }
        if (guessedNumber == randomNumber) {
            alert("You Guessed it Right!")
        }
    }
    

})

console.log(randomNumber);