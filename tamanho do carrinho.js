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


        if ($(window).width() <= 991){ 
        

     
   $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<151){   
           $('.header-inner #header-right-cart').css({"margin-top":"18px"}); 
          }

          else{
                    
            $('.header-inner #header-right-cart').css({"margin-top":"5px"}); 
          }
      });
        








     } 



        if ($(window).width() <= 990){ 
        

     
   $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<151){   
           $('.header-inner #header-right-cart').css({"margin-top":"24px"}); 
          }

          else{
                    
            $('.header-inner #header-right-cart').css({"margin-top":"24px"}); 
          }
      });
        








     } 





    $(window).resize(function(){

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


            if ($(window).width() <= 991){ 
        

     
   $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<151){   
           $('.header-inner #header-right-cart').css({"margin-top":"18px"}); 
          }

          else{
                    
            $('.header-inner #header-right-cart').css({"margin-top":"5px"}); 
          }
      });
        








     } 

             if ($(window).width() <= 990){ 
        

     
   $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<151){   
           $('.header-inner #header-right-cart').css({"margin-top":"24px"}); 
          }

          else{
                    
            $('.header-inner #header-right-cart').css({"margin-top":"24px"}); 
          }
      });
        








     } 


    if (window.matchMedia('(max-width: 1023px)').matches){ 
        $('.icon-shopping-cart').addClass("icon-mobile-cart");
        $('.header-cart').addClass("header-mobile-cart");
     }else{
        $('.icon-shopping-cart').removeClass("icon-mobile-cart");
        $('.header-cart').removeClass("header-mobile-cart");
     }

  });
});