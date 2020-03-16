$(document).ready(function(){
	//Header Mobile-Teblet

	//Mobile
	if ($(window).width() <= 1023){  
			//Remoçao das Colunas do Logo
		$('#header_logo').removeClass("col-md-3 col-sm-6 col-xs-7")
	}
		
	//PC
	else{
			//Adição das Colunas do Logo
		$('#header_logo').addClass("col-md-3 col-sm-6 col-xs-7");
	}

	// Funçao Resize do Header
	$(window).resize(function(){

		//Mobile
		if ($(window).width() <= 1023){  
			//Remoçao das Colunas do Logo
			$('#header_logo').removeClass("col-md-3 col-sm-6 col-xs-7");

		}

		//PC
		else{
			//Adição das Colunas do Logo
				
			$('header_logo').addClass("col-md-3 col-sm-6 col-xs-7");
		}
	});

  //Mobile
  if ($(window).width() > 1023){  
      //Remoçao das Colunas do Logo
    $('#header_logo').addClass("col-md-3 col-sm-6 col-xs-7")
  }

  // Funçao Resize do Header
  $(window).resize(function(){
    if ($(window).width() > 1023){  
      //Remoçao das Colunas do Logo
    $('#header_logo').addClass("col-md-3 col-sm-6 col-xs-7")
  }
    
  });



	//Edição no scroll do Header Mobile 
	if ($(window).width() <= 1023){  
  
  		//Função de Calculo da Barra de Scroll
  		/*$(window).scroll(function(){
    	var topo = $(window).scrollTop();
    		alert(topo);
  		});*/

 		$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('.header-cart ').css({"top":"-20px"});      		
    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
             	 $('.header-cart ').css({"top":"0"});    
    		}
		});
	}


	// Funçao Resize do Header
	$(window).resize(function(){
		//Edição no scroll do Header Mobile 
		if ($(window).width() <= 1023){  
  
  			//Função de Calculo da Barra de Scroll
 	 		/*$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			alert(topo);
  			});*/

 			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Conteudos referentes a Barra Estatica
    			if(topo<151){
  						
  					$('.header-cart ').css({"top":"-20px"});      		
    			}

    			//Conteudos referentes a Barra Fixa
    			else{
              
              		$('.header-cart ').css({"top":"0"});  
    			}
			});
		}
	});

	//Correção do Efeito Acima para Resoluçoes A partir de 991
	//Edição no scroll do Header Mobile 
	if ($(window).width() <= 991){  
  
  		//Função de Calculo da Barra de Scroll
  		/*$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		alert(topo);
  		});*/

 		$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('.header-cart ').css({"top":"-24px"});     		
    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
              	$('.header-cart ').css({"top":"-10px"});   
    		}
		});
	}


	// Funçao Resize do Header
	$(window).resize(function(){
		//Edição no scroll do Header Mobile 
		if ($(window).width() <= 991){  
  
  			//Função de Calculo da Barra de Scroll
 	 		/*$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			alert(topo);
  			});*/

 			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Conteudos referentes a Barra Estatica
    			if(topo<151){
  						
  					$('.header-cart ').css({"top":"-24px"});      		
    			}

    			//Conteudos referentes a Barra Fixa
    			else{
              
              		$('.header-cart ').css({"top":"-10px"});    
    			}
			});
		}
	});

	//Correção do Efeito Acima para Resoluçoes A partir de 990
	//Edição no scroll do Header Mobile 
	if ($(window).width() <= 990){  
  
  		//Função de Calculo da Barra de Scroll
  		/*$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		alert(topo);
  		});*/

 		$(window).scroll(function(){
    		var topo = $(window).scrollTop();
    		//Conteudos referentes a Barra Estatica
    		if(topo<151){
  					
  				$('.header-cart ').css({"top":"-24px"});     		
    		}

    		//Conteudos referentes a Barra Fixa
    		else{
              
              	$('.header-cart ').css({"top":"-24px"});   
    		}
		});
	}


	// Funçao Resize do Header
	$(window).resize(function(){
		//Edição no scroll do Header Mobile 
		if ($(window).width() <= 990){  
  
  			//Função de Calculo da Barra de Scroll
 	 		/*$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			alert(topo);
  			});*/

 			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Conteudos referentes a Barra Estatica
    			if(topo<151){
  						
  					$('.header-cart ').css({"top":"-24px"});      		
    			}

    			//Conteudos referentes a Barra Fixa
    			else{
              
              		$('.header-cart ').css({"top":"-24px"});    
    			}
			});
		}
	});
});