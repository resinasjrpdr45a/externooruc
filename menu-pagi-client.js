$( document ).ready(function() {
	if (window.matchMedia('(max-width: 991px)').matches){
		$('#left_column .block .block_content').css({"display":"none"}); 
		$('#left_column .block h4').click(function(){
 			$('#left_column .block h4').toggleClass("clicado");
			$('#left_column .block .block_content').css({"display":"none"}); 
			$('#left_column .block .block_content').toggleClass("menucat");
		});
	}

	$(window).resize(function(){
		if (window.matchMedia('(max-width: 991px)').matches){
			$('#left_column .block .block_content').css({"display":"none"}); 
 			$('#left_column .block h4').click(function(){
 				$('#left_column .block h4').toggleClass("clicado");
				$('#left_column .block .block_content').css({"display":"none"}); 
				$('#left_column .block .block_content').toggleClass("menucat");
			});
 		}
	});	
});