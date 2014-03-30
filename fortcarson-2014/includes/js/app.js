
$(document).ready(function () {

// FOUNDATION CALLS ///////////////////////////// 
	
	function loadLinks (selector) {
		var $selector = $(selector);

		$selector.each(function(index, el) {
			$(el).on('click', function(event) {
				event.preventDefault();
				var $this = $(this);
				var link = $this.attr('href');
				var id = '#' + $this.attr('data-reveal-id');

				$(id).load(link);
			});	
		});
	}
	loadLinks('.command a, [data-reveal-id="road-con"], [data-reveal-id="weather-modal"]');
		
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



