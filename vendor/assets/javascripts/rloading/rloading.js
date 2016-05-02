
function install(){
	/*
<div id='blackout' class='ncolor'></div><div class='loading'><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div></div>
	*/
	if ($('#blackout').length==0){
		$("body").prepend("<div id='blackout' class='ncolor'></div><div class='loading'><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div><div class='ball ncolor'></div></div>");
	}
}


$( document ).ready(function() {
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
    $("#blackout").show(10);
    $("#blackout").removeClass('ncolor')
    $(".loading").show(10);
    $(".ball").show(10);
    $(".ball").removeClass('ncolor')
}
