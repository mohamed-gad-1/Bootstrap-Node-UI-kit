
function InputGroup(selector) {
    const inputGroups = document.querySelectorAll(selector);
    inputGroups.forEach(inputGroup => {
        const button = inputGroup.querySelector('button');
        const input = inputGroup.querySelector('input');

        button.addEventListener('click', () => {
            alert(`Input value: ${input.value}`);
        });
    });
}

