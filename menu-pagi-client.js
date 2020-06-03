$( document ).ready(function() {
    
	$('#left_column .block .block_content ').css({"display":"none"});
	$('#left_column #categories_block_left .title_block').click(function(){
     	$('#left_column #categories_block_left .title_block').toggleClass('clicado');
     	$('#left_column #categories_block_left .title_block').removeClass('active');
		$('#left_column .block .block_content ').toggleClass('menuclick');
	});

	$( '#my-account #left_column h4.title_block').click(function(){
    	$('#left_column .block h4').toggleClass('clicado');
    	$('#left_column .block h4').removeClass('active');
		$('#my-account #left_column .block .block_content').toggleClass('menuclick');
	});
});