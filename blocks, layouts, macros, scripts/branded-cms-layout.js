jQuery.noConflict();

( function( $j ) {
	var applyBrandedStyles = function() {
			var $headerLogoContainer = $j( 'td.cms_header_logo' );

			$j( 'html' ).attr( 'data-doctype', false ).data( 'doctype', false );

			// setting up top menu
			$j( 'td.cms_header_top_menu' ).addClass( 'row' );

			// $j( 'div.cms_header_search, div.cms_header_top_menu' ).addClass( 'col-xs-12' );
			// $j( '.cms_header_font_size, .cms_header_login' ).addClass( 'col-xs-6' );

			// $j( 'div.cms_header_search' ).addClass( 'col-md-2' );
			// $j( '.cms_header_font_size' ).addClass( 'col-md-1' );
			// $j( '.cms_header_login' ).addClass( 'col-md-4' );
			// $j( 'div.cms_header_top_menu' ).addClass( 'col-md-5' );
			$j( 'div.cms_header_top_menu' ).addClass( 'hidden-xs' );

			// setting up logo row
			$j( '.cms_header_logo_row > td' ).addClass( 'row' );
			$j( 'td.cms_header_logo' ).addClass( 'col-xs-6 col-md-2' );
			$j( 'td.cms_header_text' ).first().addClass( 'branded-main-menu-container col-xs-6 col-md-10' );
			$j( '.cms_header_bottom_menu' ).children().appendTo( '.branded-main-menu-container' );

			// setting up horizontal block menus
			$j( '.main-content .cms_menu_section_blocks' ).each( function( i, el ) {
				var $menuBlock = $j( el ),
					$menuBlockParent = $menuBlock.parent(),
					numBlocksPerRow = 1,
					columnsPerRow = 12,
					columnsPerBlock;

				if ( !$menuBlockParent.hasClass( 'row' ) ) {
					$menuBlockParent.addClass( 'row' );
				}

				numBlocksPerRow += $menuBlock.siblings().length;
				columnsPerBlock = Math.floor( columnsPerRow / numBlocksPerRow );

				$menuBlock.addClass( 'col-xs-12 col-md-' + columnsPerBlock );
			} );

			$j( '.main-content .cms_menu_section_blocks > table > tbody > tr:nth-child(2) > td' ).addClass( 'main-content-menu-block-items' );
		},

		hideAdminBar = function() {
			$j( '.branded-admin-nav' ).hide();
		};

	$j( document ).ready( function() {
		// testing if the page elements have loaded. If so, immediately apply styles. Otherwise, wait a second. This is mainly to offset the extra latency involved when editing a page.
		if ( $j( 'td.cms_header_logo' ).length ) {
			applyBrandedStyles();
		} else {
			setTimeout( function() { applyBrandedStyles(); hideAdminBar(); }, 400 );
		}

		// overriding default submenu offset function
		getOffset = function( item, attr ) {
			var parentElement = getFormContentParent(),
				wb = 0;

			if ( item ) {
				wb += item[ attr ];
			}

			return wb;
		};
	} );

} )( jQuery );
