// This script loads the layout/bootstrapping for the Branded CMS template as well as any custom functionality using various JS libraries.
var jquery;

( function( $j ) {
	var requireConfig = {
			deps : [ 'jquery', 'brandedlayout' ],

			paths : {
				'jquery' : '/branded-jquery.min.jsdbx?dummy_ext=',
				'bootstrap' : '/bootstrap.min.jsdbx?dummy_ext=',
				'underscore' : '/branded-lodash.jsdbx?dummy_ext=',
				'backbone' : '/branded-backbone.jsdbx?dummy_ext=',
				'infinitescroll' : '/jquery.infinitescroll.min.jsdbx?dummy_ext=',
				'brandedlayout' : '/branded-cms-layout.jsdbx?dummy_ext=',
				'brandedgethelp' : '/branded-get-help.jsdbx?dummy_ext=',
				'brandedtypeaheadbundle' : '/branded-typeahead.bundle.jsdbx?dummy_ext=',
				'brandedtypeaheadsetup' : '/branded-typeahead-setup.jsdbx?dummy_ext=',
				'brandedknowledgesearch' : '/branded-knowledge-search.jsdbx?dummy_ext=',
				'brandedknowledgearticle' : '/branded-knowledge-article.jsdbx?dummy_ext='
			},

			shim : {
				'brandedlayout' : { 'deps' : [ 'jquery' ] },
				'bootstrap' : { 'deps' : [ 'jquery' ] }
			},

			callback : function() {
				jquery = jQuery.noConflict();
			}
		};

	$j.getScript( '/require.jsdbx' ).done( function() {
		var pathJsMap = {
				'/branded/get_help.do' : 'brandedgethelp',
				'/branded/knowledge_search.do' : 'brandedknowledgesearch',
				'/branded/knowledge.do' : 'brandedknowledgearticle'
			};

		requirejs.config( requireConfig );

		requirejs( [ pathJsMap[ window.location.pathname ] ], function() {} );
	} );
} )( jQuery );