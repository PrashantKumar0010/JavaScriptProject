const btn = document.querySelector('.btn')
const value = document.querySelector('.input')
const Grater = document.querySelector('.Greater')
const Less = document.querySelector('.Less')
const show = document.querySelector('.Show')
const Previous = document.querySelector('.Previous')
const remaining = document.querySelector('.remaining')
let length = 10
GenerateRandomNumber = () => {
    return Math.floor(Math.random() * 101);
}
let RandomNumber = GenerateRandomNumber()
console.log(RandomNumber)

enter = () => {
    btn.addEventListener('click', () => {
        if (value.value !== '') {
            if (isNaN(value.value)) {
                alert('enter Number value: ')
            } else {
                playGame(value.value)
            }
        }
        else {
            alert('Enter Your Guess: ')
        }
    })
}
enter()
var previousGuess = []
playGame = (Guess) => {
    previousGuess.push(Guess)
    show.style.height = '10vh'
    if (RandomNumber > Guess) {
        Less.classList.add('Less')
        console.log('guess Number is Less than ')
        Grater.classList.remove('Greater')
        Grater.innerText = `guess Number is Less than `
    }
    else if (RandomNumber < Guess) {
        Grater.classList.add('Greater')
        console.log('guess number is greater then')
        Less.innerText = `guess number is greater then`
        Less.classList.remove('Less')
    }
    else if (RandomNumber == Guess) {
        showResult()
    }
    else {
        enter()
    }
    remainingGuess()
}

showResult = () => {
    show.style.visibility = 'hidden'
    show.style.height = '0px'
    const div = document.createElement('div')
    div.classList.add('ans')
    div.innerHTML = `you have Guessed The correct Number: `
    document.querySelector('.main').appendChild(div)
    showGuess()
    disableBTN()

}
showGuess = () => {
    const ul = document.createElement('ul')
    ul.classList.add('count')
    document.querySelector('.Previous').appendChild(ul)
    previousGuess.forEach(element => {
        const li = document.createElement('li')
        li.innerText = element
        document.querySelector('.count').appendChild(li)
    });
}
remainingGuess = () => {
    if (length > 0) {
        remaining.innerText = `Guesses remaining ${--length}`
    }
    else {
        alert('No estimate available ')
        btn.setAttribute('disabled', '')
    }
}
document.querySelector('.refresh').addEventListener('click', () => location.reload())

disableBTN = () => {
    btn.setAttribute('disabled', '')
}

//in beta not working 
// document.querySelector('.PlayAgain').addEventListener('click', () => {
    
// })