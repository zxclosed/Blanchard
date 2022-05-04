
document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#body').classList.remove('scroll')
        x.classList.add('hide')
        burger.classList.remove('swap-icons')
        menu.classList.remove('menu-is-open')
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth',
        })
    })
})