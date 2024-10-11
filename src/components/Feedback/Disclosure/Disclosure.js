
function Disclosure(selector) {
    const disclosures = document.querySelectorAll(selector);
    disclosures.forEach(disclosure => {
        const header = disclosure.querySelector('.disclosure-header');
        const content = disclosure.querySelector('.disclosure-content');

        header.addEventListener('click', () => {
            header.classList.toggle('open');
            content.style.display = header.classList.contains('open') ? 'block' : 'none';
        });
    });
}

