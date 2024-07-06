const Weight = document.querySelector('#Weight')
const Height = document.querySelector('#Height')
const btn = document.querySelector('.btn-1')
btn.addEventListener('click', () => {
    if (Height.value !== '' && Weight.value !== '') {
        if ((isNaN(Weight.value)) || (isNaN(Height.value))) {
            alert('enter the Number: ')
        } else {
            showData(Height.value, Weight.value)
        }
    } else {
        if (Weight.value === '' && Height.value === '') {
            alert('Enter Height And Weight: ')
        } else {
            if (Height.value === '') {
                alert('enter Height')
            }
            if (Weight.value === '') {
                alert('enter Weight')
            }
        }
    }
})

showData = (Height, Weight) => {
    const BMI = (Weight / ((Height * Height) / 10000)).toFixed(2)
    const div = document.createElement('div')
    div.innerText = `${BMI}`
    div.style.color = 'yellow'
    div.classList.add('DynamicDiv')
    document.querySelector('.Answer').appendChild(div)
    const button = document.createElement('button')
    button.addEventListener('click', ()=> {
        location.reload()
    })
    button.classList.add('DynamicDiv')
    button.innerText = 'Refresh'
    document.querySelector('.Answer').appendChild(button)

}