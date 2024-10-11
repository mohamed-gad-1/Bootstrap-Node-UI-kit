
function RangeSlider(selector) {
    const rangeSliders = document.querySelectorAll(selector);
    rangeSliders.forEach(slider => {
        const input = slider.querySelector('input[type="range"]');
        const value = slider.querySelector('.value');

        input.addEventListener('input', () => {
            value.textContent = input.value;
        });
    });
}

