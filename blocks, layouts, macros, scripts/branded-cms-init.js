// This script loads the layout/bootstrapping for the Branded CMS template as well as any custom functionality using various JS libraries.
var jquery;

( function() {
	$j.getScript( '/require.jsdbx' ).done( function() {
		var pathJsMap = {
				'/branded/get_help.do' : 'brandedgethelp'
			};

		requirejs.config( {
			deps : [ 'jquery', /*'bootstrap', 'respond',*/ 'brandedlayout' ],

			paths : {
				'jquery' : '/branded-jquery.min.jsdbx?dummy_ext=',
				// 'bootstrap' : '/bootstrap.min.jsdbx?dummy_ext=',
				// 'respond' : '/respond.min.jsdbx?dummy_ext=',
				'underscore' : '/branded-lodash.jsdbx?dummy_ext=',
				'backbone' : '/branded-backbone.jsdbx?dummy_ext=',
				'brandedlayout' : '/branded-cms-layout.jsdbx?dummy_ext=',
				'brandedgethelp' : '/branded-get-help.jsdbx?dummy_ext'
			},

			shim : {
				// 'bootstrap' : { 'deps' : [ 'jquery' ] },
				'brandedlayout' : { 'deps' : [ 'jquery' ] },
				// 'respond' : { 'deps' : [ 'jquery' ] },
			},

			callback : function() {
				jquery = jQuery.noConflict();
			}
		} );

		requirejs( [ pathJsMap[ window.location.pathname ] ], function() {} );
	} );
} )();