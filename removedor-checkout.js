$(document).ready(function(){
 	if (window.matchMedia('(max-width: 767px)').matches){       		
			$('.checkout .table-summary a span').removeClass("hidden-xs");
			
		}  

		


	$(window).resize(function(){
		if (window.matchMedia('(max-width: 767px)').matches){        		
			$('.checkout .table-summary a span').removeClass("hidden-xs");
			
		}  

		
		
	});		       
    
});