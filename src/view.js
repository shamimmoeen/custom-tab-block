class TabsAutomatic {
	constructor( tablistNode, instanceIndex ) {
		this.tablistNode = tablistNode;

		// Pair panels to tabs by index and assign unique ids per instance so
		// multiple blocks on one page stay independent.
		const root = tablistNode.closest( '.custom-tab-block' );
		this.tabs = Array.from(
			tablistNode.querySelectorAll( '.custom-tab-block__tab' )
		);
		this.tabPanels = root
			? Array.from( root.querySelectorAll( '.custom-tab-block__panel' ) )
			: [];

		this.firstTab = null;
		this.lastTab = null;

		this.tabs.forEach( ( tab, i ) => {
			const panel = this.tabPanels[ i ];
			const tabId = `ctb-${ instanceIndex }-tab-${ i + 1 }`;
			const panelId = `ctb-${ instanceIndex }-panel-${ i + 1 }`;

			tab.id = tabId;
			tab.tabIndex = -1;

			if ( panel ) {
				tab.setAttribute( 'aria-controls', panelId );
				panel.id = panelId;
				panel.setAttribute( 'aria-labelledby', tabId );
			}

			tab.addEventListener( 'keydown', this.onKeydown.bind( this ) );
			tab.addEventListener( 'click', this.onClick.bind( this ) );

			if ( ! this.firstTab ) {
				this.firstTab = tab;
			}
			this.lastTab = tab;
		} );

		if ( this.firstTab ) {
			this.setSelectedTab( this.firstTab, false );
		}
	}

	setSelectedTab( currentTab, setFocus ) {
		if ( typeof setFocus !== 'boolean' ) {
			setFocus = true;
		}

		this.tabs.forEach( ( tab, i ) => {
			const panel = this.tabPanels[ i ];

			if ( currentTab === tab ) {
				tab.setAttribute( 'aria-selected', 'true' );
				tab.removeAttribute( 'tabindex' );
				if ( panel ) {
					panel.removeAttribute( 'hidden' );
				}
				if ( setFocus ) {
					tab.focus( { preventScroll: true } );
				}
			} else {
				tab.setAttribute( 'aria-selected', 'false' );
				tab.tabIndex = -1;
				if ( panel ) {
					panel.setAttribute( 'hidden', '' );
				}
			}
		} );
	}

	setSelectedToPreviousTab( currentTab ) {
		if ( currentTab === this.firstTab ) {
			this.setSelectedTab( this.lastTab );
		} else {
			const index = this.tabs.indexOf( currentTab );
			this.setSelectedTab( this.tabs[ index - 1 ] );
		}
	}

	setSelectedToNextTab( currentTab ) {
		if ( currentTab === this.lastTab ) {
			this.setSelectedTab( this.firstTab );
		} else {
			const index = this.tabs.indexOf( currentTab );
			this.setSelectedTab( this.tabs[ index + 1 ] );
		}
	}

	/* EVENT HANDLERS */
	onKeydown( event ) {
		const tgt = event.currentTarget;
		let flag = false;

		// Mirror the arrow keys in RTL so they follow the visual order.
		const isRtl =
			window.getComputedStyle( this.tablistNode ).direction === 'rtl';

		switch ( event.key ) {
			case 'ArrowLeft':
				if ( isRtl ) {
					this.setSelectedToNextTab( tgt );
				} else {
					this.setSelectedToPreviousTab( tgt );
				}
				flag = true;
				break;

			case 'ArrowRight':
				if ( isRtl ) {
					this.setSelectedToPreviousTab( tgt );
				} else {
					this.setSelectedToNextTab( tgt );
				}
				flag = true;
				break;

			case 'Home':
				this.setSelectedTab( this.firstTab );
				flag = true;
				break;

			case 'End':
				this.setSelectedTab( this.lastTab );
				flag = true;
				break;

			default:
				break;
		}

		if ( flag ) {
			event.stopPropagation();
			event.preventDefault();
		}
	}

	onClick( event ) {
		this.setSelectedTab( event.currentTarget );
	}
}

// Initialize every tab block on the page.
window.addEventListener( 'load', function () {
	const tabLists = document.querySelectorAll( '.custom-tab-block__tablist' );

	tabLists.forEach( ( tabList, index ) => {
		new TabsAutomatic( tabList, index );
	} );
} );
