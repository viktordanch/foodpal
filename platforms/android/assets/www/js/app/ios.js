        $('.pad').css('width', '276px'); //width:276px; height: 276px;
        $('.pad').css('height', '276px');
        //$('.pad').css('display', 'block');

function doResize() {
    var winhight = $.mobile.getScreenHeight();
    var scroller = $('#register div[data-role="content"]');
    scroller.css('margin-top', '25px');
    var headhight = $('[data-role="header"]').first().outerHeight();
    var foothight = $('[data-role="footer"]').first().outerHeight();
    var $content=$('[data-role="content"]');
    var $pagecontent=$('[data-role="page"]');
    newhight = winhight - headhight - foothight - 10;

    $content.css('min-height',newhight + 'px');

}
$(document).bind('pageload', doResize);
$(document).bind('pageload', checkStorage);

$(document).bind('pageshow', doResize);
$(document).bind('pageshow', checkStorage);

$(document).bind("touchmove",function(event){
	event.preventDefault();
   });


$(window).bind('orientationchange, resize', doResizeSize);

function doResizeSize(){
    doResize();
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
