$(function() {
	
	window.setTimeout(function() {
		$('gallerysection').css('opacity', '1');
	}, 2000);

	$('div').addClass('default');
	
		$('div').on('click', function() {
	
	  	var e = $('gallerysection > div');
			if(e.hasClass('expand')){
				 e.removeClass('expand');
			 	$(this).addClass('expand');
			} else { $(this).addClass('expand'); }
		})
})