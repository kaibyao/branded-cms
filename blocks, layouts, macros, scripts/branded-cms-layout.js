( function() {
	// $j.getScript( '/require.jsdbx' ).done( function() {
	// 	//require.config( {
	// 	//	baseUrl: "/"
	// 	//} );

	// 	require( [ '/branded-jquery.min.jsdbx', '/bootstrap.min.jsdbx', '/respond.min.jsdbx', '/branded-cms-layout.jsdbx' ], function() {
			
	// 	} );
	// } );

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
			// $j( '.cms_header_bottom_menu' ).children().appendTo( '.branded-main-menu-container' );

			// Chat div
			$j( document.createElement( 'div' ) ).
				addClass( 'branded-chat-container' ).
				append( '<a class="branded-chat-link" href="javascript:void(0);" onclick="CustomEvent.fire(LiveEvents.LIVE_EVENT, LiveEvents.LIVE_WINDOW_JOIN_QUEUE_QUERY, \'c54f0abf0a0a0b452db84664f409c79c\', \'Chat With Support\'); return false;">Chat With Support</a><img class="branded-chat-avatar" src="/hr-chat.jpgx" height="60" width="60" />' ).
				prependTo( 'td.cms_header_text' );

			// setting up horizontal block menus
			$j( '.main-content .cms_menu_section_blocks' ).each( function( i, el ) {
				var $menuBlock = $j( el ),
					$menuBlockParent = $menuBlock.parent(),
					numBlocks = $menuBlock.siblings().length + 1,
					maxBlocksPerRow = 4,
					columnsPerRow = 12,
					columnsPerBlock,
					tempMod,
					i;

				if ( !$menuBlockParent.hasClass( 'row' ) ) {
					$menuBlockParent.addClass( 'row' );
				}

				if ( numBlocks > maxBlocksPerRow ) {
					if ( numBlocks % 4 === 0 ) {
						columnsPerBlock = 4;
					} else if ( numBlocks % 3 === 0 ) {
						columnsPerBlock = 3;
					} else {
						for ( i = maxBlocksPerRow; i >= 3; i-- ) {
							switch ( numBlocks % i ) {
								case 1 :
									continue;
								case 0 :
								case 2 :
								case 3 :
									columnsPerBlock = columnsPerRow / i;
									break;
							}
						}
					}
				} else {
					columnsPerBlock = Math.floor( columnsPerRow / numBlocks );
				}

				$menuBlock.addClass( 'col-xs-12 col-md-' + columnsPerBlock );
			} );

			$j( '.page-home .main-content .cms_menu_section_blocks' ).first().parent().addClass( 'home-block-row' ).removeClass( 'row' );

			$j( '.main-content .cms_menu_section_blocks > table > tbody > tr:nth-child(2) > td' ).addClass( 'main-content-menu-block-items' );
			// $j( '.page-home .main-content .row' ).appendTo( '.page-home .main-content .carousel-inner' );

			$j( '.branded-admin-nav' ).prependTo( 'body' ).show();
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

} )();
