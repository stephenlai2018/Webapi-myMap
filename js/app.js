function initMap() {
  var options = {
    zoom: 8,
    center: {
      lat: 25.0332255, 
      lng: 121.5439082
    }
  }

  // New map
  let map = new google.maps.Map(document.getElementById("map"), options);

  // Add marker
  let marker = new google.maps.Marker({
    position: {
      lat: 25.0332255, 
      lng: 121.5439082 
    },
    map: map,
    icon: "/../img/beachflag.png"
  });

  let infoWindow = new google.maps.InfoWindow({
    content: "<h1>捷運大安站</h1>"
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}