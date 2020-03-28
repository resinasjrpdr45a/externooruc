$(document).ready(function(){
    $('.desktopclose').css({"display":"none"});
    $('.barshomedesk').css({"display":"none"});

    if ($(window).width() > 1023){  
      $('.header-inner').append('<i class="icon-bars barshomedesk"></i>');
      $('.header-inner').append('<i class="fas fa-times desktopclose"></i>');

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
            $('.header-inner .logo-theme img').css({"width":"170px"});
            $('.barshomedesk').addClass("icon-bars");
            $('#wbc-mainnav').removeClass("activetog");
          }

          else{
                    
            $('.barshomedesk').css({"display":"block"});
            $('.header-inner .logo-theme img').css({"width":"123px"});
            $('#product .offcanvas-siderbars').css({"padding-top":"250px"});
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
      });

      $('.desktopclose').click(function(){
          $('#wbc-mainnav').toggleClass('activetog');
          $('.desktopclose').css({"display":"none"});
          $('.barshomedesk').css({"display":"block"});
          $('.barshomedesk').addClass("icon-bars");
      });     
    } 

    else{

        $('.barshomedesk').css({"display":"none"});
        $('.desktopclose').css({"display":"none"});

    }

    $(window).resize(function(){
        $('.desktopclose').css({"display":"none"});
        $('.barshomedesk').css({"display":"none"});

    	if ($(window).width() > 1023){  
      		$('.desktopclose').css({"display":"none"});
      		$('.icon-bars').css({"display":"none"});
      		$('.barshomedesk').css({"display":"none"});
        
        	$(window).scroll(function(){
          	var topo = $(window).scrollTop();
          		if(topo<151){
                	$('.barshomedesk').css({"display":"none"});
                   $('#product .offcanvas-siderbars').css({"padding-top":"0"});
                  $('.header-inner .logo-theme img').css({"width":"170px"});
                	$('.header-inner #header-right-cart').css({"margin-top":"20px"});
                	$('.header-inner .icon-shopping-cart').css({"font-size":"73px"});
                	$('.header-inner .header-cart ').css({"top":"0"});
                	$('.desktopclose').css({"display":"none"});
                	$('.barshomedesk').addClass("icon-bars");
                	$('#wbc-mainnav').removeClass("activetog");
          		}

          		else{      
            		$('.barshomedesk').css({"display":"block"});
                $('#product .offcanvas-siderbars').css({"padding-top":"250px"});
                $('.header-inner .logo-theme img').css({"width":"123px"});
            		$('.header-inner #header-right-cart').css({"margin-top":"30px"});
            		$('.header-inner .icon-shopping-cart').css({"font-size":"60px"});
            		$('.header-inner .header-cart').css({"top":"10px"});
          		}
        	});

      	  $('.barshomedesk').click(function(){
          	$('#wbc-mainnav').toggleClass('activetog');
          	$('.desktopclose').css({"display":"block"});
          	$('.barshomedesk').css({"display":"none"});
          	$('.barshomedesk').removeClass("icon-bars");
      	  });

      	$('.desktopclose').click(function(){
          $('#wbc-mainnav').toggleClass('activetog');
          $('.desktopclose').css({"display":"none"});
          $('.barshomedesk').css({"display":"block"});
          $('.barshomedesk').addClass("icon-bars");
     	});     
    } 

    else{
        $('.barshomedesk').css({"display":"none"});
        $('.desktopclose').css({"display":"none"});
    }

	});    
});