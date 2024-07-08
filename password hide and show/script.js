const S1 = document.querySelector('#hide')
const H1 = document.querySelector('#show')
const pass = document.querySelector('.pass')
let Toggle = true
document.querySelector('.Box').addEventListener('click', () => {
    if (pass.value !== '') {
        if (Toggle == true) {
            S1.removeAttribute('class')
            H1.style.visibility = 'hidden'
            Toggle = false
            pass.type = 'Text'
        } else {
            S1.setAttribute('class', 'Hide')
            H1.style.visibility = 'visible'
            Toggle = true
            pass.type = 'password'
        }
    }else {
        alert('enter the password: ')
    }
})
