GoogleMapsLoader.KEY = 'AIzaSyDP13T048ji9u8_di9Gdpmh6bkBhPoC3bs';
GoogleMapsLoader.LANGUAGE = 'ua';

if(document.getElementById('map')) {
  GoogleMapsLoader.load(function(google) {
  	var myLatLng = {lat: 34.216503, lng: -119.067377};
    var map = new google.maps.Map(document.getElementById('map'), {
    	center: myLatLng,
	    scrollwheel:false,
	    zoom: 17,
        styles: [
        {
          "stylers": [
            { "saturation": -100 }
          ] 
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            { "visibility": "off" }
          ]
        }
      ]
    });
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      animation: google.maps.Animation.DROP,
      title: 'DISASTER SWAT RESTORATION',
      icon: {
        // url: require("../images/marker.png"),
        scaledSize: new google.maps.Size(40, 40)
      }
    });
  });
};