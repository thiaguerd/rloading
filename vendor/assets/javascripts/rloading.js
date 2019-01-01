/*
    TopZIndex 1.2 (October 21, 2010) plugin for jQuery
    http://topzindex.googlecode.com/
    Copyright (c) 2009-2011 Todd Northrop
    http://www.speednet.biz/
    Licensed under GPL 3, see  <http://www.gnu.org/licenses/>
*/
if(typeof $.topZIndex != "function"){(function(a){a.topZIndex=function(b){return Math.max(0,Math.max.apply(null,a.map((b||"*")==="*"?a.makeArray(document.getElementsByTagName("*")):a(b),function(b){return parseFloat(a(b).css("z-index"))||null})))};a.fn.topZIndex=function(b){if(this.length===0)return this;b=a.extend({increment:1},b);var c=a.topZIndex(b.selector),d=b.increment;return this.each(function(){this.style.zIndex=c+=d})}})(jQuery);}

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
