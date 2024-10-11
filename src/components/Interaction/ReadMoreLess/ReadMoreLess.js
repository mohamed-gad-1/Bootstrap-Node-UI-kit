
function ReadMoreLess(selector) {
    const readMoreLesses = document.querySelectorAll(selector);
    readMoreLesses.forEach(readMoreLess => {
        const content = readMoreLess.querySelector('.content');
        const toggle = readMoreLess.querySelector('.toggle');

        toggle.addEventListener('click', () => {
            content.classList.toggle('expanded');
            toggle.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
        });
    });
}

