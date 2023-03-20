import * as L from "leaflet";

const mapContainer = document.querySelector("#map");
const map = L.map(mapContainer).setView([49.8347061, 24.014413], 15);

L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  }
).addTo(map);

L.marker([49.8356178, 24.0143344])
  .addTo(map)
  .bindPopup("We are here! xDD")
  .openPopup();
