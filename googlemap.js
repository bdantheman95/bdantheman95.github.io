var map;
function initMap() {
  map = new google.maps.Map(document.getElementsById('map'), {
    center: {lat: 33.2951952, lng: -111.8340025,12},
    zoom: 8
  });
}
