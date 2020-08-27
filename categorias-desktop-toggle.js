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
          if(topo<151){   
            $('.header-inner .icon-desk-cart').css({"font-size":"73px"});
            $('.header-inner .header-cart ').css({"top":"0"});
            $('.desktopclose').css({"display":"none"});
            $("#product  .offcanvas-siderbars").removeClass("canvassusp");
            $("#category  .offcanvas-siderbars").removeClass("canvassusp-cat");
            $("#order  .offcanvas-siderbars").removeClass("canvassusp-ordcheck");
            $(".checkout  .offcanvas-siderbars").removeClass("canvassusp-check");
            $("#index  .pagebuilder-content").removeClass("canvassusp-homeindex");
            $("#my-account  .offcanvas-siderbars").removeClass("canvassusp-acount");
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
            $('header .header-inner .logo-theme img').css({"width":"123px"});
            $('#headerCheck .header-inner .logo-theme img').css({"width":"123px"});
            $("#product  .offcanvas-siderbars").addClass("canvassusp");
            $("#category  .offcanvas-siderbars").addClass("canvassusp-cat");
            $("#order  .offcanvas-siderbars").addClass("canvassusp-ordcheck");
            $(".checkout  .offcanvas-siderbars").addClass("canvassusp-check");
            $(".checkout  .canvassusp-check").removeClass("canvassusp-ordcheck");
            $("#index  .pagebuilder-content").addClass("canvassusp-homeindex");
            $("#my-account  .offcanvas-siderbars").addClass("canvassusp-acount");
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
      $("#category  .offcanvas-siderbars").removeClass("canvassusp-cat");
      $("#order  .offcanvas-siderbars").removeClass("canvassusp-ordcheck");
      $(".checkout  .offcanvas-siderbars").removeClass("canvassusp-check");
      $("#index  .pagebuilder-content").removeClass("canvassusp-homeindex");
      $("#my-account  .offcanvas-siderbars").removeClass("canvassusp-acount");     
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
            $('.header-inner .icon-desk-cart').css({"font-size":"73px"});
            $('.header-inner .header-cart ').css({"top":"0"});
            $('.desktopclose').css({"display":"none"});
            $("#product  .offcanvas-siderbars").removeClass("canvassusp");
            $("#category  .offcanvas-siderbars").removeClass("canvassusp-cat");
            $("#order  .offcanvas-siderbars").removeClass("canvassusp-ordcheck");
            $(".checkout  .offcanvas-siderbars").removeClass("canvassusp-check");
            $("#index  .pagebuilder-content").removeClass("canvassusp-homeindex");
            $("#my-account  .offcanvas-siderbars").removeClass("canvassusp-acount");
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
            $('header .header-inner .logo-theme img').css({"width":"123px"});
            $('#headerCheck .header-inner .logo-theme img').css({"width":"123px"});
            $("#product  .offcanvas-siderbars").addClass("canvassusp");
            $("#category  .offcanvas-siderbars").addClass("canvassusp-cat");
            $("#order  .offcanvas-siderbars").addClass("canvassusp-ordcheck");
            $(".checkout  .offcanvas-siderbars").addClass("canvassusp-check");
            $(".checkout  .canvassusp-check").removeClass("canvassusp-ordcheck");
            $("#index  .pagebuilder-content").addClass("canvassusp-homeindex");
            $("#my-account  .offcanvas-siderbars").addClass("canvassusp-acount");
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
      $("#category  .offcanvas-siderbars").removeClass("canvassusp-cat");
      $("#order  .offcanvas-siderbars").removeClass("canvassusp-ordcheck");
      $(".checkout  .offcanvas-siderbars").removeClass("canvassusp-check");
      $("#index  .pagebuilder-content").removeClass("canvassusp-homeindex");
      $("#my-account  .offcanvas-siderbars").removeClass("canvassusp-acount");     
    } 



    }); 

});    
