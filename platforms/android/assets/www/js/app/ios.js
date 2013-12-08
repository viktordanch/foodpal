        $('.pad').css('width', '276px'); //width:276px; height: 276px;
        $('.pad').css('height', '276px');
        //$('.pad').css('display', 'block');

function doResize() {
    var winhight = $.mobile.getScreenHeight();
    var headhight = $('[data-role="header"]').first().outerHeight();
    var foothight = $('[data-role="footer"]').first().outerHeight();
    var $content=$('[data-role="content"]');
    newhight = winhight - headhight - foothight - 10;
    $content.css('min-height',newhight + 'px');
}
$(document).bind('pageload', doResize);
$(document).bind('pageshow', doResize);
$(document).bind("touchmove",function(event){
	event.preventDefault();
   });


//$(window).bind('resize, orientationchange', doResize);

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
