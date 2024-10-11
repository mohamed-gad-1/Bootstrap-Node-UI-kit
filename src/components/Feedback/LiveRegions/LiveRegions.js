
function LiveRegions(selector) {
    const liveRegions = document.querySelectorAll(selector);
    liveRegions.forEach(liveRegion => {
        setInterval(() => {
            const newMessage = document.createElement('div');
            newMessage.textContent = `New message at ${new Date().toLocaleTimeString()}`;
            liveRegion.appendChild(newMessage);
        }, 5000);
    });
}

