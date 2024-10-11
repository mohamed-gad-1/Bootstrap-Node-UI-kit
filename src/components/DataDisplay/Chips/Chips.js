
function Chips(selector) {
    const chips = document.querySelectorAll(selector);
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            alert(`Chip clicked: ${chip.textContent}`);
        });
    });
}

