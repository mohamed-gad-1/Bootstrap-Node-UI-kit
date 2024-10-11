
function Geolocation(selector) {
    const geolocations = document.querySelectorAll(selector);
    geolocations.forEach(geolocation => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    geolocation.querySelector('.location-info').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
                },
                error => {
                    geolocation.querySelector('.location-info').textContent = `Error: ${error.message}`;
                }
            );
        } else {
            geolocation.querySelector('.location-info').textContent = 'Geolocation is not supported by this browser.';
        }
    });
}

