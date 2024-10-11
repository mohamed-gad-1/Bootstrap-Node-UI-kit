
function AudioPlayers(selector) {
    const audioPlayers = document.querySelectorAll(selector);
    audioPlayers.forEach(player => {
        player.addEventListener('play', () => {
            console.log('Audio started playing');
        });
        player.addEventListener('pause', () => {
            console.log('Audio paused');
        });
    });
}

