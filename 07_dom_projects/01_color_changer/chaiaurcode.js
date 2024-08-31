const grey = document.querySelector('#grey')
const white = document.querySelector('#white')
const blue = document.querySelector('#blue')
const yellow = document.querySelector('#yellow')

const buttons = document.querySelectorAll('.button')

function backgroundChanger(bgColor) {
    document.body.style.backgroundColor = bgColor
}



// grey.addEventListener('click', (e) => {
//     // document.body.style.backgroundColor = "grey"
//     backgroundChanger(e.target.id)
// })

// white.addEventListener('click', (e) => {
//     // document.body.style.backgroundColor = "white"
//     backgroundChanger(e.target.id)
// })
// blue.addEventListener('click', (e) => {
//     // document.body.style.backgroundColor = 'blue'
//     backgroundChanger(e.target.id)
// })
// yellow.addEventListener('click', (e) => {
//     // document.body.style.backgroundColor = 'yellow'
//     backgroundChanger(e.target.id)
// })