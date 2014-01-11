function Api(){



    this.log_in = function(){

    var name = $('#log_in form#login #user_login').val();
    var password = $('#log_in form#login #user_password').val();

    console.log(name+' '+ password);
    answer= {};
    user = {};



    $.ajax({
               type: 'POST',
               url: 'http://localhost:3000/api/users/sign_in',
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
                   set_profile_info();
                   window.location.href = "#profile-info";
                   alert('sign in success');
                   console.log(data)  },
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
                    url: 'http://localhost:3000/api/users/destroy',
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
              url: 'http://localhost:3000/api/users/create',
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
           url: 'http://127.0.0.1:3000/api/users/update',

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
               url: 'http://localhost:3000/api/users/orders',
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
               url: 'http://localhost:3000/api/users/orders',
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
                 type: 'GET',
                 url: 'http://127.0.0.1:3000/api/restaurants/set_select_params',
                 dataType: 'json',
                 data: {},
                 success: function(data) {
                     answer = data;
                     localStorage['cusines'] = JSON.stringify(answer['cusines']);
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

  parametr = $('#search-value').val();
  console.log( parametr);
    console.log( parametr);
       cities = JSON.parse(localStorage['city']);
      city = cities[parseInt($('#selectCity option:selected').val())];
      cusines = JSON.parse(localStorage['cusines']);
      cusine  = cusines[parseInt( $('#selectCuisine option:selected').val())];

      ratings = JSON.parse(localStorage['rating']);
      rating= ratings[parseInt( $('#selectRating option:selected').val())];
      data = {city: city, cusine: cusine, rating: rating, search_parametr: parametr};
     restaurants = [];

     $.ajax({
              type: 'GET',
               url: 'http://127.0.0.1:3000/api/restaurants/search_by_params',
               dataType: 'json',
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

     this.set_menu = function(){
     resr_id = $("#restouran-card .control .set_menu").attr('id' );

     $.ajax({
              type: 'GET',
               url: 'http://127.0.0.1:3000/api/restaurants/set_menu',
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






}

 function api_log_in(){

    var name = $('#log_in form#login #user_login').val();
    var password = $('#log_in form#login #user_password').val();

    console.log(name+' '+ password);
    answer= {};
    user = {};



    $.ajax({
               type: 'POST',
               url: 'http://127.0.0.1:3000/api/users/sign_in',
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
                   set_profile_info();
                   window.location.href = "#profile-info";
                   alert('sign in success');
                   console.log(data)  },
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
