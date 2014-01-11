function User(){
  this.log_in = function(){

   if(jQuery.isEmptyObject( JSON.parse(localStorage['user']))){
       var api = new Api;
       user = {};
       response = {}
       response = api.log_in();
       console.log("-----user----------"+user+"------------------------");
       console.log("-----response----------"+response+"------------------------");

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
     if(! jQuery.isEmptyObject( JSON.parse(localStorage['user']))){
           var api = new Api;
           user = api.log_out();


       }
       else{
       console.log("---------------log in before-----------------------");
          alert('user must sign in before');
       }


  }

  this.log_up = function(){
  console.log("----------------------log up-------------------------");
     password   = $('form#logup #password').val();
     password_confirmation = $('form#logup #password_confirmation').val();
     login       = $('form#logup #login_f').val();
     mail       = $('form#logup #email').val();
     console.log(password +'  '+ password_confirmation)
     if(password == password_confirmation){

         name   = $('form#logup #user_name').val();
         //address    = $('form#logup #address').val();
         //lang    = $('form#logup #lang').val();

         if(jQuery.isEmptyObject( JSON.parse(localStorage['user']))){
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
    if(!jQuery.isEmptyObject( JSON.parse(localStorage['user']))){
     console.log('------------------------orders---------------------------');
  api = new Api;
  orders = api.orders();
  localStorage['orders'] = JSON.stringify(orders);
  set_order_list();

  }
  else{
    alert('user must sign in before');
    return false;
  }

  }
}

 function user_log_in(){

   if(jQuery.isEmptyObject( JSON.parse(localStorage['user']))){

       user = {};
       response = {}
       response = api_log_in();
       console.log("-----user----------"+user+"------------------------");
       console.log("-----response----------"+response+"------------------------");

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