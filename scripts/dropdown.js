
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.header__dropdown-link').forEach(item => {
        item.addEventListener('click', function() {
            let btn = this
            let dropdown = this.parentElement.querySelector('.header__dropdown-wrapper-content');
            let svg = this.querySelector('svg')


            document.querySelectorAll('.header__dropdown-link').forEach(el => {
                if (el != btn) {
                    el.classList.remove('button-active')
                }
            })

            document.querySelectorAll('.header__dropdown-wrapper-content').forEach(el => {
                if (el != dropdown) {
                    el.classList.remove('dropdown-active')
                }
            })

            document.querySelectorAll('.header__dropdown-svg').forEach(el => {
                if (el != svg) {
                    el.classList.remove('svg-active')
                }
            })

            dropdown.classList.toggle('dropdown-active')
            btn.classList.toggle('button-active')
            svg.classList.toggle('svg-active')
        })
    })

    document.addEventListener('click', function (e) {
        let target = e.target;
        if (!target.closest('.header__dropdown-list')) {
            document.querySelectorAll('.header__dropdown-wrapper-content').forEach(el => {
                el.classList.remove('dropdown-active')
            })

            document.querySelectorAll('.header__dropdown-link').forEach(el => {
                el.classList.remove('button-active')
            })

            document.querySelectorAll('.header__dropdown-svg').forEach(el => {
                el.classList.remove('svg-active')
            })
        }
    })

})