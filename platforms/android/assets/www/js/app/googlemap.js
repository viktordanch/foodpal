function GoogleMap(){

    this.initialize = function(){
     var map = showMap();
     addMarkersToMap(map);
    }

    var showMap = function(){
    var mapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(-33, 151),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }


    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    return map;
    }

    var addMarkersToMap = function(map){


    var mapBounds = new google.maps.LatLngBounds();


    rest_list = JSON.parse(localStorage['selected_restaurants']);
    arr_rest_mark = {};

    for(key in rest_list  ){
     rest = rest_list[key];
     console.log('------------in- set marker--')
     var iconRes = new google.maps.MarkerImage("assets/images/superstar.png",
         new google.maps.Size(20, 27),
         new google.maps.Point(0, 0),
         new google.maps.Point(20, 27));



     var latitudeAndLongitude = new google.maps.LatLng( rest['latitude'],rest['longitude']);

//  marker = new google.maps.Marker({
//     position:  latitudeAndLongitude,
//     icon: iconRes,
//     map: map
//   });


     var info = '<div style = "float: right; width: 76%; padding: 0% 3% 3% 3%;">\
                     <h1>'+key+'</h1><p>'+rest["rating"]+'</p></div>\
                 <div class = "image-container" style = "width: 18%;              \
                                                         height: 60px;\
                                                         display: table-cell;\
                                                         vertical-align: middle;\
                                                         margin-right: 10px;" >\
                                                            <img src = "'+rest['logo']+'" style = "height: auto;" ></div>\
                                           <p>'+rest["address"]+'</p><a href="#" >Show</a><p>'+rest["facebook"]+'</p> ';



     arr_rest_mark[key] = {latitudeAndLongitude: latitudeAndLongitude, info: info }
     all_markers = [];
     var mar = createMarker(latitudeAndLongitude, info, iconRes, key);
     all_markers.push(mar);
     console.log(arr_rest_mark);
     mapBounds.extend(latitudeAndLongitude);

    }

//   for(key in arr_rest_mark){
//       rest = arr_rest_mark[key];
//        console.log(rest['marker']);
//
//      google.maps.event.addListener(rest['marker'], "click", function() {
//       var popup = new google.maps.InfoWindow({content: rest['info'],maxWidth: 300});
//        console.log(rest['marker']);
//        popup.open(map, rest['marker']);
//        console.log('click');
//      });
//   }
    function createMarker(pos, info, iconRes, t) {
       var popup = new google.maps.InfoWindow({content: info,maxWidth: 280, maxHeight: 100, disableAutoPan: true});
        var marker = new google.maps.Marker({
            icon: iconRes,
            position: pos,
            map: map,  // google.maps.Map
            title: t

        });
        google.maps.event.addListener(marker, 'click', function() {
           //alert("I am marker " + marker.title);
           popup.open(map, marker);
            lg =  parseFloat(marker.getPosition()['b'] + 1.5 );
            ln =  parseFloat(marker.getPosition()['d']);
            console.log( marker.getPosition()['nb']);
            console.log( lg );
            console.log(marker.getPosition() );
            pos = new google.maps.LatLng(lg  , ln);
//
            map.panTo( pos);
            console.log('click');
        });
        return marker;
    }





 //   var info = '<div class = "google-map-info"><h1>The rest</h1><img src = "assets/images/superstar.png" >\
 //                       <img src = "assets/images/superstar.png" ><img src = "assets/images/superstar.png" ></div>';



//   var latitudeAndLongitudeTwo = new google.maps.LatLng('26.1584640', '-80.1176430');
//
//   var markerTwo = new google.maps.Marker({
//   position: latitudeAndLongitudeTwo,
//   icon: iconRes,
//   map: map
//   });
//   var latitudeAndLongitudeThree = new google.maps.LatLng('27.6237377', '-80.3907679');
//
//   var markerThree = new google.maps.Marker({
//   icon: iconRes,
//   position: latitudeAndLongitudeThree,
//   map: map
//   });

//   google.maps.event.addListener(markerTwo, "click", function() {
//      popup.open(map, markerTwo);
//      console.log('click');
//   });

//    google.maps.event.addListener(markerThree, "click", function() {
//       popup.open(map, markerThree);
//       console.log('click');
//    });




 //   mapBounds.extend(latitudeAndLongitudeTwo);
 //   mapBounds.extend(latitudeAndLongitudeThree);

    map.fitBounds(mapBounds);
    console.log("fit map");
    }
    function define_restaurant(){}
}



