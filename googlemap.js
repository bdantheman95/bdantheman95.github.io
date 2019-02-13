var map;
function initMap() {
  map = new google.maps.Map(document.getElementsById('map'), {
    center: {lat: 33.2951952, lng: -111.8340025,12},
    zoom: 8
  });
}

src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXS6eLxCWdf31JokswS3GbO582iuY0PqI&callback=initMap"
async defer
