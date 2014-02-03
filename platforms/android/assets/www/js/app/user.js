function User(){
  this.log_in = function(){

   if(jQuery.isEmptyObject( localStorage.user)){
       var api = new Api;
       user = {};
       response = {}
       response = api.log_in();


   //    user['address'] = response['user']['field_addresses']['und']['0']['value'];
   //    user['uid'] = parseInt(response['user']['uid']);
   //    user['username'] = response['user']['name'];
   //    user['name'] = response['user']['field_name']['und'][0]['value'];
   //    user['mail'] = response['user']['mail'];
   //    user['lang'] =response['user']['field_language']['und'][0]['value'];
   //    user['token'] = get_token();
   //    user['password']= password;

   }
   else{
    alert('user already sing in');
   }

  };

  this.log_out = function(){
     if(! jQuery.isEmptyObject( JSON.parse(window.localStorage['user']))){
           var api = new Api;
           user = api.log_out();


       }
       else{

          alert('user must sign in before');
       }


  }

  this.log_up = function(){

     password   = $('form#logup #password').val();
     password_confirmation = $('form#logup #password_confirmation').val();
     login       = $('form#logup #login_f').val();
     mail       = $('form#logup #email').val();
     console.log(password +'  '+ password_confirmation)
     if(password == password_confirmation){

         name   = $('form#logup #user_name').val();

         if(jQuery.isEmptyObject( JSON.parse(window.localStorage['user']))){
               var api = new Api;
               api.log_up(login, name, mail, password, password_confirmation);

           }

           else{
             alert('user must sing out before');
           }

         }
         else{
           alert('bad password confirmation');
         }
  }
  this.update = function(){

     console.log('update');
     api = new Api;
     user = api.update();




  }

  this.orders = function(){
  if(window.localStorage['user']){
      if(!jQuery.isEmptyObject( JSON.parse(window.localStorage['user']))){
         console.log('------------------------orders---------------------------');
          api = new Api;
          orders = api.orders();
          window.localStorage['orders'] = JSON.stringify(orders);
          set_order_list();

      }
  }
  else{
    alert('user must sign in before');
    return false;
  }

  }

  this.location = function(){

    if (navigator.geolocation)
    {

       navigator.geolocation.getCurrentPosition(showLocation, showError);

    } else {
        alert("Geolocation is not supported by this browser.")
    }

    }
   function showError(error)
      {

        //window.localStorage['user_location'] =  JSON.stringify([48.620799999999996, 22.287882999999997]);
         window.localStorage['user_location'] =  JSON.stringify([]);
           coords = JSON.parse(window.localStorage['user_location']);
         if(coords.length == 0){
            $('#search #location-label span.ui-btn-inner .ui-icon').removeClass('ui-icon-checkbox-on');
            $('#search #location-label span.ui-btn-inner .ui-icon').addClass('ui-icon-checkbox-off');
            $('#in-location').attr('checked', false);

          }

        switch(error.code)
        {
          case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
          case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
          case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
          case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.");
              break;
        }
      }
      function showLocation(position)
      {


        window.localStorage['user_location'] =  JSON.stringify([position.coords.latitude, position.coords.longitude]);
        var map = new GoogleMap();
        collection = JSON.parse(window.localStorage['map_collection']);

        map.initialize(collection, 'set');
      }


this.set_coord = function(){

    if (navigator.geolocation)
    {

      navigator.geolocation.getCurrentPosition(coordShowLocation, showError);

    } else {
        alert("Geolocation is not supported by this browser.")
    }

    }
      function coordShowLocation(position)
      {

        window.localStorage['user_location'] =  JSON.stringify([position.coords.latitude, position.coords.longitude]);

      }




}