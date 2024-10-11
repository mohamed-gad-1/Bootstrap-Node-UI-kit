
function Alert(selector) {
    const alerts = document.querySelectorAll(selector);
    alerts.forEach(alert => {
        alert.addEventListener('click', () => {
            alert.remove();
        });
    });
}

