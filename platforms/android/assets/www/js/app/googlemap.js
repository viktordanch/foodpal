function GoogleMap(){
    //initial map
    this.initialize = function(collection, user){
     var map = showMap();
     addMarkersToMap(map, collection, user);
    }

    // show map
    var showMap = function(){
      var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(-33, 151),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      return map;
    }
    // add markers
    var addMarkersToMap = function(map, collection, user){

      var mapBounds = new google.maps.LatLngBounds();
      rest_list = collection ;
      arr_rest_mark = {};

      // set user location
      if(user != 'none'){


        console.log('---set user  location----   user');
        var iconRes = new google.maps.MarkerImage("assets/images/you.png",
          new google.maps.Size(30, 40),
          new google.maps.Point(0, 0),
          new google.maps.Point(30, 40));
        coords = JSON.parse(window.localStorage['user_location']);

        if(coords.length == 0){

        }else{
            var latitudeAndLongitude = new google.maps.LatLng( coords[0], coords[1]);
            var marker = new google.maps.Marker({
                icon: iconRes,
                position: latitudeAndLongitude,
                map: map,  // google.maps.Map

            });
             mapBounds.extend(latitudeAndLongitude);
        }



      };

      // for each restaurant
      for(key in rest_list  ){
        rest = rest_list[key];
        console.log('------------in- set marker--')

        // set icon
        var iconRes = new google.maps.MarkerImage("assets/images/icoFoodpal.png",
          new google.maps.Size(20, 27),
          new google.maps.Point(0, 0),
          new google.maps.Point(20, 27));

        // set coords
        var latitudeAndLongitude = new google.maps.LatLng( rest['latitude'],rest['longitude']);

        // set info

       var info = '<div id="infobox" class="">                                                                                                 \
                                   <a id = "'+rest['id']+'" href="#restouran-card" data-transition="slide" onclick="show_restaurant($(this)); set_map_to_none(); " class="ui-link">\
                                   <img src="assets/images/arrw2.png" style="width:40px; height: 40px; float:right; padding-top:10px; padding-right: 20px"></a>\
                                   <div class="image-container" style="width: 50px;\
                                                                             height: 50px;\
                                                                             margin-top: 10px;\
                                                                             float: left;\
                                                                          margin-right: 10px;\
                                 background: url(http://foodpal.com'+rest['logo']+') center no-repeat;\
                                                                                              background-size: contain;"></div>\
                                   <div style="float: left; padding: 0% 3% 3% 3%; width: 160px; max-height: 77px; overflow: hidden;">\
                                       <h1 class="title">'+rest['name']+'</h1><div class="address">'+rest['address']+'</div></div>\
                               </div>';



        all_markers = [];

         var mar = createMarker(latitudeAndLongitude, info, iconRes, key);

         //arr with all markers
         all_markers.push(mar);

         console.log(arr_rest_mark);

         // fit map
         mapBounds.extend(latitudeAndLongitude);

    }

    function createMarker(pos, info, iconRes, t) {
       var popup = new google.maps.InfoWindow({content: info,maxWidth: 280, maxHeight: 100, disableAutoPan: true});
        var marker = new google.maps.Marker({
            icon: iconRes,
            position: pos,
            map: map,  // google.maps.Map
            title: t

        });
        google.maps.event.addListener(marker, 'click', function() {
        $('#infobox').parent().css('width', '100%');
          $('#infobox').parent().parent().css('overflow', 'hidden');
           popup.open(map, marker);
          map.panTo(marker.getPosition());
         console.log('click');
        });
        return marker;
    }


    map.fitBounds(mapBounds);
    console.log("fit map");
    }



}

