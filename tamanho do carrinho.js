$(document).ready(function(){
   
    if (window.matchMedia('(max-width: 1023px)').matches){ 
        $('.icon-shopping-cart').addClass("icon-mobile-cart");
        $('.header-cart').addClass("header-mobile-cart");
     }else{
        $('.icon-shopping-cart').removeClass("icon-mobile-cart");
        $('.header-cart').removeClass("header-mobile-cart");
     }


     if ($(window).width() <= 1023){ 
        

        $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<151){   
           $('.header-inner #header-right-cart').css({"margin-top":"24px"}); 
          }

          else{
                    
            $('.header-inner #header-right-cart').css({"margin-top":"0"}); 
          }
      });






     } 



    $(window).resize(function(){

    $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<151){   
           $('.header-inner #header-right-cart').css({"margin-top":"30px"}); 
          }

          else{
                    
            $('.header-inner #header-right-cart').css({"margin-top":"0"}); 
          }
      });

    if (window.matchMedia('(max-width: 1023px)').matches){ 
        $('.icon-shopping-cart').addClass("icon-mobile-cart");
        $('.header-cart').addClass("header-mobile-cart");
     }else{
        $('.icon-shopping-cart').removeClass("icon-mobile-cart");
        $('.header-cart').removeClass("header-mobile-cart");
     }

  });
});