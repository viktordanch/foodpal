function Api(){



    this.log_in = function(){

    var name = $('#log_in form#login #user_login').val();
    var password = $('#log_in form#login #user_password').val();


    var answer= {};
    var user = {};

    window_location = window.location['hash'];
     spiner_on('#account');
    $.ajax({

               type: 'POST',

               url: 'http://foodpal.com/api/users/sign_in',

               dataType: 'json',
               data: {user: {login: name, password: password}},
               success: function(data) {
                  $('#log_in').dialog('close');
                  spiner_off('#account');
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
                   setTimeout("open_alert('sign in success');",1000);
                   //if(window_location =='#ordering-page&ui-state=dialog'){
                   //      window.location['href'] = "#ordering-page";
                   //}else{
                   //  window.location.href = "#profile-info";
                   //}
                  close_login();
                    },
               error: function(data) {
                   spiner_off('#account');

                   var answer = data;

                   var user = {};
                   var message = '';
                   var errors = JSON.parse(answer['responseText']);
                   for(key in errors  ){

                   var error = errors[key][0];

                   message = message  +key+': ' +error + '\n';

                   }


                   open_alert(message);

                   return false;
               }


           });

  return user;

}

  this.log_out = function(name, password){

    user = JSON.parse(window.localStorage['user'])
      spiner_on('#account');
         $.ajax({
                    type: 'POST',
                    url: 'http://foodpal.com/api/users/destroy',

                    data:  {authentication_token: user['token']},

                    success: function(data) {
                      spiner_off('#account');
                      var answer = data;
                      window.localStorage['user'] = JSON.stringify({});
                     open_alert( answer['info']);
                     open_login();
                     },
                    error: function(data) {
                      spiner_off('#account');
                       var answer = data;

                       var user = {};
                       var message = '';
                       var errors = JSON.parse(answer['responseText']);
                       for(key in errors  ){

                       var error = errors[key][0];

                       message = message  +key+': ' +error + '\n';

                       }


                       open_alert(message);



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
     spiner_on('#account');

   $.ajax({
              type: 'POST',
              url: 'http://foodpal.com/api/users/create',

              dataType: 'json',
              data:  {user: user},
              success: function(data) {
                spiner_off('#account');

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

                   setTimeout("open_alert('sign up success');", 2000);

             },
              error: function(data) {
                spiner_off('#account');

               var answer = data;

               user = {};
               message = '';
               errors = JSON.parse(answer['responseText']);
               for(key in errors  ){

               error = errors[key][0];

               message = message  +key+': ' +error + '<br />';

               }

                setTimeout("open_alert(message);", 1000);
               



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

      spiner_on('#profile-info');

   $.ajax({
           type: 'GET',
           url: 'http://foodpal.com/api/users/update',


           data:  {
                authentication_token: token,
                user: user
              },

           success: function(data) {
             spiner_off('#profile-info');



             user['token'] = token;
             window.localStorage['user'] = JSON.stringify(user);

             open_alert('perofile updated success');
            },
           error: function(data) {
             spiner_off('#profile-info');
               var answer = data;

                var user = {};
                var message = '';
                var errors = JSON.parse(answer['responseText']);
                for(key in errors  ){

                var error = errors[key][0];

                message = message  +key+': ' +error + '\n';

                }


                open_alert(message);



                return false;

           },



       });

  return user_session;


  }

  this.orders = function(){
  var user_session = JSON.parse(window.localStorage['user']);
  var orders = [];
    spiner_on('#my-orders');

    $.ajax({
               type: 'POST',
               url:'http://foodpal.com/api/users/orders',

               data:  {authentication_token: user_session['token']},
               success: function(data) {
                spiner_off('#my-orders');

                window.localStorage['orders'] = JSON.stringify(data);
                set_order_list();
               },
               error: function(data) {
                 spiner_off('#my-orders');
                 open_alert('No connection');
                },

       });


  window.location.href = "#my-orders";
  return orders;



  }
  this.update_orders = function(){
  var user_session = JSON.parse(window.localStorage['user']);

  var orders = [];

     spiner_on('#my-orders');

    $.ajax({
               type: 'POST',
               url: ('http://foodpal.com/api/users/orders'),

               data:  {authentication_token: user_session['token']},
              success: function(data) {
                  spiner_off('#my-orders');

                  window.localStorage['orders'] = JSON.stringify(data);
                  set_order_list()
                  open_alert('update success');
               },
              error: function(data) {
                   spiner_off('#my-orders');
                   open_alert('No connection');
               },

       });


  window.location.href = "#my-orders";
  return orders;



  }

 this.set_params_for_search = function(){

  var cusines = [];
  var page = '#search'
  spiner_on(page);

   $.ajax({

                url: 'http://foodpal.com/api/restaurants/set_select_params',

                 crossDomain: true,
                 dataType: 'json',
                 type: 'GET',
                 data: {},
                 success: function(data) {
                     var answer = data;
                     answer['cuisines'].unshift('Cuisine');



                     answer['cities'].unshift('City');


                    delete window.localStorage.cusines;
                     window.localStorage['cusines'] = JSON.stringify(answer['cuisines']);
                     delete window.localStorage.city;
                     window.localStorage['city'] = JSON.stringify(answer['cities']);

                     set_search_selects();
                     spiner_off('#search');

                 },
                 error: function(data) {
                 spiner_off('#search');
                    open_alert('No connection with server');
                  }


             });




 }

 this.search_by_params = function(){


   if(window.localStorage['cusines'] == "" || window.localStorage['city'] == ""){
     open_alert('Pleas try again');
     window.location.href = "";

   }else{
        spiner_on('#search');
        var parametr = $('#search-value').val();

  
        var city = $.trim($('#selectCity-button span span span').text());
 
        var cusine  = $.trim($('#selectCuisine-button span span span').text());

    
        var rating= $.trim($('#selectRating-button span span span').text());
        if(localStorage.user_location){
          var user_location = JSON.parse(window.localStorage['user_location']);
        }
        var data = {city: city, cusine: cusine, rating: rating, search_parametr: parametr, user_location: user_location};
        var restaurants = [];
       
        $.ajax({

                url: ('http://foodpal.com/api/restaurants/search_by_params'),
                

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

                     },
                error: function(data) {
                spiner_off('#search');

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
                     },
               error: function(data) {

                }
           });
     }

     this.create_cart = function(){

     //resr_id = $("#restouran-card .control .set_menu").attr('id' );

     if( window.localStorage.user && window.localStorage.user_cart ){


           spiner_on('#ordering-page');
           var   user = JSON.parse(window.localStorage['user']);
         var   loc_id = JSON.parse(window.localStorage['current_restaurant'])['location_id'];
            var user_cart = JSON.parse(window.localStorage['user_cart']);

           url = 'http://foodpal.com/orders/index?loc_id='+loc_id+'&session='+user['token']+'';


           

           $.ajax({
                      type: 'GET',

                       url: 'http://foodpal.com/api/orders/create_cart',
                       dataType: 'json',
                       data: {authentication_token: user['token'], cart: user_cart } ,
                       success: function(data) {
                         spiner_off('#ordering-page');
                          try {
                               var answer = data;

                               var   user = JSON.parse(window.localStorage['user']);


                                 url = 'http://foodpal.com/orders/index?loc_id='+loc_id+'&session='+user['token']+'';

                                
                                   //window.open(url, '_blank', 'location=yes');
                                   sendToApp("search",url);

                           } catch(e) {

                           open_alert('connection wrong');
                           return false;
                         }

                            },
                       error: function(data) {
                       spiner_off('#ordering-page');

                            var  answer = data;

                             var  user = {};
                             var  message = '';
                              if(answer.responseText == 'success'){
                                  var   user = JSON.parse(window.localStorage['user']);
                                url = 'http://foodpal.com/orders/index?loc_id='+loc_id+'&session='+user['token']+'';


                                window.open(url, '_blank', 'location=yes');
                              // sendToApp("search",url);


                              }else{
                                try {
                                 var    errors = JSON.parse(answer['responseText']);

                                    for(key in errors  ){
                                    error = errors[key][0];
                                    message = message  +key+': ' +error + '\n';
                                    }
                                     open_alert('Pleas sign in before');

                                     return false;
                                  } catch(e) {
                                    open_alert('No connection');
                                    return false;
                                  }

                              }

                        }
                   });



        }else{

        open_alert('user must sing in before');
        }
    }






}

