
function RadioGroup(selector) {
    const radioGroups = document.querySelectorAll(selector);
    radioGroups.forEach(radioGroup => {
        radioGroup.addEventListener('change', (e) => {
            if (e.target.tagName === 'INPUT') {
                alert(`Selected option: ${e.target.value}`);
            }
        });
    });
}

