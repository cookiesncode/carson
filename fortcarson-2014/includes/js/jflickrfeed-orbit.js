$(function () {
		
	$('#featured').jflickrfeed({
		qstrings: {
			user_id: '46810671@N04'
		},
		itemTemplate: '<li><img src="{{image_z}}" title="{{title}}" alt="" /></li>'
	}, function (data) {
			var $orbit_arrows;
					
			$(document).foundation('orbit', {
				timer_speed: 5000,
				slide_number: false,
        bullets: false,
				resume_on_mouseout: true,
      	pause_on_hover: true		
			})
			
			$orbit_arrows = $('.orbit-prev, .orbit-next');
			$orbit_arrows.addClass('hide-for-medium-up');
			if ($orbit_arrows.is(':hidden')) {
				$('.orbit-container').hover(function () {
						$orbit_arrows.removeClass('hide-for-medium-up');
					}, function () {
							$orbit_arrows.addClass('hide-for-medium-up');
						}
					);
			}
	});
	
	
}); // end document.ready()
