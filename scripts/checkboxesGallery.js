document.body.onload = checked()
      function checked () {
        const input = document.querySelectorAll('.gallery__checkbox')
        const label = document.querySelectorAll('.gallery__checkbox-label')


        
        for (let i = 0; i < input.length; i++) {
            let choiceInput = input[i]
            let choiceLabel = label[i]
            choiceInput.addEventListener('click', function() {
                choiceLabel.classList.toggle('is-checked')
            })

            choiceInput.addEventListener('focus', function() {
                choiceLabel.classList.add('on-focus')
            })

            choiceInput.addEventListener('blur', function() {
                choiceLabel.classList.remove('on-focus')
            })
        }
        }