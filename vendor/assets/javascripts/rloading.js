function install(){
	if ($('#blackout').length==0){
		$("body").prepend("<div id='blackout' class='ncolor'></div><div class='loading'><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div></div>");
	}
}

$( document ).ready(function() {
    install();
});

$(document).on('ready page:load turbolinks:load', function(){
    install();
});


function loff(){
    $("#blackout").addClass('ncolor');
    setTimeout(function(){
      $("#blackout").hide();
      $(".ball").hide();
    },250);
    $(".ball").addClass('ncolor')
    
}
function lon(){
    i = $.topZIndex()
    $("#blackout").css('zIndex', i+1);
    $("#blackout").show(0);
    $("#blackout").removeClass('ncolor')
    $(".loading").css('zIndex', i+2);
    $(".loading").show(0);
    $(".ball").css('zIndex', i+3);
    $(".ball").show(0);
    $(".ball").removeClass('ncolor')
}
