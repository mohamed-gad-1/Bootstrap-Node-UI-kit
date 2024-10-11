
function Map(selector) {
    const maps = document.querySelectorAll(selector);
    maps.forEach(map => {
        const mapInstance = new google.maps.Map(map, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    });
}

