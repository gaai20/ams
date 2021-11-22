
// $('.navbar').hide();
$(document).ready(function(){
    //var $nav = $('.navbar');//Caching element
    // hide .navbar first - you can also do this in css .nav{display:none;}
    $('.navbar').hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 50) { //For dynamic effect use $nav.height() instead of '100'
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

});

$(document).ready(function(){
    $("#ka").mouseenter(function(){
      var div = $("#sq");
      
      div.animate({width: '5%'}, "fast");
      
      div.animate({height: '10px'}, "slow");

    });
    $("#ka").mouseleave(function(){
        var div = $("#sq");
        div.animate({height: '6px'}, "fast");
        div.animate({width: '100%'}, "fast");
        
  });
});

$(document).ready(function(){
    $("#oo").mouseenter(function(){
        var div = $("#p1");
        var div2 = $("#p2");
        var div3 = $("#p3");
        var div4 = $("#p4");
        div.animate({width: '98%'},"slow");
        div2.animate({width: '84%'}, "slow");
        div3.animate({width: '88%'}, "slow");
        div4.animate({width: '98%'}, "slow");

    });

});