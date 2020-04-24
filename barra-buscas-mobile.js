$(document).ready(function(){

		//Barra de Categorias e Buscas
		//Barra de Categorias
		if (window.matchMedia('(max-width: 1023px)').matches){  
  			if ($(window).width() <= 1023){          		
				$('.menu-mobile').append('<i class="fas fa-times"></i>');
				$('.fa-times').addClass('closemobile');
				$('.closemobile').css({"display":"none"});
				
				$('.menu-mobile .icon-bars').click(function(){
					$('.icon-bars').css({"display":"none"});
					$('.closemobile').css({"display":"block"});
					
				});

				$('.menu-mobile .closemobile').click(function(){
					$('.closemobile').css({"display":"none"});
					$('.icon-bars').css({"display":"block"});
					$('.wbc-mainnav').css({"margin-top":"160px"}); 
					$('#searchbox').css({"margin-top":"155px"});
				});

				$('#main-content-overlay').click(function(){
					$('.closemobile').css({"display":"none"});
					$('.icon-bars').css({"display":"block"});
					$('.wbc-mainnav').css({"margin-top":"160px"}); 
					$('#searchbox').css({"margin-top":"162px"});

				});
			
			}  			
		}

		//Barra de Buscas
		if (window.matchMedia('(max-width: 1023px)').matches){  
			//Removedor de Classes
			$('#header-search').removeClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");	
			$('#suggestions1').removeClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");			
		}

		else{	
			//Adicionador de Classes
			$('#header-search').addClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");
			$('#suggestions1').addClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
		}

		
		//Ajuste da Barra de Buscas na Resolução de 992px
		if (window.matchMedia('(max-width: 992px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");			
		}

		//Adicionador de Classe a Barra de Busca em Resoluçoes Acima de 992px
		else{
			$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
		}


		//Ajuste da Barra de Buscas na Resolução de 991px
		if (window.matchMedia('(max-width: 991px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");			
		}

				
		// Funçao Resize da Barra de Buscas e Categorias
		$(window).resize(function(){
			
		
		//Barra de Buscas
		if (window.matchMedia('(max-width: 1023px)').matches){  
			//Removedor de Classes
			$('#header-search').removeClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");	
			$('#suggestions1').removeClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");

			$('.wbc-mainnav').css({"margin-top":"0"});  
            $('#header-search').css({"margin-top":"0"});
			
		}
		else{
	
			//Adicionador de Classes
			$('#header-search').addClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");
			$('#suggestions1').addClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
		}

		
		//Ajuste da Barra de Buscas na Resolução de 992px
		if (window.matchMedia('(max-width: 992px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");			
		}

		//Adicionador de Classe a Barra de Busca em Resoluçoes Acima de 992px
		else{
			$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
		}


		//Ajuste da Barra de Buscas na Resolução de 991px
		if (window.matchMedia('(max-width: 991px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");			
		}
	});
});