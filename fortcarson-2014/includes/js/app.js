//@prepros-prepend plugins/jquery.cycle.js
//@prepros-prepend plugins/jquery.fittext.js
//@prepros-prepend plugins/jquery.elastislide.js
//@prepros-prepend plugins/jquerypp.custom.js
//@prepros-prepend plugins/jflickrfeed-api-custom.js
//@prepros-prepend plugins/jquery.url.js
//@prepros-prepend min/foundation.min.js
//@prepros-prepend min/jquery.min.js

// Immediately Invoked Function Expression (IIFE)
// This pattern keeps the variables from being global.
(function($) {
$(document).ready(function () {
// INITIALIZE FOUNDATION GLOBALS
	$(document).foundation('reveal topbar section');
	
// MISCELLANEOUS ///////////////////////////// 
	$("#crests > img").css("display", "inline");
	$("#fittext").fitText(1.5, { minFontSize: '18px', maxFontSize: '30px'});
	
// DISCLAIMER MODAL ///////////////////////////// 
	if ($.cookie('disclaimer') && $.cookie('disclaimer') !== 'checked' ) {
		$('#disclaimer-link').trigger('click');
		$.cookie('disclaimer', 'checked', { expires: 1 });
	}

// HOMEPAGE FLICKR ORBIT ///////////////////////////// 
	$('#featured').jflickrfeed({
		limit: 20,
		qstrings: {
			method: 'flickr.people.getPublicPhotos',
			user_id: '46810671@N04',
			extras: 'url_z'
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
			});
			
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

// WEATHER MODAL ///////////////////////////// 
	$('#weather-modal').on('opened', function () {
		var date = new Date();
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var this_year = date.getFullYear();
		var this_month = months[date.getMonth()];
			
		$('#climo').append('<img src="http://carspublic.carson.army.mil/SWO/Shared%20Documents/' + this_month + '-' + this_year + '.PNG" />');
		$(this).foundation('section', 'reflow');	
	});
	
// LEADERS SLIDER ///////////////////////////// 
	if ($.fn.elastislide) {
		var carousel = $('#carousel').elastislide(
			{
				minItems : 2,
				speed: 500,
				easing: 'ease-in-out'
			}
		);
	} 
	
// SIDEBAR NAV KEEP PANEL OPEN ///////////////////////////// 
	var url = $.url();
	var file = url.attr('file');
	var	$mainlinks = $('#sidenav .title a');
	var	$sublinks = $('#sidenav .content a');
	
	$sublinks.each(function(index, element) {
		var $link = $(element);
		if ($link.attr('href') == file) {
			$link.parents('section').addClass('active');
		}
	});

// ROAD COND & REPORTING ///////////////////////////// 
	$.ajax({
		url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://carspublic.carson.army.mil/eoc/_layouts/listfeed.aspx?List=%7B9D488546%2D799B%2D41E2%2DB0F9%2D2DE12295173A%7D'),
		dataType: 'json',
		success: function (data) {
			if (data.responseData.feed && data.responseData.feed.entries) {
				$.each(data.responseData.feed.entries, function (i, e) {						
					var stuff = e.content;
					$('#roads').append(stuff);
					$('#report').append(stuff);
					
					$("#roads :contains(Green)").attr('id', 'green');
					$("#roads :contains(Amber)").attr('id', 'amber');
					$("#roads :contains(Red)").attr('id', 'red');
					$("#roads :contains(Reporting)").remove();

					$("#report :contains(Green)").attr('id', 'green');
					$("#report :contains(White)").attr('id', 'white');
					$("#report :contains(Red)").attr('id', 'red');
					$("#report :contains(Road)").remove();
					
					$('#mid-roads').append(stuff);
					$('#mid-report').append(stuff);
					
					$("#mid-roads :contains(Green)").attr('id', 'green');
					$("#mid-roads :contains(Amber)").attr('id', 'amber');
					$("#mid-roads :contains(Red)").attr('id', 'red');
					$("#mid-roads :contains(Reporting)").remove();

					$("#mid-report :contains(Green)").attr('id', 'green');
					$("#mid-report :contains(White)").attr('id', 'white');
					$("#mid-report :contains(Red)").attr('id', 'red');
					$("#mid-report :contains(Road)").remove();
					
					var red_1 = $("#roads").text();
					var red_2 = $("#report").text();
					var n = red_1.indexOf("Green");
					var m = red_2.indexOf("Green");
					if (n == -1 | m == -1) {
							$('#desc-text').append(e.title);
							$('.alert').css('padding', '10px 0 10px 0;');
					}
				});
			}
		}
	});

// EXTERNAL LINK WARNING ///////////////////////////// 
	$("[rel='external']").click(function() {
		alert ("NOTE: You are now leaving the Fort Carson Website. The appearance of hyperlinks does not constitute endorsement by the Department of Defense (DoD), the U.S. Army, or Fort Carson of the linked websites or the information, products or services contained therein. For other than authorized activities such as military exchanges and Morale, Welfare and Recreation sites, the Department of Defense, the U.S. Army and Fort Carson does not exercise any editorial control over the information you may find at these locations. Such links are provided consistent with the stated purpose of this DoD website. We consider an external link to be a hyperlink to non-DoD web resources.");
	});
				
});// end document.ready function
}(jQuery));// end IIFE


