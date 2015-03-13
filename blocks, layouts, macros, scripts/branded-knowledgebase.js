// used for the Branded v2 Search/Article page

define( [ 'jquery' ], function( $j ) {
'use strict';

var iframe = document.getElementById( 'knowledge_frame' ),
	$iframe = $j( iframe ),
	$kbDoc = $j( iframe.contentDocument ),

	updateLayout = function() {
		var $kbContainer;

		$kbDoc = $j( $iframe[ 0 ].contentDocument );
		$kbContainer = $kbDoc.find( '.application' );

		// re-doing the bootstrap rows and columns
		$kbContainer.removeClass( 'container-fluid' ).addClass( 'row' );
		$kbContainer.children( '.ng-scope' ).addClass( 'container-fluid' );
		$kbContainer.find( '.search-bar .col-xs-12.col-md-12.col-lg-12' ).removeClass( 'col-xs-12 col-md-12 col-lg-12' );
	};

$kbDoc.ready( function() {
	$iframe.on( 'load', function() { setTimeout( updateLayout, 800 ); } );

	setTimeout( updateLayout, 800 );
} );

} );
