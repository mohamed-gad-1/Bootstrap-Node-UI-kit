
function Datepicker(selector) {
    const datepickers = document.querySelectorAll(selector);
    datepickers.forEach(datepicker => {
        const input = datepicker.querySelector('input');
        const popup = datepicker.querySelector('.datepicker-popup');
        const table = popup.querySelector('table');

        input.addEventListener('focus', () => {
            popup.classList.add('visible');
        });

        document.addEventListener('click', (e) => {
            if (!datepicker.contains(e.target)) {
                popup.classList.remove('visible');
            }
        });

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    const cell = document.createElement('td');
                    row.appendChild(cell);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    const cell = document.createElement('td');
                    cell.textContent = date;
                    cell.addEventListener('click', () => {
                        input.value = `${year}-${month + 1}-${date}`;
                        popup.classList.remove('visible');
                    });
                    row.appendChild(cell);
                    date++;
                }
            }
            table.appendChild(row);
        }
    });
}

