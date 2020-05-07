$(document).ready(function(){
 	if ($(window).width() <= 767){          		
			$('.checkout ul li span').removeClass("hidden-xs");
			
		}  

		


	$(window).resize(function(){
		if ($(window).width() <= 768){          		
			$('.checkout ul li span').removeClass("hidden-xs");
			
		}  

		
		
	});		       
    
});