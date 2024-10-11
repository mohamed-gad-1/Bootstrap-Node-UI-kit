
function Toggles(selector) {
    const toggles = document.querySelectorAll(selector);
    toggles.forEach(toggle => {
        const input = toggle.querySelector('input');
        input.addEventListener('change', () => {
            alert(`Toggle is ${input.checked ? 'on' : 'off'}`);
        });
    });
}

