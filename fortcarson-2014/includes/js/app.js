$(document).ready(function () {

// FOUNDATION CALLS ///////////////////////////// 

	$("#dir-sup").load("../fortcarson-2014/leaders/dir-sup.html");
	$("#dep-gar").load("../fortcarson-2014/leaders/dep-gar.html");
	$("#gar-csm").load("../fortcarson-2014/leaders/gar-csm.html");
	$("#gar-cdr").load("../fortcarson-2014/leaders/gar-cdr.html");
	$("#sup-cdr").load("../fortcarson-2014/leaders/sup-cdr.html");
	$("#man-cdr").load("../fortcarson-2014/leaders/man-cdr.html");
	$("#snr-cdr").load("../fortcarson-2014/leaders/snr-cdr.html");
	$("#4id-csm").load("../fortcarson-2014/leaders/4id-csm.html");
	$("#4id-cdr").load("../fortcarson-2014/leaders/4id-cdr.html");		
	
	$("#road-con").load("../fortcarson-2014/reporting.html");
	$("#weather-modal").load("../fortcarson-2014/weather.html");
	
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



