// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

let map;
const office = { lat: 45.765023, lng: 4.863037 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: office,
    zoom: 15,
  });

  new google.maps.Marker({
    position: office,
    map,
  });
}

window.initMap = initMap;
// ChIJ1bmoyofq9EcRj74Uf-M2zPU
// 45.765023,4.863037
