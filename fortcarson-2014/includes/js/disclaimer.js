$(document).ready(function(){  
	if ($.cookie('disclaimer') == 'checked' ) {
		return;
	}	else {
			$('#disclaimer').foundation('reveal', 'open', {
					url: 'http://www.carson.army.mil/fortcarson-2014/disclaimer.html',
					closeOnBackgroundClick: false
				});
			$.cookie('disclaimer', 'checked', { expires: 1 });
		};

})
