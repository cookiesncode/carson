$(document).ready( function () {

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
		
// end document.ready function		
});



