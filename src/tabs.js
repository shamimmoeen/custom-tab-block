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
			imageId: attributes.tab1Image,
			imageUrl: attributes.tab1ImageUrl,
			imageAlt: attributes.tab1ImageAlt,
			title: attributes.tab1Title,
			description: attributes.tab1Description,
			link: attributes.tab1Link,
		},
		{
			imageId: attributes.tab2Image,
			imageUrl: attributes.tab2ImageUrl,
			imageAlt: attributes.tab2ImageAlt,
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
				aria-label={ attributes.tablistLabel }
			>
				{ tabs.map( ( tab, i ) => (
					<button
						key={ i }
						type="button"
						className="custom-tab-block__tab"
						role="tab"
						aria-label={
							tab.title
								? sprintf(
										/* translators: 1: tab number, 2: tab title */
										__(
											'Tab %1$d: %2$s',
											'custom-tab-block'
										),
										i + 1,
										tab.title
								  )
								: sprintf(
										/* translators: %d: tab number */
										__( 'Tab %d', 'custom-tab-block' ),
										i + 1
								  )
						}
						aria-selected={ i === 0 ? 'true' : 'false' }
					>
						{ tab.imageUrl && (
							<img
								src={ tab.imageUrl }
								alt={ tab.imageAlt || '' }
								className={
									tab.imageId
										? `wp-image-${ tab.imageId } custom-tab-block__tab-image`
										: 'custom-tab-block__tab-image'
								}
							/>
						) }
						<span
							className="custom-tab-block__tab-number"
							aria-hidden="true"
						>{ `0${ i + 1 }` }</span>
					</button>
				) ) }
			</div>

			{ tabs.map( ( tab, i ) => (
				<div
					key={ i }
					className={ 'custom-tab-block__panel' }
					hidden={ i !== 0 }
					role="tabpanel"
					tabIndex="0"
				>
					<p className="custom-tab-block__text">
						<strong className="custom-tab-block__title">
							{ tab.title }
						</strong>
						<span className="custom-tab-block__description">
							{ tab.description }
						</span>
					</p>
					{ tab.link && (
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
					) }
				</div>
			) ) }
		</>
	);
}
