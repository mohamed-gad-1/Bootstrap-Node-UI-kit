
function Calendar(selector) {
    const calendars = document.querySelectorAll(selector);
    calendars.forEach(calendar => {
        const days = calendar.querySelectorAll('.days .day');
        days.forEach(day => {
            day.addEventListener('click', () => {
                alert(`You clicked on: ${day.textContent}`);
            });
        });
    });
}

