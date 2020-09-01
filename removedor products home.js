$(document).ready(function(){
if (window.matchMedia('(max-width: 475px)').matches){
   $('#index .ajax_block_product').removeClass("col-xs-6  col-sm-4  col-md-3  col-lg-3");
} else{
   $('#index .ajax_block_product').addClass("col-xs-6  col-sm-4  col-md-3  col-lg-3 ");
}

 $(window).resize(function(){
    if (window.matchMedia('(max-width: 475px)').matches){
   		$('#index .ajax_block_product').removeClass("col-xs-6  col-sm-4  col-md-3  col-lg-3");
	} else{
   		$('#index .ajax_block_product').addClass("col-xs-6  col-sm-4  col-md-3  col-lg-3 ");
	}
  });



});


