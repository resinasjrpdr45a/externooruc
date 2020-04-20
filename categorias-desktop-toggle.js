$(document).ready(function(){

     
    if (window.matchMedia('(max-width: 1023px)').matches){ 
        $('.icon-shopping-cart').removeClass("icon-desk-cart");
        $('.header-cart').removeClass("header-desk-cart");
     }else{
        $('.icon-shopping-cart').addClass("icon-desk-cart");
        $('.header-cart').addClass("header-desk-cart");
     }

     

     if ($(window).width() > 1023){        
      $('.header-inner').append('<i class="icon-bars barshomedesk"></i>');
      $('.header-inner').append('<i class="fas fa-times desktopclose"></i>');

     $('.barshomedesk').css({"display":"none"});
     $('.icon-bars').css({"display":"none"});
     $('.desktopclose').css({"display":"none"}); 


        $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<151){   
            $('.header-desk-cart').css({"top":"0"});
            $('.barshomedesk').css({"display":"none"});
            $('.header-inner #header-right-cart').css({"margin-top":"20px"});
            $('.header-inner .icon-desk-cart').css({"font-size":"73px"});
            $('.header-inner .header-cart ').css({"top":"0"});
            $('.desktopclose').css({"display":"none"});
            $('#product .offcanvas-siderbars').css({"padding-top":"0"});
            $('#category .offcanvas-siderbars').css({"padding-top":"0"});
            $('.header-inner .logo-theme img').css({"width":"170px"});
            $('.barshomedesk').addClass("icon-bars");
            $('#wbc-mainnav').removeClass("activetog");
            $('.wbc-mainnav').css({"margin-top":"0"});
          }

          else{
                    
            $('.barshomedesk').css({"display":"block"});
            $('.header-desk-cart').css({"top":"10px"});
            $('.header-inner .logo-theme img').css({"width":"123px"});
            $('#product .offcanvas-siderbars').css({"padding-top":"250px"});
            $('#category .offcanvas-siderbars').css({"padding-top":"250px"});
            $('.header-inner #header-right-cart').css({"margin-top":"30px"});
            $('.header-inner .icon-desk-cart').css({"font-size":"60px"});
            $('.header-inner .header-cart').css({"top":"10px"});
            ;
          }
      });

      $('.barshomedesk').click(function(){
          $('#wbc-mainnav').toggleClass('activetog');
          $('.desktopclose').css({"display":"block"});
          $('.barshomedesk').css({"display":"none"});
          $('.barshomedesk').removeClass("icon-bars");
          $('.wbc-mainnav').css({"margin-top":"140px"});
      });

      $('.desktopclose').click(function(){
          $('#wbc-mainnav').toggleClass('activetog');
          $('.desktopclose').css({"display":"none"});
          $('.barshomedesk').css({"display":"block"});
          $('.barshomedesk').addClass("icon-bars");
          $('.wbc-mainnav').css({"margin-top":"0"});
      });     
    } else{

      $('.barshomedesk').css({"display":"none"});
      $('.desktopclose').css({"display":"none"});
      $('.menu-mobile .icon-bars').css({"display":"block"});
      
     
     
    }  

    $(window).resize(function(){
     $('.barshomedesk').css({"display":"none"});
     $('.desktopclose').css({"display":"none"});
     $('.menu-mobile .icon-bars').css({"display":"block"});


    if (window.matchMedia('(max-width: 1023px)').matches){ 
        $('.icon-shopping-cart').removeClass("icon-desk-cart");
        $('.header-cart').removeClass("header-desk-cart");
     }else{
        $('.icon-shopping-cart').addClass("icon-desk-cart");
        $('.header-cart').addClass("header-desk-cart");
     }

       if ($(window).width() > 1023){        
      
    
        $('.barshomedesk').css({"display":"none"});
        $('.icon-bars').css({"display":"none"});
        $('.desktopclose').css({"display":"none"}); 

        $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<151){   
            $('.header-desk-cart').css({"top":"0"});
            $('.barshomedesk').css({"display":"none"});
            $('.header-inner #header-right-cart').css({"margin-top":"20px"});
            $('.header-inner .icon-desk-cart').css({"font-size":"73px"});
            $('.header-inner .header-cart ').css({"top":"0"});
            $('.desktopclose').css({"display":"none"});
            $('#product .offcanvas-siderbars').css({"padding-top":"0"});
            $('#category .offcanvas-siderbars').css({"padding-top":"0"});
            $('.header-inner .logo-theme img').css({"width":"170px"});
            $('.barshomedesk').addClass("icon-bars");
            $('#wbc-mainnav').removeClass("activetog");
            $('.wbc-mainnav').css({"margin-top":"0"});
          }

          else{
                    
            $('.barshomedesk').css({"display":"block"});
            $('.header-desk-cart').css({"top":"10px"});
            $('.header-inner .logo-theme img').css({"width":"123px"});
            $('#product .offcanvas-siderbars').css({"padding-top":"250px"});
            $('#category .offcanvas-siderbars').css({"padding-top":"250px"});
            $('.header-inner #header-right-cart').css({"margin-top":"30px"});
            $('.header-inner .icon-desk-cart').css({"font-size":"60px"});
            $('.header-inner .header-cart').css({"top":"10px"});
            ;
          }
      });

     
    } else{

      $('.barshomedesk').css({"display":"none"});
      $('.desktopclose').css({"display":"none"});
      $('.menu-mobile .icon-bars').css({"display":"block"});
      
     
     
    }  


     
    



  });
});