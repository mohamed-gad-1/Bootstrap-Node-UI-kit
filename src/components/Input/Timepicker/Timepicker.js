
function Timepicker(selector) {
    const timepickers = document.querySelectorAll(selector);
    timepickers.forEach(timepicker => {
        flatpickr(timepicker.querySelector('input'), {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true
        });
    });
}

