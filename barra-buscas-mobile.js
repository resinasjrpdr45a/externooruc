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
					$('.wbc-mainnav').css({"margin-top":"0"}); 
				});

				$('#main-content-overlay').click(function(){
					$('.closemobile').css({"display":"none"});
					$('.icon-bars').css({"display":"block"});
					$('.wbc-mainnav').css({"margin-top":"0"}); 

				});
			
			}  			
		}

		//Barra de Buscas
		if (window.matchMedia('(max-width: 1023px)').matches){  
			//Removedor de Classes
			$('#header-search').removeClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");	
			$('#suggestions1').removeClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");	

			$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('#header-search').css({"margin-top":"0"});
  				$('#wbc-mainnav').css({"margin-top":"163px"});
  				$('#header-right-cart').css({"left":"0"});
  				$('#header-menu-mobile').css({"right":"0"});
  				$('#header-menu-mobile').css({"top":"0"});
  				$('#header-right-cart').css({"top":"0"});       		
    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
             	$('#header-search').css({"margin-top":"-13px"});
  				$('#wbc-mainnav').css({"margin-top":"140px"}); 
  				$('#header-right-cart').css({"left":"0"});
  				$('#header-right-cart').css({"top":"-4px"}); 
  				$('#header-menu-mobile').css({"right":"0"});
  				$('#header-menu-mobile').css({"top":"12px"}); 
  				     
    		}
			});
		
		}

		else{	
			//Adicionador de Classes
			$('#header-search').addClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");
			$('#suggestions1').addClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$('#header-right-cart').css({"left":"0"});
  			$('#header-right-cart').css({"top":"0"}); 
  			$('#header-menu-mobile').css({"right":"0"});
  			$('#header-menu-mobile').css({"top":"0"}); 
		}

		if (window.matchMedia('(max-width: 999px)').matches){
			$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('#header-search').css({"margin-top":"2px"});
  				$('#wbc-mainnav').css({"margin-top":"58px"});
  				$('#header-right-cart').css({"left":"0"});
  				$('#header-right-cart').css({"top":"0"}); 
  				$('#header-menu-mobile').css({"right":"0"});
  				$('#header-menu-mobile').css({"top":"0"});
  				       		
    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
             	$('#header-search').css({"margin-top":"-11px"});
  				$('#wbc-mainnav').css({"margin-top":"36px"});
  				$('#header-right-cart').css({"left":"244px"});
  				$('#header-right-cart').css({"top":"-4px"}); 
  				$('#header-menu-mobile').css({"right":"242px"});
  				$('#header-menu-mobile').css({"top":"12px"}); 
  				      
    		}
			});


		}else{
			$('#header-right-cart').css({"left":"0"});
  			$('#header-right-cart').css({"top":"0"}); 
  			$('#header-menu-mobile').css({"right":"0"});
  			$('#header-menu-mobile').css({"top":"0"});	
		}


		
		//Ajuste da Barra de Buscas na Resolução de 992px
		if (window.matchMedia('(max-width: 992px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");

			$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('#header-search').css({"margin-top":"-25px"});
  				$('#wbc-mainnav').css({"margin-top":"29px"});           		
    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
             	$('#header-search').css({"margin-top":"-10px"});
  				$('#wbc-mainnav').css({"margin-top":"40px"});    
    		}
			});			
		}


		//Adicionador de Classe a Barra de Busca em Resoluçoes Acima de 992px
		else{
			$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$('#header-right-cart').css({"left":"0"});
  			$('#header-right-cart').css({"top":"0"}); 
  			$('#header-menu-mobile').css({"right":"0"});
  			$('#header-menu-mobile').css({"top":"0"});	
		}


		//Ajuste da Barra de Buscas na Resolução de 991px
		if (window.matchMedia('(max-width: 991px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");

			$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('#header-search').css({"margin-top":"-25px"});
  				$('#wbc-mainnav').css({"margin-top":"32px"});
  				$('#header-right-cart').css({"left":"604px"}); 

    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
             	$('#header-search').css({"margin-top":"-10px"});
  				$('#wbc-mainnav').css({"margin-top":"42px"});
  				$('#header-right-cart').css({"left":"603px"});    
    		}
			});					
		}

		else{
			$('#header-right-cart').css({"left":"0"});
  			$('#header-right-cart').css({"top":"0"}); 
  			$('#header-menu-mobile').css({"right":"0"});
  			$('#header-menu-mobile').css({"top":"0"});
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

            $(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('#header-search').css({"margin-top":"0"});
  				$('#wbc-mainnav').css({"margin-top":"163px"}); 
  				$('#header-right-cart').css({"left":"0"});
  				$('#header-right-cart').css({"top":"0"});
  				$('#header-menu-mobile').css({"right":"0"});
  				$('#header-menu-mobile').css({"top":"0"});         		
    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
             	$('#header-search').css({"margin-top":"-13px"});
  				$('#wbc-mainnav').css({"margin-top":"140px"});
  				$('#header-right-cart').css({"left":"0"});
  				$('#header-right-cart').css({"top":"-4px"});
  				$('#header-menu-mobile').css({"right":"0"}); 
  				$('#header-menu-mobile').css({"top":"12px"});     
    		}
			});
			
		}
		else{
	
			//Adicionador de Classes
			$('#header-search').addClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");
			$('#suggestions1').addClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$('#header-right-cart').css({"left":"0"});
  			$('#header-right-cart').css({"top":"0"}); 
  			$('#header-menu-mobile').css({"right":"0"});
  			$('#header-menu-mobile').css({"top":"0"}); 
		}

		if (window.matchMedia('(max-width: 999px)').matches){
			$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('#header-search').css({"margin-top":"2px"});
  				$('#wbc-mainnav').css({"margin-top":"58px"});
  				$('#header-right-cart').css({"left":"0"});
  				$('#header-right-cart').css({"top":"0"});
  				$('#header-menu-mobile').css({"right":"0"});
  				$('#header-menu-mobile').css({"top":"0"});       		
    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
             	$('#header-search').css({"margin-top":"-11px"});
  				$('#wbc-mainnav').css({"margin-top":"36px"});
  				$('#header-right-cart').css({"left":"244px"});
  				$('#header-right-cart').css({"top":"-4px"});
  				$('#header-menu-mobile').css({"right":"242px"}); 
  				$('#header-menu-mobile').css({"top":"12px"});

    		}
			});


		}

		else{
			$('#header-right-cart').css({"left":"0"});
  			$('#header-right-cart').css({"top":"0"}); 
  			$('#header-menu-mobile').css({"right":"0"});
  			$('#header-menu-mobile').css({"top":"0"});
		}

		
		//Ajuste da Barra de Buscas na Resolução de 992px
		if (window.matchMedia('(max-width: 992px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");	

			$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('#header-search').css({"margin-top":"-25px"});
  				$('#wbc-mainnav').css({"margin-top":"29px"});      		
    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
             	$('#header-search').css({"margin-top":"-10px"});
  				$('#wbc-mainnav').css({"margin-top":"40px"});      
    		}
			});					
		}

		//Adicionador de Classe a Barra de Busca em Resoluçoes Acima de 992px
		else{
			$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$('#header-right-cart').css({"left":"0"});
  			$('#header-right-cart').css({"top":"0"}); 
  			$('#header-menu-mobile').css({"right":"0"});
  			$('#header-menu-mobile').css({"top":"0"});
		}


		//Ajuste da Barra de Buscas na Resolução de 991px
		if (window.matchMedia('(max-width: 991px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");

			$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('#header-search').css({"margin-top":"-25px"});
  				$('#wbc-mainnav').css({"margin-top":"32px"});
  				$('#header-right-cart').css({"left":"604px"});      		
    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
             	$('#header-search').css({"margin-top":"-10px"});
  				$('#wbc-mainnav').css({"margin-top":"42px"});
  				$('#header-right-cart').css({"left":"603px"});      
    		}
			});						
		}

		else{
			$('#header-right-cart').css({"left":"0"});
  			$('#header-right-cart').css({"top":"0"}); 
  			$('#header-menu-mobile').css({"right":"0"});
  			$('#header-menu-mobile').css({"top":"0"});
		}
	});
});