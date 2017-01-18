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
    $("#blackout").show(0);
    $("#blackout").removeClass('ncolor')
    $(".loading").show(0);
    $(".ball").show(0);
    $(".ball").removeClass('ncolor')
}
