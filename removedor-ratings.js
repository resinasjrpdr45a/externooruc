$(document).ready(function(){

	
  	if ($(window).width() <= 1023){          		
  		$('.reviews-modal-av-title .form-group div').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
  		$('.reviews-modal-av-op .form-group div').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
  		$('.reviews-modal-av-apelido .form-group div').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
  		$('.reviews-modal-av-time .form-group div').removeClass("col-lg-4 col-md-4 col-sm-6 col-xs-12");
			
			

	} 


	else{
		$('.reviews-modal-av-title .form-group div').addClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-op .form-group div').addClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-apelido .form-group div').addClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-time .form-group div').addClass("col-lg-4 col-md-4 col-sm-6 col-xs-12");

		$('.reviews-modal-av-title .form-group .clearfix').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-op .form-group .clearfix').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-apelido .form-group .clearfix').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-time .form-group .clearfix').removeClass("col-lg-4 col-md-4 col-sm-6 col-xs-12");

	} 			
		

	// Funçao Resize da Barra de Buscas e Categorias
	$(window).resize(function(){
		if ($(window).width() <= 1023){          		
  		$('.reviews-modal-av-title .form-group div').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
  		$('.reviews-modal-av-op .form-group div').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
  		$('.reviews-modal-av-apelido .form-group div').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
  		$('.reviews-modal-av-time .form-group div').removeClass("col-lg-4 col-md-4 col-sm-6 col-xs-12");
			
			

	} 


	else{
		$('.reviews-modal-av-title .form-group div').addClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-op .form-group div').addClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-apelido .form-group div').addClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-time .form-group div').addClass("col-lg-4 col-md-4 col-sm-6 col-xs-12");

		$('.reviews-modal-av-title .form-group .clearfix').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-op .form-group .clearfix').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-apelido .form-group .clearfix').removeClass("col-lg-6 col-md-6 col-sm-8 col-xs-12");
		$('.reviews-modal-av-time .form-group .clearfix').removeClass("col-lg-4 col-md-4 col-sm-6 col-xs-12");

	} 					

	});
});