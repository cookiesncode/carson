
$(document).ready(function () {

// FOUNDATION CALLS ///////////////////////////// 
		
  $('#weather-modal').on('opened', function () {
	$(this).foundation('section', 'reflow');
  });
	
	
	if ($.fn.elastislide) {
		var carousel = $('#carousel').elastislide({
				minItems : 2,
				speed: 500,
				easing: 'ease-in-out'
			}
		);
	}	
	
		
// SIDEBAR NAVIGATION ///////////////////////////// 
	var url = $.url(),
		file = url.attr('file'),
		$mainlinks = $('#sidenav .title a'),
		$sublinks = $('#sidenav .content a');
	
	$sublinks
		.each(function(index, element) {
			var $link = $(this);
			if ($link.attr('href') == file) {
				$link.parents('section').addClass('active');
			}
		});

// MISCELLANEOUS ///////////////////////////// 
	
	$("#crests > img").css("display", "inline");
	
	$("#fittext").fitText(1.5, { minFontSize: '18px', maxFontSize: '30px'});
		
		
});// end document.ready function



