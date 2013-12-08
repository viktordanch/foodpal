document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
   $.mobile.loading( "show" );
    if(device.version.charAt(0)==='7'){
        
         $('.grayheader').css('margin-top', '20px');
        
    }
        $('.pad').css('width', '276px'); //width:276px; height: 276px;
        $('.pad').css('height', '276px');
        $('.pad').css('display', 'block');

    $.mobile.loading( "hide" );
}


function doResize() {
    var winhight = $.mobile.getScreenHeight();
    var headhight = $('[data-role="header"]').first().outerHeight();
    var foothight = $('[data-role="footer"]').first().outerHeight();
    var $content=$('[data-role="content"]');
    newhight = winhight - headhight - foothight - 30;
    $content.css('min-height',newhight + 'px');
}
$(document).bind('pageshow', doResize);
$(window).bind('resize, orientationchange', doResize);



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
