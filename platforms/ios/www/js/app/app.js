  function spiner_on(page){

     $(page+'  #spiner').css('display', 'block');
     $(page+'  #black').css('display', 'block');
  }
  function spiner_off(page){
     $(page+'  #spiner').css('display', 'none');
     $(page+'  #black').css('display', 'none');
  }




   url = 'http://foodpal.com'
   var city = [];
   var cart = ['item1', 'item2', 'item2', 'item3'];
   var cusines = [];
  var rating = ['Rating', 1, 2, 3, 4, 5 ];
   window.window.localStorage['rating'] = JSON.stringify(rating);


 $(document).ready(function(){

     var rating = JSON.parse(window.localStorage['rating']);
     for (var i=0;i<rating.length;i++)
     {
      $('#search #select-menu #selectRating').append(
      "<option value="+i+">"+rating[i]+"</option>");


     }

 });

 $(document).on("touchend", "#search #set_rest_list, #map-page #go-to-list", set_rest_list);
 $(document).on("touchend", "#search #search-restaurant", find_restaurant_by_city);
 $(document).on("touchend", "#log-aut-button", log_out);
 $(document).on("touchend", "#registration-button", log_up);
 $(document).on("touchend", "#set-profile-info", set_profile_info);
 $(document).on("touchend", "#profile-info #save-update", update_profile);
 $(document).on("touchend", "#account #set-orders", set_orders);
 $(document).on('touchend', '#log_in form #sign-in', log_in);
 $(document).on('touchend', '#search  #set_hotels_to_map', set_to_map);
 $(document).on('touchend', '#my-orders  #update_orders', update_orders);
 $(document).on('touchend', '#ordering-page  #create_cart_link', check_and_create_cart);






    $(document).on('click', '#search .rating-select a', function(e){
        e.preventDefault();
         return false;
    } );


     $(document).on('click', '#search #selectCuisine-button', function(e){
        e.preventDefault();
        return false;
    } );

     $(document).on('click', '#search #selectCuisine-button', function(e){
         $.mobile.changePage('#Cuisine_select', { transition: 'pop', role: 'dialog' });
    } );

    function set_cuisine_select(){
           if(window.localStorage.cusines){
           var cusines = JSON.parse(window.localStorage['cusines']);
            $('#Cuisine_select #Cuisinescroller ul').html('');

            for (var i=0;i<cusines.length;i++)
            {
               var li = '<li data-option-index="'+(i)+'" data-icon="false"\
                      class="ui-btn ui-btn-icon-right ui-li ui-btn-up-a" role="option"\
                      data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div"\
                      data-iconpos="right" data-theme="a" aria-selected="false">\
                        <div class="ui-btn-inner ui-li">\
                        <div class="ui-btn-text"><a href="#search-page" tabindex="-1" class="ui-link-inherit"\
                        onclick= "aler_you();"">\
                        '+cusines[i]+'\
                      </a></div></div></li>';


             $('#search #select-menu #selectCuisine').append(
             "<option value="+(i)+">"+cusines[i]+"</option>");

              $('#Cuisine_select #Cuisinescroller ul').append(li);

            }

     }

    }

    $(document).on('click','#Cuisine_select #Cuisinescroller ul li a' , function(e){
       $(this).parent().parent().parent().attr('data-option-index');

      $('#selectCuisine-button span span span').text($.trim($(this).text()));

      $('#Cuisine_select').dialog('close');
      filter_on_search();
    });

    $('#Cuisine_select').live('pageshow', function(event, ui){

       $('#Cuisine_select .content').css('max-height',$('#City_select [data-role="content"]').height()-40)
       $('#Cuisinescroller').css('max-height',($('html').height()-87) +'px');
       set_cuisine_select();
       cuisine_selectScroll.refresh();

     });





     $(document).on('click', '#search #selectCity-button', function(e){
        e.preventDefault();
        return false;
    } );

   function set_city_select(){
      if(window.localStorage.city){
         var city = JSON.parse(window.localStorage['city']);
          $('#City_select #Cityscroller ul').html('');

           for (var i=0;i<city.length;i++)
           {
            var li = '<li data-option-index="'+(i)+'" data-icon="false"\
                     class="ui-btn ui-btn-icon-right ui-li ui-btn-up-a" role="option"\
                     data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div"\
                     data-iconpos="right" data-theme="a" aria-selected="false">\
                       <div class="ui-btn-inner ui-li">\
                       <div class="ui-btn-text"><a href="#search-page" tabindex="-1" class="ui-link-inherit">\
                       '+city[i]+'\
                     </a></div></div></li>';
             $('#search #select-menu #selectCity').append(
                '<option value='+(i)+'>'+city[i]+'</option>');

                  $('#City_select #Cityscroller ul').append(li);



          //      $('#selectCuisine-listbox > .ui-header').css('width','103px');

           }
       }
   }






    $(document).on('click', '#search #selectCity-button', function(e){

       $.mobile.changePage('#City_select', { transition: 'pop', role: 'dialog' });
    } );

       $(document).on('click','#City_select #Cityscroller ul li a' , function(e){
        $(this).parent().parent().parent().attr('data-option-index');

        $('#selectCity-button span span span').text($.trim($(this).text()));

        $('#City_select').dialog('close');
         filter_on_search();
      });
        $('#City_select').live('pageshow', function(event, ui){
        $('#Cityscroller').css('max-height',($('html').height()-87) +'px');
         // $('#City_select .content').css('max-height',$('#City_select [data-role="content"]').height()-40)
            set_city_select();
            city_selectScroll.refresh();

         });


       $(document).on('touchend', '.rating-select a', function(e){


          if( $('#selectRating-listbox-popup')){
             setTimeout(function(){ $('#selectRating-listbox').popup('open');},300)

            $(document).on('click','#selectRating-listbox li a', function(e){
                  e.preventDefault();
                   return false;
              $('#selectRating-listbox').popup('close');
            })
          }
    })



//   $('#selectCity-dialog').live('pageshow', function(event, ui){
//
//
//      set_search_selects();
//      $('#selectCity-dialog [role="dialog"]').height($('html').height() - 50);
//      $('#selectCity-dialog [role="dialog"]').css('overflow', 'hidden');
//      $('#selectCity-dialog [data-role="content"]').attr('id', 'city_scroller');
//      if($('#city_scroller')){
//        setTimeout(function(){
//          var cityScroll = new iScroll('city_scroller', {vScrollbar: false, onBeforeScrollStart: null});
//        },100)
//
//      }
//    });
//
//
//   $('#selectCuisine-dialog').live('pageshow', function(event, ui){
//      set_search_selects();
//      $('#selectCuisine-dialog [role="dialog"]').height($('html').height() - 50);
//      $('#selectCuisine-dialog [role="dialog"]').css('overflow', 'hidden');
//      $('#selectCuisine-dialog [data-role="content"]').attr('id', 'cuisine_scroller');
//
//       setTimeout(function(){
//         var cuisineScroll = new iScroll('cuisine_scroller', {vScrollbar: false, onBeforeScrollStart: null});
//        },100)
//
//    });




  function filter_on_search(){


  var rating_id = $('#selectRating').val();

  var  city = $.trim(  $('#selectCity-button span span span').text());

   if(city == 'City'){
     city = '';
   }
  var cuisine = $.trim(  $('#selectCuisine-button span span span').text());

  if(cuisine == 'Cuisine'){
     cuisine = '';
   }


  if(rating_id != '' && rating_id != '0'){
    var ratings = JSON.parse(window.localStorage['rating']);
    var rating= ratings[parseInt(rating_id)];

  }else{
    var rating = '';
  }
  if(window.localStorage.received_restaurants){
    arr = JSON.parse(window.localStorage['received_restaurants']);


    var statement = $('#in-location').is(':checked');
       var collection = jQuery.grep(arr, function(n){
         return (n.rating == rating || rating == '') &&(n.rating == rating || rating == '') && (n.city.city == city || city == '') && (jQuery.inArray(cuisine, n.cuisines)!==-1 || cuisine == '');
      });

     window.localStorage['selected_restaurants'] = JSON.stringify(collection);
     $('.found-result-count .result').html(collection.length);
    if(window.localStorage.user_location){
        var user_location = JSON.parse(window.localStorage['user_location']);

     }
    }else{

    window.localStorage['selected_restaurants'] = JSON.stringify([]);
    }
 }
 // set and create cart
 function check_and_create_cart(){

  var total = JSON.parse(window.localStorage['user_cart'])['total'];
  var miny_order = JSON.parse(window.localStorage['current_restaurant'])['miny_order'];

  if(total < miny_order){
    alert(" Order Warning. The minimum Order for Delivery is $"+miny_order+"" );
    return false;
  }else{
    var api = new Api;
    api.create_cart();
  }

 }

 //set list cusines and cities
 $(document).on('click', '#home  #link-to-search', set_select_params);
  function aler_you(){
    $('#selectCuisine-listbox').popup('close');

  };
  //////set select cusine and city
  function set_search_selects(){
      //alert('-----set params---------------');


        var cusines = JSON.parse(window.localStorage['cusines']);
      $('#selectCuisine-listbox-popup ul#selectCuisine-menu').html('');
   //   $('#search #select-menu #selectCuisine').html('');
      $('#search #select-menu #selectCuisine').html('');
      for (var i=0;i<cusines.length;i++)
      {
         var li = '<li data-option-index="'+(i)+'" data-icon="false"\
                class="ui-btn ui-btn-icon-right ui-li ui-btn-up-a" role="option"\
                data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div"\
                data-iconpos="right" data-theme="a" aria-selected="false">\
                  <div class="ui-btn-inner ui-li">\
                  <div class="ui-btn-text"><a href="#search-page" tabindex="-1" class="ui-link-inherit"\
                  onclick= "aler_you();"">\
                  '+cusines[i]+'\
                </a></div></div></li>';


       $('#search #select-menu #selectCuisine').append(
       "<option value="+(i)+">"+cusines[i]+"</option>");
        $('#selectCuisine-listbox-popup ul#selectCuisine-menu').append(li);
  //       $('#selectCuisine-dialog ul#selectCuisine-menu').append(li);

        $('#selectCuisine-listbox > .ui-header').css('width','103px');

      }




     var city = JSON.parse(window.localStorage['city']);


      $('#selectCity-listbox-popup ul#selectCity-menu').html('');
      $('#selectCity-listbox-popup ul#selectCity-menu').html('');


      $('#search #select-menu #selectCity').html('');
     for (var i=0;i<city.length;i++)
     {
      var li = '<li data-option-index="'+(i)+'" data-icon="false"\
               class="ui-btn ui-btn-icon-right ui-li ui-btn-up-a" role="option"\
               data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div"\
               data-iconpos="right" data-theme="a" aria-selected="false">\
                 <div class="ui-btn-inner ui-li">\
                 <div class="ui-btn-text"><a href="#search-page" tabindex="-1" class="ui-link-inherit">\
                 '+city[i]+'\
               </a></div></div></li>';
       $('#search #select-menu #selectCity').append(
          '<option value='+(i)+'>'+city[i]+'</option>');


            $('#selectCity-listbox-popup ul#selectCity-menu').append(li);

       //     $('#selectCity-dialog ul#selectCity-menu').append(li);

          $('#selectCuisine-listbox > .ui-header').css('width','103px');

     }
      //////set select cusine and city------------------end




  }


  function set_select_params(){

    var api = new Api;
    api.set_params_for_search();
  }


   function update_orders(){
           var api = new Api;
           api.update_orders();
   }
   function set_to_map(){

      if(window.localStorage['selected_restaurants']){

      }else{

       window.localStorage['selected_restaurants'] = JSON.stringify([])
      }
        var collection = JSON.parse(window.localStorage['selected_restaurants']);
        window.localStorage['map_collection'] = JSON.stringify(collection);


   }

   function set_map_to_none(){

   }

   function set_orders(){

       var user = new User;
       user.orders();
       return false;
   }

    function set_order_list(){
     var ul = $('#my-orders ul.orders-list');
     ul.html('');
     var list = JSON.parse(window.localStorage['orders']);
     var span_class = '';
     for(i = 0; i<list.length; i++ ){
         if(list[i]['state']== 'Not paid' ){
           span_class = 'not-paid';
         }else if(list[i]['state']== 'Active' ){
                          span_class = 'active';
          }else{
           span_class = 'paid';
          }
          if(i == 0){
          var border =   "border-top-left-radius: 20px;\
                     border-top-right-radius: 20px;";
          }else if( i == (list.length-1)){
              var border =   "border-bottom-left-radius: 20px;\
                               border-bottom-right-radius: 20px;\
                               border-top-left-radius: 0px;\
                             border-top-right-radius: 0px;";
          }else{
            border = "border-radius: 0px";
          }
     var li = '<li data-theme="c" data-corners="false" data-shadow="false" style = "padding: 0px;'+border+'"\
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
      if( jQuery.isEmptyObject( JSON.parse(window.localStorage['orders']))){
     var li = '<li class= "empty-list"               \
            ">\
            List is empty\
             </li>'
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
    var user_session = new User;
    user_session.log_out();

  }




 function set_profile_info(){

  if(window.localStorage['user']){
      if(! jQuery.isEmptyObject(JSON.parse(window.localStorage['user']))){
        user_session = JSON.parse(window.localStorage['user']);
        $('#profile-info #profile-update #login_f').val(user_session['login']);
        $('#profile-info #profile-update #user-name').val(user_session['name']);
        $('#profile-info #profile-update #email').val(user_session['email']);
        $('#profile-info #profile-update #address').val(user_session['address']);

        $('#profile-info #profile-update #lang').val(user_session['language']);
      }
        else{
          alert('You mast sing in before');
          return false;
      }
  }
  else{
    alert('You mast sing in before');
    return false;
  }



 }
 function set_rest_list(){

       var selected_restaurant = JSON.parse(window.localStorage['selected_restaurants']);
       $('#restouran-page ul.restaurant-list').html('');

      for(key in selected_restaurant ){
      var name = selected_restaurant[key]['name'];

      var rating = parseInt(selected_restaurant[key]['rating']);

      var active_star = '<img class="star" src="assets/images/superstar.png" >';
      var pasive_star = '<img class="star" src="assets/images/star.png" >';

      var full_rating = set_rating(rating);
      address = selected_restaurant[key]['address'];
      var rest_id = selected_restaurant[key]['id'];
      var logo =  selected_restaurant[key]['logo'];


      var li = '<li data-theme="c" style = "border-bottom: none; padding:0;" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-li-has-thumb ui-btn-up-c">\
                  <div class="ui-btn-inner ui-li"><div class="ui-btn-text"> \
                <a href="#restouran-card" data-transition="slide" class="ui-link-inherit" id = "'+ rest_id+'">\
                    <div class="r-logo" src="assets/images/magaz.png" style="width: 55px; height:55px; float:left;\
                                                             background: url(http://foodpal.com/'+logo+') center no-repeat;\
                                                            margin-top: 4px; margin-left: 5px; background-size: contain"></div>\
                    <span class="container" style = "float: left;">\
                          <span class="name">  '+name+' </span>\
                    <br>\
                           <span class="address"> '+address+' </span>\
                    <br>\
                        <span class="rating">\
                     '+full_rating+'\
                    </span>\
                    </span>\
                    <img class="sign" style="float: right; position: relative;" src="assets/images/arrow.1.png">\
                    <img class="location-logo" style="float: right;" src="assets/images/whereami.png">\
                </a>\
              </li>'
          $('#restouran-page ul.restaurant-list').append(li);
     }
     if( jQuery.isEmptyObject( JSON.parse(window.localStorage['selected_restaurants']))){
    var li = '<li class= "empty-list"               \
           ">\
           List is empty\
            </li>'
          $('#restouran-page ul.restaurant-list').append(li);
     }





 }

$('#map-page').live('pageshow',function(event, ui){

   $('#map-page #map').height($('html').height() -195);
   var map = new GoogleMap();
   if(localStorage.map_collection){
   var collection = JSON.parse(window.localStorage['map_collection']) ;
   var user = 'none';
   map.initialize(collection, user);
   }
 })

 $('#restouran-page').live('pageshow',function(event, ui){


    $('#restouran-page #wrappen').height($('html').height() - 130);
    length = $('html').width() - 150 + 'px';
    $('#restouran-page ul li a .container').css('max-width', length);
    $('#restouran-page ul li a .container').css('overflow','hidden');
    $('#restouran-page ul li a .container').css('text-overflow','ellipsis');

    if(localStorage.selected_restaurants){
      set_rest_list();
    }


    myScroll.refresh();
  })

 $(' #search').live('pageshow',function(event, ui){
     searchScroll.refresh();
    // set_search_selects();
    $(document).off('click','#search-scroll li a');

      $('#selectCity-dialog [data-role="content"]').attr('id', 'city_scroller');
    // var cityScroll = new iScroll('city_scroller', {vScrollbar: false,  onBeforeScrollStart: null});

      $('#selectCuisine-listbox-popup').bind({
         popupafteropen: function(event, ui) {


         set_search_selects();



        }

      });

     $('#selectRating-listbox-popup').bind({
       popupbeforeposition: function(event, ui) {

        setTimeout("set_search_selects() ;", 5000);
         }
      });
  })

 $('#home').live('pageshow',function(event, ui){
     try{

       homeScroll.refresh();
     }catch(err){

      }
  })

$('#promotion').live('pageshow',function(event, ui){

    promotionScroll.refresh();
  })


$('#my-orders').live('pageshow',function(event, ui){

    if(localStorage.orders){
      set_order_list();
    }

    orderScroll.refresh();
  })



$('#register').live('pageshow resize',function(event, ui){

    singScroll.refresh();
  })



$('#help-page').live('pageshow',function(event, ui){

    promotionScroll.refresh();
  })



$('#how_work').live('pageshow',function(event, ui){

    workScroll.refresh();
  })


$('#settings').live('pageshow',function(event, ui){

    settingScroll.refresh();
  })


$('#policy').live('pageshow',function(event, ui){

    policyScroll.refresh();
  })

$('#careers-page').live('pageshow',function(event, ui){

    careerScroll.refresh();
  })

$(' #menu-group').live('pageshow',function(event, ui){


    if(localStorage.menu){
      create_menu_list();
    }

    $('#menu-group #menuscroll').height($('html').height() - 130);
    menuScroll.refresh();
  })

$(' #log_in').live('pageshow',function(event, ui){

    $('#log_in [data-role="header"]').width($('#log_in [data-role="content"]').width()-1.8);
    doResize;
    loginScroll.refresh();
  })

$(' #profile-info').live('pageshow',function(event, ui){

    set_profile_info();
    logupScroll.refresh();
  })

 $('#menu-item-page').live('pageshow',function(event, ui){

    $('#menu-item-page #menu-item-scroll').height($('html').height() - 260);
     if($('#menu-item-scroll ul li').length == 0){
         if(localStorage.menu){
            build_items_page();
          }
     }
   menuItemScroll.refresh();
  })





 $('#restouran-card').live('pageshow',function(event, ui){

    if(localStorage.current_restaurant){

     show_restaurant_local();
    };
    $('#menu-item-page #menu-item-scroll').height($('html').height() - 260);
   menuItemScroll.refresh();
  })

   function show_restaurant_local(){
     restaurant = JSON.parse(window.localStorage['current_restaurant']);
     $('#restouran-card .right-column h3.title').html(restaurant['name']);
     $('#restouran-card #logo-contqainer').css('background' , 'url(http://foodpal.com/'+restaurant.logo+') center no-repeat');

    $('#restouran-card .right-column h3.title').html(restaurant['name']);
    $('#restouran-card .right-column .address').html(restaurant["address"]);
    $('#restouran-card .contecst-area .content').html(restaurant["description"]);
    $('#restouran-card .contecst-area .footer-section .avarage_rating').html( set_rating(restaurant['rating']));
    $("#restouran-card .control .set_menu, #restouran-card .control .show_rest_location ").attr('id',restaurant.id );
   }


 $('#ordering-page').live('pageshow',function(event, ui){



    if(localStorage.user_cart && JSON.parse(localStorage.user_cart != {})){
      set_order();
    }
    $('#ordering-page #order-scroll').height($('html').height() - 240);
    orderpageScroll.refresh();
  })

 function set_rating(rating){
    var active_star = '<img class="star" src="assets/images/superstar.png" >';
    var pasive_star = '<img class="star" src="assets/images/star.png" >';
    var   full_rating = '';

      for( i=0;i< rating;i++){full_rating = full_rating + active_star};
      for( i=0;i< (5-rating);i++){full_rating = full_rating + pasive_star};
      return full_rating;


 }

// -----serch-----------------------by-------------------------params----------------------
 function find_restaurant_by_city(){


   var api = new Api;
   api.search_by_params();

 }




 function find_by_city(city, arr, object, previus_list){

    var local_array = [];
    var rest_list = {};
    var restaurant = {};
    if($.trim(city.val()) != ''){
     window.localStorage.removeItem('selected_restaurants');
     window.localStorage['selected_restaurants'] = JSON.stringify({});


    for (key in arr){

       if(jQuery.inArray(city.text(), restaurants[key][object]) > -1){
         local_array.push(key);

         restaurant[key] = restaurants[key];
         window.localStorage['selected_restaurants'] = JSON.stringify(restaurant);
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
  var rest_id = $(this).attr('id');
  var arr =   JSON.parse(window.localStorage['selected_restaurants']);
  var restaurant  = jQuery.grep(arr, function(n){ return(n.id == rest_id );})[0];
  window.localStorage['current_restaurant'] = JSON.stringify( restaurant);
  $('#restouran-card .right-column h3.title').html(restaurant['name']);
 $('#restouran-card #logo-contqainer').css('background' , 'url(http://foodpal.com/'+restaurant.logo+') center no-repeat');

  $('#restouran-card #logo-contqainer').css('background-size', 'contain');
  $('#restouran-card .right-column .address').html(restaurant["address"]);
  $('#restouran-card .contecst-area .content').html(restaurant["description"]);
  $('#restouran-card .contecst-area .footer-section .avarage_rating').html( set_rating(restaurant['rating']));
  $("#restouran-card .control .set_menu, #restouran-card .control .show_rest_location").attr('id',rest_id );
 }

  function set_menu(){
    var api = new Api;
    api.set_menu();
  }
  function create_menu_list(){

   $('#menu-group ul.menu-list').html('');
   var menu = JSON.parse(window.localStorage['menu']);
   for(dish in menu){
     var name = menu[dish]['name'];
     var id = menu[dish]['id'];
     var li = '<li data-theme="c" style = "border: none;">\
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

      $(document).on("click", "#menu-group ul.menu-list li a", set_items );


    function set_items(){
      localStorage.menu_id = $(this).attr('id');

    }
    function build_items_page(){
      // var itemId= var needToSetId = localStorage.menu_id == e.attr("id") ? $(this).attr('id') : "";

       var item_id = parseInt(localStorage.menu_id);


       var menu = JSON.parse(localStorage.menu);
       var items = jQuery.grep(menu, function(n){ return(n.id == item_id );})[0]['products'];
       var menu = JSON.parse(window.localStorage['menu']);
       var name = jQuery.grep(menu, function(n){ return(n.id == item_id );})[0]['name'];

       $('#menu-item-page ul.items-list').html('');



       $('#menu-item-page ul.list-item-header li a img').attr('src',"assets/images/First courses.png");
       $('#menu-item-page ul.list-item-header li a .text').html(name);
       $.each(items, function(key, value){



//       if(! jQuery.isEmptyObject(previus_list)){
           var item = 0;
           if(localStorage.user_cart){

                var cart = JSON.parse(window.localStorage['user_cart']);
                for(i in cart){
                  if(i == key){
                    item = cart[i]['item'];
                  };
                };
           }else{
            window.localStorage['user_cart'] = JSON.stringify({});
           }
//       };


       var li = '<li data-theme="c" data-corners="false" data-shadow="false" style= "padding: 0; border: none;"\
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
       $('#menu-item-page ul.items-list li span.item-name').width(($('html').width()-190) + 'px');
       });
   }

// menu item add to card

  $(document).on('touchend',"#menu-item-page ul.items-list li a",add_to_card);
  //$(document).on('click',"#menu-item-page ul.items-list li a",add_to_card);



  function add_to_card(){

    var item_name = $.trim(jQuery(".item-name", this).html());
    var item_price = $.trim(jQuery(".insert.price", this).html());
    var item_item = parseInt(jQuery(".insert.item", this).html());
    var user_cart = JSON.parse(window.localStorage['user_cart']);


    item_item = item_item +1;

    var product_id = $(this).attr('id');

     user_cart[item_name] = { price: item_price, item: item_item, product_id: product_id};
     // set item

     parseInt(jQuery(".insert.item", this).html(item_item));
     window.localStorage['user_cart'] = JSON.stringify(user_cart);
     //set total price
     var cart = JSON.parse(window.localStorage['user_cart']);
     cart['total'] = total_price(cart);
     window.localStorage['user_cart'] = JSON.stringify(cart);

  }

  $(document).on('click',".set-user-cart-oder",set_order);

  function set_order(){

    var user_cart = JSON.parse(window.localStorage['user_cart']);

    if(window.localStorage.user){
         var user = JSON.parse(window.localStorage['user']);
          var loc_id = JSON.parse(window.localStorage['current_restaurant'])['location_id'];

    }

    $('#ordering-page ul.items-list').html('');
    $.each(user_cart, function(dish, info){
      if(dish == 'total'){
         var  div = ' <br />                                  \
                  <span class = "total-sume">Total: </span>\
                  <span class = "total-price"></span>'
       $('#ordering-page .total').html(div);

      }
      else{

           var li = '<li data-theme="c" data-corners="false" data-shadow="false" style = "padding: 0; border: none;"   \
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
               $('#ordering-page ul.items-list li span.item-name').width(($('html').width()-190) + 'px');
               $(".check-order").css('display', 'block');
               $("#reset-cart").css('display', 'block');
       }
        $('#ordering-page .total .total-price').html(user_cart['total'] + '$');
       // delivery_fee = JSON.parse(window.localStorage['current_restaurant'])['delivery_fee'];
        //$('#ordering-page .total .fed-price').html( delivery_fee+ '$');
       });

       if(  jQuery.isEmptyObject( JSON.parse(window.localStorage['user_cart']))){
          var li = '<li class = "empty-list">\
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

    for(i in cart){
        if(parseInt(cart[i]['item'])==0){
           total += parseFloat(cart[i]['price']);
        }else{
          total += parseFloat(cart[i]['price']) * parseFloat(cart[i]['item']);
        }
    };
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


 $(document).on('touchend',"#ordering-page ul.items-list li a",remove_from_card);
 //$(document).on('click',"#ordering-page ul.items-list li a",remove_from_card);
 $(document).on('touchend',"#ordering-page #reset-cart",reset_cart);

 function reset_cart(){

      var   user_cart = JSON.parse(window.localStorage['user_cart']);
       user_cart = {};
        window.localStorage['user_cart'] = JSON.stringify(user_cart);
       $('#ordering-page ul.items-list').html('');
       arr = $('#menu-item-page ul.items-list li a');
       for(i=0; i<arr.length; i++){$('.insert.item',arr[i]).html(0)};

       var li = '<li class = "empty-list">\
                 Cart is empty\
              </li>'
       $('#ordering-page ul.items-list').append(li);
       $(".check-order").css('display', 'none');
       $("#reset-cart").css('display', 'none');
        $('#ordering-page .total .total-price').html('0$');



 }
 function remove_from_card(){

    var item_name = $.trim(jQuery(".item-name", this).html());
    var item_item = parseInt(jQuery(".insert.item", this).html());


    item_item = item_item - 1;

       var user_cart = JSON.parse(window.localStorage['user_cart']);
       user_cart[item_name]['item'] = item_item;

       // set item
       parseInt(jQuery(".insert.item", this).html(item_item));
       window.localStorage['user_cart'] = JSON.stringify(user_cart);

       if(item_item < 1){

        $(this).parents('li').remove();
        var arr = $('#menu-item-page ul.items-list li a');

        for(i=0; i<arr.length; i++){
             var user_cart = JSON.parse(window.localStorage['user_cart']);

             if(user_cart[$.trim($('.item-name', arr[i]).text())]){

              var item = user_cart[$.trim($('.item-name', arr[i]).text())]['item'];
              $('.insert.item', arr[i]).html(item);

         }
              window.localStorage['user_cart'] = JSON.stringify(user_cart);

         };

       user_cart = JSON.parse(window.localStorage['user_cart']);
       delete user_cart[item_name];
       window.localStorage['user_cart'] = JSON.stringify(user_cart);

    }else{
      var arr = $('#menu-item-page ul.items-list li a');

        for(i=0; i<arr.length; i++){
            var  user_cart = JSON.parse(window.localStorage['user_cart']);

             if(user_cart[$.trim($('.item-name', arr[i]).text())]){

              var item = user_cart[$.trim($('.item-name', arr[i]).text())]['item'];
              $('.insert.item', arr[i]).html(item);

         }

       }
    }
       if(  jQuery.isEmptyObject( JSON.parse(window.localStorage['user_cart']))){

               var li = '<li class = "empty-list">\
                        Cart is empty\
                     </li>'
              $('#ordering-page ul.items-list').append(li);
              $(".check-order").css('display', 'none');
              $("#reset-cart").css('display', 'none');
             var arr = $('#menu-item-page ul.items-list li a');
              for(i=0; i<arr.length; i++){
              $('.insert.item',arr[i]).html(0);

              };

       }


    //set total price
    var cart = JSON.parse(window.localStorage['user_cart']);
    cart['total'] = total_price(cart);
    window.localStorage['user_cart'] = JSON.stringify(cart);
    return false;

 }




 function show_restaurant(e){
  var rest_id = e.attr('id');
  var arr =   JSON.parse(window.localStorage['selected_restaurants']);
  var restaurant  = jQuery.grep(arr, function(n){ return(n.id == rest_id );})[0];

  window.localStorage['current_restaurant'] = JSON.stringify( restaurant);
    $('#restouran-card .right-column h3.title').html(restaurant['name']);
   $('#restouran-card #logo-contqainer').css('background' , 'url(http://foodpal.com/'+restaurant.logo+') center no-repeat');

  $('#restouran-card .right-column h3.title').html(restaurant['name']);
  $('#restouran-card .right-column .address').html(restaurant["address"]);
  $('#restouran-card .contecst-area .content').html(restaurant["description"]);
  $('#restouran-card .contecst-area .footer-section .avarage_rating').html( set_rating(restaurant['rating']));
  $("#restouran-card .control .set_menu, #restouran-card .control .show_rest_location ").attr('id',rest_id );
 }

 // show restaurant location

 $(document).on('click', '#restouran-card .show_rest_location', show_rest_location);

 function  show_rest_location(){
   var id = $(this).attr('id');
   var rests =   JSON.parse(window.localStorage['selected_restaurants']);
   var rest = jQuery.grep(rests, function(n){ return(n.id == id );});

   var collection = rest;
    window.localStorage['map_collection'] = JSON.stringify(collection);


 }


// set my location
function  set_my_location(){
  var user = new User();

  user.location();



}

// set location for search

$(document).on('touchend', "#search #location-label", function(){
   pervios_state = $('#in-location').is(':checked');

   if(pervios_state == false){
       var user = new User();
       user.set_coord();

       var coord = JSON.parse(window.localStorage['user_location']);
       if(coord.length == 0){
       };
   }else{

   }


 });


$(document).on("click touchend","#map-page #search-map-button",function(ev){

     var arr = JSON.parse(window.localStorage['selected_restaurants'])
    var  param = $(" #map-page #search-value-map").val();
     var collection = filter_result(arr, param);

      var map = new GoogleMap();
      window.localStorage['map_collection']= JSON.stringify(collection) ;
      var user = 'none';
      map.initialize(collection, user);


   window.localStorage['map_collection'] = JSON.stringify(collection);

});

function filter_result(arr, param){
   var collection  = jQuery.grep(arr, function(n){
     var reg = new RegExp(".*" + param + ".*","i");
     return n.name.match(reg) || n.rating == param || n.city == param || n.cuisine == param;
   });
     return collection ;
}


