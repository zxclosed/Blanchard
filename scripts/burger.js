
const button = document.querySelector('#burger')
const menu = document.querySelector('.menu')
const burger = document.querySelector('.header__burger-svg')
const x = document.querySelector('.header__x-svg')



button.addEventListener('click', function() {
    button.classList.toggle('display-burger')
    menu.classList.toggle('menu-is-open')
    burger.classList.toggle('swap-icons')
    x.classList.toggle('hide')
    document.querySelector('#body').classList.toggle('scroll')
})

