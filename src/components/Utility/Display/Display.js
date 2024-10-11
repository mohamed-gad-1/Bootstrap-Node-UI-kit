
function Display(selector) {
    const displays = document.querySelectorAll(selector);
    displays.forEach(display => {
        display.addEventListener('click', (e) => {
            if (e.target.classList.contains('toggle-display')) {
                const target = display.querySelector(e.target.dataset.target);
                target.classList.toggle('d-none');
                alert(`Display toggled: ${target.textContent}`);
            }
        });
    });
}

