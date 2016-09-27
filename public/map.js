var Map = function(container,coords,zoom,label, title) {

  this.googleMap = new google.maps.Map(container, {
    center:coords,
    zoom:zoom
  });

  this.addMarker = function(coords,label,title){
    var marker = new google.maps.Marker({
      position:coords,  
      map:this.googleMap,
      label: label, //"1"
      title: title
    });
  }

  this.addClickEvent = function(){
    google.maps.event.addListener(this.googleMap,'click',
      function(event){
        var position = {lat: event.latLng.lat() ,lng:  event.latLng.lng()}
        this.addMarker(position);
      }.bind(this))
  }

//} ORIGINAL END

var tracks = [
['Code Clan', 55.94716,-3.20198, 4, '37 Castle Terrace<br />Edinburgh<br /> EH1 2EL','0131 290 2600','0131 290 2600','info@codeclan.com','http://www.codeclan.co.uk'],
['Edinburgh Cycle Speedway', 55.968926, -3.187743, 3, 'Redbraes Park<br />Redbraes Place<br />Edinburgh<br />EH7 6LL','(+44)1577865279','(+44)00000000','info@macsdev.co.uk','http://www.edinburghfalcons.co.uk'],
['Home', 56.217054, -3.427351, 2, 'Lathro Park<br />Kinross<br />KY13 8RU','(+44)98986866','(+44)87785755','leerlawrence@aol.com','http://www.google.co.uk'],
['Fife Cycle Speedway', 56.086254, -3.465171, 1, 'Queen Anne\'s High School<br />Dunfermline<br />KY12 0PQ','(+44)1383 602404','(+44)01383 602404','info@qahs.org.uk',
'http://qahs.org.uk/']
];

this.addMarkerFromArray = function(){
  var tracks = [
  ['Code Clan', 55.94716,-3.20198, 4, '37 Castle Terrace<br />Edinburgh<br /> EH1 2EL','0131 290 2600','0131 290 2600','info@codeclan.com','http://www.codeclan.co.uk'],
  ['Edinburgh Cycle Speedway', 55.968926, -3.187743, 3, 'Redbraes Park<br />Redbraes Place<br />Edinburgh<br />EH7 6LL','(+44)1577865279','(+44)00000000','info@macsdev.co.uk','http://www.edinburghfalcons.co.uk'],
  ['Home', 56.217054, -3.427351, 2, 'Lathro Park<br />Kinross<br />KY13 8RU','(+44)98986866','(+44)87785755','leerlawrence@aol.com','http://www.google.co.uk'],
  ['Fife Cycle Speedway', 56.086254, -3.465171, 1, 'Queen Anne\'s High School<br />Dunfermline<br />KY12 0PQ','(+44)1383 602404','(+44)01383 602404','info@qahs.org.uk',
  'http://qahs.org.uk/']
  ];

        

        for (var i = 0; i < tracks.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(tracks[i][1], tracks[i][2]),
               // map: map,
               map:this.googleMap,
                //icon: image,
                title: tracks[i][0],
                zIndex: tracks[i][2]
            });

            var infoWindow = new google.maps.InfoWindow();

            google.maps.event.addListener(marker, 'click', function () {
                var markerContent = tracks[i][3];  //WAS 4
                infoWindow.setContent(markerContent);
                infoWindow.open(map, this);
            });
        };

      } //NEW END

    }