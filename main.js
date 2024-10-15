let btt = document.querySelectorAll('.button')
let body = document.querySelector('body')

btt.forEach(function(button){
    button.addEventListener('click', () => {
        bttColor = button.id;;
        body.style.background = bttColor;
    })
})