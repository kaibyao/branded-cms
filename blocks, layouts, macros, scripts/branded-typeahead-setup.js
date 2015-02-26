'use strict';
define( [ 'brandedtypeaheadbundle' ], function() {
	return {
		generateTypeaheadDataset : function( name, displayKey, source ) {
			return {
				name: name,
				displayKey: displayKey,
				source: source,
				templates : {
					empty : '<div class="typeahead-search-noresults">No search results.</div>',
					suggestion : function( obj ) {
						return '<div class="typeahead-search-suggestion"><h4 class="typeahead-search-suggestion-title">'+ obj.short_description +'</h4><p class="typeahead-search-suggestion-text">'+ obj.text +'</p></div>';
					}
				}
			};
		},

		submitTypeahead : function( submitUrl ) {
			var typeaheadSearchInputEl = document.querySelector( '#typeahead-search-text' );

			window.location.href = submitUrl;
			return false;
		}
	};
} );

// var typeaheadDataset;

// function submitTypeahead( ev ) {
// 	var typeaheadSearchInputEl = document.querySelector( '#typeahead-search-text' );

// 	window.location.href = 'search_results.do?sysparm_search=' + typeaheadSearchInputEl.value;
// 	return false;
// }

// function initTypeahead( inputSelector, dataset, selectUrl ) {
// 	jQuery( inputSelector ).typeahead( { minLength : 3, highlight : true }, dataset )
// 		.on( 'typeahead:selected', function( ev, suggestion, datum ) {
// 			window.location.href = 'knowledge.do?sysparm_document_key=kb_knowledge,' + suggestion.sys_id;
// 			return false;
// 		} );
// }