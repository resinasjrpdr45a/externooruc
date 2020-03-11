
$(document).ready(function(){

if ($(window).width() <= 1023)
{  
  $('#header-menu-mobile').removeClass("visible-xs visible-sm col-sm-3 col-xs-2");
  
  $('.barshomedesk').css({"display":"none"});

}else{

  $('#header-menu-mobile').addClass("visible-xs visible-sm col-sm-3 col-xs-2");
  
  $('.barshomedesk').css({"display":"block"});
}

$(window).resize(function(){
if ($(window).width() <= 1023)
{  
  $('#header-menu-mobile').removeClass("visible-xs visible-sm col-sm-3 col-xs-2");
  
  $('.barshomedesk').css({"display":"none"});
  
}else{

  $('#header-menu-mobile').addClass("visible-xs visible-sm col-sm-3 col-xs-2");
  
  $('.barshomedesk').css({"display":"block"});
}

});

});


