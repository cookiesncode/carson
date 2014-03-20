$(function () {
		
	$('#featured').jflickrfeed({
		qstrings: {
			user_id: '46810671@N04'
		},
		itemTemplate: '<li><img src="{{image}}" alt="{{title}}" /></li>'
	}, function (data) {
			
			
			$(document).foundation('orbit', {
				animation: 'slide',
				timer_speed: 5000,
				pause_on_hover: true,
				resume_on_mouseout: true,
				animation_speed: 500,
				stack_on_small: false,
				navigation_arrows: true,
				slide_number: false,
				slide_number_text: 'of',
				container_class: 'orbit-container',
				stack_on_small_class: 'orbit-stack-on-small',
				next_class: 'orbit-next',
				prev_class: 'orbit-prev',
				timer_container_class: 'orbit-timer',
				timer_paused_class: 'paused',
				timer_progress_class: 'orbit-progress',
				slides_container_class: 'orbit-slides-container',
				bullets_container_class: 'orbit-bullets',
				bullets_active_class: 'active',
				slide_number_class: 'orbit-slide-number',
				caption_class: 'orbit-caption',
				active_slide_class: 'active',
				orbit_transition_class: 'orbit-transitioning',
				bullets: false,
				timer: true,
				variable_height: false,
				swipe: true,
				before_slide_change: function(){},
				after_slide_change: function(){}
			})
	});
	
	
}); // end document.ready()
