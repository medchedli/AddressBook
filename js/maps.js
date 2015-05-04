var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var markers = [
      ['pipcar,Borjcedria', 36.7072261, 10.4292931],
      ['Pipcar,La Marsa', 36.87639, 10.32528],	  
      ['passage,Tunis', 36.80626, 10.17999],	  
      ['Pipcar,Centre ville,Nabeul', 36.69836, 10.73454],	  
      ['Pipcar,sousse', 35.83073424, 10.62744141],	  
    ];
function calcRoute() {
  var start = document.getElementById('sd').value;
  var end = document.getElementById('sm').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });

document.getElementById('trig').innerHTML=('la distance entre vous et la plus proche <b>P ipauto</b> est : '+ directionsDisplay.directions.routes[0].legs[0].distance.text+'<br>une approximation de '+directionsDisplay.directions.routes[0].legs[0].duration.text + ' pour arriver :)' );
    
}