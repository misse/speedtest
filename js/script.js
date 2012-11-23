$(document).ready(function() { 

	function center_content() {
		var Bord = ($(window).width() - $("#container").width()) /2,
			nbr = Math.round(Bord).toFixed(2) /32,
			nbrbon = Math.round(nbr).toFixed(2) * 32 - 1,
			winMinWidth = $(window).width() == 1024;
					
		$("#container").css("margin-left", nbrbon);	
	}	

	center_content();	
	
	$(window).resize(function() {
		center_content();
	});

});
