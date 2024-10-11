
function CustomSelect(selector) {
    const customSelects = document.querySelectorAll(selector);
    customSelects.forEach(select => {
        const selectSelected = select.querySelector('.select-selected');
        const selectItems = select.querySelector('.select-items');
        const options = select.querySelectorAll('option');

        selectSelected.textContent = options[0].textContent;

        selectSelected.addEventListener('click', () => {
            selectItems.classList.toggle('select-hide');
        });

        options.forEach(option => {
            const div = document.createElement('div');
            div.textContent = option.textContent;
            div.addEventListener('click', () => {
                selectSelected.textContent = option.textContent;
                selectItems.classList.add('select-hide');
            });
            selectItems.appendChild(div);
        });

        document.addEventListener('click', (e) => {
            if (!select.contains(e.target)) {
                selectItems.classList.add('select-hide');
            }
        });
    });
}

