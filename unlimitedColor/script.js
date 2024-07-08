const Start = document.querySelector('.start')
const Stop = document.querySelector('.stop')
GetColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

// method 1


// let startMe
// Start.addEventListener('click', () => {
//      startMe = setInterval(StartEvent, 1000);
// })
// const StartEvent = () => {
//     document.querySelector('body').style.backgroundColor = `${GetColorCode()}`
// }
// Stop.addEventListener('click', ()=> clearInterval(startMe))


// method 2


let StartMe
ChangeColor = () => {
    if(!StartMe){
        StartMe = setInterval(ChangingColor, 1000);
    }

    function ChangingColor() {
        const ColorCode = GetColorCode()
        document.querySelector('body').style.backgroundColor = `${ColorCode}`
        const code = document.querySelector('.colorCode').innerHTML = `${ColorCode}`
    }
}
StopChangeColor = () => {
    clearInterval(StartMe)
     StartMe = null
}

Start.addEventListener('click', () => ChangeColor())
Stop.addEventListener('click', () => StopChangeColor())