$(document).ready(function(){
        
    $('.header-inner').append('<i class="icon-bars barshomedesk"></i>');
    $('.header-inner').append('<i class="fas fa-times desktopclose"></i>');
    $('#headerCheck .barshomedesk').css({"display":"none"});
     
    if (window.matchMedia('(max-width: 1023px)').matches){ 
        $('.icon-shopping-cart').removeClass("icon-desk-cart");
        $('.header-cart').removeClass("header-desk-cart");
     }else{
        $('.icon-shopping-cart').addClass("icon-desk-cart");
        $('.header-cart').addClass("header-desk-cart");
     }

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

     

     if ($(window).width() > 1023){        


     $('.barshomedesk').css({"display":"none"});
     $('.icon-bars').css({"display":"none"});
     $('.desktopclose').css({"display":"none"});



        $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<390){   
            $('.header-desk-cart').css({"top":"0"});
            $('.barshomedesk').css({"display":"none"});
            $('.header-inner .icon-desk-cart').css({"font-size":"73px"});
            $('.header-inner .header-cart ').css({"top":"0"});
            $('.desktopclose').css({"display":"none"});
            $("#product  .offcanvas-siderbars").removeClass("canvassusp");
            /*$('#product .offcanvas-siderbars').css({"padding-top":"0"});*/
            $('#category .offcanvas-siderbars').css({"padding-top":"0"});
            $('#order .offcanvas-siderbars').css({"padding-top":"0"});
            $('.checkout .offcanvas-siderbars').css({"padding-top":"0"});
            $('header .header-inner .logo-theme img').css({"width":"170px"});
            $('#headerCheck .header-inner .logo-theme img').css({"width":"133px"});
            $('.barshomedesk').addClass("icon-bars");
            $('#wbc-mainnav').removeClass("activetog");
            $('.wbc-mainnav').css({"margin-top":"0"});
            $('#headerCheck').removeClass("bar");
            $('header').removeClass("bar");
            $('#header').removeClass("bar");

          }

          else{
                    
            $('.barshomedesk').css({"display":"block"});
            $('.header-desk-cart').css({"top":"10px"});
            $('header .header-inner .logo-theme img').css({"width":"123px"});
            $('#headerCheck .header-inner .logo-theme img').css({"width":"123px"});
            /*$('#product .offcanvas-siderbars').css({"padding-top":"440px"});*/
            $("#product  .offcanvas-siderbars").addClass("canvassusp");
            $('#category .offcanvas-siderbars').css({"padding-top":"440px"});
            $('#order .offcanvas-siderbars').css({"padding-top":"450px"});
            $('.checkout .offcanvas-siderbars').css({"padding-top":"350px"});
            $('.header-inner .icon-desk-cart').css({"font-size":"60px"});
            $('.header-inner .header-cart').css({"top":"10px"});
            $('#headerCheck').addClass("bar");
            $('header').addClass("bar");
            $('#header').addClass("bar");
            ;
          }
      });

     
    } else{

      $('.barshomedesk').css({"display":"none"});
      $('.desktopclose').css({"display":"none"});
      $('.menu-mobile .icon-bars').css({"display":"block"});
       $("#product  .offcanvas-siderbars").removeClass("canvassusp");
      

      
     
     
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
          if(topo<390){   
            $('.header-desk-cart').css({"top":"0"});
            $('.barshomedesk').css({"display":"none"});
            $('.header-inner #header-right-cart').css({"margin-top":"30px"});
            $('.header-inner .icon-desk-cart').css({"font-size":"73px"});
            $('.header-inner .header-cart ').css({"top":"0"});
            $('.desktopclose').css({"display":"none"});
            $("#product  .offcanvas-siderbars").removeClass("canvassusp");
            /*$('#product .offcanvas-siderbars').css({"padding-top":"0"});*/
            $('#category .offcanvas-siderbars').css({"padding-top":"0"});
            $('#order .offcanvas-siderbars').css({"padding-top":"0"});
            $('.checkout .offcanvas-siderbars').css({"padding-top":"0"});
            $('header .header-inner .logo-theme img').css({"width":"170px"});
            $('#headerCheck .header-inner .logo-theme img').css({"width":"133px"});
            $('.barshomedesk').addClass("icon-bars");
            $('#wbc-mainnav').removeClass("activetog");
            $('#wbc-mainnav').css({"margin-top":"0"});
            $('#searchbox').css({"margin-top":"50px"});
            $('#header-search').css({"margin-top":"0"});
            $('#headerCheck').removeClass("bar");
            $('header').removeClass("bar");
            $('#header').removeClass("bar");

          }

          else{
                    
            $('.barshomedesk').css({"display":"block"});
            $('.header-desk-cart').css({"top":"10px"});
            $('header .header-inner .logo-theme img').css({"width":"123px"});
            $('#headerCheck .header-inner .logo-theme img').css({"width":"123px"});
            $("#product  .offcanvas-siderbars").addClass("canvassusp");
            /*$('#product .offcanvas-siderbars').css({"padding-top":"440px"});*/
            $('#category .offcanvas-siderbars').css({"padding-top":"440px"});
            $('#order .offcanvas-siderbars').css({"padding-top":"450px"});
            $('.checkout .offcanvas-siderbars').css({"padding-top":"350px"});
            $('.header-inner #header-right-cart').css({"margin-top":"30px"});
            $('.header-inner .icon-desk-cart').css({"font-size":"60px"});
            $('.header-inner .header-cart').css({"top":"10px"});
            $('#searchbox').css({"margin-top":"50px"});
            $('#header-search').css({"margin-top":"0"});
            $('#headerCheck').addClass("bar");
            $('header').addClass("bar");
            $('#header').addClass("bar");
          }
      });

      $(window).resize(function(){
      $(window).scroll(function(){
          var topo = $(window).scrollTop();
          if(topo<390){   
            $('.header-desk-cart').css({"top":"0"});
            $('.barshomedesk').css({"display":"none"});
            $('.header-inner #header-right-cart').css({"margin-top":"30px"});
            $('.header-inner .icon-desk-cart').css({"font-size":"73px"});
            $('.header-inner .header-cart ').css({"top":"0"});
            $('.desktopclose').css({"display":"none"});
            $("#product  .offcanvas-siderbars").removeClass("canvassusp");
            /*$('#product .offcanvas-siderbars').css({"padding-top":"0"});*/
            $('#category .offcanvas-siderbars').css({"padding-top":"0"});
            $('#order .offcanvas-siderbars').css({"padding-top":"0"});
            $('header .header-inner .logo-theme img').css({"width":"170px"});
            $('#headerCheck .header-inner .logo-theme img').css({"width":"133px"});
            $('.barshomedesk').addClass("icon-bars");
            $('#wbc-mainnav').removeClass("activetog");
            $('#wbc-mainnav').css({"margin-top":"0"});
            $('#searchbox').css({"margin-top":"50px"});
            $('#header-search').css({"margin-top":"0"});
            $('header').removeClass("bar");
            $('#header').removeClass("bar");
          }

          else{
                    
            $('.barshomedesk').css({"display":"block"});
            $('.header-desk-cart').css({"top":"10px"});
            $('.header-inner .logo-theme img').css({"width":"123px"});
            $('#headerCheck .header-inner .logo-theme img').css({"width":"123px"});
             $("#product  .offcanvas-siderbars").addClass("canvassusp");
            /*$('#product .offcanvas-siderbars').css({"padding-top":"440px"});*/
            $('#category .offcanvas-siderbars').css({"padding-top":"440px"});
            $('#order .offcanvas-siderbars').css({"padding-top":"450px"});
            $('.header-inner #header-right-cart').css({"margin-top":"30px"});
            $('.header-inner .icon-desk-cart').css({"font-size":"60px"});
            $('.header-inner .header-cart').css({"top":"10px"});
            $('#searchbox').css({"margin-top":"50px"});
            $('#header-search').css({"margin-top":"0"});
            $('header').addClass("bar");
            $('#header').addClass("bar");
            ;
          }
      });
      

      });

     
    } else{

      $('.barshomedesk').css({"display":"none"});
      $('.desktopclose').css({"display":"none"});
      $('.menu-mobile .icon-bars').css({"display":"block"});
      $("#product  .offcanvas-siderbars").removeClass("canvassusp");
      
     
     
    }  


     
    



  });
});