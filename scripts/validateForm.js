
var selector = document.querySelector("input[type='tel']");
        var im = new Inputmask("+7 (999)-999-99-99");

        im.mask(selector);

new JustValidate('.contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30,
        },
        tel: {
            required:true,
                    function: (name, value) => {
                        const phone = selector.inputmask.unmaskedvalue()
                        return Number(phone) && phone.length === 10
                    }
        }
    },
    messages: {
        name: {
            required: 'Недопустимый формат',
            minLength: 'Недопустимый формат',
            maxLength: 'Недопустимый формат',
        },
        tel: {
            required: 'Недопустимый формат',
            minLength: 'Недопустимый формат',
            maxLength: 'Недопустимый формат',
            function: 'Недопустимый формат',
        }
    }
})