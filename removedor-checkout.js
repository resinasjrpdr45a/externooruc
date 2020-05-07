$(document).ready(function(){
 	if (window.matchMedia('(max-width: 767px)').matches){       		
			$('.checkout .list-unstyled li span').removeClass("hidden-xs");
			
		}  

		


	$(window).resize(function(){
		if (window.matchMedia('(max-width: 991px)').matches){        		
			$('.checkout .list-unstyled  li span').removeClass("hidden-xs");
			
		}  

		
		
	});		       
    
});