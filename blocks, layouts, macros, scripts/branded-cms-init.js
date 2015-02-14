// This script loads the layout/bootstrapping for the Branded CMS template as well as any custom functionality using various JS libraries.
var jquery;

( function( $j ) {
	$j.getScript( '/require.jsdbx' ).done( function() {
		requirejs.config( {
			deps : [ 'jquery', 'bootstrap', /*'respond',*/ 'brandedlayout' ],

			paths : {
				'jquery' : '/branded-jquery.min.jsdbx?dummy_ext=',
				'bootstrap' : '/bootstrap.min.jsdbx?dummy_ext=',
				'brandedlayout' : '/branded-cms-layout.jsdbx?dummy_ext='
			},

			shim : {
				'bootstrap' : { 'deps' : [ 'jquery' ] },
				'brandedlayout' : { 'deps' : [ 'jquery' ] }
			},

			callback : function() {
				jquery = jQuery.noConflict();
			}
		} );
	} );
} )( jQuery );