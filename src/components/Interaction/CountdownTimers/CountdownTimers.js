
function CountdownTimers(selector, endTime) {
    const countdownTimers = document.querySelectorAll(selector);
    countdownTimers.forEach(timer => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (distance < 0) {
                clearInterval(interval);
                timer.textContent = "EXPIRED";
            }
        }, 1000);
    });
}

