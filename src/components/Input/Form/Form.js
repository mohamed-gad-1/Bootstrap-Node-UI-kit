
function Form(selector) {
    const forms = document.querySelectorAll(selector);
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted');
        });
    });
}

