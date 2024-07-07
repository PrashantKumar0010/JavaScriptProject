const btn = document.querySelector('.btn')
const value = document.querySelector('.input')
const Grater = document.querySelector('.Greater')
const Less = document.querySelector('.Less')
const show = document.querySelector('.Show')
const Previous = document.querySelector('.Previous')
const remaining = document.querySelector('.remaining')
const position = document.querySelectorAll('.position')
let length = 10
var previousGuess = []
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
                previousGuess.push(value.value)
                playGame(value.value)
            }
        }
        else {
            alert('Enter Your Guess: ')
        }
    })
}
enter()
playGame = (Guess) => {
    position.forEach(element => {
        element.style.visibility = 'visible'
    });
    show.style.height = '40px'
    if (RandomNumber > Guess) {
        Less.innerHTML = ''
        console.log('guess Number is Less than ')
        Grater.innerText = `guess Number is Less than `
    }
    else if (RandomNumber < Guess) {
        Grater.innerHTML = ''
        console.log('guess number is greater then')
        Less.innerText = `guess number is greater then`
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
    position.forEach(element => {
        element.style.visibility = 'hidden'
    });
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

document.querySelector('.PlayAgain').addEventListener('click', () => {
    previousGuess = []
    // RandomNumber = GenerateRandomNumber()
    // console.log(RandomNumber)
    btn.removeAttribute('disabled', '')
    value.value = ''
    position.forEach(element => {
        element.removeAttribute("style");
        remaining.innerText = `Guesses remaining ${10}`
        length = 10
    });
    try {
        show.style.height = '0px'
        document.querySelector('.count').remove()
        document.querySelector('.ans').remove()
    } catch (error) {
        console.log('error');
    }
})