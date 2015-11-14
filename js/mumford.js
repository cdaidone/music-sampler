$(document).ready(function(){


	function hideAll() {
		$('#song1').hide();
		$('#song2').hide();
		$('#song3').hide();
		$('#song4').hide();
	}
	
	hideAll();
	
	$('.cover').click(function(){
		hideAll();

		switch( $(this).attr("id") ) {
			case "wait":
				$('#song1').show(function(){
					$('#wait').animate({opacity: 0.2});
				});
				break;
			case "broken":
				$('#song2').show(function(){
					$('#broken').animate({opacity: 0.2});
				});
				break;
			case "believe":
				$('#song3').show(function(){
					$('#believe').animate({opacity: 0.2});
				});
				break;
			case "cave":
				$('#song4').show(function(){
					$('#cave').animate({opacity: 0.2});
				});
				break;
			}
		});	
});
