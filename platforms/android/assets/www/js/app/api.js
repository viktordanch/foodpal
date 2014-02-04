function Api(){



    this.log_in = function(){

    var name = $('#log_in form#login #user_login').val();
    var password = $('#log_in form#login #user_password').val();

    console.log(name+' '+ password);
    var answer= {};
    var user = {};
    console.log(window.location['hash']== "#ordering-page&ui-state=dialog");
    window_location = window.location['hash'];

    $.ajax({

               type: 'POST',
               //url: 'http://perechin.net:3000/api/users/sign_in',
               url: 'http://192.168.1.52:3000/api/users/sign_in',
               dataType: 'json',
               data: {user: {login: name, password: password}},
               success: function(data) {
                   var answer = data;
                   var user = {};
                   user['token'] = answer['auth_token']      ;
                   user['login'] = answer['user']['login']   ;
                   user['name'] = answer['user']['name'];
                   user['language'] = answer['user']['language'];
                   user['email'] = answer['user']['email'];
                   user['address'] = answer['user']['address'];
                   user['password'] = password;

                   window.localStorage['user'] = JSON.stringify(user);

                   set_profile_info();
                   alert('sign in success');
                   if(window_location =='#ordering-page&ui-state=dialog'){
                      var user_cart = JSON.parse(window.localStorage['user_cart']);
                      var user = JSON.parse(window.localStorage['user']);
                      var loc_id = JSON.parse(window.localStorage['current_restaurant'])['location_id'];
                      //set url
                      //$('#ordering-page #create_cart_link').attr('href', '#');
                      var url = 'http://perechin.net:3000/orders/index?loc_id='+loc_id+'&session='+user['token']+'';
                     // url = 'http://192.168.1.52:3000/orders/index?loc_id='+loc_id+'&session='+user['token']+'';

                       // $('#ordering-page #create_cart_link').attr('href',('http://perechin.net:3000' + '/orders/index?loc_id='+loc_id+'&session='+user['token']+''))

                      window.location['href'] = "#ordering-page";
                   }else{
                     window.location.href = "#profile-info";
                   }
                    },
               error: function(data) {

                   var answer = data;
                   console.log(data);
                   var user = {};
                   var message = '';
                   var errors = JSON.parse(answer['responseText']);
                   for(key in errors  ){

                   var error = errors[key][0];

                   message = message  +key+': ' +error + '\n';

                   }


                   alert(message);


                   console.log(data['responseText'])
                   return false;
               }


           });

  return user;

}

  this.log_out = function(name, password){
    console.log('log out');
    user = JSON.parse(window.localStorage['user'])
         $.ajax({
                    type: 'POST',
                    url: 'http://perechin.net:3000/api/users/destroy',
                    data:  {authentication_token: user['token']},

                    success: function(data) {
                      var answer = data;
                      window.localStorage['user'] = JSON.stringify({});
                     alert( answer['info']);
                     },
                    error: function(data) {
                       var answer = data;
                       console.log(data);
                       var user = {};
                       var message = '';
                       var errors = JSON.parse(answer['responseText']);
                       for(key in errors  ){

                       var error = errors[key][0];

                       message = message  +key+': ' +error + '\n';

                       }


                       alert(message);


                       console.log(data['responseText'])
                       return false; },


                });
    }

  this.log_up = function(login, name, mail,  password, password_confirmation){
   var answer= {};
   var user = {};
   user['login'] = login;
   user['name'] = name;
   user['password']= password;
   user['password_confirmation']= password;
   user['email'] = mail;

   $.ajax({
              type: 'POST',
              url: 'http://perechin.net:3000/api/users/create',
              dataType: 'json',
              data:  {user: user},
              success: function(data) {
                   answer = data;
                   user['token'] = answer['auth_token']      ;
                   user['login'] = answer['user']['login']   ;
                   user['name'] = answer['user']['name'];
                   user['language'] = answer['user']['language'];
                   user['email'] = answer['user']['email'];
                   user['address'] = answer['user']['address'];

                   window.localStorage['user'] = JSON.stringify(user);
                   set_profile_info();
                   window.location.href = "#profile-info";
                   alert('sign up success');

              console.log(data) },
              error: function(data) {

               var answer = data;

               user = {};
               message = '';
               errors = JSON.parse(answer['responseText']);
               for(key in errors  ){

               error = errors[key][0];

               message = message  +key+': ' +error + '\n';

               }


               alert(message);


               console.log(data['responseText'])
               return false;
              },

          });


   return user;


  }

  this.update = function(name, name, mail, address, password, password_confirmation ){

   user_session = JSON.parse(window.localStorage['user']);
    var form = $('form#profile-update');
   var user = {};
   user['login'] =  $('#login_f', form).val();;
   user['name'] = $('#user-name', form).val();
   user['password']= $('#password', form).val();
   user['password_confirmation']= $('#password', form).val();
   user['email'] =  $('#email', form).val();
   token = JSON.parse(window.localStorage['user'])["token"];
   console.log('--------------------token-----------------');
   console.log(token);
      console.log('--------------------user-----------------');
   console.log(user);

   $.ajax({
           type: 'GET',
           url: 'http://perechin.net:3000/api/users/update',

           data:  {
                authentication_token: token,
                user: user
              },

           success: function(data) {
            console.log(data)

             window.localStorage['user'] = JSON.stringify(user);
             alert('perofile updated success');
            },
           error: function(data) {
               var answer = data;
                console.log(data);
                var user = {};
                var message = '';
                var errors = JSON.parse(answer['responseText']);
                for(key in errors  ){

                var error = errors[key][0];

                message = message  +key+': ' +error + '\n';

                }


                alert(message);


                console.log(data['responseText'])
                return false;

           },



       });

  return user_session;


  }

  this.orders = function(){
  var user_session = JSON.parse(window.localStorage['user']);
  var orders = [];
    console.log(user_session['token']);

    $.ajax({
               type: 'POST',
               url:'http://192.168.1.52:3000/api/users/orders',
               data:  {authentication_token: user_session['token']},
               success: function(data) {
                console.log(data) ;
                window.localStorage['orders'] = JSON.stringify(data);
                set_order_list();
               },
               error: function(data) { console.log(data['responseText']) },

       });


  window.location.href = "#my-orders";
  return orders;



  }
  this.update_orders = function(){
  var user_session = JSON.parse(window.localStorage['user']);

  var orders = [];

   console.log(user_session['token']);

    $.ajax({
               type: 'POST',
               url: ('http://192.168.1.52:3000/api/users/orders'),
               data:  {authentication_token: user_session['token']},
              success: function(data) {
                  console.log(data);
                  window.localStorage['orders'] = JSON.stringify(data);
                  set_order_list()
                  alert('update success');
               },
              error: function(data) {
                   alert('error');
               },

       });


  window.location.href = "#my-orders";
  return orders;



  }

 this.set_params_for_search = function(){
 console.log("-------------set_params_for_search------------------------");
  var cusines = [];
  var page = '#search'
  spiner_on(page);

   $.ajax({
                 //url: 'http://perechin.net:3000/api/restaurants/set_select_params',
                 url: 'http://192.168.1.52:3000/api/restaurants/set_select_params',
                 crossDomain: true,
                 dataType: 'json',
                 type: 'GET',
                 data: {},
                 success: function(data) {
                     var answer = data;
                     answer['cuisines'].unshift('Cuisine');
                     answer['cuisines'].unshift('Close');

                    console.log(answer['cuisines']);
                     answer['cities'].unshift('City');

                     answer['cities'].unshift('Close');
                    delete window.localStorage.cusines;
                     window.localStorage['cusines'] = JSON.stringify(answer['cuisines']);
                     delete window.localStorage.city;
                     window.localStorage['city'] = JSON.stringify(answer['cities']);

                     set_search_selects();
                     spiner_off('#search');

                 },
                 error: function(data) {
                 spiner_off('search');
                    alert('No connection with server');
                  }


             });




 }

 this.search_by_params = function(){
  console.log("-------------_search--------fgh----------------");

   if(window.localStorage['cusines'] == "" || window.localStorage['city'] == ""){
     alert('Pleas try again');
     window.location.href = "";

   }else{
        spiner_on('#search');
        var parametr = $('#search-value').val();
        console.log( parametr);
        console.log( parametr);
        var cities = JSON.parse(window.localStorage['city']);
        var city = cities[parseInt($('#selectCity option:selected').val())];
        var  cusines = JSON.parse(window.localStorage['cusines']);
        var cusine  = cusines[parseInt( $('#selectCuisine option:selected').val())];

        var ratings = JSON.parse(window.localStorage['rating']);
        var rating= ratings[parseInt( $('#selectRating option:selected').val())];
        if(localStorage.user_location){
          var user_location = JSON.parse(window.localStorage['user_location']);
        }
        var data = {city: city, cusine: cusine, rating: rating, search_parametr: parametr, user_location: user_location};
        var restaurants = [];

        $.ajax({

                //url: ('http://perechin.net:3000/api/restaurants/search_by_params'),
                url: ('http://192.168.1.52:3000/api/restaurants/search_by_params'),
                crossDomain: true,
                dataType: 'json',
                type: 'GET',
                data: data ,
                success: function(data) {
                  spiner_off('#search');
                   var  answer = data;
                    answer.locations
                     window.localStorage['received_restaurants'] = JSON.stringify(answer.locations);
                     window.localStorage['selected_restaurants'] = window.localStorage['received_restaurants'];
                    $('h4.found-result-count .result').html(answer.locations.length);

                    console.log(data)  },
                error: function(data) {
                spiner_off('#search');
                   console.log(data['responseText']);
                 }
            });

   }

 }

     this.set_menu = function(){
     var resr_id = $("#restouran-card .control .set_menu").attr('id' );

     $.ajax({
              type: 'GET',
               url: (url + '/api/restaurants/set_menu'),
               dataType: 'json',
               data: {rest_id: resr_id} ,
               success: function(data) {
                   var answer = data['menu'];
                   window.localStorage['menu']= JSON.stringify(answer);
                   create_menu_list();
                   console.log(data)  },
               error: function(data) {
                  console.log(data['responseText']);
                }
           });
     }

     this.create_cart = function(){
     console.log('create cart');
     console.log(window.localStorage.user);
     console.log(window.localStorage.user_cart);
     //resr_id = $("#restouran-card .control .set_menu").attr('id' );

     if( window.localStorage.user && window.localStorage.user_cart ){


           spiner_on('#ordering-page');
           var   user = JSON.parse(window.localStorage['user']);
         var   loc_id = JSON.parse(window.localStorage['current_restaurant'])['location_id'];
        //var    url = 'http://perechin.net:3000/orders/index?loc_id='+loc_id+'&session='+user['token']+'';
           url = 'http://192.168.1.52:3000/orders/index?loc_id='+loc_id+'&session='+user['token']+'';
           console.log(url);
           alert('pleas wait a few minutes');
            window.open(url, '_blank', 'location=yes');
            //window.open(url, "_system")

           $.ajax({
                      type: 'GET',
                      // url: ('http://perechin.net:3000' + '/api/orders/create_cart'),
                       url: ('http://192.168.1.52:3000' + '/api/orders/create_cart'),
                       dataType: 'json',
                       data: {authentication_token: user['token'], cart: cart } ,
                       success: function(data) {
                         spiner_off('#ordering-page');
                          try {
                               var answer = data;
                              var  user_cart = JSON.parse(window.localStorage['user_cart']);
                             var   user = JSON.parse(window.localStorage['user']);
                             var   loc_id = JSON.parse(window.localStorage['current_restaurant'])['location_id'];
                            var    url = 'http://perechin.net:3000/orders/index?loc_id='+loc_id+'&session='+user['token']+'';
                               //url = 'http://192.168.1.52:3000/orders/index?loc_id='+loc_id+'&session='+user['token']+'';
                               console.log(url);
                               alert('pleas wait a few minutes');




                           } catch(e) {

                           alert('connection wrong');
                           return false;
                         }

                            },
                       error: function(data) {
                       spiner_off('#ordering-page');
                             console.log('error');
                             console.log('error');
                             console.log('error');
                            var  answer = data;
                              console.log(data);
                             var  user = {};
                             var  message = '';
                              if(answer.responseText == 'success'){

                                alert('pleas wait a few minutes');
                               var    user = JSON.parse(window.localStorage['user']);
                               var   loc_id = JSON.parse(window.localStorage['current_restaurant'])['location_id'];
                               var   url = 'http://192.168.1.52:3000/orders/index?loc_id='+loc_id+'&session='+user['token']+'';
                                 //url = 'http://perechin.net:3000/orders/index?loc_id='+loc_id+'&session='+user['token']+'';
                                 window.open(url, "_system");

                              }else{
                                try {
                                 var    errors = JSON.parse(answer['responseText']);
                                    console.log( answer['responseText']);
                                    console.log( errors == '');
                                    for(key in errors  ){
                                    error = errors[key][0];
                                    message = message  +key+': ' +error + '\n';
                                    }
                                     alert('Pleas sign in before');
                                     console.log(data['responseText'])
                                     return false;
                                  } catch(e) {
                                    console.log('error')
                                    console.log(e)
                                    return false;
                                  }

                              }

                        }
                   });



        }else{

        alert('user must sing in before');
        }
    }






}

