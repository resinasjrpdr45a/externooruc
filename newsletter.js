$(document).ready(function(){
$('.icon-newsletter img').attr('src', 'https://www.jrresinas.oruc.com.br/arquivos/bi/1582235045_emailicompng.png');


if ($(window).width() <= 991)
{  
$('.col-newsletter').removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
$('.newsletter .text-center').removeClass("col-xs-4 col-sm-4 col-md-3 pull-left");






} else{
   
$('.col-newsletter').addClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
$('.newsletter .text-center').addClass("col-xs-4 col-sm-4 col-md-3 pull-left");

}

$(window).resize(function(){

  if ($(window).width() <= 991)
{    

$('.col-newsletter').removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
$('.newsletter .text-center').removeClass("col-xs-4 col-sm-4 col-md-3 pull-left");




} else{
   
$('.col-newsletter').addClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
$('.newsletter .text-center').addClass("col-xs-4 col-sm-4 col-md-3 pull-left");

}
	

   


});

  








	
});