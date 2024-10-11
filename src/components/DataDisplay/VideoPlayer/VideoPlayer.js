
function VideoPlayer(selector) {
    const videoPlayers = document.querySelectorAll(selector);
    videoPlayers.forEach(videoPlayer => {
        const video = videoPlayer.querySelector('video');
        video.addEventListener('play', () => {
            alert('Video started playing');
        });
        video.addEventListener('pause', () => {
            alert('Video paused');
        });
        video.addEventListener('ended', () => {
            alert('Video ended');
        });
    });
}

