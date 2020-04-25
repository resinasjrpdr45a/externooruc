$(document).ready(function(){

	
  	if ($(window).width() <= 1023){          		
  		$('.reviews-modal-av-title .form-group div').removeClass("col-lg-6 .col-md-6 col-sm-8 col-xs-12");
			
			

	} 


	else{
		$('.reviews-modal-av-title .form-group div').addClass("col-lg-6 .col-md-6 col-sm-8 col-xs-12");

	} 			
		

	// Funçao Resize da Barra de Buscas e Categorias
	$(window).resize(function(){
			

	});
});