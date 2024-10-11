
function Background(selector) {
    const backgrounds = document.querySelectorAll(selector);
    backgrounds.forEach(background => {
        background.addEventListener('click', (e) => {
            if (e.target.classList.contains('bg-primary')) {
                alert('Primary background clicked');
            } else if (e.target.classList.contains('bg-secondary')) {
                alert('Secondary background clicked');
            } else if (e.target.classList.contains('bg-success')) {
                alert('Success background clicked');
            } else if (e.target.classList.contains('bg-danger')) {
                alert('Danger background clicked');
            } else if (e.target.classList.contains('bg-warning')) {
                alert('Warning background clicked');
            } else if (e.target.classList.contains('bg-info')) {
                alert('Info background clicked');
            } else if (e.target.classList.contains('bg-light')) {
                alert('Light background clicked');
            } else if (e.target.classList.contains('bg-dark')) {
                alert('Dark background clicked');
            }
        });
    });
}

