document.querySelectorAll('.box').forEach(element => {
    element.addEventListener('click', ()=> document.querySelector('body').style.backgroundColor = element.id)
});