$(document).ready(function(){
   
    if (window.matchMedia('(max-width: 1023px)').matches){ 
        $('.icon-shopping-cart').addClass("icon-mobile-cart");
        $('.header-cart').addClass("header-mobile-cart");
     }else{
        $('.icon-shopping-cart').removeClass("icon-mobile-cart");
        $('.header-cart').removeClass("header-mobile-cart");
     }


     if ($(window).width() <= 1023){ 
    

      $('.header-right-cart').css({"top":"24px"});




     } 

    $(window).resize(function(){


    if (window.matchMedia('(max-width: 1023px)').matches){ 
        $('.icon-shopping-cart').addClass("icon-mobile-cart");
        $('.header-cart').addClass("header-mobile-cart");
     }else{
        $('.icon-shopping-cart').removeClass("icon-mobile-cart");
        $('.header-cart').removeClass("header-mobile-cart");
     }

  });
});