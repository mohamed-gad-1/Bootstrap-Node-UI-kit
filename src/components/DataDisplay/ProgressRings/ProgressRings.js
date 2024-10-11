
function ProgressRings(selector) {
    const progressRings = document.querySelectorAll(selector);
    progressRings.forEach(ring => {
        const circle = ring.querySelector('circle');
        const percentage = ring.querySelector('.percentage');
        let offset = 283;
        const interval = setInterval(() => {
            if (offset <= 0) {
                clearInterval(interval);
            } else {
                offset -= 2.83;
                circle.style.strokeDashoffset = offset;
                percentage.textContent = `${Math.round((283 - offset) / 2.83)}%`;
            }
        }, 50);
    });
}

