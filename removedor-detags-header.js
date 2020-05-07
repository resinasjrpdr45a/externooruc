
$(document).ready(function(){
	if ($(window).width() > 1023){
		$('#header-search').addClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");	
		$('#suggestions1').addClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
		$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
		

	}
	else{
		$('#header-search').removeClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");	
		$('#suggestions1').removeClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
		$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
		
	}

	$(window).resize(function(){
		if ($(window).width() > 1023){
			$('#header-search').addClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");	
			$('#suggestions1').addClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			$('#wbc-mainnav').addClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");
			
		   }
		else{
			$('#header-search').removeClass("col-md-offset-1 col-md-6 col-sm-12 col-xs-12");	
			$('#suggestions1').removeClass("col-lg-10 col-md-10 col-sm-12 col-xs-12");
			$('#wbc-mainnav').removeClass(" col-md-12 col-sm-12 hidden-sm hidden-xs");

		}	
	});
});



						