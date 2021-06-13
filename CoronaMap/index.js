function updateMap() {
    console.log('Updating map with realtime data of 20 min')
    fetch('https://www.trackcorona.live/api/countries') // used to fetch the api

        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.confirmed;
                cases_color = `rgb(${cases}, 0, 0)`;

                // Mark on the map
                new mapboxgl.Marker({
                    color: cases_color,
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map)
            });
        })
        .catch(err => {
            console.error(err);
        });
}
let interval = 1200000;
setInterval(updateMap, interval);