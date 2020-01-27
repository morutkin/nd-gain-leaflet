
	mapboxgl.accessToken = 'pk.eyJ1IjoibW9ydXRraW4iLCJhIjoiY2s1cnJhMzczMGdjaDNtcnR0M2h0NnR6cSJ9.87UtlJlwluWbZq4ioist-g';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/morutkin/ck5rrcp0a1vjy1imqp512xit4', //hosted style id
        center: [ -84.386330, 33.753746], // starting position
        zoom: 9 // starting zoom
    });



    var kml = omnivore.kml('atl.kml').addTo(map).on('ready', function () {
        map.fitBounds(kml.getBounds());
    });



    map.on('load', function() {
        // the rest of the code will go in here
        var layers1 = ['0%', '1', '25%', '50%', '75%', '100+'];
        var colors1 = [3, 3, 7.25, 11.5, 15.75, 20];

        var layers2 = ['0-16%', '16-32%', '32-48%', '48-64%', '64-80%', '80%+'];
        var colors2 = ['#eaf6fb', '#95d0ea', '#3fad9', '#2692c0', '#1d7195', '#196180'];

        for (i = 0; i < layers.length; i++) {
            var layer = layers2[i];
            var color = colors2[i];
            var item = document.createElement('div');
            var key = document.createElement('span');
            key.className = 'legend-key';
            key.style.backgroundColor = color;
          
            var value = document.createElement('span');
            value.innerHTML = layer;
            item.appendChild(key);
            item.appendChild(value);
            legend.appendChild(item);
          }
      });

    