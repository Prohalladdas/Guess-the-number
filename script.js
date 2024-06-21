// let randomNum = parseInt(Math.random())
let randomNumber = parseInt(Math.random() * 100 + 1)

let submit = document.querySelector("#subt")
let userInput = document.querySelector("#guessField")
let userGuessLot = document.querySelector(".guesses")
let remaining = document.querySelector(".lastResult")
let low0rHi = document.querySelector(".low0rHi")
let startOver = document.querySelector(".resultParas")

let p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        valiDataGuess(guess)
    })
}
function valiDataGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    } else if (guess < 1) {
        alert('please enter a number greater than 1')
    } else if (guess > 100) {
        alert('please enter a number smaller than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            cheakGuess(guess)
        }
    }
}

function cheakGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed is right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Your nuber is TOO low`)
    } else if (guess > randomNumber) {
        displayMessage(`Your nuber is TOO high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    userGuessLot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    low0rHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function endGame() {
    const newButtonGame = document.querySelector('#newGame')
    newButtonGame.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        userGuessLot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}