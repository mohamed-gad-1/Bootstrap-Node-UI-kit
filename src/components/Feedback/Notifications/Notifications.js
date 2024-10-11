
function Notifications(selector) {
    const notifications = document.querySelectorAll(selector);
    notifications.forEach(notification => {
        notification.querySelector('.show-notification').addEventListener('click', () => {
            const notif = notification.querySelector('.notification');
            notif.style.display = 'block';
            setTimeout(() => {
                notif.style.display = 'none';
            }, 3000);
        });
    });
}

