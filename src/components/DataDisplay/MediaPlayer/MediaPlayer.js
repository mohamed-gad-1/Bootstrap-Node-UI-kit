
function MediaPlayer(selector) {
    const mediaPlayers = document.querySelectorAll(selector);
    mediaPlayers.forEach(player => {
        player.addEventListener('play', () => {
            console.log('Media started playing');
        });
        player.addEventListener('pause', () => {
            console.log('Media paused');
        });
    });
}

