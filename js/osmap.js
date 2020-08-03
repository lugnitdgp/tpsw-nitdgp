// Where you want to render the map.
var element = document.getElementById('osm-map');

// Height has to be set. You can do this in CSS too.
element.style = 'height:300px;';

// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile leayer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    
}).addTo(map);

// Target's GPS coordinates.
var target = L.latLng('23.5491', '87.2909');

// Set map's center to target with zoom 14.
map.setView(target, 15);

// Place a marker on the same location.
L.marker(target).addTo(map);