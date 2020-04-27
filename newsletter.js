$(document).ready(function(){
$('.icon-newsletter img').attr('src', 'https://www.jrresinas.oruc.com.br/arquivos/bi/1582235045_emailicompng.png');
('.footer-top .newsletter .btn-primary span').removeClass("hidden-xs hidden-sm");
$(' #form_whatsapp span').removeClass("hidden-xs hidden-sm");
$(' #form_newsletter span').removeClass("hidden-xs hidden-sm");

if (window.matchMedia('(max-width: 991px)').matches){ 

   $('.col-newsletter').removeClass( "col-lg-6 col-md-6 col-sm-6 col-xs-12" );
   $('.col-news').removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
  
   $('#form_whatsapp .block_content').removeClass(" col-xs-12 col-sm-12 col-md-5 col-xs-10 col-sm-10 col-md-5");
   $('.newsletter .block_content').removeClass("col-xs-8 col-sm-8 col-md-9 pull-left");
   $('.newsletter .text-center').removeClass("col-xs-4 col-sm-4 col-md-3 pull-left");






} else{
   $('.col-newsletter').addClass( "col-lg-6 col-md-6 col-sm-6 col-xs-12" );
   $('.col-news').addClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
   $('#form_whatsapp .block_content').addClass(" col-xs-12 col-sm-12 col-md-5 col-xs-10 col-sm-10 col-md-5");
   $('.newsletter .block_content').addClass("col-xs-8 col-sm-8 col-md-9 pull-left");
   $('.newsletter .text-center').addClass("col-xs-4 col-sm-4 col-md-3 pull-left");



}

$(window).resize(function(){

if (window.matchMedia('(max-width: 991px)').matches){  
	$('.col-newsletter').removeClass( "col-lg-6 col-md-6 col-sm-6 col-xs-12" );
   $('.col-news').removeClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
   
    $('#form_whatsapp .block_content').removeClass(" col-xs-12 col-sm-12 col-md-5 col-xs-10 col-sm-10 col-md-5");
   $('.newsletter .block_content').removeClass("col-xs-8 col-sm-8 col-md-9 pull-left");
   $('.newsletter .text-center').removeClass("col-xs-4 col-sm-4 col-md-3 pull-left");





} else{
   $('.col-newsletter').addClass( "col-lg-6 col-md-6 col-sm-6 col-xs-12" );
   $('.col-news').addClass("col-lg-6 col-md-6 col-sm-6 col-xs-12");
   $('#form_whatsapp .block_content').addClass(" col-xs-12 col-sm-12 col-md-5 col-xs-10 col-sm-10 col-md-5");
   $('.newsletter .block_content').addClass("col-xs-8 col-sm-8 col-md-9 pull-left");
   $('.newsletter .text-center').addClass("col-xs-4 col-sm-4 col-md-3 pull-left");



}
	

   


});

  








	
});