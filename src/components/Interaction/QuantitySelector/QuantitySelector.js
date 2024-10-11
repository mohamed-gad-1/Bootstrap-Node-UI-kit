
function QuantitySelector(selector) {
    const quantitySelectors = document.querySelectorAll(selector);
    quantitySelectors.forEach(selector => {
        const decrementBtn = selector.querySelector('.decrement');
        const incrementBtn = selector.querySelector('.increment');
        const input = selector.querySelector('input');

        decrementBtn.addEventListener('click', () => {
            let value = parseInt(input.value);
            if (value > 0) {
                input.value = value - 1;
            }
        });

        incrementBtn.addEventListener('click', () => {
            let value = parseInt(input.value);
            input.value = value + 1;
        });
    });
}

