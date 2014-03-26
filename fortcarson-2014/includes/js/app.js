$(document).ready( function () {
	
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



