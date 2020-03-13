$(document).ready(function(){

		//Barra de Categorias e Buscas
		//Barra de Categorias
		if (window.matchMedia('(max-width: 1023px)').matches){  
  			
  			
        //Botão Fechar Toggle
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
				});

				$('#main-content-overlay').click(function(){
					$('.closemobile').css({"display":"none"});
					$('.icon-bars').css({"display":"block"});

				});
			
			}else{

        $('.closemobile').css({"display":"none"});
        $('.fa-times').removeClass('closemobile');
      }
		


  			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Categorias referentes a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"200px"});	      		
    			}

    			//Categorias referentes a Barra Fixa
    			else{
           			$('.wbc-mainnav').css({"margin-top":"168px"});	    
    			}
			}); 
		}

		//Barra de Buscas
		if (window.matchMedia('(max-width: 1023px)').matches){  
			//Removedor de Classes
			$('#header-search').removeClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");	
			$('#suggestions1').removeClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			//Efeito Scroll
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('#header-search').css({"margin-top":"162px"});  
    		
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('#header-search').css({"margin-top":"170px"});  
    			}
			});
		}
		else{
	
			//Adicionador de Classes
			$('#header-search').addClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");
			$('#suggestions1').addClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
		}

		//Ajuste da Barra de Buscas na Resolução de 999px
		if (window.matchMedia('(max-width: 999px)').matches){  

			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"191px"});  
    				$('#header-search').css({"margin-top":"148px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"156px"});  
  			  		$('#header-search').css({"margin-top":"155px"});
    			}
			});
		}
		//Ajuste da Barra de Buscas na Resolução de 992px
		if (window.matchMedia('(max-width: 992px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"143px"});  
    				$('#header-search').css({"margin-top":"140px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"142px"});  
  			  		$('#header-search').css({"margin-top":"142px"});
    			}
			});
		}

		//Adicionador de Classe a Barra de Busca em Resoluçoes Acima de 992px
		else{
			$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
		}


		//Ajuste da Barra de Buscas na Resolução de 991px
		if (window.matchMedia('(max-width: 991px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"139px"});  
    				$('#header-search').css({"margin-top":"135px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"137px"});  
  			  		$('#header-search').css({"margin-top":"137px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 990px
		if (window.matchMedia('(max-width: 990px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"140px"});  
    				$('#header-search').css({"margin-top":"135px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"138px"});  
  			  		$('#header-search').css({"margin-top":"134px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 768px
		if (window.matchMedia('(max-width: 768px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"164px"});  
    				$('#header-search').css({"margin-top":"158px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"163px"});  
  			  		$('#header-search').css({"margin-top":"158px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 734px
		if (window.matchMedia('(max-width: 734px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"170px"});  
    				$('#header-search').css({"margin-top":"167px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"170px"});  
  			  		$('#header-search').css({"margin-top":"167px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 727px
		if (window.matchMedia('(max-width: 727px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"172px"});  
    				$('#header-search').css({"margin-top":"167px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"172px"});  
  			  		$('#header-search').css({"margin-top":"167px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 713px
		if (window.matchMedia('(max-width: 713px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"171px"});  
    				$('#header-search').css({"margin-top":"165px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"171px"});  
  			  		$('#header-search').css({"margin-top":"165px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 707px
		if (window.matchMedia('(max-width: 707px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"168px"});  
    				$('#header-search').css({"margin-top":"163px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"168px"});  
  			  		$('#header-search').css({"margin-top":"163px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 700px
		if (window.matchMedia('(max-width: 700px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"168px"});  
    				$('#header-search').css({"margin-top":"163px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"168px"});  
  			  		$('#header-search').css({"margin-top":"163px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 691px
		if (window.matchMedia('(max-width: 691px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"164px"});  
    				$('#header-search').css({"margin-top":"160px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"164px"});  
  			  		$('#header-search').css({"margin-top":"160px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 686px
		if (window.matchMedia('(max-width: 686px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"165px"});  
    				$('#header-search').css({"margin-top":"160px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"165px"});  
  			  		$('#header-search').css({"margin-top":"160px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 675px
		if (window.matchMedia('(max-width: 675px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"163px"});  
    				$('#header-search').css({"margin-top":"158px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"163px"});  
  			  		$('#header-search').css({"margin-top":"158px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 666px
		if (window.matchMedia('(max-width: 666px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"113px"});  
    				$('#header-search').css({"margin-top":"157px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"113px"});  
  			  		$('#header-search').css({"margin-top":"157px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 646px
		if (window.matchMedia('(max-width: 646px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"113px"});  
    				$('#header-search').css({"margin-top":"155px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"113px"});  
  			  		$('#header-search').css({"margin-top":"155px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 620px
		if (window.matchMedia('(max-width: 620px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"103px"});  
    				$('#header-search').css({"margin-top":"148px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"103px"});  
  			  		$('#header-search').css({"margin-top":"148px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 601px
		if (window.matchMedia('(max-width: 601px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"100px"});  
    				$('#header-search').css({"margin-top":"145px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"100px"});  
  			  		$('#header-search').css({"margin-top":"145px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 582px
		if (window.matchMedia('(max-width: 582px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"98px"});  
    				$('#header-search').css({"margin-top":"142px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"98px"});  
  			  		$('#header-search').css({"margin-top":"142px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 563px
		if (window.matchMedia('(max-width: 563px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"90px"});  
    				$('#header-search').css({"margin-top":"136px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"90px"});  
  			  		$('#header-search').css({"margin-top":"136px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 545px
		if (window.matchMedia('(max-width: 545px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"103px"});  
    				$('#header-search').css({"margin-top":"147px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"103px"});  
  			  		$('#header-search').css({"margin-top":"147px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 538px
		if (window.matchMedia('(max-width: 538px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"133px"});  
    				$('#header-search').css({"margin-top":"147px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"133px"});  
  			  		$('#header-search').css({"margin-top":"147px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 497px
		if (window.matchMedia('(max-width: 497px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"118px"});  
    				$('#header-search').css({"margin-top":"135px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"118px"});  
  			  		$('#header-search').css({"margin-top":"135px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 490px
		if (window.matchMedia('(max-width: 490px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"205px"});  
    				$('#header-search').css({"margin-top":"128px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"205px"});  
  			  		$('#header-search').css({"margin-top":"128px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 440px
		if (window.matchMedia('(max-width: 440px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"190px"});  
    				$('#header-search').css({"margin-top":"120px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"190px"});  
  			  		$('#header-search').css({"margin-top":"120px"});
    			}
			});
		}



		//Ajuste da Barra de Buscas na Resolução de 425px
		if (window.matchMedia('(max-width: 425px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"182px"});  
    				$('#header-search').css({"margin-top":"115px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"182px"});  
  			  		$('#header-search').css({"margin-top":"115px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 390px
		if (window.matchMedia('(max-width: 390px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"173px"});  
    				$('#header-search').css({"margin-top":"112px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"173px"});  
  			  		$('#header-search').css({"margin-top":"112px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 360px
		if (window.matchMedia('(max-width: 360px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"158px"});  
    				$('#header-search').css({"margin-top":"104px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"158px"});  
  			  		$('#header-search').css({"margin-top":"104px"});
    			}
			});
		}

		
		// Funçao Resize da Barra de Buscas e Categorias
		$(window).resize(function(){
			//Barra de Categorias e Buscas
		//Barra de Categorias
		if (window.matchMedia('(max-width: 1023px)').matches){  
  			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Categorias referentes a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"200px"});	      		
    			}

    			//Categorias referentes a Barra Fixa
    			else{
           			$('.wbc-mainnav').css({"margin-top":"168px"});	    
    			}
			}); 
		}


		//Botão Fechar Toggle
  		if ($(window).width() <= 1023){  
				
			$('.menu-mobile').append('<i class="fas fa-times"></i>');
        $('.fa-times').addClass('closemobile');
			$('.closemobile').css({"display":"none"});
				
			$('.menu-mobile .icon-bars').click(function(){
				$('.icon-bars').css({"display":"none"});
				$('.closemobile').css({"display":"block"});
			});

			$('.menu-mobile .fa-times').click(function(){
				$('.closemobile').css({"display":"none"});
				$('.icon-bars').css({"display":"block"});
			});

			$('#main-content-overlay').click(function(){
				$('.closemobile').css({"display":"none"});
				$('.icon-bars').css({"display":"block"});

			});
			
		}

		


		//Barra de Buscas
		if (window.matchMedia('(max-width: 1023px)').matches){  
			//Removedor de Classes
			$('#header-search').removeClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");	
			$('#suggestions1').removeClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			//Efeito Scroll
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('#header-search').css({"margin-top":"162px"});  
    		
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('#header-search').css({"margin-top":"170px"});  
    			}
			});
		}
		else{
	
			//Adicionador de Classes
			$('#header-search').addClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");
			$('#suggestions1').addClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
		}

		//Ajuste da Barra de Buscas na Resolução de 999px
		if (window.matchMedia('(max-width: 999px)').matches){  

			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"191px"});  
    				$('#header-search').css({"margin-top":"148px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"156px"});  
  			  		$('#header-search').css({"margin-top":"155px"});
    			}
			});
		}
		//Ajuste da Barra de Buscas na Resolução de 992px
		if (window.matchMedia('(max-width: 992px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"143px"});  
    				$('#header-search').css({"margin-top":"140px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"142px"});  
  			  		$('#header-search').css({"margin-top":"142px"});
    			}
			});
		}

		//Adicionador de Classe a Barra de Busca em Resoluçoes Acima de 992px
		else{
			$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
		}


		//Ajuste da Barra de Buscas na Resolução de 991px
		if (window.matchMedia('(max-width: 991px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"139px"});  
    				$('#header-search').css({"margin-top":"135px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"137px"});  
  			  		$('#header-search').css({"margin-top":"137px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 990px
		if (window.matchMedia('(max-width: 990px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"140px"});  
    				$('#header-search').css({"margin-top":"135px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"138px"});  
  			  		$('#header-search').css({"margin-top":"134px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 768px
		if (window.matchMedia('(max-width: 768px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"164px"});  
    				$('#header-search').css({"margin-top":"158px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"163px"});  
  			  		$('#header-search').css({"margin-top":"158px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 734px
		if (window.matchMedia('(max-width: 734px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"170px"});  
    				$('#header-search').css({"margin-top":"167px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"170px"});  
  			  		$('#header-search').css({"margin-top":"167px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 727px
		if (window.matchMedia('(max-width: 727px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"172px"});  
    				$('#header-search').css({"margin-top":"167px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"172px"});  
  			  		$('#header-search').css({"margin-top":"167px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 713px
		if (window.matchMedia('(max-width: 713px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"171px"});  
    				$('#header-search').css({"margin-top":"165px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"171px"});  
  			  		$('#header-search').css({"margin-top":"165px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 707px
		if (window.matchMedia('(max-width: 707px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"168px"});  
    				$('#header-search').css({"margin-top":"163px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"168px"});  
  			  		$('#header-search').css({"margin-top":"163px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 700px
		if (window.matchMedia('(max-width: 700px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"168px"});  
    				$('#header-search').css({"margin-top":"163px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"168px"});  
  			  		$('#header-search').css({"margin-top":"163px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 691px
		if (window.matchMedia('(max-width: 691px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"164px"});  
    				$('#header-search').css({"margin-top":"160px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"164px"});  
  			  		$('#header-search').css({"margin-top":"160px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 686px
		if (window.matchMedia('(max-width: 686px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"165px"});  
    				$('#header-search').css({"margin-top":"160px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"165px"});  
  			  		$('#header-search').css({"margin-top":"160px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 666px
		if (window.matchMedia('(max-width: 666px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"113px"});  
    				$('#header-search').css({"margin-top":"157px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"113px"});  
  			  		$('#header-search').css({"margin-top":"157px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 646px
		if (window.matchMedia('(max-width: 646px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"113px"});  
    				$('#header-search').css({"margin-top":"155px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"113px"});  
  			  		$('#header-search').css({"margin-top":"155px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 620px
		if (window.matchMedia('(max-width: 620px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"103px"});  
    				$('#header-search').css({"margin-top":"148px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"103px"});  
  			  		$('#header-search').css({"margin-top":"148px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 601px
		if (window.matchMedia('(max-width: 601px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"100px"});  
    				$('#header-search').css({"margin-top":"145px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"100px"});  
  			  		$('#header-search').css({"margin-top":"145px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 582px
		if (window.matchMedia('(max-width: 582px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"98px"});  
    				$('#header-search').css({"margin-top":"142px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"98px"});  
  			  		$('#header-search').css({"margin-top":"142px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 563px
		if (window.matchMedia('(max-width: 563px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"90px"});  
    				$('#header-search').css({"margin-top":"136px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"90px"});  
  			  		$('#header-search').css({"margin-top":"136px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 545px
		if (window.matchMedia('(max-width: 545px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"103px"});  
    				$('#header-search').css({"margin-top":"147px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"103px"});  
  			  		$('#header-search').css({"margin-top":"147px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 538px
		if (window.matchMedia('(max-width: 538px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"133px"});  
    				$('#header-search').css({"margin-top":"147px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"133px"});  
  			  		$('#header-search').css({"margin-top":"147px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 497px
		if (window.matchMedia('(max-width: 497px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"118px"});  
    				$('#header-search').css({"margin-top":"135px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"118px"});  
  			  		$('#header-search').css({"margin-top":"135px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 490px
		if (window.matchMedia('(max-width: 490px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"205px"});  
    				$('#header-search').css({"margin-top":"128px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"205px"});  
  			  		$('#header-search').css({"margin-top":"128px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 440px
		if (window.matchMedia('(max-width: 440px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"190px"});  
    				$('#header-search').css({"margin-top":"120px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"190px"});  
  			  		$('#header-search').css({"margin-top":"120px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 425px
		if (window.matchMedia('(max-width: 425px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"182px"});  
    				$('#header-search').css({"margin-top":"115px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"182px"});  
  			  		$('#header-search').css({"margin-top":"115px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 390px
		if (window.matchMedia('(max-width: 390px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"173px"});  
    				$('#header-search').css({"margin-top":"112px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"173px"});  
  			  		$('#header-search').css({"margin-top":"112px"});
    			}
			});
		}

		//Ajuste da Barra de Buscas na Resolução de 360px
		if (window.matchMedia('(max-width: 360px)').matches){  

			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			$(window).scroll(function(){
    			var topo = $(window).scrollTop();
    			//Referente a Barra Estatica
    			if(topo<151){
  					$('.wbc-mainnav').css({"margin-top":"158px"});  
    				$('#header-search').css({"margin-top":"104px"});
    			}

    			//Referente a Barra Fixa
    			else{
              
              		$('.wbc-mainnav').css({"margin-top":"158px"});  
  			  		$('#header-search').css({"margin-top":"104px"});
    			}
			});
		}
			
		




		});
});