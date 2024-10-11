
function Flex(selector) {
    const flexes = document.querySelectorAll(selector);
    flexes.forEach(flex => {
        flex.addEventListener('click', (e) => {
            if (e.target.classList.contains('flex-item')) {
                alert(`Flex item clicked: ${e.target.textContent}`);
            }
        });
    });
}

