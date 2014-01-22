function Api(){



    this.log_in = function(){

    var name = $('#log_in form#login #user_login').val();
    var password = $('#log_in form#login #user_password').val();

    console.log(name+' '+ password);
    answer= {};
    user = {};
    console.log(window.location['hash']== "#ordering-page&ui-state=dialog");
    window_location = window.location['hash'];

    $.ajax({

               type: 'POST',
               url: (url + '/api/users/sign_in'),
               dataType: 'json',
               data: {user: {login: name, password: password}},
               success: function(data) {
                   answer = data;

                   user['token'] = answer['auth_token']      ;
                   user['login'] = answer['user']['login']   ;
                   user['name'] = answer['user']['name'];
                   user['language'] = answer['user']['language'];
                   user['email'] = answer['user']['email'];
                   user['address'] = answer['user']['address'];
                   user['password'] = password;

                   localStorage['user'] = JSON.stringify(user);
                   console.log("--------sign in success-------------------------------")
                   set_profile_info();
                   alert('sign in success');
                   if(window_location =='#ordering-page&ui-state=dialog'){
                      user_cart = JSON.parse(localStorage['user_cart']);
                      user = JSON.parse(localStorage['user']);
                      loc_id = JSON.parse(localStorage['current_restaurant'])['location_id'];
                      //set url
                      $('#ordering-page #create_cart_link').attr('href', 'http://192.168.1.52:3000/orders/index?loc_id='+loc_id+'&session='+user['token']+'')
                      window.location['href'] = "#ordering-page";
                   }else{
                     window.location.href = "#profile-info";
                   }
                    },
               error: function(data) {

                   answer = data;
                   console.log(data);
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
               }


           });

  return user;

}

  this.log_out = function(name, password){
    console.log('log out');
    user = JSON.parse(localStorage['user'])
           console.log("---------------log out------------------------");
         //  localStorage['user'] = JSON.stringify({});
         $.ajax({
                    type: 'POST',
                    url: (url + '/api/users/destroy'),
                    data:  {authentication_token: user['token']},

                    success: function(data) {
                      answer = data;
                      localStorage['user'] = JSON.stringify({});
                     alert( answer['info']);
                     },
                    error: function(data) {
                       answer = data;
                       console.log(data);
                       user = {};
                       message = '';
                       errors = JSON.parse(answer['responseText']);
                       for(key in errors  ){

                       error = errors[key][0];

                       message = message  +key+': ' +error + '\n';

                       }


                       alert(message);


                       console.log(data['responseText'])
                       return false; },


                });
    }

  this.log_up = function(login, name, mail,  password, password_confirmation){
   console.log("-------------------api log up----------------------------");
   console.log(name+' '+ password);
   answer= {};
   user = {};
   user['login'] = login;
   user['name'] = name;
   user['password']= password;
   user['password_confirmation']= password;
   user['email'] = mail;
  // user['address'] = address;
   //user['language'] = lang;
   console.log( '------------------------------------create------------------------');
   console.log(user);
   $.ajax({
              type: 'POST',
              url: (url + '/api/users/create'),
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

                   localStorage['user'] = JSON.stringify(user);
                   set_profile_info();
                   window.location.href = "#profile-info";
                   alert('sign up success');

              console.log(data) },
              error: function(data) {

               answer = data;

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
   console.log("-------------------api log up----------------------------");
   user_session = JSON.parse(localStorage['user']);
    var form = $('form#profile-update');
   user = {};
   user['login'] =  $('#login_f', form).val();;
   user['name'] = $('#user-name', form).val();
   user['password']= $('#password', form).val();
   user['password_confirmation']= $('#password', form).val();
   user['email'] =  $('#email', form).val();
   //user['address'] = $('#address', form).val();
   //user['language'] =  $('#lang', form).val();
   token = JSON.parse(localStorage['user'])["token"];
   console.log('--------------------token-----------------');
   console.log(token);
      console.log('--------------------user-----------------');
   console.log(user);

   $.ajax({
           type: 'GET',
           url: ( url + '/api/users/update'),

           data:  {
                authentication_token: token,
                user: user
              },

           success: function(data) {
            console.log(data)

             localStorage['user'] = JSON.stringify(user);
             alert('perofile updated success');
            },
           error: function(data) {
               answer = data;
                console.log(data);
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

  return user_session;


  }

  this.orders = function(){
  user_session = JSON.parse(localStorage['user']);
  orders = [];


    $.ajax({
               type: 'POST',
               url: (url + '/api/users/orders'),
               data:  {authentication_token: user['token']},
               success: function(data) {
                console.log(data) ;
                localStorage['orders'] = JSON.stringify(data);
                set_order_list();
               },
               error: function(data) { console.log(data['responseText']) },

       });


  window.location.href = "#my-orders";
  return orders;



  }
  this.update_orders = function(){
  user_session = JSON.parse(localStorage['user']);
  orders = [];


    $.ajax({
               type: 'POST',
               url: (url + '/api/users/orders'),
               data:  {authentication_token: user['token']},
              success: function(data) {
              console.log(data);
              localStorage['orders'] = JSON.stringify(data);
              set_order_list()
              alert('update success');
               },
              error: function(data) {
              alert('error') },

       });


  window.location.href = "#my-orders";
  return orders;



  }

 this.set_params_for_search = function(){
 console.log("-------------set_params_for_search------------------------");
  cusines = [];
   $.ajax({
                 url: (url + '/api/restaurants/set_select_params'),
                 crossDomain: true,
                 dataType: 'json',
                 type: 'GET',
                 data: {},
                 success: function(data) {
                     answer = data;
                     answer['cuisines'].unshift('Cuisine');
                     answer['cities'].unshift('City');
                     localStorage['cusines'] = JSON.stringify(answer['cuisines']);
                     localStorage['city'] = JSON.stringify(answer['cities']);
                     set_search_selects();
                     console.log(data)  },
                 error: function(data) {
                    console.log(data['responseText']);
                  }


             });




 }

 this.search_by_params = function(){
 console.log("------------search by params------------------------");
 console.log(localStorage['cusines']);
 console.log(localStorage['city']);
   if(localStorage['cusines'] == "" || localStorage['city'] == ""){
     alert('Pleas try again');
     window.location.href = "";

   }else{
        parametr = $('#search-value').val();
        console.log( parametr);
        console.log( parametr);
        cities = JSON.parse(localStorage['city']);
        city = cities[parseInt($('#selectCity option:selected').val())];
        cusines = JSON.parse(localStorage['cusines']);
        cusine  = cusines[parseInt( $('#selectCuisine option:selected').val())];

        ratings = JSON.parse(localStorage['rating']);
        rating= ratings[parseInt( $('#selectRating option:selected').val())];
        user_location = JSON.parse(localStorage['user_location']);
        data = {city: city, cusine: cusine, rating: rating, search_parametr: parametr, user_location: user_location};
        restaurants = [];

        $.ajax({

                url: (url + '/api/restaurants/search_by_params'),
                crossDomain: true,
                dataType: 'json',
                type: 'GET',
                data: data ,
                success: function(data) {
                    answer = data;
                    answer.locations
                     localStorage['selected_restaurants'] = JSON.stringify(answer.locations);
                    $('h4.found-result-count .result').html(answer.locations.length);

                    console.log(data)  },
                error: function(data) {
                   console.log(data['responseText']);
                 }
            });

   }

 }

     this.set_menu = function(){
     resr_id = $("#restouran-card .control .set_menu").attr('id' );

     $.ajax({
              type: 'GET',
               url: (url + '/api/restaurants/set_menu'),
               dataType: 'json',
               data: {rest_id: resr_id} ,
               success: function(data) {
                   answer = data['menu'];
                   localStorage['menu']= JSON.stringify(answer);
                   create_menu_list();
                   console.log(data)  },
               error: function(data) {
                  console.log(data['responseText']);
                }
           });
     }

     this.create_cart = function(){
     //resr_id = $("#restouran-card .control .set_menu").attr('id' );
     user = JSON.parse(localStorage['user']);
     cart = JSON.parse(localStorage['user_cart']);
     $.ajax({
              type: 'GET',
               url: (url + '/api/orders/create_cart'),
               dataType: 'json',
               data: {authentication_token: user['token'], cart: cart } ,
               success: function(data) {
                   answer = data;

                   console.log(data)  },
               error: function(data) {
                     answer = data;
                      console.log(data);
                      user = {};
                      message = '';
                      try {
                        errors = JSON.parse(answer['responseText']);
                        for(key in errors  ){
                        error = errors[key][0];
                        message = message  +key+': ' +error + '\n';
                        }
                         alert('Pleas sign in before');
                         console.log(data['responseText'])
                         return false;
                      } catch(e) {
                        return false;
                      }
                }
           });
     }






}

