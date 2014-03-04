        $('.pad').css('width', '276px'); //width:276px; height: 276px;
        $('.pad').css('height', '276px');
        //$('.pad').css('display', 'block');

function doResize() {


    if((!localStorage.user ) || (localStorage.user == '{}')){
        open_login();
    }else{

        close_login();
    }
    var winhight = $.mobile.getScreenHeight();
    var scroller = $('#register div[data-role="content"]');
    scroller.css('margin-top', '25px');
    var headhight = $('[data-role="header"]').first().outerHeight();
    var foothight = $('[data-role="footer"]').first().outerHeight();
    var $content=$('[data-role="content"]');
    var $pagecontent=$('[data-role="page"]');
    newhight = winhight - headhight - foothight - 10;

    if( $.mobile.activePage.attr('id') == 'City_select' || $.mobile.activePage.attr('id') == 'Cuisine_select'){
       $content.css('min-height',($('html').height() - 125)+'px'); 
    }else if($.mobile.activePage.attr('id') == 'log_in'){
      $content.css('min-height',0 + 'px');
    }else{
      $content.css('min-height',newhight + 'px');
    }  
}
$(document).bind('pageload', doResize);

$('#log_in').live('pagebeforeshow', doResize);
$(document).bind('pageload', checkStorage);

$(document).bind('pageshow', doResize);
$(document).bind('pageshow', checkStorage);

$(document).bind("touchmove",function(event){
	event.preventDefault();
   });


$(window).bind('orientationchange, resize', doResizeSize);

function resize_page_by_id(id){
    var winhight = $('html').height();

    var headhight = $('#' + id + ' [data-role="header"]').height();

    var foothight = $('#' + id + ' [data-role="footer"]').height();
    var $content=$('#' + id + ' [data-role="content"]');

   var newhight = winhight - headhight -10 ;
    $content.css('min-height',newhight + 'px');

}

function doResizeSize(){
    //doResize();
    console.log('Resize');

    if($.mobile.activePage.attr('id') == 'register'){
        console.log('Resize register');

       resize_page_by_id('register');
       singScroll.refresh();
        if(keyboard_open == 0){
          keyboard_open += 1;
          $('#register [data-role="footer"]').css('display', 'none');
        }else{
           keyboard_open = 0;
           $('#register [data-role="footer"]').css('display', 'block');
        }

    }else{


       console.log('Resize not register');
    }

    if($.mobile.activePage.attr('id') == 'profile-info'){
        console.log('Resize register');

       resize_page_by_id('profile-info');
       singScroll.refresh();
        console.log('beafor' + keyboard_open);
        if(keyboard_open == 0){
          keyboard_open += 1;
          $('#profile-info [data-role="footer"]').css('display', 'none');
        }else{
           keyboard_open = 0;
           $('#profile-info [data-role="footer"]').css('display', 'block');
        }
        console.log('after' + keyboard_open);
    }else{


       console.log('Resize not register');
    }

     if($.mobile.activePage.attr('id') != 'profile-info' &&
                       $.mobile.activePage.attr('id') != 'register'){

              keyboard_open = 0;
               console.log('page' + keyboard_open);
     }

    try{
    homeScroll.refresh();
    searchScroll.refresh();
    }catch(err){

    }
}

function checkStorage(){
  //read_storage();


  //write_local_storage(localStorage);



 //alert(localStorage.user_cart);
 // alert(localStorage.user_cart);

}

// include this file before your jquery-mobile script tag
$(document).delegate('.ui-navbar ul li > a', 'click', function() {
                     //search the navbar to deactivate the active button
                     var rm = '.ui-btn-active';

                     $(rm).each(function(){
                                $(this).removeClass('ui-btn-active');
                                
                                });
                     
                     var hc = '.'+$(this).attr('class').split(' ')[0];
                     $(hc).each(function(){
                                  $(this).addClass('ui-btn-active');
                                  
                                  });

                     });



//alert('w:'+screen.width+' h:'+screen.height);
var mobile_system = 'iphone';
