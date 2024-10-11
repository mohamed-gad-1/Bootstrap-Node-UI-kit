
function Toast(selector) {
    const toasts = document.querySelectorAll(selector);
    toasts.forEach(toast => {
        toast.querySelector('.show-toast').addEventListener('click', () => {
            toast.querySelector('.toast-message').style.display = 'block';
            setTimeout(() => {
                toast.querySelector('.toast-message').style.display = 'none';
            }, 3000);
        });
    });
}

