
function Switch(selector) {
    const switches = document.querySelectorAll(selector);
    switches.forEach(switchElem => {
        const input = switchElem.querySelector('input');
        input.addEventListener('change', () => {
            alert(`Switch is ${input.checked ? 'on' : 'off'}`);
        });
    });
}

