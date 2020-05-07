$(document).ready(function(){
 	if ($(window).width() <= 767){          		
			$('.checkout .basket-heading ul li span').removeClass("hidden-xs");
			
		}  

		


	$(window).resize(function(){
		if ($(window).width() <= 768){          		
			$('.checkout .basket-heading ul li span').removeClass("hidden-xs");
			
		}  

		
		
	});		       
    
});