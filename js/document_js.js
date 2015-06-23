$(document).ready(function() {
	$(".container").css("width", $(window).width());
	$(".container").css("height", $(window).height());
	$(".dice").height($(".dice").width());
	$("#roll_button").height($(".dice").width());
	
});