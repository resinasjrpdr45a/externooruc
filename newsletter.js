$(document).ready(function(){
$('.icon-newsletter img').attr('src', 'https://www.jrresinas.oruc.com.br/arquivos/bi/1582235045_emailicompng.png');


if ($(window).width() <= 991)
{  
$('.col-newsletter').removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
$('.newsletter .text-center').removeClass("col-xs-4 col-sm-4 col-md-3 pull-left");
$('.block_content ').removeClass("col-xs-8 col-sm-8 col-md-9 pull-left");
$('.col-form-newsletter').removeClass("col-xs-12");
$('#form_whatsapp .block_content:nth-child(1)').removeClass("col-xs-12 col-sm-12 col-md-5 ");
$('#form_whatsapp .block_content:nth-child(2)').removeClass("col-xs-10 col-sm-10 col-md-5");
$('#form_whatsapp .block_content:nth-child(3)').removeClass("col-xs-2 col-sm-2 col-md-2");
$('#assinar_whats span').removeClass("hidden-xs hidden-sm");
$('.col-news').removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");






} else{
   
$('.col-newsletter').addClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
$('.newsletter .text-center').addClass("col-xs-4 col-sm-4 col-md-3 pull-left");
$('.block_content ').addClass("col-xs-8 col-sm-8 col-md-9 pull-left");
$('.col-form-newsletter').addClass("col-xs-12");
$('#form_whatsapp .block_content:nth-child(1)').addClass("col-xs-12 col-sm-12 col-md-5");
$('#form_whatsapp .block_content:nth-child(2)').addClass("col-xs-10 col-sm-10 col-md-5");
$('#form_whatsapp .block_content:nth-child(3)').addClass("col-xs-2 col-sm-2 col-md-2");
$('#assinar_whats span').addClass("hidden-xs hidden-sm");
$('.col-news').addClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");

}

$(window).resize(function(){

  if ($(window).width() <= 991)
{    

$('.col-newsletter').removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
$('.newsletter .text-center').removeClass("col-xs-4 col-sm-4 col-md-3 pull-left");
$('.block_content ').removeClass("col-xs-8 col-sm-8 col-md-9 pull-left");




} else{
   
$('.col-newsletter').addClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
$('.newsletter .text-center').addClass("col-xs-4 col-sm-4 col-md-3 pull-left");
$('.block_content ').addClass("col-xs-8 col-sm-8 col-md-9 pull-left");

}
	

   


});

  








	
});