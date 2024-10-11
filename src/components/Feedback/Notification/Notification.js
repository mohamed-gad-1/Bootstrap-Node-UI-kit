
function Notification(selector) {
    const notifications = document.querySelectorAll(selector);
    notifications.forEach(notification => {
        const showBtn = notification.querySelector('.show-notification');
        const hideBtn = notification.querySelector('.hide-notification');

        showBtn.addEventListener('click', () => {
            notification.classList.add('visible');
        });

        hideBtn.addEventListener('click', () => {
            notification.classList.remove('visible');
        });
    });
}

