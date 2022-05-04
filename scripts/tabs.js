const tabsButton = document.querySelectorAll('.directory__acc-button')
const tabsItem = document.querySelectorAll('.directory__tab')

tabsButton.forEach(function(item) {
    item.addEventListener('click', function(){
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)

        tabsButton.forEach(function(item) {
            item.classList.remove('is-active')
        })

        tabsItem.forEach(function(item) {
            item.classList.remove('tab-active')
        })

        currentBtn.classList.add('is-active')
        currentTab.classList.add('tab-active')
    })
})