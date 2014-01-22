   // city, country, rating list

   localStorage['map_collection'] = localStorage['user_location'] = JSON.stringify([])
   url = 'http://perechin.net:3000'
   var city = [];
   localStorage['counties'] = city;
   var cart = ['item1', 'item2', 'item2', 'item3'];
   var cusines = [];
   localStorage['cusines'] = cusines;
   var rating = ['Rating', 1, 2, 3, 4, 5 ];
   localStorage['rating'] = JSON.stringify(rating);

   // restaurant list
   var restaurant = {};


//   restaurant['rest1']={id: 1, name: 'Rest_1', coord: ['25.9347377', '-80.1372757'], logo: 'http://foodpal.com/uploadedfiles/1381263632Screen%20Shot%202013-10-08%20at%204.17.42%20PM.png',  site: 'www.google.com', address: 'One Miami Tovel 335 S. Biscayne Blvd. (SE 3rd St.) Miami, FL 33131', city: ['Tallahassee','Miami','Miami Beach'], cusines: ['American','Appetizers','Argentinean','Armenian'], rating: ["3"]};
//   restaurant['rest2']={id: 2, name: 'Rest_2', coord: ['26.1584640', '-80.1176430'], logo: 'http://foodpal.com/uploadedfiles/1381263632Screen%20Shot%202013-10-08%20at%204.17.42%20PM.png', site: 'www.google.com', address: 'One Miami Tovel 335 S. Biscayne Blvd. (SE 3rd St.) Miami, FL 33131',  city: ['Tallahassee','Fort Lauderdale'], cusines: ['American','Appetizers','Argentinean','Armenian'], rating: ["3"]};
//   restaurant['rest3']={id: 3, name: 'Rest_3', coord: ['27.6237377', '-80.3907679'], logo: 'http://foodpal.com/uploadedfiles/1381263632Screen%20Shot%202013-10-08%20at%204.17.42%20PM.png', site: 'www.google.com', address: 'One Miami Tovel 335 S. Biscayne Blvd. (SE 3rd St.) Miami, FL 33131',  city: ['Vero Beach','Miami'], cusines: ['American','Appetizers','Argentinean','Armenian'], rating: ["4"]};

   rest_menu = {};
   localStorage['rest_menu'] = JSON.stringify(rest_menu);



   // restaurant card

   rest = {};

//    rest_menu['1']= {'First courses': {first_1: '5$' , first_2: '10$'}, 'Main Courses': {main_1:  '6$' , main_2: '12$'},
//     'Desserts': {dessert_1:  '5$' , dessert_2: '10$'},'Drinks': {drink1_1:  '5$' , drink_2: '10$'},
//     'Other Dishes': {other_1: '5$',other_2: '5$'}
//    };
//    rest_menu['2']= {first_c: {first_1: '5$' , first_2: '10$'}, main_c: {main_1:  '6$' , main_2: '12$'},
//     dessert: {dessert_1:  '5$' , dessert_2: '10$'},drinks: {drink1_1:  '5$' , drink_2: '10$'},
//     other: {other_1: '5$',other_2: '5$'}
//    };
//    rest_menu['3']= {first_c: {first_1: '5$' , first_2: '10$'}, main_c: {main_1:  '6$' , main_2: '12$'},
//     dessert: {dessert_1:  '5$' , dessert_2: '10$'},drinks: {drink1_1:  '5$' , drink_2: '10$'},
//     other: {other_1: '5$',other_2: '5$'}
//    };


    // user cart

  user_cart ={};
  localStorage['user_cart'] = JSON.stringify(user_cart);


   localStorage['rest'] = JSON.stringify(rest);
   localStorage['restaurant'] = JSON.stringify({});
   localStorage['selected_restaurants'] = JSON.stringify({});


   localStorage['user'] = JSON.stringify({});

    localStorage['orders'] = JSON.stringify({});

// page  search




 $(document).ready(function(){





     var rating = JSON.parse(localStorage['rating']);
     for (var i=0;i<rating.length;i++)
     {
      $('#search #select-menu #selectRating').append(
      "<option value="+i+">"+rating[i]+"</option>");


     }







//GEOLOCATION
//  var onSuccess = function(position) {
//  console.log('------location--------------------------------');
//  console.log('------location--------------------------------');
//  console.log('------location--------------------------------');
//      alert('Latitude: '  + position.coords.latitude   + '\n' +
//            'Longitude: ' + position.coords.longitude  + '\n');
//
//      var myLat = position.coords.latitude;
//      var myLong = position.coords.longitude;
//
//      //MAP
//      var mapOptions = {
//          center: new google.maps.LatLng(myLat, myLong),
//          zoom: 14,
//          mapTypeId: google.maps.MapTypeId.ROADMAP
//      };
//
//      var map = new google.maps.Map(document.getElementByIcanvas"),
//                                    mapOptions);
//
//  };
//
// onError Callback receives a PositionError object
//
//  function onError(error) {
//  console.log('------location-------error-------------------------');
//  console.log('------location--------error------------------------');
//      alert('code: '    + error.code    + '\n' +
//            'message: ' + error.message + '\n');
//  }
//
//
//      navigator.geolocation.getCurrentPosition(onSuccess, onError,{'enableHighAccuracy':true});
//








 // search page ----------------------------------------------------------------------------------------




 });
// $(document).on("click", " #selectCity-menu li a", find_restaurant_by_city);
// $(document).on("click", " #selectCuisine-menu li a", find_restaurant_by_city);
// $(document).on("click", "#search #selectRating-listbox li a", find_restaurant_by_city);
 $(document).on("click", "#search #set_rest_list, #map-page #go-to-list", set_rest_list);
 $(document).on("click", "#search #search-restaurant", find_restaurant_by_city);
 $(document).on("click", "#log-aut-button", log_out);
 $(document).on("click", "#registration-button", log_up);
 $(document).on("click", "#set-profile-info", set_profile_info);
 $(document).on("click", "#profile-info #save-update", update_profile);
 $(document).on("click", "#account #set-orders", set_orders);
 $(document).on('click', '#log_in form #sign-in', log_in);
 $(document).on('click', '#search  #set_hotels_to_map', set_to_map);
 $(document).on('click', '#my-orders  #update_orders', update_orders);
 $(document).on('click', '#ordering-page  #create_cart_link', check_and_create_cart);

 // set and create cart
 function check_and_create_cart(){
  console.log('--------------check oau-----------------------------');
  console.log('--------------check oau-----------------------------');
  total = JSON.parse(localStorage['user_cart'])['total'];
  miny_order = JSON.parse(localStorage['current_restaurant'])['miny_order'];
   console.log(total);
   console.log(miny_order);
  if(total < miny_order){
    alert(" Order Warning. The minimum Order for Delivery is $"+miny_order+"" );
    return false;
  }else{
    console.log();
    console.log("cart");
    var api = new Api;
    api.create_cart();
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


 //set list cusines and cities
 $(document).on('click', '#home  #link-to-search', set_select_params);
  console.log('set-------------------------------rest------------------list')
  console.log('set-------------------------------rest------------------list')
  console.log('set-------------------------------rest------------------list')
  //////set select cusine and city
  function set_search_selects(){
        var cusines = JSON.parse(localStorage['cusines']);
        console.log(cusines);
        console.log(cusines);
      for (var i=0;i<cusines.length;i++)
      {
       li = '<li data-option-index="'+(i+1)+'" data-icon="false"\
                class="ui-btn ui-btn-icon-right ui-li ui-btn-up-a" role="option"\
                data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div"\
                data-iconpos="right" data-theme="a" aria-selected="false">\
                  <div class="ui-btn-inner ui-li">\
                  <div class="ui-btn-text"><a href="#" tabindex="-1" class="ui-link-inherit">\
                  '+cusines[i]+'\
                </a></div></div></li>';

       console.log('cusines--------------------------');
       console.log(cusines);
       $('#search #select-menu #selectCuisine').append(
       "<option value="+i+">"+cusines[i]+"</option>");
        $('#selectCuisine-listbox-popup ul#selectCuisine-menu').append(li);
        $('#selectCuisine-listbox > .ui-header').css('width','103px');

      }



     var city = JSON.parse(localStorage['city']);
     for (var i=0;i<city.length;i++)
     {
      li = '<li data-option-index="'+(i+1)+'" data-icon="false"\
               class="ui-btn ui-btn-icon-right ui-li ui-btn-up-a" role="option"\
               data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div"\
               data-iconpos="right" data-theme="a" aria-selected="false">\
                 <div class="ui-btn-inner ui-li">\
                 <div class="ui-btn-text"><a href="#" tabindex="-1" class="ui-link-inherit">\
                 '+city[i]+'\
               </a></div></div></li>';
       $('#search #select-menu #selectCity').append(
       '<option value='+i+'>'+city[i]+'</option>');
          $('#selectCity-listbox-popup ul#selectCity-menu').append(li);
          $('#selectCuisine-listbox > .ui-header').css('width','103px');

     }
      //////set select cusine and city------------------end



  }


  function set_select_params(){
    console.log('set params');
    var api = new Api;
    api.set_params_for_search();
  }


   function update_orders(){

    console.log('update orders --------------------------');
           var api = new Api;
           api.update_orders();
   }
   function set_to_map(){
        var map = new GoogleMap();
        $ ('#map-page').css('display','block');
        collection = JSON.parse(localStorage['selected_restaurants']);
        localStorage['map_collection'] = JSON.stringify(collection);
        user = 'none';
        map.initialize(collection, user);
   }

   function set_map_to_none(){
     $('#map-page').css('display','none');
   }

   function set_orders(){

     console.log('------------set order-----------------------')
       var user = new User;
       user.orders();
       return false;
   }

    function set_order_list(){
     var ul = $('#my-orders ul.orders-list');
     ul.html('');
     list = JSON.parse(localStorage['orders']);
     span_class = '';
     for(i = 0; i<list.length; i++ ){
         if(list[i]['state']== 'Not paid' ){
           span_class = 'not-paid';
         }else if(list[i]['state']== 'Active' ){
                          span_class = 'active';
          }else{
           span_class = 'paid';
          }
          if(i == 0){
          border =   "border-top-left-radius: 20px;\
                     border-top-right-radius: 20px;";
          }else if( i == (list.length-1)){
              border =   "border-bottom-left-radius: 20px;\
              border-bottom-right-radius: 20px;\
              border-top-left-radius: 0px;\
              border-top-right-radius: 0px;";
          }else{
            border = "border-radius: 0px";
          }
     li = '<li data-theme="c" data-corners="false" data-shadow="false" style = "padding: 0px;'+border+'"\
             data-iconshadow="true" data-wrapperels="div" \
              class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child ui-btn-up-c">\
              <div class="ui-btn-inner ui-li" style = "padding: 0px;"><div class="ui-btn-text">\
                           <a href="#page1" data-transition="slide" class="ui-link-inherit">\
                               '+list[i]['number']+'\
                               <span class="state '+span_class+'">\
                                  '+list[i]['state']+'\
                               </span>\
                           </a>\
           </div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>'
       ul.append(li);
     }
      if( jQuery.isEmptyObject( JSON.parse(localStorage['orders']))){
      console.log('---------------empty list')
     li = '<li class= "empty-list"               \
            ">\
            List is empty\
             </li>'
             console.log('-----------emply-------------------------')
           ul.append(li);



      }

    }

    function update_profile(){
      var user = new User;
      user.update();

    }


  function log_up(){
    var user = new User;
    user.log_up();

  }
  function log_in(){
    var user = new User;
    user.log_in();

  }
 function log_out(){
 console.log('---------------------------l------out--');
    var user_session = new User;
    user_session.log_out();

  }



 function set_list_by_val(){

 console.log('set ----list----by----val--------')
 console.log('set ----list----by----val--------')
 console.log('set ----list----by----val--------')
//   var select = $('#search #search-value');
//
//   if($.trim(select.val()) != ''){
//
//
//    localStorage.removeItem('selected_restaurants');
//    localStorage['selected_restaurants'] = JSON.stringify({});
//    restaurants = JSON.parse(localStorage['restaurant']);
// console.log('---'+restaurants+'-------');
//   local_array = [];
//   for (key in restaurants){
//
//       restaurant = {};
//        if((jQuery.inArray($.trim(select.val()), restaurants[key]['city']) > -1) ||
//           (jQuery.inArray($.trim(select.val()), restaurants[key]['cusines']) > -1) ||
//           (jQuery.inArray($.trim(select.val()), restaurants[key]['rating']) > -1)
//
//        ){
//
//        local_array.push(key);
//        restaurant[key] = restaurants[key];
//        localStorage['selected_restaurants'] = JSON.stringify(restaurant);
//
//
//
//        $('.found-result-count .result').html(local_array.length);
//      }else{
//        $('.found-result-count .result').html(local_array.length);
//      }
//
//     }
//
//     }
//   else{
//    alert('please enter city, cusines or rating');
//   }






 }
 function set_profile_info(){
 console.log('------set__info--------')
 console.log('------set__info--------')
  if(! jQuery.isEmptyObject(JSON.parse(localStorage['user']))){
    user_session = JSON.parse(localStorage['user']);
    $('#profile-info #profile-update #login_f').val(user_session['login']);
    $('#profile-info #profile-update #user-name').val(user_session['name']);
    $('#profile-info #profile-update #email').val(user_session['email']);
    $('#profile-info #profile-update #address').val(user_session['address']);

    $('#profile-info #profile-update #lang').val(user_session['language']);
    console.log('set profile info');
    console.log('set profile info');
    console.log('set profile info');
  }
  else{
    alert('You mast sing in before');
    return false;
  }



 }
 function set_rest_list(){
   console.log('-----------------------------------------selected_sest------------------------------------------------------')

       selected_restaurant = JSON.parse(localStorage['selected_restaurants']);
      console.log(selected_restaurant)
      $('#restouran-page ul.restaurant-list').html('');

      for(key in selected_restaurant ){
      console.log('------------set_rest-------------------');
      console.log(key);

      name = selected_restaurant[key]['name'];

      rating = parseInt(selected_restaurant[key]['rating']);

      active_star = '<img class="star" src="assets/images/superstar.png" >';
      pasive_star = '<img class="star" src="assets/images/star.png" >';

      full_rating = set_rating(rating);
      address = selected_restaurant[key]['address'];
      rest_id = selected_restaurant[key]['id'];

      li = '<li data-theme="c" style = "border-bottom: none; padding:0;" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c">\
                  <div class="ui-btn-inner ui-li"><div class="ui-btn-text"> \
                <a href="#restouran-card" data-transition="slide" class="ui-link-inherit" id = "'+ rest_id+'">\
                    <img class="r-logo ui-li-thumb" src="assets/images/magaz.png" style=" ">\
                    <img class="sign" style="float: right;" src="assets/images/logo.png">\
                    <img class="location-logo" style="float: right;" src="assets/images/whereami.png">\
                    <span class="container">\
                          <span class="name">  '+name+' </span>\
                    <br>\
                           <span class="address"> '+address+' </span>\
                    <br>\
                        <span class="rating">\
                     '+full_rating+'\
                    </span>\
                    </span>\
                </a>\
              </li>'
          $('#restouran-page ul.restaurant-list').append(li);
     }
     if( jQuery.isEmptyObject( JSON.parse(localStorage['selected_restaurants']))){
    li = '<li class= "empty-list"               \
           ">\
           List is empty\
            </li>'
            console.log('-----------emply-------------------------')
          $('#restouran-page ul.restaurant-list').append(li);



     }

 }
 function set_rating(rating){
    active_star = '<img class="star" src="assets/images/superstar.png" >';
    pasive_star = '<img class="star" src="assets/images/star.png" >';
      full_rating = '';

      for( i=0;i< rating;i++){full_rating = full_rating + active_star};
      for( i=0;i< (5-rating);i++){full_rating = full_rating + pasive_star};
      return full_rating;


 }

// -----serch-----------------------by-------------------------params----------------------
 function find_restaurant_by_city(){

   console.log('----search--by--params----');
   var api = new Api;
   api.search_by_params();

    console.log('-------------------------------sity-----------------------------------------');
    console.log('-------------------------------sity-----------------------------------------');
    console.log('-------------------------------sity-----------------------------------------');

// var city_selected = $('#selectCity option:selected');
// var cuisine_selected = $('#selectCuisine option:selected');
// var rating_selected = $('#selectRating option:selected');
// previus_list={}
//
// restaurants = JSON.parse(localStorage['restaurant']);
//
// rest_list = find_by_city(city_selected, restaurants, 'city', previus_list);
// previus_list = rest_list;
// rest_list = find_by_city(cuisine_selected, rest_list, 'cuisine', previus_list);
// previus_list = rest_list;
// rest_list = find_by_city(rating_selected, rest_list, 'rating', previus_list);

 }




 function find_by_city(city, arr, object, previus_list){

    local_array = [];
    rest_list = {};
    restaurant = {};
    if($.trim(city.val()) != ''){
     localStorage.removeItem('selected_restaurants');
     localStorage['selected_restaurants'] = JSON.stringify({});


    for (key in arr){

       if(jQuery.inArray(city.text(), restaurants[key][object]) > -1){
         local_array.push(key);

         restaurant[key] = restaurants[key];
         localStorage['selected_restaurants'] = JSON.stringify(restaurant);
            rest_list[key]='';

         $('.found-result-count .result').html(local_array.length);
       }else{
         $('.found-result-count .result').html(local_array.length);
       }
    }
    }else{
         if(jQuery.isEmptyObject(previus_list) && jQuery.isEmptyObject(rest_list) ){

               rest_list = restaurants;
          }else{
          rest_list = previus_list;
         }
    }

    return rest_list;

 };

// restaurant card
    $(document).on("click", "#restouran-page ul.restaurant-list li a", select_restaurant);
     $(document).on("click", "#restouran-card .control .set_menu", set_menu);

 function select_restaurant(){
  rest_id = $(this).attr('id');
  arr =   JSON.parse(localStorage['selected_restaurants']);
  restaurant  = jQuery.grep(arr, function(n){ return(n.id == rest_id );})[0];

  localStorage['current_restaurant'] = JSON.stringify( restaurant);
  $('#restouran-card .right-column h3.title').html(restaurant['name']);
  $('#restouran-card .right-column .address').html(restaurant["address"]);
  $('#restouran-card .contecst-area .content').html(restaurant["description"]);
  $('#restouran-card .contecst-area .footer-section .avarage_rating').html( set_rating(restaurant['rating']));
  $("#restouran-card .control .set_menu, #restouran-card .control .show_rest_location").attr('id',rest_id );
 }

  function set_menu(){
    var api = new Api;
    api.set_menu();
  }
  console.log('----------------------------menu-group---------------------')
  function create_menu_list(){
   $('#menu-group ul.menu-list').html('');
   menu = JSON.parse(localStorage['menu']);
   for(dish in menu){
     name = menu[dish]['name'];
     id = menu[dish]['id'];
     li = '<li data-theme="c" style = "border: none;">\
               <a href="#menu-item-page" id = "'+id +'" data-transition="slide"style = "display: block;" class = "menu-items">\
                   <img class="r-logo" src="assets/images/First courses.png" >\
                   <span class="text" style="padding-right: 30px;">'+ name +' </span>\
                   <span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span>\
               </a>\
           </li>'

     $('#menu-group ul.menu-list ').append( li );
   };
  }


// menu group -----------------------------------------------------------------------------------------------

      $(document).on("click", "#menu-group ul.menu-list li a", set_items);

      function set_items(){
       console.log('------------------------------create items');
       console.log('------------------------------create items');
       console.log('------------------------------create items');
       item_id = $(this).attr('id');
       items = jQuery.grep(menu, function(n){ return(n.id == item_id );})[0]['products'];
       menu = JSON.parse(localStorage['menu']);
       name = jQuery.grep(menu, function(n){ return(n.id == 1380 );})[0]['name'];

       $('#menu-item-page ul.items-list').html('');


       $('#menu-item-page ul.list-item-header li a img').attr('src',"assets/images/First courses.png");
       $('#menu-item-page ul.list-item-header li a .text').html(name);
       $.each(items, function(key, value){



//       if(! jQuery.isEmptyObject(previus_list)){
           item = 0;
            cart = JSON.parse(localStorage['user_cart']);
            for(i in cart){
              if(i == key){
              console.log('-----------------set---item---------');
                item = cart[i]['item'];
              };
            };

//       };


        console.log('------------set width----------------------');
        console.log(($('html').width()-210) + 'px');
       li = '<li data-theme="c" data-corners="false" data-shadow="false" style= "padding: 0; border: none;"\
           data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" \
       data-iconpos="right" class="ui-btn ui-btn-icon-right ui-li-has-arrow \
       ui-li ui-first-child ui-btn-up-c"><div class="ui-btn-inner ui-li">\
       <div class="ui-btn-text">\
                   <a href="#" data-transition="slide" id = "'+value['product_id']+'" class="ui-link-inherit">\
                       <span class="item-name" style=" overflow: hidden;text-overflow: ellipsis; ">\
                       '+value['name']+'\
                           </span>\
                       <span class="insert plus">\
                          <img src="assets/images/plus.png">\
                       </span>\
                       <span class="insert price">\
                           '+value['price']+' $\
                       </span>\
                       <span class="insert item">\
                          '+item+'\
                       </span>\
                   </a>\
               </div>\
               <span class="ui-icon ui-icon-arrow-r ui-icon-shadow">\
               &nbsp;</span>\
               </div>\
               </li>'



       $('#menu-item-page ul.items-list').append(li);
       $('#menu-item-page ul.items-list li span.item-name').width(($('html').width()-175) + 'px');
       });
   }

// menu item add to card

  $(document).on('click',"#menu-item-page ul.items-list li a",add_to_card);


  function add_to_card(){
    item_name = $.trim(jQuery(".item-name", this).html());
    item_price = $.trim(jQuery(".insert.price", this).html());
    item_item = parseInt(jQuery(".insert.item", this).html());
    user_cart = JSON.parse(localStorage['user_cart']);
    item_item = item_item +1;
    console.log('puts---------to-------cart')
    product_id = $(this).attr('id');
    console.log(product_id)
     user_cart[item_name] = { price: item_price, item: item_item, product_id: product_id};
     // set item

     parseInt(jQuery(".insert.item", this).html(item_item));
     localStorage['user_cart'] = JSON.stringify(user_cart);
     //set total price
     cart = JSON.parse(localStorage['user_cart']);
     cart['total'] = total_price(cart);
     localStorage['user_cart'] = JSON.stringify(cart);

  }

  $(document).on('click',".set-user-cart-oder",set_order);

  function set_order(){
    console.log('set order');
    user_cart = JSON.parse(localStorage['user_cart']);
    user = JSON.parse(localStorage['user']);
    loc_id = JSON.parse(localStorage['current_restaurant'])['location_id'];
    //set url
    $('#ordering-page #create_cart_link').attr('href',(url + '/orders/index?loc_id='+loc_id+'&session='+user['token']+''))

    $('#ordering-page ul.items-list').html('');
    $.each(user_cart, function(dish, info){
      if(dish == 'total'){
          div = '<span class = "total-fed">Feed: </span>\
                  <span class = "fed-price"></span>     \
                  <br />                                  \
                  <span class = "total-sume">Total: </span>\
                  <span class = "total-price"></span>'
       $('#ordering-page .total').html(div);

      }
      else{

           li = '<li data-theme="c" data-corners="false" data-shadow="false" style = "padding: 0; border: none;"   \
            data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" \
            data-iconpos="right" class="ui-btn ui-btn-icon-right ui-li-has-arrow \
            ui-li ui-first-child ui-btn-up-c">\
              <div class="ui-btn-inner ui-li">\
              <div class="ui-btn-text">\
                      <a href="#" data-transition="slide" class="ui-link-inherit">\
                          <span class="item-name" style=" overflow: hidden;text-overflow: ellipsis; ">\
                          '+dish+'\
                              </span>\
                          <span class="insert plus">\
                             <img src="assets/images/minus.png">\
                          </span>\
                          <span class="insert price">\
                              '+info['price']+' \
                          </span>\
                          <span class="insert item">\
                             '+info['item']+'\
                          </span>\
                      </a>\
                  </div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;\
                  </span></div></li>'
               $('#ordering-page ul.items-list').append(li);
               $('#ordering-page ul.items-list li span.item-name').width(($('html').width()-175) + 'px');
               $(".check-order").css('display', 'block');
               $("#reset-cart").css('display', 'block');
       }
        $('#ordering-page .total .total-price').html(user_cart['total'] + '$');
        delivery_fee = JSON.parse(localStorage['current_restaurant'])['delivery_fee'];
        $('#ordering-page .total .fed-price').html( delivery_fee+ '$');
       });

       if(  jQuery.isEmptyObject( JSON.parse(localStorage['user_cart']))){
          li = '<li class = "empty-list">\
                      Cart is empty\
                   </li>'
          $('#ordering-page ul.items-list').append(li);



       }


  };
  function total_price(cart){
    if(cart['total']){
      delete cart['total'];
    }
    total = 0;
    console.log('set---total------');
    console.log(cart);
    for(i in cart){
        console.log(i == 'total');
        if(parseInt(cart[i]['item'])==0){
           total += parseFloat(cart[i]['price']);
        }else{
          total += parseFloat(cart[i]['price']) * parseFloat(cart[i]['item']);
        }
    };
       console.log( total);
       $('#ordering-page .total .total-price').html(total.toFixed(2) + '$');
        return total.toFixed(2);

  }

// ordering page--------------------------------------------------------------------

    function order_warning(){
       $('#ordering-page .alert-warning').css('display', 'block');



    }
    function order_warning_cancel(){
       $('#ordering-page .alert-warning').css('display', 'none');

    }


 $(document).on('click',"#ordering-page ul.items-list li a",remove_from_card);
 $(document).on('click',"#ordering-page #reset-cart",reset_cart);

 function reset_cart(){

        user_cart = JSON.parse(localStorage['user_cart']);
       user_cart = {};
        localStorage['user_cart'] = JSON.stringify(user_cart);
       $('#ordering-page ul.items-list').html('');
       arr = $('#menu-item-page ul.items-list li a');
       for(i=0; i<arr.length; i++){$('.insert.item',arr[i]).html(0)};

        li = '<li class = "empty-list">\
                 Cart is empty\
              </li>'
       $('#ordering-page ul.items-list').append(li);
       $(".check-order").css('display', 'none');
       $("#reset-cart").css('display', 'none');



 }
 function remove_from_card(){

    item_name = $.trim(jQuery(".item-name", this).html());
    item_item = parseInt(jQuery(".insert.item", this).html());


    item_item = item_item - 1;

       user_cart = JSON.parse(localStorage['user_cart']);
       user_cart[item_name]['item'] = item_item;

       // set item
       parseInt(jQuery(".insert.item", this).html(item_item));
       localStorage['user_cart'] = JSON.stringify(user_cart);

       if(item_item < 1){

        $(this).parents('li').remove();
        arr = $('#menu-item-page ul.items-list li a');

        for(i=0; i<arr.length; i++){
             user_cart = JSON.parse(localStorage['user_cart']);

             if(user_cart[$.trim($('.item-name', arr[i]).text())]){

              item = user_cart[$.trim($('.item-name', arr[i]).text())]['item'];
              $('.insert.item', arr[i]).html(item);

         }
              localStorage['user_cart'] = JSON.stringify(user_cart);

         };

       user_cart = JSON.parse(localStorage['user_cart']);
       delete user_cart[item_name];
       localStorage['user_cart'] = JSON.stringify(user_cart);
       console.log('-----------cart--'+localStorage['user_cart']+'=----------');



    }else{
      arr = $('#menu-item-page ul.items-list li a');

        for(i=0; i<arr.length; i++){
             user_cart = JSON.parse(localStorage['user_cart']);

             if(user_cart[$.trim($('.item-name', arr[i]).text())]){

              item = user_cart[$.trim($('.item-name', arr[i]).text())]['item'];
              $('.insert.item', arr[i]).html(item);

         }

       }
    }
       if(  jQuery.isEmptyObject( JSON.parse(localStorage['user_cart']))){

               li = '<li class = "empty-list">\
                        Cart is empty\
                     </li>'
              $('#ordering-page ul.items-list').append(li);
              $(".check-order").css('display', 'none');
              $("#reset-cart").css('display', 'none');
             arr = $('#menu-item-page ul.items-list li a');
              for(i=0; i<arr.length; i++){
              $('.insert.item',arr[i]).html(0);

              };

       }


    //set total price
    cart = JSON.parse(localStorage['user_cart']);
    cart['total'] = total_price(cart);
    localStorage['user_cart'] = JSON.stringify(cart);

 }




 function show_restaurant(e){
  rest_id = e.attr('id');
  arr =   JSON.parse(localStorage['selected_restaurants']);
  restaurant  = jQuery.grep(arr, function(n){ return(n.id == rest_id );})[0];

  localStorage['current_restaurant'] = JSON.stringify( restaurant);
  $('#restouran-card .right-column h3.title').html(restaurant['name']);
  $('#restouran-card .right-column .address').html(restaurant["address"]);
  $('#restouran-card .contecst-area .content').html(restaurant["description"]);
  $('#restouran-card .contecst-area .footer-section .avarage_rating').html( set_rating(restaurant['rating']));
  $("#restouran-card .control .set_menu, #restouran-card .control .show_rest_location ").attr('id',rest_id );
 }

 // show restaurant location

 $(document).on('click', '#restouran-card .show_rest_location', show_rest_location);

 function  show_rest_location(){
    console.log('show rest ');
   id = $(this).attr('id');
   rests =   JSON.parse(localStorage['selected_restaurants']);
   rest = jQuery.grep(rests, function(n){ return(n.id == id );});
    var map = new GoogleMap();
    console.log(rest);
    $ ('#map-page').css('display','block');
    collection = rest;
    localStorage['map_collection'] = JSON.stringify(collection);
    console.log(collection);
    user = 'none';
    map.initialize(collection, user);

 }


// set my location
function  set_my_location(){
  console.log('location   my');
  user = new User();
  user.location();
  var map = new GoogleMap();
  collection = JSON.parse(localStorage['map_collection']);
  map.initialize(collection, 'set');

}

// set location for search

$(document).on('click', "#search #location-label", function(){
   pervios_state = $('#in-location').is(':checked');

   if(pervios_state == false){
       user = new User();
       user.location();

       coord = JSON.parse(localStorage['user_location']);
       if(coord.length == 0){
         console.log('------remove------class-------------------');

       };
   }else{

   }


 });



