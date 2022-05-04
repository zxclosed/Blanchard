const element = document.querySelector('#gallery__select');
      const choices = new Choices(element, {
        position: 'bottom',
        searchEnabled: false,
        duplicateItemsAllowed: false,
        itemSelectText: '',
        renderSelectedChoices: 'always',
      })