$(document).ready(function(){
    if (window.matchMedia('(max-width: 1024px)').matches){
      

      $('.desktopclose').css({"display":"none"});
      $('.icon-bars').css({"display":"none"});
      $('.barshomedesk').css({"display":"none"});
        
        $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<151){   
            $('.barshomedesk').css({"display":"none"});
            $('.header-inner #header-right-cart').css({"margin-top":"20px"});
            $('.header-inner .icon-shopping-cart').css({"font-size":"73px"});
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
            $('.header-inner .logo-theme img').css({"width":"123px"});
            $('#product .offcanvas-siderbars').css({"padding-top":"250px"});
            $('#category .offcanvas-siderbars').css({"padding-top":"250px"});
            $('.header-inner #header-right-cart').css({"margin-top":"30px"});
            $('.header-inner .icon-shopping-cart').css({"font-size":"60px"});
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
    } 
   
});