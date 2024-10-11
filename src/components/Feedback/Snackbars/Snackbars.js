
function Snackbars(selector) {
    const snackbars = document.querySelectorAll(selector);
    snackbars.forEach(snackbar => {
        snackbar.querySelector('.show-snackbar').addEventListener('click', () => {
            snackbar.querySelector('.snackbar').style.display = 'block';
            setTimeout(() => {
                snackbar.querySelector('.snackbar').style.display = 'none';
            }, 3000);
        });
    });
}

