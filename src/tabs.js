import { __, sprintf } from '@wordpress/i18n';

/*
 * Shared tab markup (BEM) used by both edit.js (preview) and save.js so the
 * structure has a single source of truth. Returns the block's children; the
 * `custom-tab-block` BEM root lives on the block wrapper (see save.js/edit.js).
 *
 * Tab/panel ids + ARIA relationships are assigned at runtime by view.js
 * (uniquely per instance), so they are intentionally not in the markup.
 */
export default function Tabs( { attributes } ) {
	const tabs = [
		{
			imageUrl: attributes.tab1ImageUrl,
			title: attributes.tab1Title,
			description: attributes.tab1Description,
			link: attributes.tab1Link,
		},
		{
			imageUrl: attributes.tab2ImageUrl,
			title: attributes.tab2Title,
			description: attributes.tab2Description,
			link: attributes.tab2Link,
		},
	];

	return (
		<>
			<div
				className="custom-tab-block__tablist"
				role="tablist"
				aria-label={ __( 'Tabs', 'custom-tab-block' ) }
			>
				{ tabs.map( ( tab, i ) => (
					<button
						key={ i }
						type="button"
						className="custom-tab-block__tab"
						role="tab"
						aria-label={ tab.title || undefined }
						aria-selected={ i === 0 ? 'true' : 'false' }
						style={
							tab.imageUrl
								? { backgroundImage: `url(${ tab.imageUrl })` }
								: {}
						}
					>
						<span className="custom-tab-block__tab-number">{ `0${
							i + 1
						}` }</span>
					</button>
				) ) }
			</div>

			{ tabs.map( ( tab, i ) => (
				<div
					key={ i }
					className={
						'custom-tab-block__panel' +
						( i === 0 ? '' : ' custom-tab-block__panel--hidden' )
					}
					role="tabpanel"
					tabIndex="0"
				>
					<p className="custom-tab-block__text">
						<span className="custom-tab-block__title">
							{ tab.title }
						</span>{ ' ' }
						<span className="custom-tab-block__description">
							{ tab.description }
						</span>
					</p>
					<div className="custom-tab-block__actions">
						<a
							className="custom-tab-block__button wp-element-button"
							href={ tab.link }
							aria-label={
								tab.title
									? sprintf(
											/* translators: %s: the tab title. */
											__(
												'Read More about %s',
												'custom-tab-block'
											),
											tab.title
									  )
									: undefined
							}
						>
							{ __( 'Read More', 'custom-tab-block' ) }
						</a>
					</div>
				</div>
			) ) }
		</>
	);
}
