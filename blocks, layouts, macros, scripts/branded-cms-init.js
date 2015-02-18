// This script loads the layout/bootstrapping for the Branded CMS template as well as any custom functionality using various JS libraries.
var jquery;

( function( $j ) {
	var requireConfig = {
			deps : [ 'bootstrap', 'brandedlayout' ],

			paths : {
				'bootstrap' : '/bootstrap.min.jsdbx?dummy_ext=',
				'brandedlayout' : '/branded-cms-layout.jsdbx?dummy_ext='
			}
		};

	if ( jQuery.fn.jquery === '1.11.1' ) {
		jquery = jQuery.noConflict();
	} else {
		requireConfig.deps.unshift( 'jquery' );
		requireConfig.paths.jquery = '/branded-jquery.min.jsdbx?dummy_ext=';
		requireConfig.shim = {
			'bootstrap' : { 'deps' : [ 'jquery' ] },
			'brandedlayout' : { 'deps' : [ 'jquery' ] }
		};
		requireConfig.callback = function() {
			jquery = jQuery.noConflict();
		};
	}

	$j.getScript( '/require.jsdbx' ).done( function() {
		requirejs.config( requireConfig );
	} );
} )( jQuery );