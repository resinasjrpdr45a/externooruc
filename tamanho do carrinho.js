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
            $('.barshomedesk').css({"display":"none"});
           
          }

          else{
                    
            $('.barshomedesk').css({"display":"none"});
            
            ;
          }
      });
    if (window.matchMedia('(max-width: 1023px)').matches){  


   




    }




     } else{
          $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<151){   
            $('.barshomedesk').css({"display":"none"});
           
          }

          else{
                    
            $('.barshomedesk').css({"display":"block"});
            
            ;
          }
      });

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