
function TagsInput(selector) {
    const tagsInputs = document.querySelectorAll(selector);
    tagsInputs.forEach(tagsInput => {
        const input = tagsInput.querySelector('input');
        const tags = [];

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                const value = input.value.trim();
                if (value && !tags.includes(value)) {
                    tags.push(value);
                    renderTags();
                }
                input.value = '';
            }
        });

        function renderTags() {
            tagsInput.innerHTML = '';
            tags.forEach(tag => {
                const tagElem = document.createElement('div');
                tagElem.classList.add('tag');
                tagElem.textContent = tag;
                const removeBtn = document.createElement('span');
                removeBtn.classList.add('remove');
                removeBtn.textContent = 'x';
                removeBtn.addEventListener('click', () => {
                    tags.splice(tags.indexOf(tag), 1);
                    renderTags();
                });
                tagElem.appendChild(removeBtn);
                tagsInput.appendChild(tagElem);
            });
            tagsInput.appendChild(input);
        }

        renderTags();
    });
}

