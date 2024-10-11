
function DatePicker(selector) {
    const datePickers = document.querySelectorAll(selector);
    datePickers.forEach(datePicker => {
        const input = datePicker.querySelector('input[type="text"]');
        const calendar = datePicker.querySelector('.calendar');
        const days = calendar.querySelectorAll('.days .day');

        input.addEventListener('focus', () => {
            calendar.classList.add('open');
        });

        days.forEach(day => {
            day.addEventListener('click', () => {
                input.value = day.textContent;
                calendar.classList.remove('open');
            });
        });
    });
}

