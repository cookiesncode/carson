$(document).ready( function () {
	// ORBIT ///////////////////////////// 
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

// ORBIT ///////////////////////////// 

// Control Orbit carousel control arrows visibility	
	var $orbit_arrows = $( '.orbit-prev, .orbit-next' );
	$orbit_arrows.addClass( 'hide-for-medium-up' );
	
	if ( $orbit_arrows.is( ':hidden' ) ) {
		$( '.orbit-container' ).hover( function () {
				$orbit_arrows.removeClass( 'hide-for-medium-up' );
			}, function () {
					$orbit_arrows.addClass( 'hide-for-medium-up' );
				}
			);
	}
	
// ROTATING UNIT CREST ///////////////////////////// 
	
	$( "#crests > img" ).css( "display", "inline" );
	
// ELASTISLIDE ///////////////////////////// 
	
	if ( $.fn.elastislide ) {
		$( '#carousel' ).elastislide( {
				minItems : 2
			}
		);
	}
	
// SIDEBAR NAVIGATION ///////////////////////////// 
	var url = $.url(),
		file = url.attr( 'file' ),
		$mainlinks = $( '#sidenav .title a' ),
		$sublinks = $( '#sidenav .content a' );
	
	$sublinks
		.each( function( index, element ) {
			var $link = $( this );
			if ( $link.attr( 'href' ) == file ) {
				$link.parents( 'section' ).addClass( 'active' );
			}
		});

	$('#links').jflickrfeed({
		qstrings: '120064813@N04',
		limit: 20,
		useTemplate: false
	});
		
// end document.ready function		
});



